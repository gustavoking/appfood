import React from "react";
import { Card, Avatar, Button } from "react-native-paper";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function InicioScreens({ route, navigation }) {
  const { userCredencial } = route.params;

  let inicial = userCredencial.nome.split(" ");
  let inicial2 = inicial[0][0] + inicial[1][0];
  let inicial3 = inicial2.toUpperCase();

  return (
    <View style={styles.container}>
      <ScrollView>
      <Card style={{backgroundColor: '#A02', borderRadius: 20, margin: 10}}>
      <Avatar.Text label={inicial3} color="black" style={{
           backgroundColor: "white", alignSelf: "center", marginTop: 10 }}
      />
        <Card.Title title="APPFOOD"/>
        <Text style={{ fontSize: 20, textAlign: "center", color: "white" }}> OFERTAS DO DIA PARA VOCE 
        <Text style={{fontWeight: 'bold'}}> {userCredencial.nome}</Text></Text>
      </Card>

        <ScrollView style={{margin: 10}}showsHorizontalScrollIndicator={false} horizontal>
          <Button onPress={() => navigation.navigate('Profile', {userCredencial, inicial3})}style={styles.botão}><Text style={{color: 'red'}}>Perfil</Text></Button>
          <Button onPress={() => navigation.navigate('AdicionarComida', {userCredencial})} style={styles.botão}><Text style={{color: 'red'}}>Adicionar Comida</Text></Button>
          <Button style={styles.botão}><Text>A</Text></Button>
          <Button style={styles.botão}><Text>A</Text></Button>
        </ScrollView>

      <Card style={styles.carde} onPress={() => navigation.navigate('MapRestaurante1')}>
        <Text style={styles.lugar}>Xis Do Neca</Text>
        <Text style={styles.localizacao}>CLIQUE AQUI PARA IR PARA A LOCALIZAÇÃO</Text>
      <Image style={styles.imageLanche} source={require('../assets/4xbacon.png')}/>
      </Card>
      <Card style={styles.carde} onPress={() => navigation.navigate('MapRestaurante2')}>
      <Text style={styles.lugar}>Dona Tela Xanxerê</Text>
        <Text style={styles.localizacao}>CLIQUE AQUI PARA IR PARA A LOCALIZAÇÃO</Text>
      <Image style={styles.imageLanche} source={require('../assets/xbatata.png')}/>
      </Card>
      <Card style={styles.carde} onPress={() => navigation.navigate('MapRestaurante3')}>
      <Text style={styles.lugar}>Xis Do Neca</Text>
        <Text style={styles.localizacao}>CLIQUE AQUI PARA IR PARA A LOCALIZAÇÃO</Text>
      <Image style={styles.imageLanche} source={require('../assets/fritas.png')}/>
      </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  imageLanche: {
    height: 170,
    width: 200,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 20
  },
  carde: {
    margin: 20,
    padding: 20,
    borderRadius: 50
  },
  lugar: {
    textAlign: 'center',
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  localizacao: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  botão: {
    backgroundColor: 'white',
    marginRight: 20
  }
});
