import { StyleSheet } from "react-native";

const containerStyles = StyleSheet.create({
    // Styles from workoutplan.tsx
    container: {
        flexDirection: 'column',
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
      },
      exerciseContainer: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
        padding: 15,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
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
        borderColor: "#ccc",
        borderRadius: 5,
        backgroundColor: "#f9f9f9",
      },
    });

    export default containerStyles;