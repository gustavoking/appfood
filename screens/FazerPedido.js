import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import firebase from '../components/firebase';
import ModeloDaListaPedidos from './ModeloDaListaPedidos';

export default function ListaMotorista() {

    const [listagens, setListagens] = useState([]);
    const [listagemComFiltro, setListagemComFiltro] = useState([]);
    const [nomefiltro, setNomefiltro] = useState('')

    const filtrando = (text) => {
        setListagemComFiltro(
          listagens.filter((item) =>
           {
            return item.nome.toLowerCase().includes(text.toLowerCase());
          })
        );
        setNomefiltro(text)
      }

    useEffect(() => {
        async function carregandoPedidos() {
            await firebase.database().ref('listagemComidas')
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
          {nomefiltro ? listagemComFiltro.map((data) => (<ModeloDaListaPedidos data={data} />)) :
          listagens.map((data) => (<ModeloDaListaPedidos data={data} />))
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