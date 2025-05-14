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
    title: string;
    currentSet: Set;
    workoutplanName: string; // Hinzufügen
    currentExerciseIndex: number; // Hinzufügen
}

export default function PopUpEditCurrentSet({ visible, onClose, title, currentSet, workoutplanName, currentExerciseIndex }: PopupModalProps) {
    const [weight, setWeight] = useState<string>('');
    const [reps, setReps] = useState<string>('');
    const [rest_time, setRestTime] = useState<string>('');
    
    const editSet = async () => {
        const workoutPlans = await FileHandler.getWorkoutplans();
        if (workoutPlans) {
            const workoutPlan = workoutPlans.find((plan) => plan.name === workoutplanName);
            if (workoutPlan) {
                if (workoutPlan.exercises?.[currentExerciseIndex]?.sets?.[currentSet.setCount-1]) {
                    workoutPlan.exercises[currentExerciseIndex].sets[currentSet.setCount-1].weight = parseInt(weight);
                }
                if (workoutPlan.exercises?.[currentExerciseIndex]?.sets?.[currentSet.setCount-1]) {
                    workoutPlan.exercises[currentExerciseIndex].sets[currentSet.setCount-1].reps = parseInt(reps);
                }
                if (workoutPlan.exercises?.[currentExerciseIndex]?.sets?.[currentSet.setCount-1]) {
                    workoutPlan.exercises[currentExerciseIndex].sets[currentSet.setCount-1].rest_time = parseInt(rest_time);
                }
                await FileHandler.saveData('workoutplans', workoutPlans);
            }
        }
        onClose();
    }

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={defaultStyles.modalBackground}>
                <View style={containerStyles.modalContainer}>
                    <Text style={textStyles.title}>{title}</Text>
                    <View style={containerStyles.gridContainer}>
                        <View style={containerStyles.rowContainer}>
                            <Text style={textStyles.content}>Reps: </Text>
                            <TextInput style={defaultStyles.textbox} value={reps} onChangeText={setReps} />
                        </View>
                    </View>
                    <View style={containerStyles.gridContainer}>
                        <View style={containerStyles.rowContainer}>
                            <Text style={textStyles.content}>Weight: </Text>
                            <TextInput style={defaultStyles.textbox} value={weight} onChangeText={setWeight} />
                            </View>
                        <View style={containerStyles.rowContainer}>
                            <Text style={textStyles.content}>Rest Time: </Text>
                            <TextInput style={defaultStyles.textbox} value={rest_time} onChangeText={setRestTime} />

                        </View>
                    </View>
                    <View style={containerStyles.buttonContainer}>
                        <Button title="Safe" onPress={editSet} color={'#6D28D9'} />
                        <Button title="Close" onPress={onClose} color={'#6D28D9'} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}