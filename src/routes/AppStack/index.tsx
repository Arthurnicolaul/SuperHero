import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import CardDescription from '../../screens/CardDescription/CardDescription';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Description" component={CardDescription} />
  </AppStack.Navigator>
);

export default AppRoutes;
