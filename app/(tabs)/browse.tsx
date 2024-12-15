import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import MapView, { Callout, Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import { Colors } from "@/styles/tokens";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { COFFE_STORES } from "@/data/CoffeStores";

export default function BrowsePage() {
  const [browseRegion, setBrowseRegion] = useState<Region | null>(null);
  const [userRegion, setUserRegion] = useState<Region | null>(null);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setBrowseRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setUserRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
    getCurrentLocation();
  }, []);

  const triggerSearch = (region: Region) => {
    setBrowseRegion(region);
    // Implement search logic here
  };

  const navigateTo = (region: Region) => {
    mapRef.current?.animateToRegion(region, 1000);
  };

  return (
    <View style={styles.container}>
      {browseRegion && (
        <>
          <MapView
            ref={mapRef}
            style={styles.map}
            region={browseRegion}
            onRegionChangeComplete={triggerSearch}
          >
            {userRegion && (
              <Marker
                coordinate={{
                  latitude: userRegion.latitude,
                  longitude: userRegion.longitude,
                }}
                title={"browsePage.lblCurrentLocationTitle"}
                description={"browsePage.lblCurrentLocationDescription"}
              />
            )}
            {COFFE_STORES.map((store) => (
              <Marker
                key={store.id}
                coordinate={store.coordinates}
                title={store.name}
                description={store.address}
                onSelect={() =>
                  navigateTo({
                    ...store.coordinates,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  })
                }
                onDeselect={() =>
                  navigateTo({
                    ...browseRegion,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  })
                }
              >
                <Callout style={styles.callout}>
                  <View>
                    <Text style={styles.title}>{JSON.stringify(store)}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
          <Pressable
            style={{
              position: "absolute",
              bottom: 30,
              right: 30,
              padding: 10,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 50,
            }}
            onPress={() => navigateTo(userRegion || browseRegion)}
          >
            <Ionicons name={"location-outline"} color="white" size={32} />
          </Pressable>
          <Text
            style={{
              position: "absolute",
              bottom: 30,
              left: 30,
              width: 200,
              backgroundColor: "white",
              padding: 10,
            }}
          >
            Current browse region:
            {JSON.stringify(browseRegion)}
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  callout: {
    backgroundColor: "white",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    width: 200,
  },
  title: {
    color: "black",
    fontSize: 14,
    lineHeight: 18,
    flex: 1,
  },
});
