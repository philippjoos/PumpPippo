import { StyleSheet, View, Pressable, Text } from 'react-native';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';

type Props = {
  label: string;
};

export default function ButtonStartWorkout({ label }: Props) {
  return (
    <View style={[containerStyles.buttonContainer, { borderWidth: 1, borderColor: 'white', borderRadius: 18 },]}>
      <Pressable style={buttonStyles.button} onPress={() => alert('open workoutplan in workout.')}>
        <Text style={textStyles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
