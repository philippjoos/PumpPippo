import { StyleSheet } from "react-native";

const defaultStyles = StyleSheet.create({
  background: {
    backgroundColor: "#1F1F1F",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F1F1F",
  },
  textbox: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#6D28D9",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  scrollView: {
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },

});

export default defaultStyles;