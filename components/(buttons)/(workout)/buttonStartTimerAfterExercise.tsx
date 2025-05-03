import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';

export default function buttonStartTimerafterWorkout() {

    return (
    <View>
        <Pressable style={buttonStyles.buttonStartTimerAfterWorkout} onPress={() => alert("Timer started")}>
            <Ionicons name="timer-outline" size={24} color="white" />
        </Pressable>
    </View>
  );
}
