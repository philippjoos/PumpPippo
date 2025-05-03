import { View, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import textStyles from '@/assets/styles/textStyles';

type Props = {
  label: string;
};

export default function buttonStartTimerafterWorkout({ label }: Props) {

    return (
    <View>
        <Pressable style={buttonStyles.buttonStartTimerAfterWorkout} onPress={() => alert("Timer started")}>
            <Ionicons name="timer-outline" size={24} color="white" />
        </Pressable>
    </View>
  );
}
