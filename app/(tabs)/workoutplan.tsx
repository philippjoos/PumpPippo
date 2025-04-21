import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ButtonStartWorkout from '@/components/(buttons)/(workoutplan)/buttonStartWorkout';
import ButtonViewInfo from '@/components/(buttons)/(workoutplan)/buttonWorkoutplanInfo';
import ButtonDeleteWorkoutplan from '@/components/(buttons)/(workoutplan)/buttonDeleteWorkoutplan';
import FileHandler from '@/utils/fileHandler';
import React, { useEffect, useState } from 'react';
import ButtonCreateWorkoutplan from '@/components/(buttons)/(workoutplan)/buttonCreateWorkoutplan';
import { Exercise } from '@/app/(tabs)/exercises';

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
    <View style={styles.container}>
      <Text style={styles.text}>Your Workout Plans</Text>
      <ScrollView style={styles.container}>
        {
          workoutPlans.map((trainingsplan) => (
            <View key={trainingsplan.name} style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{trainingsplan.name}</Text>
              <View style={styles.buttonContainer}>
                <ButtonStartWorkout label="Start" />
                <ButtonViewInfo label="View" workoutplan={trainingsplan.name} />
                <ButtonDeleteWorkoutplan label="Delete" workoutplan={trainingsplan.name} onDelete={deleteWorkoutPlan} />
              </View>
            </View>
          ))
        }
      </ScrollView>
      <View style={styles.buttonCreate}>
        <ButtonCreateWorkoutplan label='+' onWorkoutPlanAdded={createWorkoutPlan} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  exerciseContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    padding: 15,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
  },
  noWorkoutsText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
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