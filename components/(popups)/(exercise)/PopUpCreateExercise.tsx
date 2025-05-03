import { Exercise, Sets } from "@/app/(tabs)/exercises";
import React, { useState } from "react";
import { Modal, View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

// styles imports
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';

interface PopupModalProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: (exercise: Exercise) => void;
    title: string;
}

export default function PopUpCreateExercises({ visible, onClose, onConfirm, title }: PopupModalProps) {
    const [exerciseName, setExerciseName] = useState("");
    const [muscle_group, setMuscleGroup] = useState("");
    const [equipment, setEquipment] = useState("");
    const [sets, setSets] = useState<Sets[]>([]);

    const addExercise = () => {
        if (exerciseName == "" || muscle_group == "" || equipment == "") {
            alert("One or more fields are empty, please fill out all the required fields!");
        } else {
            const exercise: Exercise = {
                name: exerciseName,
                muscle_group: muscle_group,
                equipment: equipment,
                sets: [
                    { setCount: 1, reps: 10, weight: 60, rest_time: 180 },
                    { setCount: 2, reps: 8, weight: 60, rest_time: 180 },
                    { setCount: 3, reps: 6, weight: 60, rest_time: 180 },
                ],
            };
            onConfirm(exercise);
        }
        setExerciseName("");
        setMuscleGroup("");
        setEquipment("");
    }

    const onClosing = () => {
        setExerciseName("");
        setMuscleGroup("");
        setEquipment("");
        onClose();
    }
  

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={defaultStyles.modalBackground}>
                <View style={containerStyles.modalContainer}>
                    <Text style={textStyles.title}>{title}</Text>
                    <Text style={textStyles.content}>{ }</Text>
                    <View style={containerStyles.gridContainer}>
                        <View style={containerStyles.rowContainer}>
                            <Text style={textStyles.textBoxLabel}>Exercise Name: </Text>
                            <TextInput style={defaultStyles.textbox} placeholder="" value={exerciseName} onChangeText={setExerciseName} />
                        </View>
                        <View style={containerStyles.rowContainer}>
                            <Text style={textStyles.textBoxLabel}>Muscle Group: </Text>
                            <TextInput style={defaultStyles.textbox} placeholder="" value={muscle_group} onChangeText={setMuscleGroup} />
                        </View>
                        <View style={containerStyles.rowContainer}>
                            <Text style={textStyles.textBoxLabel}>Equipment: </Text>
                            <TextInput style={defaultStyles.textbox} placeholder="" value={equipment} onChangeText={setEquipment} />
                        </View>
                    </View>
                    <View style={containerStyles.buttonContainer}>
                        <Button title="Create" onPress={addExercise} color={'#6D28D9'} />
                        <Button title="Close" onPress={onClosing} color={'#6D28D9'} />
                    </View>
                </View>
            </View>
        </Modal >
    );
}
