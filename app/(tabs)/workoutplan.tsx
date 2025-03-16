import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ButtonStartWorkout from '@/components/(buttons)/buttonStartWorkout';
import ButtonViewInfo from '@/components/(buttons)/buttonWorkoutplanInfo';
import ButtonDeleteWorkoutplan from '@/components/(buttons)/buttonDeleteWorkoutplan';
import data from '@/data/savedWorkout.json';

export default function WorkoutPlan() {
const workoutPlans = data;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Your Workout Plans</Text>
      {workoutPlans.map((trainingsplan, index) => (
        <View key={index} style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{trainingsplan.name}</Text>
          <View style={styles.buttonContainer}>
            <ButtonStartWorkout label='Start'/>
            <ButtonViewInfo label='View' workoutplan={trainingsplan.name}/>
            <ButtonDeleteWorkoutplan label='delete' workoutplan={trainingsplan.name}/>
          </View>
        </View>
    ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  exerciseContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    padding: 15,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
  },
  noWorkoutsText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
  },
});
