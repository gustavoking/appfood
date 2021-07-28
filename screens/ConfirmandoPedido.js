import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, RadioButton, TextInput} from 'react-native-paper';
import { Ionicons, Entypo } from '@expo/vector-icons';
import firebase from '../components/firebase';


export default function ConfirmandoPedido({route}) {
    const { data, userCredencial} = route.params;

    const [qtdItem, setQtdItem] = useState(1);
    const [tipoPagamento, setTipoPagamento] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [money, setMoney] = useState(0);


    const somar = () => {   
        setQtdItem(qtdItem + 1)
    }

    const diminuir = () => {
        if(qtdItem > 1) {
        setQtdItem(qtdItem - 1)
        }
    }

    useEffect(() => {
        firebase.database().ref('cliente')
        .on('value', (snapshot) => {
            
            snapshot.forEach((OK) => {
                if (OK.val().uid === userCredencial.uid){
                    let moneyFirebase = OK.val().saldo
                    setMoney(moneyFirebase)
                }
            })
        })
    

    }, [])

    const pedirComida = () => {
        if (tipoPagamento !== '' && rua !== '' && bairro !== ''){
            if(money >= data.preco * qtdItem) {
                let listagem = firebase.database().ref('listaPedidos')

                listagem.child(listagem.push().key)
                .set({
                  qtdItem: qtdItem,
                  rua: rua,
                  bairro: bairro,
                  tipoPagamento: tipoPagamento,
                  preco: data.preco * qtdItem,
                  cliente: userCredencial.nome
                })

                firebase.database().ref(`cliente/${userCredencial.uid}`).update({
                    saldo: money - data.preco
                })

                .then(() => {
                  setQtdItem(1);
                  setBairro('')
                  setRua("")
                  setTipoPagamento('')

                    alert('Pedido realizado!!')

                
                });

            } else {
                alert(`Saldo Insuficiente, voce tem apenas ${money} reais`)
            }
        } else {
            alert('Preencha todos os campos')
        }
    }

 return (
   <View style={styles.container}>
     <Text style={{fontSize: 22, textAlign: 'center', color: 'white'}}>Qual a forma de pagamento?</Text>
     <View style={{alignItems: 'center'}}>
     <RadioButton.Group
          onValueChange={(newValue) => setTipoPagamento(newValue)}
          value={tipoPagamento}
        >
          <View style={{flexDirection: 'row'}}>

                <RadioButton
                uncheckedColor="grey"
                color="white"
                value="Dinheiro"
              />
                <Text style={styles.text}>Dinheiro</Text>

                <RadioButton
                uncheckedColor="grey"
                color="white"
                value="Pix"
              />
                <Text style={styles.text}>Pix</Text>
                </View>
        </RadioButton.Group>
        </View>
        <Text style={{fontSize: 22, textAlign: 'center', color: 'white',
    marginTop: 20}}>Quantidade de itens</Text>
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Button onPress={diminuir} disabled={qtdItem === 1}>
        <Entypo  name="minus" size={30} color={qtdItem === 1 ? 'grey' : 'white'} />
        </Button>
        <Text style={{fontSize: 20, color: 'white', marginTop: 10}}>{qtdItem}</Text>
        <Button onPress={somar}>
        <Ionicons name="add" size={30} color="white" />
        </Button>
        </View>
        <TextInput
        label=" Rua"
        onChangeText={(text) => setRua(text)}
        style={styles.textoDeEntrada}
        mode="outlined"
      />
        <TextInput
        label=" Bairro"
        onChangeText={(text) => setBairro(text)}
        style={styles.textoDeEntrada}
        mode="outlined"
      />
      <View style={{ marginTop: 16}}>

      <Text style={{color: 'white', fontSize: 20, marginTop: 20, marginLeft: 50}}>TOTAL</Text>
        <View style={{ flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold', marginLeft: 50}}>{`R$ ${data.preco} x${qtdItem} itens`}</Text>
        <Text style={{color: 'white', marginRight: 20, fontSize: 24}}>R$ {data.preco * qtdItem}</Text>
        </View>
      </View>
      <Button onPress={pedirComida} style={styles.logando}>
            <Text style={{color: 'red'}}>Pedir comida</Text>
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
    },
    text: {
        color: 'white',
        fontSize: 17,
        marginTop: 5
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
})