import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../screens/Login'
import { Cadastro } from '../../screens/Cadastro'
import Home from '../../screens/Home'
import Game from '../../screens/Game'

const AuthStack = createStackNavigator()

const AuthRoutes = () => {
   return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
         <AuthStack.Screen name="Login" component={Login} />
         <AuthStack.Screen name="Home" component={Home} />
         <AuthStack.Screen name="Cadastro" component={Cadastro} />
         <AuthStack.Screen name="Game" component={Game} />
      </AuthStack.Navigator>
   )
}

export default AuthRoutes
