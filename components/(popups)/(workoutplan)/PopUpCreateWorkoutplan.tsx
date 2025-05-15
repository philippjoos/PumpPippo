import React, { useState } from "react";
import { Modal, View, Text, Button, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import PopUpSelectExerciseToAdd from "../(exercise)/PopUpSelectExerciseToAdd";
import { Exercise, Set } from "@/app/(tabs)/exercises";
import { WorkoutPlan } from "@/app/(tabs)/workoutplan";

// styles imports
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';

interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (workoutPlan: WorkoutPlan) => void;
  title: string;
}

export default function PopUpCreateWorkoutplan({ visible, onClose, onConfirm, title }: PopupModalProps) {

  const [workoutplanName, setWorkoutplanName] = useState("");
  const [selectExerciseVisible, setSelectExerciseVisible] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [sets, setSets] = useState<{ [exerciseIndex: number]: Set[] }>({});
  
  const handleExerciseSelected = (exercise: Exercise) => {
    setSelectedExercises([...selectedExercises, exercise]);
    setSelectExerciseVisible(false);
  };


  const buildWorkoutplan = (): WorkoutPlan => {
    return {
      name: workoutplanName,
      exercises: selectedExercises.map((exercise, exerciseIndex) => ({
        name: exercise.name,
        muscle_group: exercise.muscle_group,
        sets: sets[exerciseIndex],
        equipment: exercise.equipment,
      })),
    };
  };

  const handleCreate = () => {
    const workoutPlan = buildWorkoutplan();
    onConfirm(workoutPlan);
    onClosing();
    
  }

  const onClosing = () => {
    setWorkoutplanName("");
    setSelectedExercises([]);
    setSets([]);
    onClose();
  }

  const onAddSet = (exerciseIndex: number) => {
    setSets((prevSets) => ({
      ...prevSets,
      [exerciseIndex]: [
        ...(prevSets[exerciseIndex] || []),
        { setCount: (prevSets[exerciseIndex]?.length || 0) + 1, reps: 0, weight: 0, rest_time: 0 },
      ],
    }));
  };

  const onModifySet = (text: string, exerciseIndex: number, setIndex: number, row: string) => {
    if (/^\d*$/.test(text)) { // Überprüft, ob der Text nur aus Zahlen besteht
      setSets((prevSets) => {
        const updatedSets = [...(prevSets[exerciseIndex] || [])];
        switch (row) {
          case "reps":
            updatedSets[setIndex] = { ...updatedSets[setIndex], reps: parseInt(text) || 0 };
            break;
          case "rest_time":
            updatedSets[setIndex] = { ...updatedSets[setIndex], rest_time: parseInt(text) || 0 };
            break;
          case "weight":
            updatedSets[setIndex] = { ...updatedSets[setIndex], weight: parseInt(text) || 0 };
            break;
        }
        return { ...prevSets, [exerciseIndex]: updatedSets };
      });
    } else {
      alert("Please enter a valid number!");
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={defaultStyles.modalBackground}>
        <View style={containerStyles.modalContainer}>
          <Text style={textStyles.title}>{title}</Text>
          <Text style={textStyles.content}>{ }</Text>
          <View style={containerStyles.gridContainer}>
            <View style={containerStyles.rowContainer}>
              <Text style={textStyles.content}>Workoutname: </Text>
              <TextInput style={defaultStyles.textbox} placeholder="" onChangeText={setWorkoutplanName} />
            </View>
          </View>
          <ScrollView>
          {selectedExercises.map((exercise, exerciseIndex) => (
  <View key={exerciseIndex}>
    <Text style={textStyles.ExerciseTitle}>{exercise.name}</Text>
    {(sets[exerciseIndex] || []).map((set, setIndex) => (
      <View key={setIndex} style={containerStyles.gridContainer}>
        <Text style={textStyles.textBoxLabel}>Set: {set.setCount}</Text>
        <View style={containerStyles.rowContainer}>
          <Text style={textStyles.textBoxLabel}>Reps: </Text>
          <TextInput
            style={defaultStyles.textbox}
            onChangeText={(text) => onModifySet(text, exerciseIndex, setIndex, 'reps')}
            value={set.reps.toString()}
          />
        </View>
        <View style={containerStyles.rowContainer}>
          <Text style={textStyles.textBoxLabel}>Weight: </Text>
          <TextInput
            style={defaultStyles.textbox}
            onChangeText={(text) => onModifySet(text, exerciseIndex, setIndex, 'weight')}
            value={set.weight.toString()}
          />
        </View>
        <View style={containerStyles.rowContainer}>
          <Text style={textStyles.textBoxLabel}>Rest-Time: </Text>
          <TextInput
            style={defaultStyles.textbox}
            onChangeText={(text) => onModifySet(text, exerciseIndex, setIndex, 'rest_time')}
            value={(set.rest_time ?? 0).toString()}
          />
        </View>
      </View>
    ))}
    <View style={containerStyles.gridContainer}>
      <View style={{alignItems: "center"}}>
        <Button title="Add Set" onPress={() => onAddSet(exerciseIndex)} color={'#6D28D9'} />
      </View>
    </View>
  </View>
))}
          </ScrollView>
          <View style={containerStyles.buttonContainer}>
            <Button title="Create" onPress={handleCreate} color={'#6D28D9'} />
            <Button title="Add Exercise" onPress={() => setSelectExerciseVisible(true)} color={'#6D28D9'} />
            <Button title="Close" onPress={onClosing} color={'#6D28D9'} />
          </View>
        </View>
      </View>

      {/* Add the exercise selection popup here */}
      <PopUpSelectExerciseToAdd
        visible={selectExerciseVisible}
        onClose={() => setSelectExerciseVisible(false)}
        onExerciseSelected={handleExerciseSelected} // Pass the selected exercise to the handler
      />
    </Modal >
  );
}
