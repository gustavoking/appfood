import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapRestaurante1() {
 
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -26.87694,
          longitude: -52.4041,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0431,
        }}
        showsUserLocation={true}
        style={styles.map}
      >
        <Marker
          title={"INTENSE ACADEMIA 2"}
          coordinate={{ latitude: -26.87543, longitude: -52.399471 }}
        >
          <View style={{ backgroundColor: "red", padding: 2 }}>
            <Text>INTENSE ACADEMIA 2</Text>
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
