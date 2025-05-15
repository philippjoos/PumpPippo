import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import FileHandler from '@/utils/fileHandler';
import ButtonCreateExercise from '@/components/(buttons)/(exercise)/buttonCreateExercise';
import ButtonDeleteExercise from '@/components/(buttons)/(exercise)/buttonDeleteExercise';

// styles imports
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';

// type Sets 
export type Set = {
  setCount: number;
  reps: number;
  weight: number;
  rest_time?: number; // in seconds
}

// type Exercise
export type Exercise = {
  name: string;
  muscle_group: string;
  equipment?: string;
  sets: Set[];
};

export default function exercises() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    FileHandler.getExercises().then((loadedExercises) => {
      console.log(loadedExercises);
      if (loadedExercises && loadedExercises.length > 0) {
        setExercises(loadedExercises as Exercise[]);
      } else {
        FileHandler.saveData('exercises', [
          {
            "name": "Barbell Bench Press",
            "muscle_group": "Chest",
            "equipment": "Barbell, Bench",
            "sets": []
          },
          {
            "name": "Squat",
            "muscle_group": "Legs",
            "equipment": "Barbell, Rack (optional)",
            "sets": []
          },
          {
            "name": "Deadlift",
            "muscle_group": "Back, Glutes, Hamstrings",
            "equipment": "Barbell",
            "sets": []
          },
          {
            "name": "Pull-Up",
            "muscle_group": "Back, Biceps",
            "equipment": "Pull-Up Bar",
            "sets": []
          },
          {
            "name": "Overhead Press",
            "muscle_group": "Shoulders",
            "equipment": "Barbell",
            "sets": []
          },
          {
            "name": "Barbell Row",
            "muscle_group": "Back",
            "equipment": "Barbell",
            "sets": []
          },
          {
            "name": "Dumbbell Curl",
            "muscle_group": "Biceps",
            "equipment": "Dumbbells",
            "sets": []
          },
          {
            "name": "Triceps Dips",
            "muscle_group": "Triceps",
            "equipment": "Dip Bars or Bench",
            "sets": []
          },
          {
            "name": "Plank",
            "muscle_group": "Core",
            "equipment": "Bodyweight",
            "sets": []
          },
          {
            "name": "Lunges",
            "muscle_group": "Legs, Glutes",
            "equipment": "Dumbbells (optional)",
            "sets": []
          },
        ]);
      }
    })
  }, []);

  const handleExerciseAdded = (newExercise: Exercise) => {
    setExercises((prevExercises) => [...prevExercises, newExercise]);
  };

  const deleteExercise = (workoutplanName: string) => {
    FileHandler.getExercises().then((exercises) => {
      if (exercises) {
        const newExercises = exercises.filter((exercise) => exercise.name !== workoutplanName);
        FileHandler.saveData('exercises', newExercises);
        setExercises(newExercises);
      }
    });
  };

  return (
    <View style={containerStyles.container}>
      <ScrollView style={containerStyles.container}>
        {
          exercises.map((exercise) => (
            <View key={exercise.name} style={containerStyles.exerciseContainer}>
              <Text style={textStyles.exerciseName}>{exercise.name}</Text>
              <Text style={textStyles.content}>Muscle Group: {exercise.muscle_group}</Text>
              <Text style={textStyles.content}>Equipment: {exercise.equipment}</Text>
              <View style={containerStyles.buttonContainer}>
                <ButtonDeleteExercise label="Delete" selectedExercise={exercise.name} onDelete={deleteExercise} />
              </View>
            </View>
          ))}
      </ScrollView>
      <View style={containerStyles.buttonCreateContainer}>
        <ButtonCreateExercise label="+" onExerciseCreate={handleExerciseAdded} />
      </View>
    </View>
  );
}
