import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Button from '@/components/buttonDeleteWorkoutplan';
import planList from '@/data/savedWorkout.json';
import ButtonStartWorkout from '@/components/buttonStartWorkout';
import ButtonViewInfo from '@/components/buttonWorkoutplanInfo';
import { ScrollView } from 'react-native-gesture-handler';

export default function workoutplan() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Workoutplans</Text>
      <Text style={styles.text}>Your Workoutplans</Text>
      {planList.map((exercise, index) => (
        <View key={index} style={styles.exerciseContainer}>
          <View style={styles.container}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <ButtonStartWorkout label="Start" />
              <ButtonViewInfo label="View" />
              <Button label="Delete" />
            </View>
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
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 1,
    backgroundColor: '#ffffff',
  }
});
