import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import PopUpSelectExerciseToAdd from "../(exercise)/PopUpSelectExerciseToAdd";
import { Exercise } from "@/app/(tabs)/exercises";
import { WorkoutPlan } from "@/app/(tabs)/workoutplan";

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
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{ }</Text>
          <View style={styles.lineContainer}>
            <Text style={styles.content}>Workoutname: </Text>
            <TextInput style={styles.textbox} placeholder="" onChangeText={setWorkoutplanName} />
          </View>
          <ScrollView>
            {selectedExercises.map((exercise, index) => (
              <View key={index}>
                <Text style={styles.content}>{exercise.name}</Text>
                <View style={styles.lineContainer}>
                  <Text style={styles.content}>Anzahl Sets: </Text>
                  <TextInput
                    style={styles.textbox}
                    placeholder="Sets"
                    onChangeText={(text) => {
                      const updatedExercises = [...selectedExercises];
                      updatedExercises[index] = { ...updatedExercises[index], sets: text };
                      setSelectedExercises(updatedExercises);
                    }}
                  />
                </View>
                <View style={styles.lineContainer}>
                  <Text style={styles.content}>Anzahl Reps: </Text>
                  <TextInput
                    style={styles.textbox}
                    placeholder="Reps"
                    onChangeText={(text) => {
                      const updatedExercises = [...selectedExercises];
                      updatedExercises[index] = { ...updatedExercises[index], reps: text };
                      setSelectedExercises(updatedExercises);
                    }}
                  />
                </View>
                <View style={styles.lineContainer}>
                  <Text style={styles.content}>Gewicht: </Text>
                  <TextInput
                    style={styles.textbox}
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
          <View style={styles.buttonRow}>
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

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  modalContainer: {
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  textbox: {
    fontSize: 16,
    marginBottom: 20,
  },
  lineContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});
