import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
    buttonCreate: {
        backgroundColor: 'rgba(85, 201, 247, 0.1)',
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
      },
      buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 20,
      },
});

export default buttonStyles;