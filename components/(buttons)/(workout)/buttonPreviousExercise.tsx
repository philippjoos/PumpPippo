import { View, Pressable } from 'react-native';
import { IoPlaySkipBackCircleOutline } from 'react-icons/io5';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';

interface Props {
    onPress: () => void;
}

export default function ButtonPreviousExercise({ onPress }: Props) {

    return (
    <View>
        <Pressable style={buttonStyles.buttonNavigateExercise} onPress={onPress}>
            <IoPlaySkipBackCircleOutline size={24} color="white" />
        </Pressable>
    </View>
  );
}