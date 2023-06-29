import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../../Services/api";
import entrar from "../../assets/image/Entrar.png";
import Chao from "../../assets/image/chao.png";
import Hores from "../../assets/image/horescadrastro.png";
import logo from "../../assets/image/logocadrastro.png";
import ponteiro from "../../assets/image/ponteiro.png";
import { styles } from "./style";

interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");

  const checkEmailExists = async (email: string): Promise<boolean> => {
    try {
      const response = await api.get(`/user?email=${email}`);
      console.log("Resposta:", response.data);

      return response.data.length > 0;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const isEmailValid = (email: string): boolean => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCadastro = async () => {
    try {
      const emailExists = await checkEmailExists(user.email);
      if (emailExists) {
        setError("O email já está em uso.");
        return;
      }

      if (!isEmailValid(user.email)) {
        setError("Email inválido.");
        return;
      }

      if (user.password !== user.confirmPassword) {
        setError("As senhas não coincidem.");
        return;
      }

      console.log("Usuário:", user);

      const response = await api.post("/user", user);
      console.log("Resposta:", response.data);
      setError("O usuário foi cadastrado com sucesso.");
    } catch (error) {
      setError("Ocorreu um erro ao cadastrar o usuário.");
      console.log("Erro:", error);
    }
  };

  useEffect(() => {
    if (user.password === user.confirmPassword) {
      setError("");
    }
  }, [user.password, user.confirmPassword]);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo}/>
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informe seu Nome"
        placeholderTextColor={'#FFFFFF36'}
        value={user.name}
      />
      <TextInput
        style={styles.input}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Informe seu Email"
        placeholderTextColor={'#FFFFFF36'}
        value={user.email}
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Informe sua senha"
        placeholderTextColor={'#FFFFFF36'}     
        value={user.password}
        secureTextEntry= {!showPassword}
      />
      <TextInput
        style={styles.input}
        onChangeText={(confirmPassword) =>
          setUser({ ...user, confirmPassword })
        }
        placeholder="Confirme sua senha"
        placeholderTextColor={'#FFFFFF36'}
        value={user.confirmPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleCadastro} >
      <Image source={entrar}/>
      {error !== "" && <Text style={styles.errorText}>{error}</Text>}
      </TouchableOpacity>
    </View>
      {/* <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
        <MaterialIcons
         name={showPassword ? 'visibility' : 'visibility-off'}
          size={50}
          color={showPassword ? 'white' : 'white'}
      /> 
      </TouchableOpacity>*/}
    <Image style={{width:30, height:50, top:110, left:75}} source={ponteiro}/>
    <Image style={{height:23,width:350,top:220, left:30}} source={Chao}/>
    <Image style={{width:500,height:300,bottom:90, right:80}} source={Hores}/>
    </View>
    
  );
};
