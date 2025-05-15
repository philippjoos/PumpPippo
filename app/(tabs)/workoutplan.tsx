import { Text, View, ScrollView } from 'react-native';
import ButtonStartWorkout from '@/components/(buttons)/(workoutplan)/buttonStartWorkout';
import ButtonViewInfo from '@/components/(buttons)/(workoutplan)/buttonWorkoutplanInfo';
import ButtonDeleteWorkoutplan from '@/components/(buttons)/(workoutplan)/buttonDeleteWorkoutplan';
import FileHandler from '@/utils/fileHandler';
import React, { useEffect, useState } from 'react';
import ButtonCreateWorkoutplan from '@/components/(buttons)/(workoutplan)/buttonCreateWorkoutplan';
import { Exercise } from '@/app/(tabs)/exercises';

// styles imports
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';

export type WorkoutPlan = {
  name: string;
  exercises: Exercise[];
};

export default function WorkoutPlans() {
  const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);

  useEffect(() => {
    console.log('Registering storage listener');

    // load workout plans from storage at first render
    FileHandler.getWorkoutplans().then((plans) => {
      if (plans) {
        console.log('Initial workout plans loaded:', plans);
        setWorkoutPlans(plans);
      } else {
        console.log('No workout plans found in storage.');
      }
    });

    const subscription = FileHandler.storageEmitter.addListener(
      'workoutplans',
      (updatedPlans: WorkoutPlan[]) => {
        setWorkoutPlans(updatedPlans);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  // Funktion zum Löschen eines Workout-Plans
  const deleteWorkoutPlan = (workoutplanName: string) => {
    FileHandler.getWorkoutplans().then((plans) => {
      if (plans) {
        const newPlans = plans.filter((plan) => plan.name !== workoutplanName);
        console.log('Updated plans after delete:', newPlans);
        FileHandler.saveData('workoutplans', newPlans);
      }
    });
  };

  // Funktion zum Erstellen eines neuen Workout-Plans
  const createWorkoutPlan = (newWorkoutPlan: WorkoutPlan) => {
    FileHandler.getWorkoutplans().then((plans) => {
      if (plans) {
        const updatedPlans = [...plans, newWorkoutPlan];
        console.log('Updated plans after create:', updatedPlans);
        FileHandler.saveData('workoutplans', updatedPlans);
      }
    });
  };

  return (
    <View style={containerStyles.container}>
      <Text style={textStyles.text}>Your Workout Plans</Text>
      <ScrollView style={containerStyles.container}>
        {
          workoutPlans.map((trainingsplan) => (
            <View key={trainingsplan.name} style={containerStyles.exerciseContainer}>
              <Text style={textStyles.exerciseName}>{trainingsplan.name}</Text>
              <View style={containerStyles.buttonContainer}>
                <ButtonStartWorkout label="Start" workoutplan={trainingsplan} />
                <ButtonViewInfo label="View" workoutplan={trainingsplan.name} />
                <ButtonDeleteWorkoutplan label="Delete" workoutplan={trainingsplan.name} onDelete={deleteWorkoutPlan} />
              </View>
            </View>
          ))
        }
      </ScrollView>
      <View style={containerStyles.buttonCreateContainer}>
        <ButtonCreateWorkoutplan/>
      </View>
    </View>
  );
}
