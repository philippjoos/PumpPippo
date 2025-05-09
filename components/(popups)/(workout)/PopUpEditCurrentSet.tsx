import React, { useEffect } from "react";
import { Modal, View, Text, Button, TextInput } from "react-native";
import { Set } from "@/app/(tabs)/exercises";

// styles imports
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';
import { useState } from "react";
import FileHandler from "@/utils/fileHandler";

interface PopupModalProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: (set: Set) => void;
    title: string;
    currentSet?: Set;
    workoutplanName: string; // Hinzufügen
    currentExerciseIndex: number; // Hinzufügen
}

export default function PopUpEditCurrentSet({ visible, onClose, title, currentSet, workoutplanName, currentExerciseIndex }: PopupModalProps) {
    const [set, setSet] = useState<Set>({ setCount: 1, reps: 0, weight: 0, rest_time: 0 }); // State to manage the set data

    useEffect(() => {
        if (currentSet) {
            setSet(currentSet); // Setze den gesamten aktuellen Set-Wert
        }
    }, [currentSet]);

    const handleConfirm = async (updatedSet: Set) => {
        const allWorkoutplans = await FileHandler.getWorkoutplans();
        const workoutplan = allWorkoutplans?.find((plan) => plan.name === workoutplanName);
    
        if (workoutplan) {
            const exerciseSets = workoutplan.exercises[currentExerciseIndex].sets || [];
            const setIndex = exerciseSets.findIndex((s) => s.setCount === updatedSet.setCount);
    
            if (setIndex !== -1) {
                exerciseSets[setIndex] = updatedSet;
                workoutplan.exercises[currentExerciseIndex].sets = exerciseSets;
                if (allWorkoutplans) {
                    await FileHandler.saveData('workoutplans', allWorkoutplans);
                }
    
                // Lade den aktualisierten Workoutplan in den State
                const updatedWorkoutplans = await FileHandler.getWorkoutplans();
                console.log('Updated workout plans:', updatedWorkoutplans);
            }
        }
    
        onClose();
    };

    const editSet = (field: keyof Set, value: string) => {
        setSet((prevSet) => ({
            ...prevSet,
            [field]: parseInt(value) || 0, // Aktualisiert das Feld mit dem neuen Wert
        }));
    }

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={defaultStyles.modalBackground}>
                <View style={containerStyles.modalContainer}>
                    <Text style={textStyles.title}>{title}</Text>
                    <View style={containerStyles.gridContainer}>
                        <View style={containerStyles.rowContainer}>
                            <Text style={textStyles.content}>Reps: </Text>
                            <TextInput style={defaultStyles.textbox} onChangeText={(text: string) => editSet("reps", text)} />
                        </View>
                    </View>
                    <View style={containerStyles.gridContainer}>
                        <View style={containerStyles.rowContainer}>
                            <Text style={textStyles.content}>Weight: </Text>
                            <TextInput style={defaultStyles.textbox} onChangeText={(text: string) => editSet("weight", text)} />
                        </View>
                    </View>
                    <View style={containerStyles.buttonContainer}>
                        <Button title="Safe" onPress={() => handleConfirm(set)} color={'#6D28D9'} />
                        <Button title="Close" onPress={onClose} color={'#6D28D9'} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}