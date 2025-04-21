import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import PopUpSelectExerciseToAdd from "../(exercise)/PopUpSelectExerciseToAdd";
import { Exercise } from "@/app/(tabs)/exercises";
import { WorkoutPlan } from "@/app/(tabs)/workoutplan";

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
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
  const [selectExerciseVisible, setSelectExerciseVisible] = useState(false); // State to manage the visibility of the exercise selection popup
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]); // State to manage the selected exercises

  const handleExerciseSelected = (exercise: Exercise) => {
    setSelectedExercises([...selectedExercises, exercise]); // Add the exercise name to the list
    setSelectExerciseVisible(false); // Close the exercise selection popup
  };


  const buildWorkoutplan = (): WorkoutPlan => {
    return {
      name: workoutplanName,
      exercises: selectedExercises.map((exercise) => ({
        name: exercise.name,
        muscle_group: exercise.muscle_group, // Include the required muscle_group property
        sets: exercise.sets || "",
        reps: exercise.reps || "",
        weight: exercise.weight || "",
      })),
    };
  };
;

  const handleCreate = () => {
    const workoutPlan = buildWorkoutplan();
    onConfirm(workoutPlan); // Call the onConfirm function with the workout plan name
    onClosing(); // Close the modal after creating the workout plan
  }

  const onClosing = () => {
    setWorkoutplanName("");
    setSelectedExercises([]);
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={defaultStyles.modalBackground}>
        <View style={containerStyles.modalContainer}>
          <Text style={textStyles.title}>{title}</Text>
          <Text style={textStyles.content}>{ }</Text>
          <View style={containerStyles.lineContainer}>
            <Text style={textStyles.content}>Workoutname: </Text>
            <TextInput style={defaultStyles.textbox} placeholder="" onChangeText={setWorkoutplanName} />
          </View>
          <ScrollView>
            {selectedExercises.map((exercise, index) => (
              <View key={index}>
                <Text style={textStyles.content}>{exercise.name}</Text>
                <View style={containerStyles.lineContainer}>
                  <Text style={textStyles.content}>Anzahl Sets: </Text>
                  <TextInput
                    style={defaultStyles.textbox}
                    placeholder="Sets"
                    onChangeText={(text) => {
                      const updatedExercises = [...selectedExercises];
                      updatedExercises[index] = { ...updatedExercises[index], sets: text };
                      setSelectedExercises(updatedExercises);
                    }}
                  />
                </View>
                <View style={containerStyles.lineContainer}>
                  <Text style={textStyles.content}>Anzahl Reps: </Text>
                  <TextInput
                    style={defaultStyles.textbox}
                    placeholder="Reps"
                    onChangeText={(text) => {
                      const updatedExercises = [...selectedExercises];
                      updatedExercises[index] = { ...updatedExercises[index], reps: text };
                      setSelectedExercises(updatedExercises);
                    }}
                  />
                </View>
                <View style={containerStyles.lineContainer}>
                  <Text style={textStyles.content}>Gewicht: </Text>
                  <TextInput
                    style={defaultStyles.textbox}
                    placeholder="Weight"
                    onChangeText={(text) => {
                      const updatedExercises = [...selectedExercises];
                      updatedExercises[index] = { ...updatedExercises[index], weight: text };
                      setSelectedExercises(updatedExercises);
                    }}
                  />
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={defaultStyles.buttonRow}>
            <Button title="Create" onPress={handleCreate} />
            <Button title="Add Exercise" onPress={() => setSelectExerciseVisible(true)} />
            <Button title="Close" onPress={onClosing} />
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
