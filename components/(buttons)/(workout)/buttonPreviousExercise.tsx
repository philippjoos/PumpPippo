import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';

interface Props {
    onPress: () => void;
}

export default function ButtonPreviousExercise({ onPress }: Props) {

    return (
    <View>
        <Pressable style={buttonStyles.buttonNavigateExercise} onPress={onPress}>
            <Ionicons name="play-skip-back-circle-outline" size={24} color="white" />
        </Pressable>
    </View>
  );
}