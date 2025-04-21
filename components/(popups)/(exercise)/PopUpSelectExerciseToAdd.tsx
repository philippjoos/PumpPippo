import { Modal, View, Text, Button, StyleSheet } from "react-native";
import FileHandler from '@/utils/fileHandler';
import { Exercise } from "@/app/(tabs)/exercises";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";

// Define the PopupModalProps interface
interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  onExerciseSelected: (exercise: Exercise) => void;
}

export default function PopUpSelectExerciseToAdd({ visible, onClose, onExerciseSelected }: PopupModalProps) {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    FileHandler.getExercises().then((loadedExercises) => {
      if (loadedExercises) {
        setExercises(loadedExercises as Exercise[]);
      }
    });
  }, []);
  const handleExerciseSelected = (exercise: Exercise) => {
    onExerciseSelected(exercise);
    onClose();
  };


  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Select an Exercise to add to your workoutplan:</Text>
          <ScrollView>
            {exercises.map((exercise: Exercise) => (
              <Button key={exercise.name} title={exercise.name} onPress={() => handleExerciseSelected(exercise)} />
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
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
});
