import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useState } from "react";
import PopUpCreateWorkoutplan from '../(popups)/PopUpCreateWorkoutplan';

type Props = {
  label: string;
};

export default function ButtonCreateExercise({ label }: Props) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleCreateExercise = (name: string) => {
        if (name.trim() !== '') {
          
        }
      };

    return (
    <View style={[styles.buttonContainer, { borderWidth: 1, borderColor: 'white', borderRadius: 18 },]}>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
      <PopUpCreateWorkoutplan visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={handleCreateExercise} title={"Create Exercise"} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  buttonImage: {
    width: 200,
    height: 200,
    marginRight: 8,
  }
});
