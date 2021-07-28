import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState } from "react";

import firebase from "../components/firebase";
import { TextInput, Button } from "react-native-paper";

import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginForm({ navigation }) {


  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");

  function loginApp() {
    if (pass !== "" && email !== "") {
      firebase
        .auth().signInWithEmailAndPassword(email, pass).then(async (userCredential) => {
          firebase
            .database()
             .ref("cliente")
          .on("value", (snapshot) => {
              snapshot.forEach((OK) => {
              if (OK.val().uid === userCredential.user.uid) {
                  var userCredencial = {
            telefone: OK.val().telefone,
            nome: OK.val().nome,
            uid: userCredential.user.uid,
            email: OK.val().email,
            saldo: OK.val().saldo,
                  };
                  navigation.navigate("InicioScreens", {userCredencial, });}});});});
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text
        style={{fontWeight: "bold",fontSize: 30,textAlign: "center",color: "white",marginTop: 20,backgroundColor: "#A02",
          borderRadius: 20,
          margin: 20,
        }}
      >
        APPFOOD
      </Text>
      <Image style={{ height: 200, width: 300, alignSelf: "center" }} source={require("../assets/food.png")}
      />
      <Text
        style={{fontSize: 20,textAlign: "center",color: "white",marginTop: 20,
        }}
      >
        VAVS AND NATALIA
      </Text>
      <TextInput
        label=" Write your email"
        onChangeText={(text) => setEmail(text)}
        style={styles.textoDeEntrada}
        mode="outlined"
      />

      <TextInput
        label=" Write your password"
        onChangeText={(text) => setPass(text)}
        style={styles.textoDeEntrada}
        mode="outlined"
      />
      <Button mode="contained" style={styles.logando} onPress={loginApp}>
        <Icon name="user-o" color="red"></Icon>
        <Text style={{ color: "red" }}>LOGIN</Text>
      </Button>
      <Button onPress={() => navigation.navigate("RegistrarUsuarioForm")}>
        <Text style={{ color: "white" }}>REGISTRAR UMA CONTA</Text>
      </Button>
      </ScrollView>
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
});
