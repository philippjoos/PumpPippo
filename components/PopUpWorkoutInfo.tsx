import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function PopUpWorkoutInfo({ visible, onClose, title, content }: PopupModalProps) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
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
});
