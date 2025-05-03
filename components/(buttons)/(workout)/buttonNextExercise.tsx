import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';

export default function ButtonNextExercise() {

    return (
    <View>
        <Pressable style={buttonStyles.ButtonNavigateExercise} onPress={() => alert("Next Exercise")}>
            <Ionicons name="play-skip-forward-circle-outline" size={24} color="white" />
        </Pressable>
    </View>
  );
}