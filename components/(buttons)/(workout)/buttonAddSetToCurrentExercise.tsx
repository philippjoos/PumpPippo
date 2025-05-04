import { View, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import PopUpEditCurrentSet from '@/components/(popups)/(workout)/PopUpEditCurrentSet';

// styles imports
import buttonStyles from '@/assets/styles/buttonStyles';
import containerStyles from '@/assets/styles/containerStyles';


export default function ButtonAddSetToCurrentExercise() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[containerStyles.buttonContainer]}>
            <Pressable style={buttonStyles.buttonEditCurrentSet} onPress={() => setModalVisible(true)}>
                <Ionicons name="add-circle-outline" size={24} color="white" />
            </Pressable>

        </View>
    );
}
