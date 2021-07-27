import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import firebase from '../components/firebase';

export default function ModeloDaListaPedidos({ data }) {

    const [url, setUrl] = useState(null)

    useEffect(()=> {
        async function load(){
            let child = data.image
          try{
            let response = await firebase.storage().ref('images').child(child).getDownloadURL();
            setUrl(response);
            console.log('response', response)
          }catch(err){
            console.log('ERROR, Nenhuma foto foi encontrada.');
          }
    
        }
    
        load();
    
      }, []);
    return (
        
        <View style={styles.container}>
            <TouchableHighlight onPress={() => alert('')}>
            <View style={styles.imagemView}>
                 <Image
                    source={{uri: url}}
                    style={styles.imagem}
                /> 
            </View>
            <View style={styles.textosView}>
                <Text style={{ color: '#000' }}>
                    <Text style={styles.textoNegrito}>
                        Nome:{' '}
                    </Text>
                    {data.nome}
                </Text>
                <Text style={{ color: '#000' }}>
                    <Text style={styles.textoNegrito}>
                        Preço:{' '}
                    </Text>
                    {data.preco}
                </Text>
                <Text style={{ color: '#000' }}>
                    <Text style={styles.textoNegrito}>
                        Tipo da Comida:{' '}
                    </Text>
                    {data.tipoComida}
                </Text>
            </View>
        </TouchableHighlight>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        marginHorizontal: 15,
        marginTop: 5
    },
    textosView: {
        flex: 1,
        marginLeft: 10,
    },
    textoNegrito: {
        color: 'black',
        fontWeight: 'bold',
    },
    imagem: {
        backgroundColor: 'white',
        width: 120,
        height: 120,
        resizeMode: "stretch"
    }
});
