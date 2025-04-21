import { StyleSheet } from "react-native";

const containerStyles = StyleSheet.create({
    // Styles from workoutplan.tsx
    container: {
        flexDirection: 'column',
        flex: 1,
        padding: 10,
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
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '25%',
        paddingVertical: 10,
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
        width: "90%",
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
    });

    export default containerStyles;