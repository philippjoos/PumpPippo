import { View, Pressable, Text } from 'react-native';
import { useState } from "react";
import PopUpCreateExercise from '../../(popups)/(exercise)/PopUpCreateExercise';
import { Exercise } from '@/app/(tabs)/exercises';
import FileHandler from '@/utils/fileHandler';
import { Ionicons } from '@expo/vector-icons';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import textStyles from '@/assets/styles/textStyles';

type Props = {
  label: string;
  onExerciseCreate: (exercise: Exercise) => void;
};

export default function ButtonCreateExercise({ label, onExerciseCreate }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const handleCreateExercise = (exercise: Exercise) => {
    setModalVisible(false);
    FileHandler.getExercises().then((loadedExercises) => {
      if (loadedExercises) {
        if (loadedExercises.find((ex) => ex.name === exercise.name)) {
          alert("Exercise already exists");
          return;
        } else {
          setExercises([...loadedExercises, exercise]);
          FileHandler.saveData('exercises', [...loadedExercises, exercise]);
          onExerciseCreate(exercise);
        }
      }
    });
  };

  return (
    <View>
      <Pressable style={buttonStyles.buttonCreate} onPress={() => setModalVisible(true)}>
        <Ionicons name="add-circle-outline" size={24} color="white" />
      </Pressable>
      <PopUpCreateExercise visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={handleCreateExercise} title={"Create Exercise"} />
    </View>
  );
}
