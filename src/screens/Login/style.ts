import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F2C627",
    alignContent: "space-between",
  },
  input: {
    marginTop: 8,
    paddingTop: 8,
    borderWidth: 1,
    borderBottomColor: "gray",
    borderRadius: 4,
    textAlign: "center",
    marginLeft: 16,
    marginRight: 16,
    color: "gray",
  },
  logocontainer: {
    width: "47%",
    height: "24%",
    marginBottom: "7%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  logo: {
    width: "100%",
    height: "100%",
  },

  errorText: {
    color: "red",
    marginBottom: 16,
  },

  heroes: {
    width: "100%",
    top: 90
  },
  cadastre: {
    color: "white",
    alignSelf: "center",
    textDecorationLine: "underline",
  },
  form: {
    backgroundColor: "black",
    width: "51.5%",
    height: 300,
    marginLeft: "auto",
    marginRight: "auto",
    top: 40
  },
  entrar: {
    width: "80%",
    height: 120,
    marginLeft: "auto",
    marginRight: "auto",
    aspectRatio: 1,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    width: "8%",
  },
  cone: {
    position: "absolute",
    bottom: -25,
    right: 50,
  },
  inputicon: {
    position: "absolute",
    top: 335,
    right: 115,
    zIndex: 2,
    width: 24,
  },
});
