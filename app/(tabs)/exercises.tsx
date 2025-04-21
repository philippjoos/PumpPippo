import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import FileHandler from '@/utils/fileHandler';
import ButtonCreateExercise from '@/components/(buttons)/(exercise)/buttonCreateExercise';
import ButtonDeleteExercise from '@/components/(buttons)/(exercise)/buttonDeleteExercise';

export type Exercise = {
  name: string;
  muscle_group: string;
  equipment?: string;
  sets?: string;
  reps?: string;
  weight?: string;
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
            "equipment": "Langhantel, Bank"
          },
        ]);
      }
    })
  }, []);

  const handleExerciseAdded = (newExercise: Exercise) => {
    setExercises((prevExercises) => [...prevExercises, newExercise]);
  };

  const deleteWorkoutPlan = (workoutplanName: string) => {
    FileHandler.getExercises().then((exercises) => {
      if(exercises){
        const newExercises = exercises.filter((exercise) => exercise.name !== workoutplanName);
        FileHandler.saveData('exercises', newExercises);
        setExercises(newExercises);
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {
          exercises.map((exercise) => (
            <View key={exercise.name} style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseInfo}>Muscle Group: {exercise.muscle_group}</Text>
              <Text style={styles.exerciseInfo}>Equipment: {exercise.equipment}</Text>
              <ButtonDeleteExercise label="Delete" selectedExercise={exercise.name} onDelete={deleteWorkoutPlan} />
            </View>
          ))}
      </ScrollView>
      <View style={styles.buttonCreate}>
        <ButtonCreateExercise label="+"  onExerciseCreate={handleExerciseAdded}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
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
  buttonCreate: {
    backgroundColor: 'rgba(85, 201, 247, 0.1)',
    borderRadius: 50,
    padding: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
    bottom: '0%',
    right: 20,
  },
});
