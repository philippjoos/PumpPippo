import React, { useState } from "react";
import { Modal, View, Text, Button, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Set } from "@/app/(tabs)/exercises";

// styles imports
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';
import FileHandler from "@/utils/fileHandler";

interface PopupModalProps {
    visible: boolean;
    workoutplanName: string; // Hinzufügen
    currentExerciseIndex: number; // Hinzufügen
    onClose: () => void;
}

export default function PopUpAddSetToCurrentExercise({ visible, workoutplanName, currentExerciseIndex, onClose }: PopupModalProps) {
    const [reps, setReps] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [rest_time, setRestTime] = useState<string>('');

    const addSet = async () => {
        // Get the current workout plans
        const workoutPlans = await FileHandler.getWorkoutplans();
        if (!workoutPlans) return;
        // Find the workout plan by name
        const workoutPlan = workoutPlans.find((plan) => plan.name === workoutplanName);
        if (!workoutPlan) return;
        // Find the current exercise by index
        const currentExercise = workoutPlan.exercises[currentExerciseIndex];
        if (currentExercise) {
            let setCount = (currentExercise.sets ? currentExercise.sets.length : 0) + 1; // Increment the set count
            // create a new set object
            const newSet: Set = {
                setCount: setCount,
                reps: parseInt(reps),
                weight: parseInt(weight),
                rest_time: parseInt(rest_time),
            };
            if (currentExercise.sets) {
                currentExercise.sets.push(newSet);
            } else {
                currentExercise.sets = [newSet];
            }
        }
        // Save the updated workout plans
        await FileHandler.saveData('workoutplans', workoutPlans);
        
        onClosing();
    };

    const onClosing = () => {
        setReps('');
        setWeight('');
        setRestTime('');
        onClose();
    }

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={defaultStyles.modalBackground}>
                <View style={containerStyles.modalContainer}>
                    <Text style={textStyles.title}>Add Set:</Text>
                    <Text style={textStyles.content}>{ }</Text>
                    <View style={containerStyles.gridContainer}>
                    </View>
                    <ScrollView>
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
                        </View>
                        <View style={containerStyles.gridContainer}>
                            <View style={containerStyles.rowContainer}>
                                <Text style={textStyles.content}>Rest time: </Text>
                                <TextInput style={defaultStyles.textbox} value={rest_time} onChangeText={setRestTime} />
                            </View>
                        </View>
                    </ScrollView>
                    <View style={containerStyles.buttonContainer}>
                        <Button title="Add" onPress={addSet} color={'#6D28D9'} />
                        <Button title="Close" onPress={onClosing} color={'#6D28D9'} />
                    </View>
                </View>
            </View>
        </Modal >
    );
}
