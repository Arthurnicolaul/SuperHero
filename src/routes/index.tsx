import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthRoutes from './AuthRoutes'
import AppRoutes from '../routes/AppStack/index'
import Home from '../screens/Home'
import CardDescription from '../screens/CardDescription'

const Stack = createStackNavigator()

const Routes = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Auth"
            component={AuthRoutes}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="App"
            component={AppRoutes}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="Description"
            component={CardDescription}
            options={{ headerShown: false }}
         />
      </Stack.Navigator>
   )
}

export default Routes
