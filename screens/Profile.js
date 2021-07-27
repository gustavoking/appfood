import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import firebase from '../components/firebase';
import { Avatar, Button, TextInput } from "react-native-paper";


export default function Profile({route}) {

    const { userCredencial, inicial3 } = route.params;

    
  const [nome, setNome] = useState(userCredencial.nome);

  const [telefone, setTelefone] = useState(userCredencial.telefone);

  
  function alteracaoPerfil(){
    firebase
    .database()
    .ref("cliente")
    .once("value", (snapshot) => {snapshot.forEach((usuario) => {

        if (userCredencial.uid === usuario.val().uid) {
          firebase.database().ref(`cliente/${userCredencial.uid}`).update({
            nome: nome,
            telefone: telefone
          });
          alert('DADOS ATUALIZADOS CLIENTE')
        }
      });
    })
  
  }


 return (
   <View style={styles.container}>
       <Avatar.Text label={inicial3} color="black" style={{
           backgroundColor: "white", alignSelf: "center", marginTop: 10 }}
      /> 
      <Text style={styles.decima}>Full Name</Text>
    <TextInput
        value={nome}
        onChangeText={(text) => setNome(text)}
        style={styles.textoDeEntrada}
        mode="outlined"
      
      />
       <Text style={styles.decima}>Email</Text>
      <TextInput
        value={userCredencial.email}
        style={styles.textoDeEntrada2}
        mode="outlined"
        disabled
      />
       <Text style={styles.decima}>Telefone</Text>
      <TextInput
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
        style={styles.textoDeEntrada}
        mode="outlined"
      />
       <Text style={styles.decima}>Saldo</Text>
      
      <TextInput
    
        value={userCredencial.saldo.toString()}
        style={styles.textoDeEntrada2}
        mode="outlined"
        disabled
      />
     
     <Button mode="contained" style={styles.logando} onPress={alteracaoPerfil}>
        <Text style={{ color: "red" }}>Alterar info</Text>
      </Button>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
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
      textoDeEntrada2: {
        width: "80%",
        backgroundColor: "#FFFa",
        shadowColor: 'grey',
        shadowOpacity: 10,
        fontSize: 19,
        color: "#FFF",
        borderRadius: 16,
        height: 50,
        alignSelf: "center",
        marginTop: 10,
      },
      decima: {
          color: '#FFF',
          fontSize: 20,
          marginLeft: 40
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
})