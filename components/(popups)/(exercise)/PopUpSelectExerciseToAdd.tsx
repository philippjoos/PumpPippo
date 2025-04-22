import { Modal, View, Text, Button, StyleSheet } from "react-native";
import FileHandler from '@/utils/fileHandler';
import { Exercise } from "@/app/(tabs)/exercises";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';

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
      <View style={defaultStyles.modalBackground}>
        <View style={containerStyles.modalContainer}>
          <Text style={textStyles.title}>Select an Exercise to add to your workoutplan:</Text>
          <ScrollView style={defaultStyles.scrollViewSelectExerciseToAdd}>
            {exercises.map((exercise: Exercise) => (
              <View>
                <Button key={exercise.name} title={exercise.name} onPress={() => handleExerciseSelected(exercise)} color={'#6D28D9'} />
              </View>

            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
