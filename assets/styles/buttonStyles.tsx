import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
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
      },
      button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'baseline',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#6D28D9',
      },
});

export default buttonStyles;