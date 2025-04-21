import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';


interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function PopUpWorkoutInfo({ visible, onClose, title, content }: PopupModalProps) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={defaultStyles.modalBackground}>
        <View style={containerStyles.modalContainer}>
          <Text style={textStyles.title}>{title}</Text>
          <Text style={textStyles.content}>{content}</Text>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}