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
export type Sets = {
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
  sets?: Sets[]; 
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
            sets: [
              {count: 1, reps: 10, weight: 60, rest_time: 180},
              {count: 2, reps: 8, weight: 70, rest_time: 180},
              {count: 3, reps: 6, weight: 80, rest_time: 180},
            ],
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
      if(exercises){
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
              <ButtonDeleteExercise label="Delete" selectedExercise={exercise.name} onDelete={deleteExercise} />
            </View>
          ))}
      </ScrollView>
      <View style={containerStyles.buttonCreateContainer}>
        <ButtonCreateExercise label="+"  onExerciseCreate={handleExerciseAdded}/>
      </View>
    </View>
  );
}
