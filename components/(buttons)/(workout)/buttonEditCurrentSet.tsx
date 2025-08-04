import { View, Pressable } from 'react-native';
import { useState } from 'react';
import { IoCreateOutline } from 'react-icons/io5';
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
            <Pressable style={buttonStyles.buttonModify} onPress={() => setModalVisible(true)}>
                <IoCreateOutline size={24} color="white" />
            </Pressable>
            <PopUpEditCurrentSet visible={modalVisible} onClose={() => setModalVisible(false)} title={"Edit Set"} currentSet={set} workoutplanName={workoutplanName} currentExerciseIndex={currentExerciseIndex}/>
        </View>
    );
}
