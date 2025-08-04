import { View, Pressable } from 'react-native';
import { IoPlaySkipForwardCircleOutline } from 'react-icons/io5';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';

interface Props {
    onPress: () => void;
}

export default function ButtonNextExercise({ onPress }: Props) {

    return (
    <View>
        <Pressable style={buttonStyles.buttonNavigateExercise} onPress={onPress}>
            <IoPlaySkipForwardCircleOutline size={24} color="white" />
        </Pressable>
    </View>
  );
}