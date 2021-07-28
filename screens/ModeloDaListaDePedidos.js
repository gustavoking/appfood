import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ModeloDaListaDePedidos({ data }) {
    return (
       
        <View style={styles.container}>
           
            <View style={styles.textosView}>
                <Text style={{ color: '#000' }}>
                    <Text style={styles.textoNegrito}>
                        Tipo do pagamento:{' '}
                    </Text>
                    {data.tipoPagamento}
                </Text>
                <Text style={{ color: '#000' }}>
                    <Text style={styles.textoNegrito}>
                        Rua:{' '}
                    </Text>
                    {data.rua}
                </Text>
                <Text style={{ color: '#000' }}>
                    <Text style={styles.textoNegrito}>
                        Bairro:{' '}
                    </Text>
                    {data.bairro}
                </Text>
                <Text style={{ color: '#000' }}>
                    <Text style={styles.textoNegrito}>
                        Quantidade de itens:{' '}
                    </Text>
                    {data.qtdItem}
                </Text>
                <Text style={{ color: '#000' }}>
                    <Text style={styles.textoNegrito}>
                        Preço:{' '}
                    </Text>
                    {data.preco} 
                </Text>
                <Text style={{ color: '#000' }}>
                    <Text style={styles.textoNegrito}>
                        Cliente:{' '}
                    </Text>
                    {data.cliente} 
                </Text>
            </View>
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
        marginLeft: 10
    },
    textoNegrito: {
        color: 'black',
        fontWeight: 'bold',
    },
});
