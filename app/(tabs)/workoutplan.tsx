import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ButtonStartWorkout from '@/components/(buttons)/(workoutplan)/buttonStartWorkout';
import ButtonViewInfo from '@/components/(buttons)/(workoutplan)/buttonWorkoutplanInfo';
import ButtonDeleteWorkoutplan from '@/components/(buttons)/(workoutplan)/buttonDeleteWorkoutplan';
import FileHandler from '@/utils/fileHandler';
import React, { useEffect, useState } from 'react';
import ButtonCreateWorkoutplan from '@/components/(buttons)/(workoutplan)/buttonCreateWorkoutplan';

export type WorkoutPlan = {
  name: string;
  exercises: {
    id?: number
    name: string;
    sets: number;
    reps: number;
    weight?: number;
    description?: string;
  }[];
};

export default function WorkoutPlan() {
  const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);

  useEffect(() => {
    FileHandler.getWorkoutplans().then((plans) => {
      if (plans) {
        setWorkoutPlans(plans as WorkoutPlan[]);
      } else {
        FileHandler.saveData('workoutplans',
          [
            {
              name: "Test",
              exercises: [
                {
                  "id": 1,
                  "name": "Pushups",
                  "description": "Do pushups",
                  "sets": 3,
                  "reps": 10,
                  "weight": 40
                },
                {
                  "id": 2,
                  "name": "Situps",
                  "description": "Do situps",
                  "sets": 3,
                  "reps": 10
                },
                {
                  "id": 3,
                  "name": "Squats",
                  "description": "Do squats",
                  "sets": 3,
                  "reps": 10
                }
              ]
            },
            {
              name: "Test2",
              exercises: [
                {
                  "name": "Pushups",
                  "description": "Do pushups",
                  "sets": 3,
                  "reps": 10,
                  "weight": 40
                },
                {
                  "name": "Situps",
                  "description": "Do situps",
                  "sets": 3,
                  "reps": 10
                },
                {
                  "name": "Squats",
                  "description": "Do squats",
                  "sets": 3,
                  "reps": 10
                }
              ]
            }
          ]
        )
      }
    });
  }, []);

  const deleteWorkoutPlan = (workoutplanName: string) => {
    FileHandler.getWorkoutplans().then((plans) => {
      if(plans){
        const newPlans = plans.filter((plan) => plan.name !== workoutplanName);
        FileHandler.saveData('workoutplans', newPlans);
        setWorkoutPlans(newPlans);
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Your Workout Plans</Text>
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
        <ButtonCreateWorkoutplan label='+' />
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