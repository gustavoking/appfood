import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapRestaurante1() {
 
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -26.872006,
          longitude: -52.4109088,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0431,
        }}
        showsUserLocation={true}
        style={styles.map}
      >
        <Marker title={"Xis do Neca"} coordinate={{ latitude: -26.872006, longitude: -52.4109088 }}>
          <View style={{ backgroundColor: "green" }}>
            <Text>Xis Do Neca</Text>
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
