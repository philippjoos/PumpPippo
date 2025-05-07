import { StyleSheet } from "react-native";

const containerStyles = StyleSheet.create({
  // Styles from workoutplan.tsx
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 5,
    backgroundColor: '#1F1F1F',
  },
  exerciseContainer: {
    flexDirection: 'column',
    backgroundColor: '#1F1F1F',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#6D28D9',
  },
  currentExerciseContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 5,
    backgroundColor: '#1F1F1F',
    borderWidth: 1,
    borderColor: '#6D28D9',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttonSelectExerciseToAddContainer: {
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    padding: 1,
    width: "100%",
    maxHeight: "100%",
  },
  buttonCreate: {
    backgroundColor: '#6D28D9',
    borderRadius: 50,
    padding: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
    bottom: '0%',
    right: 20,
    width: '5%',
    height: '5%',
  },
  buttonCreateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '0.5%',
    right: '0.5%',
  },
  buttonNavigateExercise: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: "absolute",
    bottom: 5,
    alignSelf: 'center',
    
  },
  // Styles from buttonCreateWorkoutplan.tsx
  createButtonContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  modalContainer: {
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    width: "100%",
    maxHeight: "90%",
  },
  lineContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  exerciseContainerPopup: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#6D28D9",
    borderRadius: 5,
    backgroundColor: "#1F1F1F",
  },
  gridContainer: {
    flexDirection: "column",
    gap: 15, // Abstand zwischen den Zeilen
    marginVertical: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default containerStyles;