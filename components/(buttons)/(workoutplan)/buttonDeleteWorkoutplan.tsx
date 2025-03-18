import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useState } from "react";
import PopUpDeleteWorkoutplan from '@/components/(popups)/(workoutplan)/PopUpDeleteWorkoutplan';

type Props = {
  label: string;
  workoutplan: string;
  onDelete: (workoutplan: string) => void;
};

export default function ButtonDeleteWorkoutplan({ label, workoutplan, onDelete }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // show Message to confirm deleting
  const showMessage = () => {
    const deleteApproveText = "Are you sure you want to delete the following workoutplan?\n" + workoutplan;
    setModalContent(deleteApproveText);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    onDelete(workoutplan);
    setModalVisible(false);
  };

    return (
      <View style={[styles.buttonContainer, { borderWidth: 1, borderColor: 'white', borderRadius: 18 },]}>
        <Pressable style={styles.button} onPress={showMessage}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
        <PopUpDeleteWorkoutplan visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={confirmDelete} title={"confirm deleting"} content={modalContent} />
      </View>
    );
}


const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
