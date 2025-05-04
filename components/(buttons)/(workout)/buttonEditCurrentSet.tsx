import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import PopUpEditCurrentSet from '@/components/(popups)/(workout)/PopUpEditCurrentSet';
import { Set } from '@/app/(tabs)/exercises';
import FileHandler from '@/utils/fileHandler';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';

interface Props {
  set?: Set;
  currentExerciseIndex: number;
  workoutplanName: string;
}

export default function ButtonEditCurrentSet({ set, currentExerciseIndex, workoutplanName }: Props) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleConfirm = async (updatedSet: Set) => {
       const allWorkoutplans = await FileHandler.getWorkoutplans();
       const workoutplan = allWorkoutplans?.find((plan) => plan.name === workoutplanName);

        const exerciseSets = workoutplan?.exercises[currentExerciseIndex].sets;
        const setIndex = exerciseSets?.findIndex((s) => s.setCount === updatedSet.setCount);

       if(setIndex !== -1){
        if (exerciseSets && setIndex !== undefined && setIndex >= 0) {
            exerciseSets[setIndex] = updatedSet;
            if (workoutplan) {
                workoutplan.exercises[currentExerciseIndex].sets = exerciseSets;
            }
        }
        if (allWorkoutplans) {
            await FileHandler.saveData('workoutplans', allWorkoutplans);
        }
       }
       setModalVisible(false);
    };

    return (
        <View style={[containerStyles.buttonContainer]}>
            <Pressable style={buttonStyles.buttonEditCurrentSet} onPress={() => setModalVisible(true)}>
                <Ionicons name="create-outline" size={24} color="white" />
            </Pressable>
            <PopUpEditCurrentSet visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={handleConfirm} title={"Edit Set"} currentSet={set} />
        </View>
    );
}
