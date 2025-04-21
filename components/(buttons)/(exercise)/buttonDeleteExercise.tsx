import { View, Pressable, Text } from 'react-native';
import { useState } from "react";
import PopUpDeleteExercise from '@/components/(popups)/(exercise)/PopUpDeleteExercise';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';

type Props = {
  label: string;
  selectedExercise: string;
  onDelete: (exercise: string) => void;
};

export default function ButtonDeleteExercise({ label, selectedExercise, onDelete }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // show Message to confirm deleting
  const showMessage = () => {
    const deleteApproveText = "Are you sure you want to delete the following exercise?\n" + selectedExercise;
    setModalContent(deleteApproveText);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    onDelete(selectedExercise);
    setModalVisible(false);
  };

    return (
      <View style={[containerStyles.buttonContainer]}>
        <Pressable style={buttonStyles.buttonExercises} onPress={showMessage}>
          <Text style={textStyles.buttonLabel}>{label}</Text>
        </Pressable>
        <PopUpDeleteExercise visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={confirmDelete} title={"confirm deleting"} content={modalContent} />
      </View>
    );
}
