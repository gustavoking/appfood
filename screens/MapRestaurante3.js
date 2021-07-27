import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapRestaurante3() {
 
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -26.878056,
          longitude: -52.4093523,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0431,
        }}
        showsUserLocation={true}
        style={styles.map}
      >
        <Marker title={"CHOPIXAN"} coordinate={{ latitude: -26.878056, longitude: -52.4093523 }}>
          <View style={{ backgroundColor: "green" }}>
            <Text>CHOPIXAN XANXERÊ PIZZARIA</Text>
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
