import CoffeeStoreCard from "@/components/Cards/CoffeeStore/CoffeStoreCard";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import { CoffeeStore } from "@/models/CoffeeStore";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import * as Location from "expo-location";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/styles/tokens";
import { COFFE_STORES } from "@/data/CoffeStores";

export default function DiscoverPage() {
  const { t } = useTranslation();
  const { push } = useRouter();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const nearYouCoffeeStores: CoffeeStore[] = COFFE_STORES.slice(0, 5);
  const popularCoffeeStores: CoffeeStore[] = COFFE_STORES.slice(5, 10);
  const recommendedCoffeeStores: CoffeeStore[] = COFFE_STORES.slice(10, 15);
  const favouritesCoffeeStores: CoffeeStore[] = COFFE_STORES.slice(15, 20);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync(location.coords);
      setCurrentAddress(`${address[0].name}, ${address[0].city}`);
    }
    getCurrentLocation();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <Ionicons name="location" size={16} color={Colors.PRIMARY} />
          <Text>
            {t("discoverPage.lblCurrentLocation")} {currentAddress}
          </Text>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <HorizontalScroll title={t("discoverPage.lblSectionNearYou")}>
              {nearYouCoffeeStores.map((store) => (
                <CoffeeStoreCard
                  key={store.id}
                  store={store}
                  onPress={() => push(`/(coffeeStore)/${store.id}`)}
                />
              ))}
            </HorizontalScroll>
            <HorizontalScroll title={t("discoverPage.lblSectionPopular")}>
              {popularCoffeeStores.map((store) => (
                <CoffeeStoreCard
                  key={store.id}
                  store={store}
                  onPress={() => push(`/(coffeeStore)/${store.id}`)}
                />
              ))}
            </HorizontalScroll>
            <HorizontalScroll title={t("discoverPage.lblSectionRecommended")}>
              {recommendedCoffeeStores.map((store) => (
                <CoffeeStoreCard
                  key={store.id}
                  store={store}
                  onPress={() => push(`/(coffeeStore)/${store.id}`)}
                />
              ))}
            </HorizontalScroll>
            <HorizontalScroll title={t("discoverPage.lblSectionFavourites")}>
              {favouritesCoffeeStores.map((store) => (
                <CoffeeStoreCard
                  key={store.id}
                  store={store}
                  onPress={() => push(`/(coffeeStore)/${store.id}`)}
                />
              ))}
            </HorizontalScroll>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  container: {
    paddingVertical: 8,
    display: "flex",
    gap: 16,
  },
});
