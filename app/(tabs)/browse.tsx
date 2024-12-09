import { PRIMARY_COLOR } from "@/styles/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Dimensions, View, Pressable, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface Point {
  id: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
}

const points: Point[] = [
  {
    id: "1",
    title: "Point A",
    description: "This is point A",
    latitude: 37.78825,
    longitude: -122.4324,
  },
  {
    id: "2",
    title: "Point B",
    description: "This is point B",
    latitude: 37.75825,
    longitude: -122.4524,
  },
];

const MapScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        showsCompass={true}
        showsMyLocationButton={true}
      >
        {points.map((point) => (
          <Marker
            key={point.id}
            coordinate={{
              latitude: point.latitude,
              longitude: point.longitude,
            }}
            title={point.title}
            description={point.description}
          />
        ))}
      </MapView>
      <Pressable
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          padding: 10,
          backgroundColor: PRIMARY_COLOR,
          borderRadius: 50,
        }}
        onPress={() => {}}
      >
        <Ionicons name={"location-outline"} color="white" size={32} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
