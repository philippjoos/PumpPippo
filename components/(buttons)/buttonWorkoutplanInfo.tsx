import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useState } from 'react';
import planList from '@/data/savedWorkout.json';
import PopUpWorkoutInfo from '../PopUpWorkoutInfo';

type Props = {
  label: string;
  workoutplan: string;
};

export default function ButtonViewInfo({ label, workoutplan }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const showExercises = () => {
    const selectedPlan = planList.find((plan) => plan.name === workoutplan);
    if (!selectedPlan) return;

    const exercisesText = selectedPlan.exercises
      .map((ex) => `${ex.name}: ${ex.sets} Sätze x ${ex.reps} Wdh${ex.weight ? ` | Gewicht: ${ex.weight}kg` : ""}`)
      .join("\n");

    setModalContent(exercisesText);
    setModalVisible(true);
  };

  return (
    <View style={[styles.buttonContainer, { borderWidth: 1, borderColor: 'white', borderRadius: 18 },]}>
      <Pressable style={styles.button} onPress={() => {showExercises()}}>
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
