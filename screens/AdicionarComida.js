import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import firebase from '../components/firebase';
import { Button, TextInput, RadioButton } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker'

export default function AdicionarComida({ route }) {

  const {userCredencial } = route.params;

  const [nome, setNome] = useState("");

  const [preco, setPreco] = useState("");

  const [tipoComida, setTipoComida] = useState('')
  const [image, setImage] = useState(null);

  function adicionarComidaa(){
    if (nome != "" && preco != "" && tipoComida != "" && image !== null) {
      let listagem = firebase.database().ref("listagemComidas");
      listagem.child(listagem.push().key)
        .set({
          nome: nome,
          preco: preco,
          tipoComida: tipoComida,
          image: nome + '_' + userCredencial.uid,
        })
        .then(() => {
          setNome("");
          setPreco("")
          setTipoComida("")
          setImage(null)
        
        });
    } else {
      alert("Incomplete!!!");
    }
  };
  

  async function chooseImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
  });

    if(!result.cancelled) {
      if(nome !== ''){
      setImage(result.uri);
      uploadImage(result.uri, nome + '_' + userCredencial.uid)
      .then(() => {
        alert('sucesso na imagem')
      })
      .catch((error) => {
        alert(error)
      })
    }
    }
  }

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob)
  }

 return (
   <View style={styles.container}>

    <TextInput
        label="Nome da comida"
        onChangeText={(text) => setNome(text)}
        style={styles.textoDeEntrada}
        mode="outlined"
      
      />
      <TextInput
      label="Preço"
      style={styles.textoDeEntrada}
      onChangeText={(text) => setPreco(text)}

        mode="outlined"
      />
      

     <Text style={{textAlign: 'center', 
     fontSize: 20, color: 'white'
     , marginTop: 20
     }}>Tipo da Comida</Text>
  <View style={{margin: 40}}>
     <RadioButton.Group
          onValueChange={(newValue) => setTipoComida(newValue)}
          value={tipoComida}
        >
          <View style={{flexDirection: 'row'}}>

             <RadioButton
                uncheckedColor="grey"
                color="white"
                value="Japonesa"
              />
                <Text style={styles.text}>Japonesa</Text>

                <RadioButton
                uncheckedColor="grey"
                color="white"
                value="Mexicana"
              />
                <Text style={styles.text}>Mexicana</Text>

                <RadioButton
                uncheckedColor="grey"
                color="white"
                value="Sem Tipo"
              />

                <Text style={styles.text}>Sem Tipo</Text>

                </View>
        </RadioButton.Group>
        </View>
        <Button onPress={chooseImage} style={styles.btn}><Text style={{color: 'white'}}>ESCOLHER UMA IMAGEM DA COMIDA</Text></Button>
    
     <Button mode="contained" style={styles.logando} onPress={adicionarComidaa}>
        <Text style={{ color: "red" }}>CAdastrar comida</Text>
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
      logando: {
        backgroundColor: "white",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        marginTop: 28,
        alignSelf: "center",
      },
      text: {
        color: 'white',
        fontSize: 17,
        marginTop: 5
      },
      btn: {
         backgroundColor: '#a02',
         borderRadius: 90,
         margin: 10
      }
})