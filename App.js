import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from 
"@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import LoginForm from "./screens/LoginForm";

import RegistrarUsuarioForm from "./screens/RegistrarUsuarioForm";

import MapRestaurante1 from './screens/MapRestaurante1';

import MapRestaurante2 from './screens/MapRestaurante2';

import MapRestaurante3 from './screens/MapRestaurante3';

import InicioScreens from "./screens/InicioScreens";

import Profile from "./screens/Profile";

import AdicionarComida from "./screens/AdicionarComida";

import ListaDeComidas from "./screens/ListaDeComidas";

import PedirComida from "./screens/PedirComida";

import ConfirmandoPedido from "./screens/ConfirmandoPedido";

import ListaDePedidos from "./screens/ListaDePedidos";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="LoginForm">
        <Stack.Screen name="InicioScreens" component={InicioScreens} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="RegistrarUsuarioForm" component={RegistrarUsuarioForm}/>
        <Stack.Screen name="MapRestaurante1" component={MapRestaurante1}/>
        <Stack.Screen name="MapRestaurante2" component={MapRestaurante2}/>
        <Stack.Screen name="MapRestaurante3" component={MapRestaurante3}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="AdicionarComida" component={AdicionarComida}/>
        <Stack.Screen name="ListaDeComidas" component={ListaDeComidas}/>
        <Stack.Screen name="PedirComida" component={PedirComida}/>
        <Stack.Screen name="ConfirmandoPedido" component={ConfirmandoPedido}/>
        <Stack.Screen name="ListaDePedidos" component={ListaDePedidos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
