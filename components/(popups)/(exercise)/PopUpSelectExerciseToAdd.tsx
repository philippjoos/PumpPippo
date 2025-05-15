import { Modal, View, Text, Button } from "react-native";
import FileHandler from '@/utils/fileHandler';
import { Exercise } from "@/app/(tabs)/exercises";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";

// styles imports
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
        <Text style={textStyles.title}>Select an Exercise to add to your workoutplan:</Text>
        <View style={containerStyles.selectExerciseContainer}>
          <ScrollView style={defaultStyles.scrollViewSelectExerciseToAdd}>
            {exercises.map((exercise: Exercise) => (
              <View style={containerStyles.buttonSelectExerciseToAddContainer} key={exercise.name}>
                <Button key={exercise.name} title={exercise.name} onPress={() => handleExerciseSelected(exercise)} color={'#6D28D9'} />
              </View>
            ))}
          </ScrollView>
        </View>
        <Button title="Close" onPress={onClose} color={'#6D28D9'} />
      </View>
    </Modal>
  );
}
