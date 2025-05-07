import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import PopUpStopWorkout from '@/components/(popups)/(workout)/PopUpStopWorkout';
import { useState } from 'react';
import { WorkoutPlan } from '@/app/(tabs)/workoutplan';

interface Props {
    onPress: () => void;
    workoutPlan: WorkoutPlan;
}

export default function ButtonStopWorkout({ onPress, workoutPlan }: Props) {

    const [modalVisible, setModalVisible] = useState(false);
      const [modalContent, setModalContent] = useState("");

    const confirmDelete = () => {
        onPress();
        setModalVisible(false);
      };
    
      const showMessage = () => {
        if(workoutPlan !== null){
            const deleteApproveText = "Are you sure you want to stop the workout?\n";
            setModalContent(deleteApproveText);
            setModalVisible(true);
        }
        else{
            alert("No workout in progress!");
        }
        
      };

    return (
    <View>
        <Pressable style={buttonStyles.buttonStopWorkout} onPress={showMessage}>
            <Ionicons name="stop-circle-outline" size={24} color="white" />
        </Pressable>
        <PopUpStopWorkout visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={confirmDelete} title={"confirm stopping"} content={modalContent}/>
    </View>
  );
}