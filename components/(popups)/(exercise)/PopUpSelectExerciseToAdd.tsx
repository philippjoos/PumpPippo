import { Modal, View, Text, Button, StyleSheet } from "react-native";

interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: string;
}

export default function PopUpSelectExerciseToAdd({ visible, onClose, onConfirm, title, content }: PopupModalProps) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>dinifettimuetter</Text>
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
});
