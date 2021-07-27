import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapRestaurante2() {
 
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -26.8792779,
          longitude: -52.3956959,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0431,
        }}
        showsUserLocation={true}
        style={styles.map}
      >
        <Marker title={"Dona Tela Xanxerê"} coordinate={{ latitude: -26.8792779, longitude: -52.3956959 }}>
          <View style={{ backgroundColor: "green"}}>
            <Text>Dona Tela Xanxerê</Text>
          </View>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
