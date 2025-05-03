import containerStyles from '@/assets/styles/containerStyles';
import defaultStyles from '@/assets/styles/defaultStyles';
import textStyles from '@/assets/styles/textStyles';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { Exercise } from '@/app/(tabs)/exercises';
import { ScrollView } from 'react-native-gesture-handler';
import { useSearchParams } from 'expo-router/build/hooks';
import { WorkoutPlan } from '@/app/(tabs)/workoutplan';
import ButtonStartTimerAfterExercise from '@/components/(buttons)/(workout)/buttonStartTimerAfterExercise';
import ButtonNextExercise from '@/components/(buttons)/(workout)/buttonNextExercise';
import ButtonPreviousExercise from '@/components/(buttons)/(workout)/buttonPreviousExercise';

export default function workout() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const searchParams = useSearchParams();
  const workoutPlan = searchParams.get('workoutPlan');
  const [currentExercise, setCurrentExercise] = useState<Exercise>();

  useEffect(() => {
    if (workoutPlan) {
      const parsedWorkoutPlan = JSON.parse(workoutPlan as string);
      setExercises(parsedWorkoutPlan.exercises);
      setCurrentExercise(exercises[0]);
    }
  }, [workoutPlan]);

  return (
    <View style={[containerStyles.container, { flex: 1 }]}>
      <View style={containerStyles.container}>
        {/* ScrollView of Exercises in workoutplan */}
        <ScrollView style={[defaultStyles.scrollView, { flex: 2 }]}>
          {exercises.length === 0 ? (
            <Text style={textStyles.text}>currently no exercise plane selected!</Text>
          ) : (
            <>
              <Text style={textStyles.title}>currently no exercise selected!</Text>
              {exercises.map((exercise) => (
                <View key={exercise.name} style={containerStyles.exerciseContainer}>
                  <Text style={textStyles.exerciseName}>{exercise.name}</Text>
                  <Text style={textStyles.content}>Reps: {exercise.reps}</Text>
                  <Text style={textStyles.content}>Sets: {exercise.sets}</Text>
                </View>
              ))}
            </>
          )}

        </ScrollView>
      </View>
      <View style={[containerStyles.currentExerciseContainer, { flex: 1 }]}>
        {/* Container for current executed exercise */}
        <Text style={textStyles.title}>current exercise:</Text>
        {currentExercise ? (
          <>
            <View style={containerStyles.exerciseContainer}>
              <Text style={textStyles.exerciseName}>{currentExercise.name}</Text>
              <Text style={textStyles.content}></Text>
              <Text style={textStyles.content}></Text>
            </View>
          </>
        ) : null}
        <View style={containerStyles.buttonStartTimerAfterWorkoutContainer}>
          <View>
            <ButtonPreviousExercise />
          </View>
          <View>
            <ButtonStartTimerAfterExercise />
          </View>
          <View>
            <ButtonNextExercise />
          </View>
        </View>
      </View>
    </View>
  );
}
