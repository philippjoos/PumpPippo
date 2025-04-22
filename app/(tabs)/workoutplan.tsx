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
      FileHandler.getWorkoutplans().then((loadedWorkoutPlans) => {
        if (loadedWorkoutPlans) {
          setWorkoutPlans(loadedWorkoutPlans);
        } else {
          const defaultWorkoutPlans: WorkoutPlan[] = [];
          FileHandler.saveData('workoutplans', defaultWorkoutPlans);
          setWorkoutPlans(defaultWorkoutPlans);
        }
      });
    }, []);

  const deleteWorkoutPlan = (workoutplanName: string) => {
    FileHandler.getWorkoutplans().then((plans) => {
      if (plans) {
        const newPlans = plans.filter((plan) => plan.name !== workoutplanName);
        FileHandler.saveData('workoutplans', newPlans);
        setWorkoutPlans(newPlans);
      }
    });
  };

  const createWorkoutPlan = (newWorkoutPlan: WorkoutPlan) => {
    setWorkoutPlans((prevWorkoutPlans) => [...prevWorkoutPlans, newWorkoutPlan]);
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
                <ButtonStartWorkout label="Start" />
                <ButtonViewInfo label="View" workoutplan={trainingsplan.name} />
                <ButtonDeleteWorkoutplan label="Delete" workoutplan={trainingsplan.name} onDelete={deleteWorkoutPlan} />
              </View>
            </View>
          ))
        }
      </ScrollView>
      <View style={containerStyles.buttonCreateContainer}>
        <ButtonCreateWorkoutplan label='+' onWorkoutPlanAdded={createWorkoutPlan} />
      </View>
    </View>
  );
}
