import React, { useEffect } from "react";
import { Modal, View, Text, Button, TextInput } from "react-native";
import { Set } from "@/app/(tabs)/exercises";

// styles imports
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';
import { useState } from "react";

interface PopupModalProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: (set: Set) => void; // Optional onConfirm function
    title: string;
    currentSet?: Set;
}

export default function PopUpEditCurrentSet({ visible, onClose, onConfirm, title, currentSet }: PopupModalProps) {
    const [set, setSet] = useState<Set>({ setCount: 1, reps: 0, weight: 0, rest_time: 0 }); // State to manage the set data

    useEffect(() => {
        if (currentSet) {
            setSet((prevSet) => ({
                ...prevSet,
                setCount: currentSet.setCount, // Übernehme den setCount aus currentSet
            }));
        }
    }, [currentSet]);

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm(set); // Call the onConfirm function with the set data
        }
        onClose(); // Close the modal after confirming
    }

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
                        <Button title="Safe" onPress={handleConfirm} color={'#6D28D9'} />
                        <Button title="Close" onPress={onClose} color={'#6D28D9'} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}