import { StyleSheet } from 'react-native';

const textStyles = StyleSheet.create({
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
        textAlign: 'center',
        marginBottom: 10,
    },
    exerciseName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    noWorkoutsText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'gray',
        marginTop: 20,
    },
    buttonLabel: {
        fontSize: 18,
        fontStyle: 'italic',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
});

export default textStyles;