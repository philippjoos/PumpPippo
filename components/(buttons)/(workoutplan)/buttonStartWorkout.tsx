import { View, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { WorkoutPlan } from '@/app/(tabs)/workoutplan';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';

type Props = {
  label: string;
  workoutplan: WorkoutPlan;
};

export default function ButtonStartWorkout({ label, workoutplan }: Props) {
  const router = useRouter();

  const handleStartWorkout = () => {
    router.push({ 
      pathname: '/workout',
      params: { workoutPlan: JSON.stringify(workoutplan) } });
  }
  
  return (
    <View style={[containerStyles.buttonContainer]}>
      <Pressable style={buttonStyles.buttonModify} onPress={handleStartWorkout}>
        <Text style={textStyles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
