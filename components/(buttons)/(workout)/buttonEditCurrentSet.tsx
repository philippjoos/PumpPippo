import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import PopUpEditCurrentSet from '@/components/(popups)/(workout)/PopUpEditCurrentSet';
import { Set } from '@/app/(tabs)/exercises';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';

interface Props {
    set: Set;
    currentExerciseIndex: number;
    workoutplanName: string;
  }
  
  export default function ButtonEditCurrentSet({ set, currentExerciseIndex, workoutplanName }: Props) {
    const [modalVisible, setModalVisible] = useState(false);
  

    return (
        <View style={[containerStyles.buttonContainer]}>
            <Pressable style={buttonStyles.buttonEditCurrentSet} onPress={() => setModalVisible(true)}>
                <Ionicons name="create-outline" size={24} color="white" />
            </Pressable>
            <PopUpEditCurrentSet visible={modalVisible} onClose={() => setModalVisible(false)} title={"Edit Set"} currentSet={set} workoutplanName={workoutplanName} currentExerciseIndex={currentExerciseIndex}/>
        </View>
    );
}
