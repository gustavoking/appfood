import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginForm from "./screens/LoginForm";
import RegistrarUsuarioForm from "./screens/RegistrarUsuarioForm";

import InicioScreens from "./screens/InicioScreens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="LoginForm">
        <Stack.Screen name="InicioScreens" component={InicioScreens} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen
          name="RegistrarUsuarioForm"
          component={RegistrarUsuarioForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
