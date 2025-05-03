import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';

interface Props {
    onPress: () => void; // Function to be called when the button is pressed
}

export default function buttonStartTimerafterWorkout({ onPress }: Props) {

    return (
        <View>
            <Pressable style={buttonStyles.buttonStartTimerAfterWorkout} onPress={onPress}>
                <Ionicons name="timer-outline" size={24} color="white" />
            </Pressable>
        </View>
    );
}
