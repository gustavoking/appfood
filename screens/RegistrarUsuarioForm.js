import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import firebase from "../components/firebase";

import { TextInput, Button } from "react-native-paper";

import Icon from "react-native-vector-icons/FontAwesome";

export default function RegistrarUsuarioForm({ navigation }) {

  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");

  const [nome1, setNome1] = useState("");

  const [telefone, setTelefone] = useState("");


  function createAccount() {
    if (pass !== "" && nome1 !== "" && email !== "" && telefone !== "") {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(async (userCredential) => {
          await firebase
            .database().ref("cliente").child(userCredential.user.uid).set({
        uid: userCredential.user.uid,
        email: email,
        telefone: telefone,
        nome: nome1,
        saldo: 1000,
            })
            .then(() => {
              var userCredencial = {
        email: email,
        uid: userCredential.user.uid,
        nome: nome1,
        telefone: telefone,
        saldo: 1000,
              };
              navigation.navigate("InicioScreens", {userCredencial});});});
    } 
    
  }

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        style={styles.textoDeEntrada}
        label=" Full Name"
        onChangeText={(text) => setNome1(text)}
      />
      <TextInput
        mode="outlined"
        style={styles.textoDeEntrada}
        label=" Telephone"
        onChangeText={(text) => setTelefone(text)}
      />
      <TextInput
        mode="outlined"
        style={styles.textoDeEntrada}
        label=" Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        mode="outlined"
        style={styles.textoDeEntrada}
        label=" Password"
        onChangeText={(text) => setPass(text)}
      />
      <Button style={styles.logando} onPress={() => createAccount()}>
        <Icon name="save" color="red"></Icon>
        <Text style={{ color: "red" }}>Registrar</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  textoDeEntrada: {
    width: "80%",
    backgroundColor: "white",
    fontSize: 19,
    color: "#FFF",
    borderRadius: 16,
    height: 50,
    alignSelf: "center",
    marginTop: 10,
  },
  logando: {
    backgroundColor: "white",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 28,
    alignSelf: "center",
  },
  texto: {
    fontSize: 20,
    color: "#FFF",
  },
  texto2: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    marginTop: 10,
  },
});
