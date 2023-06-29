import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext<IAuthContext>({
  nome: "",
  updateUser: () => {},
});

interface IAuthContext {
  nome: string;
  updateUser: (user: any) => void;
}

const AuthProvider = ({ children }) => {
  const [nome, setNome] = useState("");

  const updateUser = async (user: any) => {
    try {
      if (user !== null && user.name) {
        console.log("Nome do usuário:", user.name);
        setNome(user.name);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("user");
        const user = jsonValue != null ? JSON.parse(jsonValue) : null;
        updateUser(user);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ nome, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
