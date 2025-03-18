import { Text, View,  StyleSheet } from 'react-native';

export default function workout() {
  return (
    <View style={styles.apptitle}>
      <Text style={styles.text}>Start your Workout now!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  apptitle: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
