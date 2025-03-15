import { StyleSheet, View, Pressable, Text } from 'react-native';
import planListData from '@/data/savedWorkout.json';
import { useState } from "react"; 
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  label: string;
  workoutplan: string;
};

export default function ButtonDeleteWorkoutplan({ label, workoutplan }: Props) {
  const [planList, setPlanList] = useState(planListData); 
  // planListData is the imported json file and setPlanList is the function to update the state
  const removeWorkoutPlan = (workoutname: string) => {
    setPlanList((prevPlanList) => prevPlanList.filter((plan) => plan.name !== workoutname));
  
  };

  return (
    <View style={[styles.buttonContainer, { borderWidth: 1, borderColor: 'white', borderRadius: 18 },]}>
      <Pressable style={styles.button} onPress={() => {removeWorkoutPlan(workoutplan)}}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: '#ffffff',
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
