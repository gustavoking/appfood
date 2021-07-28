import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ModeloDaListaDePedidos from './ModeloDaListaDePedidos';
import firebase from '../components/firebase';

export default function ListaDePedidos() {

    const [listagens, setListagens] = useState([]);

    useEffect(() => {
         function carregandoPedidos() {
             firebase.database().ref('listaPedidos')
            .on('value', (snapshot) => {

                setListagens([]);

                snapshot.forEach((listaPedidos) => {
                    let pedido = {
            tipoPagamento: listaPedidos.val().tipoPagamento,
            rua: listaPedidos.val().rua,
            bairro: listaPedidos.val().bairro,
            qtdItem: listaPedidos.val().qtdItem,   
            preco: listaPedidos.val().preco,   
            cliente: listaPedidos.val().cliente,   
                    };
                    

                    setListagens(vavs => [...vavs, pedido])

                })
            })
        }

        carregandoPedidos();

    }, [])

 
    return (
        <ScrollView style={styles.container}>
            <View>
            {listagens.map((data) => 
                <ModeloDaListaDePedidos data={data} />
            )}
            </View>
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