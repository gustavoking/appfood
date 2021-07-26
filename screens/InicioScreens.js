import React from "react";
import { Card, Avatar } from "react-native-paper";
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

      <Card style={styles.carde} onPress={() => navigation.navigate('MapRestaurante1')}>
      <Image style={styles.imageLanche} source={require('../assets/4xbacon.png')}/>
      </Card>
      <Card style={styles.carde} onPress={() => navigation.navigate('MapRestaurante2')}>
      <Image style={styles.imageLanche} source={require('../assets/xbatata.png')}/>
      </Card>
      <Card style={styles.carde} onPress={() => navigation.navigate('MapRestaurante3')}>
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
  }
});
