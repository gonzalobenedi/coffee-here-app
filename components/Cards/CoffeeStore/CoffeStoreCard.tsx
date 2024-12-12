import { CoffeeStore } from "@/models/CoffeeStore";
import { Colors } from "@/styles/tokens";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface CoffeeStoreCardProps {
  store: CoffeeStore;
  onPress?: () => void;
}

const CoffeeStoreCard: React.FC<CoffeeStoreCardProps> = ({
  store,
  onPress,
}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{store.name}</Text>
      <Text style={styles.address}>
        {store.address} {store.postalCode}, {store.city}, {store.country}
      </Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoElement}>
          <Ionicons name="star-outline" size={18} color={Colors.PRIMARY} />
          <Text style={styles.infoText}>{store.usersRating.toFixed(1)}</Text>
        </View>
        <View style={styles.infoElement}>
          <Ionicons name="location-outline" size={18} color={Colors.PRIMARY} />
          <Text style={styles.infoText}>250m</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 250,
    marginVertical: 8,
    // marginHorizontal: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.PRIMARY,
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoElement: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    marginLeft: 2,
    fontSize: 12,
    color: "#555",
    fontWeight: "bold",
  },
});

export default CoffeeStoreCard;
