import { Text, View,  StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function index() {
  return (
    <View style={styles.apptitle}>
      <Text style={styles.text}>PumpPippo</Text>
      <Link href="/workoutplan" style={styles.button}>
        View your Workoutplan or Create one.
      </Link>
      <Link href="/exercises" style={styles.button}>
        see all currently available workouts
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  apptitle: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 20,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: '#000000',
  },
});
