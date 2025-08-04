import { View, Pressable } from 'react-native';
import { IoStopwatchOutline } from 'react-icons/io5';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';

interface Props {
    onPress: () => void; // Function to be called when the button is pressed
}

export default function buttonStartTimerafterWorkout({ onPress }: Props) {

    return (
        <View>
            <Pressable style={buttonStyles.buttonStartTimerAfterWorkout} onPress={onPress}>
                <IoStopwatchOutline size={24} color="white" />
            </Pressable>
        </View>
    );
}
