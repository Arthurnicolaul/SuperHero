import React, { useEffect, useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../../Services/api";
import { styles } from "./style";
import Logo from "../../assets/image/logo.png";
import Entrar from "../../assets/image/entrar.png";
import Cone from "../../assets/image/cone.png";
import Gmail from "../../assets/image/gmail.png";
import Instagram from "../../assets/image/instagram.png";
import Facebook from "../../assets/image/facebook.png";
import Heroes from "../../assets/image/heroes.png";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      const user = jsonValue != null ? JSON.parse(jsonValue) : null;

      if (user !== null) {
        navigation.navigate("Home" as never);
      }
    } catch (e) {
      // error reading value
    }
  };

  const handleLogin = async () => {
    try {
      const response = await api.get(`/user?email=${email}`);
      console.log(response.data);
      if (response.data && response.data.length > 0) {
        const user = response.data[0];
        console.log("usuario:", user);
        console.log("email:", user.email);

        if (user.email === email && user.password === password) {
          navigation.navigate("Home" as never);
          try {
            const jsonValue = JSON.stringify(user);
            await AsyncStorage.setItem("user", jsonValue);
          } catch (e) {
            // saving error
          }
          resetInput();
        } else {
          setMessage("Credenciais incorretas");
        }
      } else {
        setMessage("Usuário não encontrado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCadastro = () => {
    navigation.navigate("Cadastro" as never);
  };

  const resetInput = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <KeyboardAvoidingView style={styles.container} enabled={false} behavior={"height"}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={Logo} />
      </View>

      <View style={styles.form}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="grey"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          placeholderTextColor="grey"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity onPress={handleLogin}>
          <Image style={styles.entrar} source={Entrar} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCadastro}>
          <Text style={styles.cadastre}>CADASTRE-SE JÁ!</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image style={styles.icon} source={Gmail} resizeMode={"contain"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={Instagram} resizeMode={"contain"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={Facebook} resizeMode={"contain"} />
          </TouchableOpacity>
        </View>
        <Image style={styles.cone} source={Cone} />
        {message !== "" && <Text style={styles.errorText}>{message}</Text>}
      </View>
      <View>
        <Image style={styles.heroes} source={Heroes} resizeMode="contain" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
