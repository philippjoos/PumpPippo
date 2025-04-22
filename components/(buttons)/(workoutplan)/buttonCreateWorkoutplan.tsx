import { View, Pressable, Text } from 'react-native';
import { useState } from "react";
import PopUpCreateWorkoutplan from '@/components/(popups)/(workoutplan)/PopUpCreateWorkoutplan';
import { WorkoutPlan } from '@/app/(tabs)/workoutplan';
import FileHandler from '@/utils/fileHandler';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import textStyles from '@/assets/styles/textStyles';

type Props = {
  label: string;
  onWorkoutPlanAdded: (workoutPlan: WorkoutPlan) => void; 
};

export default function ButtonCreateWorkoutplan({ label, onWorkoutPlanAdded }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateWorkoutPlan = async (workoutPlan: WorkoutPlan) => {
    setModalVisible(false);
    const loadedWorkoutPlans = await FileHandler.getWorkoutplans();
    if (loadedWorkoutPlans) {
      if (loadedWorkoutPlans.find((plan) => plan.name === workoutPlan.name)) {
        alert("Workoutplan already exists");
        return;
      } else {
        const updatedWorkoutPlans = [...loadedWorkoutPlans, workoutPlan];
        await FileHandler.saveData('workoutplans', updatedWorkoutPlans);
        onWorkoutPlanAdded(workoutPlan); // Notify parent component
      }
    } else {
      const updatedWorkoutPlans = [workoutPlan];
      await FileHandler.saveData('workoutplans', updatedWorkoutPlans);
      onWorkoutPlanAdded(workoutPlan); // Notify parent component
    }
  };

    return (
    <View>
      <Pressable style={buttonStyles.buttonCreate} onPress={() => setModalVisible(true)}>
        <Text style={textStyles.buttonLabel}>{label}</Text>
      </Pressable>
      <PopUpCreateWorkoutplan visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={handleCreateWorkoutPlan} title={"Create Workoutplan"} />
    </View>
  );
}
