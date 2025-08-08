import { Modal, View, Text, Button } from "react-native";

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
  exercise: string;
}

export default function PopUpDeleteExercise({ visible, onClose, onConfirm, title, content }: PopupModalProps) {

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={defaultStyles.modalBackground}>
        <View style={containerStyles.modalContainer}>
          <Text style={textStyles.title}>{title}</Text>
          <Text style={textStyles.content}>{content}</Text>
          <View style={containerStyles.buttonContainer}>
            <View style={containerStyles.buttonHandleContainer}>
              <Button title="Confirm" onPress={onConfirm} color={'#6D28D9'} />
            </View>
            <View style={containerStyles.buttonHandleContainer}>
              <Button title="Close" onPress={onClose} color={'#6D28D9'} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
