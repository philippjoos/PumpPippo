import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Button from '@/components/button';
import planList from '@/data/savedWorkout.json';


export default function workoutplan() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Workoutplans</Text>
      <Text style={styles.text}>Your Workoutplans</Text>
      {planList.map((exercise, index) => (
        <View key={index} style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  exerciseContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exerciseInfo: {
    fontSize: 14,
    color: '#555',
  },
});
