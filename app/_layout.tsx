import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ListaScreen from '../screens/ListaScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Início' }} 
      />
      <Stack.Screen 
        name="Lista" 
        component={ListaScreen} 
        options={{ title: 'Usuários' }} 
      />
      <Stack.Screen
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Login' }} 
      />
    </Stack.Navigator>
  );
}