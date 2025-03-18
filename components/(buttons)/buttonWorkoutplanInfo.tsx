import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useEffect, useState } from 'react';
import PopUpWorkoutInfo from '@/components/PopUpWorkoutInfo';
import FileHandler from '@/utils/fileHandler';
import { WorkoutPlan } from '@/app/(tabs)/workoutplan';

type Props = {
  label: string;
  workoutplan: string;
};

/*export type WorkoutPlan = {
  id: string
  name: string;
  exercises: {
    name: string;
    sets: number;
    reps: number;
    weight?: number;
  }[];
};*/

export default function ButtonViewInfo({ label, workoutplan }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const showExercises = () => {
    let exercisesText = "no workoutplan found";
    FileHandler.getJson('workoutplans').then((plans) => {
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
    <View style={[styles.buttonContainer, { borderWidth: 1, borderColor: 'white', borderRadius: 18 },]}>
      <Pressable style={styles.button} onPress={showExercises}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
       <PopUpWorkoutInfo visible={modalVisible} onClose={() => setModalVisible(false)} title={workoutplan} content={modalContent} />
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
