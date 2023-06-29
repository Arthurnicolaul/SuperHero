import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthRoutes from './src/routes/AuthRoutes'
import AuthProvider from './src/Context/Auth'

const RootStack = createStackNavigator()

export default function App() {
   return (
      <NavigationContainer>
         <AuthProvider>
            <RootStack.Navigator>
               <RootStack.Screen
                  name="Auth"
                  component={AuthRoutes}
                  options={{ headerShown: false }}
               />
            </RootStack.Navigator>
         </AuthProvider>
      </NavigationContainer>
   )
}
