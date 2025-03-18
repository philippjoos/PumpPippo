import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import FileHandler from '@/utils/fileHandler';

export type Exercise = {
  name: string;
  muscle_group: string;
  equipment: string;
  difficulty: string;
};

export default function exercises() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    FileHandler.getExercises().then((loadedExercises) => {
      if (loadedExercises) {
        setExercises(loadedExercises as Exercise[]);
      } else {
        FileHandler.saveData('exercises', [
          {
            "name": "Langhantel Bankdrücken",
            "muscle_group": "Brust",
            "equipment": "Langhantel, Bank",
            "difficulty": "Mittel"
          },
        ]);
      }
    })
  }, []);
  
console.log(exercises);
  return (
    <ScrollView style={styles.container}>
      {
        exercises.map((exercise) => (
          <View key={exercise.name} style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseInfo}>Muskelgruppe: {exercise.muscle_group}</Text>
            <Text style={styles.exerciseInfo}>Equipment: {exercise.equipment}</Text>
            <Text style={styles.exerciseInfo}>Schwierigkeit: {exercise.difficulty}</Text>
          </View>
        ))}
    </ScrollView>
  );
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
