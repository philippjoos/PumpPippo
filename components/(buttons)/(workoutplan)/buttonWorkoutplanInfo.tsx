import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useState } from 'react';
import PopUpWorkoutInfo from '@/components/(popups)/(workoutplan)/PopUpWorkoutInfo';
import FileHandler from '@/utils/fileHandler';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';

type Props = {
  label: string;
  workoutplan: string;
};

export default function ButtonViewInfo({ label, workoutplan }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const showExercises = () => {
    let exercisesText = "no workoutplan found";
    FileHandler.getWorkoutplans().then((plans) => {
      if (plans) {
        const plan = plans.find((plan) => plan.name === workoutplan);
        plan?.exercises.map((exercise) => {
          exercisesText = "Exercise: " + exercise.name + "\nSets: " + exercise.sets + "\nReps: " + exercise.reps + "\nWeight: " + exercise.weight;})
      }
      setModalContent(exercisesText);
    });
    setModalVisible(true);
  };

  return (
    <View style={[containerStyles.buttonContainer]}>
      <Pressable style={buttonStyles.button} onPress={showExercises}>
        <Text style={textStyles.buttonLabel}>{label}</Text>
      </Pressable>
       <PopUpWorkoutInfo visible={modalVisible} onClose={() => setModalVisible(false)} title={workoutplan} content={modalContent} />
    </View>
  );
}
