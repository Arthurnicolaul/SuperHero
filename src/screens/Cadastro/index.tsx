import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { styles } from "./style";
import api from "../../../Services/api";

interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Cadastro = () => {
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

  return (
    <View>
      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informe seu Nome"
        value={user.name}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Informe seu Email"
        value={user.email}
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Informe sua senha"
        value={user.password}
        secureTextEntry
      />
      <Text>Confirma Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={(confirmPassword) =>
          setUser({ ...user, confirmPassword })
        }
        placeholder="Confirme sua senha"
        value={user.confirmPassword}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
      {error !== "" && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
