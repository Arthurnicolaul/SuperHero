import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#F2C627",
    width: "100%",
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
  },

  errorText: {
    color: "red",
    marginBottom: 16,
  },
  x: {
    width: "47%",
    height: "24%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "7%",
  },
  heroes: {
    width: "100%",
    bottom: -50,
    //não consegui colocar no fundo sem ser assim
    //valores podem variar de tela para tela
  },
  cadastre: {
    color: "white",
    alignSelf: "center",
    textDecorationLine: "underline",
  },
  form: {
    backgroundColor: "black",
    width: "51.5%",
    height: "34%",
    marginLeft: "auto",
    marginRight: "auto",
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
    top: 338,
    right: 115,
    zIndex: 2,
    width: 24,
  },
});
