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
      if (loadedExercises) {
        setExercises(loadedExercises as Exercise[]);
      } else {
        FileHandler.saveData('exercises', [
          {
            "name": "Barbell Bench Press",
            "muscle_group": "Chest",
            "equipment": "Barbell, Bench",
            "sets": [
              { "count": 1, "reps": 10, "weight": 60, "rest_time": 180 },
              { "count": 2, "reps": 8, "weight": 70, "rest_time": 180 },
              { "count": 3, "reps": 6, "weight": 80, "rest_time": 180 }
            ]
          },
          {
            "name": "Squat",
            "muscle_group": "Legs",
            "equipment": "Barbell, Rack (optional)",
            "sets": [
              { "count": 1, "reps": 10, "weight": 80, "rest_time": 180 },
              { "count": 2, "reps": 8, "weight": 100, "rest_time": 180 },
              { "count": 3, "reps": 6, "weight": 120, "rest_time": 180 }
            ]
          },
          {
            "name": "Deadlift",
            "muscle_group": "Back, Glutes, Hamstrings",
            "equipment": "Barbell",
            "sets": [
              { "count": 1, "reps": 10, "weight": 100, "rest_time": 180 },
              { "count": 2, "reps": 8, "weight": 120, "rest_time": 180 },
              { "count": 3, "reps": 6, "weight": 140, "rest_time": 180 }
            ]
          },
          {
            "name": "Pull-Up",
            "muscle_group": "Back, Biceps",
            "equipment": "Pull-Up Bar",
            "sets": [
              { "count": 1, "reps": 8, "weight": 0, "rest_time": 120 },
              { "count": 2, "reps": 6, "weight": 0, "rest_time": 120 },
              { "count": 3, "reps": 5, "weight": 0, "rest_time": 120 }
            ]
          },
          {
            "name": "Overhead Press",
            "muscle_group": "Shoulders",
            "equipment": "Barbell",
            "sets": [
              { "count": 1, "reps": 10, "weight": 30, "rest_time": 150 },
              { "count": 2, "reps": 8, "weight": 35, "rest_time": 150 },
              { "count": 3, "reps": 6, "weight": 40, "rest_time": 150 }
            ]
          },
          {
            "name": "Barbell Row",
            "muscle_group": "Back",
            "equipment": "Barbell",
            "sets": [
              { "count": 1, "reps": 10, "weight": 50, "rest_time": 150 },
              { "count": 2, "reps": 8, "weight": 60, "rest_time": 150 },
              { "count": 3, "reps": 6, "weight": 70, "rest_time": 150 }
            ]
          },
          {
            "name": "Dumbbell Curl",
            "muscle_group": "Biceps",
            "equipment": "Dumbbells",
            "sets": [
              { "count": 1, "reps": 12, "weight": 10, "rest_time": 60 },
              { "count": 2, "reps": 10, "weight": 12, "rest_time": 60 },
              { "count": 3, "reps": 8, "weight": 14, "rest_time": 60 }
            ]
          },
          {
            "name": "Triceps Dips",
            "muscle_group": "Triceps",
            "equipment": "Dip Bars or Bench",
            "sets": [
              { "count": 1, "reps": 12, "weight": 0, "rest_time": 90 },
              { "count": 2, "reps": 10, "weight": 0, "rest_time": 90 },
              { "count": 3, "reps": 8, "weight": 0, "rest_time": 90 }
            ]
          },
          {
            "name": "Plank",
            "muscle_group": "Core",
            "equipment": "Bodyweight",
            "sets": [
              { "count": 1, "reps": 1, "weight": 0, "rest_time": 60 },
              { "count": 2, "reps": 1, "weight": 0, "rest_time": 60 },
              { "count": 3, "reps": 1, "weight": 0, "rest_time": 60 }
            ]
          },
          {
            "name": "Lunges",
            "muscle_group": "Legs, Glutes",
            "equipment": "Dumbbells (optional)",
            "sets": [
              { "count": 1, "reps": 12, "weight": 0, "rest_time": 90 },
              { "count": 2, "reps": 12, "weight": 0, "rest_time": 90 },
              { "count": 3, "reps": 12, "weight": 0, "rest_time": 90 }
            ]
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
