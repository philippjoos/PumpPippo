import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';

export default function ButtonPreviousExercise() {

    return (
    <View>
        <Pressable style={buttonStyles.ButtonNavigateExercise} onPress={() => alert("Previous Exercise")}>
            <Ionicons name="play-skip-back-circle-outline" size={24} color="white" />
        </Pressable>
    </View>
  );
}