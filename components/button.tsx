import { StyleSheet, View, Pressable, Text } from 'react-native';
import ImageViewer from './ImageViewer';

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <View style={[styles.buttonContainer, { borderWidth: 1, borderColor: 'white', borderRadius: 18 },]}>
      <Pressable style={styles.button} onPress={() => alert('open workoutplan in workout.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
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
