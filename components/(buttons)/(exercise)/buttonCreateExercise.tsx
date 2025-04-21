import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useState } from "react";
import PopUpCreateExercise from '../../(popups)/(exercise)/PopUpCreateExercise';
import { Exercise } from '@/app/(tabs)/exercises';
import FileHandler from '@/utils/fileHandler';

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
            if(loadedExercises) {
                if(loadedExercises.find((ex) => ex.name === exercise.name)) {
                    alert("Exercise already exists");
                    return;
                }else{
                    setExercises([...loadedExercises, exercise]);
                    FileHandler.saveData('exercises', [...loadedExercises, exercise]);
                    onExerciseCreate(exercise);
                }
            }
        });
      };

    return (
    <View style={[styles.buttonContainer, { borderWidth: 1, borderColor: 'white', borderRadius: 18 },]}>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
      <PopUpCreateExercise visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={handleCreateExercise} title={"Create Exercise"} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  buttonImage: {
    width: 200,
    height: 200,
    marginRight: 8,
  }
});
