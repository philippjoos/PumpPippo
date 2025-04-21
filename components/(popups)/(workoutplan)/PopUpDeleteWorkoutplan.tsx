import { Modal, View, Text, Button, StyleSheet } from "react-native";

// styles imports
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';

interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: string;
}

export default function PopUpDeleteWorkoutplan({ visible, onClose, onConfirm, title, content }: PopupModalProps) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={defaultStyles.modalBackground}>
        <View style={containerStyles.modalContainer}>
          <Text style={textStyles.title}>{title}</Text>
          <Text style={textStyles.content}>{content}</Text>
          <View style={containerStyles.buttonContainer}>
            <Button title="Confirm" onPress={onConfirm} color={'#6D28D9'}/>
            <Button title="Close" onPress={onClose} color={'#6D28D9'}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}
