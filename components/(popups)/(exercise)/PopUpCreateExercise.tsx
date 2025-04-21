import { Exercise } from "@/app/(tabs)/exercises";
import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

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

    const addExercise = () => {
        if (exerciseName == "" || muscle_group == "" || equipment == "") {
            alert("One or more fields are empty, please fill out all the required fields!");
        }else{
            const exercise: Exercise = {
                name: exerciseName,
                muscle_group: muscle_group,
                equipment: equipment,
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
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>{ }</Text>
                    <View style={styles.lineContainer}>
                        <Text style={styles.content}>Exercise: </Text>
                        <TextInput style={styles.textbox} placeholder="" value={exerciseName} onChangeText={setExerciseName} />
                    </View>
                    <View style={styles.lineContainer}>
                        <Text style={styles.content}>Muscle Group: </Text>
                        <TextInput style={styles.textbox} placeholder="" value={muscle_group} onChangeText={setMuscleGroup} />
                    </View>
                    <View style={styles.lineContainer}>
                        <Text style={styles.content}>Equipment: </Text>
                        <TextInput style={styles.textbox} placeholder="" value={equipment} onChangeText={setEquipment} />
                    </View>
                    <View style={styles.buttonRow}>
                        <Button title="Create" onPress={addExercise} />
                        <Button title="Close" onPress={onClosing} />
                    </View>
                </View>
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    modalContainer: {
        marginBottom: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    textbox: {
        fontSize: 16,
        marginBottom: 20,
        borderColor: 'gray',
        shadowColor: '#000',
    },
    lineContainer: {
        flexDirection: 'row',
        marginBottom: 10,

    },
});
