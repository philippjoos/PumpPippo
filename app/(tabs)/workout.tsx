import containerStyles from '@/assets/styles/containerStyles';
import defaultStyles from '@/assets/styles/defaultStyles';
import textStyles from '@/assets/styles/textStyles';
import { Text, View, } from 'react-native';
import { useState, useEffect } from 'react';
import { Exercise } from '@/app/(tabs)/exercises';
import { ScrollView } from 'react-native-gesture-handler';
import { useRouter, useSearchParams } from 'expo-router/build/hooks';
import ButtonStartTimerAfterExercise from '@/components/(buttons)/(workout)/buttonStartTimerAfterExercise';
import ButtonNextExercise from '@/components/(buttons)/(workout)/buttonNextExercise';
import ButtonPreviousExercise from '@/components/(buttons)/(workout)/buttonPreviousExercise';
import ButtonEditCurrentSet from '@/components/(buttons)/(workout)/buttonEditCurrentSet';
import ButtonAddSetToCurrentExercise from '@/components/(buttons)/(workout)/buttonAddSetToCurrentExercise';
import ButtonStopWorkout from '@/components/(buttons)/(workout)/buttonStopWorkout';
import { WorkoutPlan } from './workoutplan';
import FileHandler from '@/utils/fileHandler';

export default function workout() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Parse workoutPlan from URL params once when params change
  useEffect(() => {
    const planParam = searchParams.get('workoutPlan');
    if (planParam) {
      const parsedPlan: WorkoutPlan = JSON.parse(planParam);
      setWorkoutPlan(parsedPlan);
    }
  }, [searchParams]);

  // Sync exercises whenever workoutPlan changes
  useEffect(() => {
    if (workoutPlan) {
      setExercises(workoutPlan.exercises || []);
    } else {
      setExercises([]);
    }
  }, [workoutPlan]);


  // use effect for timer
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && isTimerRunning) {
      clearInterval(interval);
      setIsTimerRunning(false);
      handleTimerEnd();
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const saveWorkoutPlan = async () => {
    if (workoutPlan) {
      const allWorkoutPlans = await FileHandler.getWorkoutplans();
      const updatedPlans = allWorkoutPlans?.map((plan) =>
        plan.name === workoutPlan.name ? workoutPlan : plan
      ) || [];
      await FileHandler.saveData('workoutplans', updatedPlans);
    }
  };

  const currentExercise = exercises[currentExerciseIndex];

  const resetWorkout = () => {
    setCurrentExerciseIndex(0);
    setCurrentSetIndex(0);
    setTimer(0);
    setIsTimerRunning(false);
    setExercises([]);
    setWorkoutPlan(null);
    router.replace({ pathname: '/workout' });
  };

  const startTimer = () => {
    if (currentExercise) {
      if (isTimerRunning) {
        setIsTimerRunning(false);
        setTimer(0);
        handleTimerEnd();
      } else {
        setTimer(currentExercise.sets?.[currentSetIndex]?.rest_time || 180); // Set the timer to the rest time of the current set
        setIsTimerRunning(true);
      }
    }
  };

  const handleTimerEnd = () => {
    if (currentExercise && currentSetIndex < (currentExercise.sets?.length ?? 0) - 1) {
      // Nächstes Set anzeigen
      setCurrentSetIndex((prev) => prev + 1);
    } else if (currentExerciseIndex < exercises.length - 1) {
      // Zur nächsten Übung wechseln
      setCurrentExerciseIndex((prev) => prev + 1);
      setCurrentSetIndex(0); // Zurücksetzen auf das erste Set
    } else {
      // Workout abgeschlossen
      alert('Workout Complete, You have completed all exercises!');
    }
  };

  const nextExercise = () => {
    if (currentExerciseIndex + 1 < exercises.length) {
      setCurrentExerciseIndex((prev) => prev + 1);
      setCurrentSetIndex(0); // Zurücksetzen auf das erste Set
    } else {
      alert('No more exercises, You have completed all exercises!');
    }
  }

  const previousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex((prev) => prev - 1);
      setCurrentSetIndex(0); // Zurücksetzen auf das erste Set
    } else {
      alert('No previous exercises, You are at the first exercise!');
    }
  }

  return (
    <View style={[containerStyles.container, { flex: 1 }]}>
      <View style={containerStyles.container}>
        {/* ScrollView of Exercises in workoutplan */}
        <ScrollView style={[defaultStyles.scrollView, { flex: 2 }]}>
          {exercises.length === 0 ? (
            <Text style={textStyles.text}>currently no workoutplan selected!</Text>
          ) : (
            <>
              {exercises.map((exercise) => (
                <View key={exercise.name} style={containerStyles.exerciseContainer}>
                  <Text style={textStyles.exerciseName}>{exercise.name}</Text>
                  {exercise.sets?.map((set, index) => (
                    <View key={index} style={containerStyles.rowContainer}>
                      <Text style={textStyles.content}>Set {set.setCount}:      </Text>
                      <Text style={textStyles.content}>Reps: {set.reps},     </Text>
                      <Text style={textStyles.content}>Weight: {set.weight},     </Text>
                      <Text style={textStyles.content}>Rest Time: {set.rest_time} seconds</Text>
                    </View>
                  ))}
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
              <Text style={textStyles.content}>
                Set {currentSetIndex + 1} of {currentExercise.sets?.length}
              </Text>
              <Text style={textStyles.content}>Reps: {currentExercise.sets?.[currentSetIndex]?.reps || 'N/A'}</Text>
              <Text style={textStyles.content}>Weight: {currentExercise.sets?.[currentSetIndex]?.weight || 'N/A'}</Text>
              <Text style={textStyles.content}>Rest Time: {currentExercise.sets?.[currentSetIndex]?.rest_time || 'N/A'} seconds</Text>
              <View style={containerStyles.buttonContainer}>
                <ButtonAddSetToCurrentExercise />
                <ButtonEditCurrentSet set={currentExercise.sets?.[currentSetIndex]} currentExerciseIndex={currentSetIndex} workoutplanName={workoutPlan?.name || ""} />
              </View>
            </View>
            <Text style={textStyles.text}>Timer: {timer > 0 ? `${timer}s` : 'Not running'}</Text>
          </>
        ) : null}
        
        <View style={containerStyles.buttonNavigateExercise}>
          <View>
            <ButtonPreviousExercise onPress={previousExercise} />
          </View>
          <View>
            <ButtonStartTimerAfterExercise onPress={startTimer} />
          </View>
          <View>
            <ButtonNextExercise onPress={nextExercise} />
          </View>
        </View>
      </View>
      <ButtonStopWorkout onPress={resetWorkout} workoutPlanName={workoutPlan?.name || ''}/>
    </View>
  );
}
