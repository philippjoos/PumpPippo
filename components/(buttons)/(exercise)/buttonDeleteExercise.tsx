import { View, Pressable, Text } from 'react-native';
import { useState } from "react";
import PopUpDeleteExercise from '@/components/(popups)/(exercise)/PopUpDeleteExercise';
import FileHandler from '@/utils/fileHandler';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import { Exercise } from '@/app/(tabs)/exercises';
import { WorkoutPlan } from '@/app/(tabs)/workoutplan';

type Props = {
  label: string;
  selectedExercise: string;
  onDelete: (exercise: string) => void;
};

export default function ButtonDeleteExercise({ label, selectedExercise, onDelete }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // show Message to confirm deleting
  const showMessage = async () => {
    let foundWorkoutplans = await FileHandler.getWorkoutplans();
    let selectedWorkoutplans = foundWorkoutplans
      ? foundWorkoutplans.filter((workoutplan: WorkoutPlan) =>
          workoutplan.exercises.some((exercise: Exercise) => exercise.name === selectedExercise)
        )
      : [];
    let deleteApproveText = "";
    if (selectedWorkoutplans.length > 0) {
      deleteApproveText =
        "This exercise is used in the following workout plans:\n" +
        selectedWorkoutplans.map((workoutplan: WorkoutPlan) => workoutplan.name).join(", ") +
        "\n\nAre you sure you want to delete the following exercise?\n" +
        selectedExercise;
    } else {
      deleteApproveText = "Are you sure you want to delete the following exercise?\n" + selectedExercise;
    }
    setModalContent(deleteApproveText);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    onDelete(selectedExercise);
    setModalVisible(false);
  };

    return (
      <View style={[containerStyles.buttonContainer]}>
        <Pressable style={buttonStyles.buttonModify} onPress={showMessage}>
          <Text style={textStyles.buttonLabel}>{label}</Text>
        </Pressable>
        <PopUpDeleteExercise visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={confirmDelete} title={"confirm deleting"} content={modalContent} exercise={selectedExercise}/>
      </View>
    );
}
