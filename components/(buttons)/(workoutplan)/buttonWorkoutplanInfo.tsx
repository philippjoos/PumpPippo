import { View, Pressable, Text } from 'react-native';
import { useState } from 'react';
import PopUpWorkoutInfo from '@/components/(popups)/(workoutplan)/PopUpWorkoutInfo';
import FileHandler from '@/utils/fileHandler';
import { Exercise } from '@/app/(tabs)/exercises';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';

type Props = {
  label: string;
  workoutplan: string;
};

export default function ButtonViewInfo({ label, workoutplan }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [planExercises, setPlanExercises] = useState<Exercise[]>([]);

  const showExercises = () => {
    FileHandler.getWorkoutplans().then((plans) => {
      if (plans) {
        let plan = plans.find((plan) => plan.name === workoutplan);
        if (plan) {
          setPlanExercises(plan.exercises);
        } else {
          setPlanExercises([]);
        }
      }
    });
    setModalVisible(true);
  };

  return (
    <View style={[containerStyles.buttonContainer]}>
      <Pressable style={buttonStyles.buttonWorkoutPlans} onPress={showExercises}>
        <Text style={textStyles.buttonLabel}>{label}</Text>
      </Pressable>
      <PopUpWorkoutInfo visible={modalVisible} onClose={() => setModalVisible(false)} title={workoutplan} exercises={planExercises} />
    </View>
  );
}
