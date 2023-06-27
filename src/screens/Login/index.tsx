import React, { useEffect, useState } from 'react'
import {
   View,
   Button,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import api from '../../../Services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
   const navigation = useNavigation()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [message, setMessage] = useState<string>('')

   useEffect(() => {
      checkUserLoggedIn()
   }, [])

   const checkUserLoggedIn = async () => {
      try {
         const jsonValue = await AsyncStorage.getItem('user')
         const user = jsonValue != null ? JSON.parse(jsonValue) : null

         if (user !== null) {
            navigation.navigate('Home' as never)
         }
      } catch (e) {
         // error reading value
      }
   }

   const handleLogin = async () => {
      try {
         const response = await api.get(`/user?email=${email}`)
         console.log(response.data)
         if (response.data && response.data.length > 0) {
            const user = response.data[0]
            console.log('usuario:', user)
            console.log('email:', user.email)

            if (user.email === email && user.password === password) {
               navigation.navigate('Home' as never)
               try {
                  const jsonValue = JSON.stringify(user)
                  await AsyncStorage.setItem('user', jsonValue)
               } catch (e) {
                  // saving error
               }
            } else {
               setMessage('Credenciais incorretas')
            }
         } else {
            setMessage('Usuário não encontrado')
         }
      } catch (error) {
         console.log(error)
      }
   }

   const handleCadastro = () => {
      navigation.navigate('Cadastro' as never)
   }

   return (
      <View style={styles.container}>
         <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={styles.input}
         />
         <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            secureTextEntry
            style={styles.input}
         />
         <Button title="Login" onPress={handleLogin} />
         {message !== '' && <Text style={styles.errorText}>{message}</Text>}
         <TouchableOpacity onPress={handleCadastro}>
            <Text>Cadastre-se</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16
   },
   input: {
      marginBottom: 16,
      padding: 8,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4
   },
   errorText: {
      color: 'red',
      marginBottom: 16
   }
})

export default Login
