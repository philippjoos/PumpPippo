import { View, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import PopUpAddSetToCurrentExercise from '@/components/(popups)/(workout)/PopUpAddSetToCurrentExercise';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';

interface Props {
    currentExerciseIndex: number;
    workoutplanName: string;
  }

export default function ButtonAddSetToCurrentExercise({currentExerciseIndex, workoutplanName}: Props) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[containerStyles.buttonContainer]}>
            <Pressable style={buttonStyles.buttonModify} onPress={() => setModalVisible(true)}>
                <Ionicons name="add-circle-outline" size={24} color="white" />
            </Pressable>
        <PopUpAddSetToCurrentExercise visible={modalVisible} onClose={() => setModalVisible(false)} workoutplanName={workoutplanName} currentExerciseIndex={currentExerciseIndex}/>
        </View>
    );
}
