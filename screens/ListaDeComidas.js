import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ModeloDaListaDeComidas from './ModeloDaListaDeComidas';
import { TextInput } from 'react-native-paper';
import firebase from '../components/firebase';

export default function ListaDeComidas({route}) {

    const [listagens, setListagens] = useState([]);
    const [listagemComFiltro, setListagemComFiltro] = useState([]);
    const [nomefiltro, setNomefiltro] = useState('')

    // funcao para filtrar pelo nome, compara o nome que escreveu no textinput
    // com o nome da lista
    function filtrando(text){
        setListagemComFiltro(
          listagens.filter((item) =>
           {
            return item.nome.toLowerCase().includes(text.toLowerCase());
          })
        );
        setNomefiltro(text)
      }

     
    useEffect(() => {
         function carregandoPedidos() {
             firebase.database().ref('listagemComidas')
            .on('value', (snapshot) => {


                setListagens([]);

                snapshot.forEach((listagemComida) => {
                    let comida = {
            preco: listagemComida.val().preco,
            nome: listagemComida.val().nome,
            image: listagemComida.val().image,
            tipoComida: listagemComida.val().tipoComida,   
                    };

                    setListagens(vavs => [...vavs, comida])

                })
            })
        }

        carregandoPedidos();

    }, [])


    return (
        <ScrollView style={styles.container}>
          
          <TextInput 
          label=" Pesquise pelo nome da comida"
          onChangeText={(text) => filtrando(text)}
          style={styles.textinput}
          mode="outlined"
          />
          {/* vai renderizar modelo da lista de comida */}
          {nomefiltro ? 
          listagemComFiltro.map((data) => 
          (<ModeloDaListaDeComidas data={data} userCredencial={route.params.userCredencial} />)) 
                      :
          listagens.map((data) => 
          (<ModeloDaListaDeComidas data={data} userCredencial={route.params.userCredencial}/>))
          }
        
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'red',
        flex: 1,
    },
    
    textinput: {
        width: "80%",
        backgroundColor: "white",
        fontSize: 19,
        color: "#FFF",
        borderRadius: 16,
        height: 50,
        alignSelf: "center",
        marginTop: 10,
    }
})