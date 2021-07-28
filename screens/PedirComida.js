import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'


export default function PedirComida({route}) {
    const { data, url, userCredencial} = route.params;

    const navegar = useNavigation();


    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const fazerPedido = () => {
        if(isEnabled) {
            navegar.navigate('ConfirmandoPedido', {data: data, userCredencial: userCredencial})
        } else {
            alert('Os dados não foram confirmados')
        }
    }
 return (
   <View style={styles.container}>
     <Image style={styles.img} source={{uri: url}}/>
     <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Por favor, confirme os dados do pedido {'\n'} 
     <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
           {userCredencial.nome}</Text>
           </Text>
        <View style={styles.view}>
            <Text style={{ color: '#FFF', margin: 5 }}>
                    <Text style={styles.textoNegrito}>
                        Nome:{' '}
                    </Text>
                    {data.nome}
                </Text>
            <Text style={{ color: '#FFF', margin: 5 }}>
                    <Text style={styles.textoNegrito}>
                        Preço:{' '}
                    </Text>
                    R$ {data.preco}
                </Text>
            <Text style={{ color: '#FFF', margin: 5 }}>
                    <Text style={styles.textoNegrito}>
                        Tipo da Comida:{' '}
                    </Text>
                    {data.tipoComida}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Text style={styles.textoNegrito}>Dados Confirmados?</Text>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: "grey", true: "#FFF" }}
                    thumbColor={isEnabled ? "#FFF" : "grey"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                 />
                    <Text style={styles.textoNegrito}>{isEnabled ? 'Sim' : 'Não'}</Text>

                 </View>
                </View>

     <Button style={styles.botaopedir} onPress={fazerPedido}>
        <Text style={{color: 'red'}}>Fazer Pedido</Text>
     </Button>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    img: {
        height: 200,
        width: 300,
        alignSelf: 'center',
        marginTop: 15
    },
    botaopedir: {
        backgroundColor: "white",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
     
        alignSelf: "center",
    },
    view: {
        backgroundColor: '#a02',
        height: 150,
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoNegrito: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    switch: {
        alignSelf: 'center'
    }
})