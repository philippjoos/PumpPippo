import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: '100%',
    height: '120%',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#6D28D9',
  },
  buttonExercises: {
    borderRadius: 10,
    width: '50%',
    height: '120%',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#6D28D9',
  },
  buttonWorkoutPlans: {
    borderRadius: 10,
    width: '100%',
    height: '120%',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#6D28D9',
  },
  buttonCreate: {
    backgroundColor: '#6D28D9',
    borderRadius: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center', // Center the content inside the button
    bottom: 20, // Abstand vom unteren Rand
    right: 20, // Abstand vom rechten Rand
    width: 60, // Breite des Buttons
    height: 60, // Höhe des Buttons
    elevation: 5, // Schatten für ein besseres visuelles Feedback
  },
  buttonStartTimerAfterWorkout: {
    backgroundColor: '#6D28D9',
    borderRadius: 50,
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center', // Center the content inside the button
    width: 60, // Breite des Buttons
    height: 60, // Höhe des Buttons
    elevation: 5,
  },
  buttonNavigateExercise: {
    backgroundColor: '#6D28D9',
    borderRadius: 40,
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center', // Center the content inside the button
    width: 45, // Breite des Buttons
    height: 45, // Höhe des Buttons
    elevation: 5, // Schatten für ein besseres visuelles Feedback
  },
  buttonEditCurrentSet: {
    borderRadius: 10,
    width: '100%',
    height: '120%',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#6D28D9',
  },
});

export default buttonStyles;