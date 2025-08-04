import { View, Pressable } from 'react-native';
import { IoStopCircleOutline } from 'react-icons/io5';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import PopUpStopWorkout from '@/components/(popups)/(workout)/PopUpStopWorkout';
import { useState } from 'react';

interface Props {
    onPress: () => void;
    workoutPlanName: string;
}

export default function ButtonStopWorkout({ onPress, workoutPlanName }: Props) {

    const [modalVisible, setModalVisible] = useState(false);
      const [modalContent, setModalContent] = useState("");

    const confirmStop = () => {
        onPress();
        setModalVisible(false);
      };
    
      const showMessage = () => {
        if(workoutPlanName !== null){
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
            <IoStopCircleOutline size={24} color="white" />
        </Pressable>
        <PopUpStopWorkout visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={confirmStop} title={"confirm stopping"} content={modalContent}/>
    </View>
  );
}