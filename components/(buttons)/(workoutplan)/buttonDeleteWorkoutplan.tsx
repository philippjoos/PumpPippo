import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useState } from "react";
import PopUpDeleteWorkoutplan from '@/components/(popups)/(workoutplan)/PopUpDeleteWorkoutplan';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';

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
      <View style={[containerStyles.buttonContainer]}>
        <Pressable style={buttonStyles.buttonWorkoutPlans} onPress={showMessage}>
          <Text style={textStyles.buttonLabel}>{label}</Text>
        </Pressable>
        <PopUpDeleteWorkoutplan visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={confirmDelete} title={"confirm deleting"} content={modalContent} />
      </View>
    );
}
