import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/(buttons)/buttonDeleteWorkoutplan';
import exerciseList from '@/data/exerciseList.json';
import { ScrollView } from 'react-native-gesture-handler';


const benchpressImage = require('@/assets/images/benchpress.png');
const inclinebenchpressImage = require('@/assets/images/inclinepress.png');
const bizepscurlsImage = require('@/assets/images/bizepscurls.png');
export default function exercises() {
  return (
<View style={styles.container}>
      {exerciseList.map((exercise, index) => (
        <View key={index} style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.exerciseInfo}>Muskelgruppe: {exercise.muscle_group}</Text>
          <Text style={styles.exerciseInfo}>Equipment: {exercise.equipment}</Text>
          <Text style={styles.exerciseInfo}>Schwierigkeit: {exercise.difficulty}</Text>
        </View>
      ))}
    </View>
  );
}

function addExerciseToWorkoutPlan() {
  alert('add exercise to workout plan');
}

const styles = StyleSheet.create({
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
  scrollView: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});
