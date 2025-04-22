import { StyleSheet } from 'react-native';

const textStyles = StyleSheet.create({
    apptitle: {
        flex: 1,
        backgroundColor: '#1F1F1F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    exerciseName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#FFFFFF',
    },
    noWorkoutsText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#A1A1AA',
        marginTop: 20,
    },
    buttonLabel: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#FFFFFF',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#FFFFFF",
    },
    content: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 5,
        color: "#A1A1AA",
    },
});

export default textStyles;