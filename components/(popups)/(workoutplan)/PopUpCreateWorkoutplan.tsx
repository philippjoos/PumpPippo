import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (name: string) => void;
  title: string;
}

export default function PopUpCreateWorkoutplan({ visible, onClose, onConfirm, title }: PopupModalProps) {
  const [workoutplanName, setWorkoutplanName] = useState("");
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{}</Text>
          <View style={styles.lineContainer}>
            <Text style={styles.content}>Workoutname: </Text>
            <TextInput style={styles.textbox} placeholder="workoutplan name" value={workoutplanName} onChangeText={setWorkoutplanName} />
          </View>
          <View style={styles.buttonRow}>
            <Button title="Create" onPress={() => onConfirm(workoutplanName)} />
            <Button title="Close" onPress={onClose} />
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
  },
  lineContainer: {
    flexDirection: 'row',
    marginBottom: 10,

  },
});
