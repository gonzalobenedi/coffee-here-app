import CoffeeStoreCard from "@/components/Cards/CoffeeStore/CoffeStoreCard";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import { CoffeeStore } from "@/models/CoffeeStore";
import { Link, useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from "react-native";

const COFFEE_STORES_DUMMY_IDS = [1, 2];

export default function DiscoverPage() {
  const { t } = useTranslation();
  const { push } = useRouter();
  const coffeeStores: CoffeeStore[] = [
    {
      id: "1",
      name: "Justicia café y pasteles",
      phone: "34922351867",
      address: "Calle de la Manifestación, 11",
      postalCode: "50003",
      city: "Zaragoza",
      country: "España",
      usersRating: 4.5,
    },
    {
      id: "2",
      name: "Acho Coffee",
      phone: "34922351867",
      address: "Calle de la Manifestación, 11",
      postalCode: "50003",
      city: "Zaragoza",
      country: "España",
      usersRating: 4.5,
    },
    {
      id: "3",
      name: "MET Café",
      phone: "34922351867",
      address: "Calle de la Manifestación, 11",
      postalCode: "50003",
      city: "Zaragoza",
      country: "España",
      usersRating: 4.5,
    },
    {
      id: "4",
      name: "Veintiuno Coffee",
      phone: "34922351867",
      address: "Calle de la Manifestación, 11",
      postalCode: "50003",
      city: "Zaragoza",
      country: "España",
      usersRating: 4.5,
    },
  ];

  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <Text>{t("discoverPage.lblCurrentLocation")} Bella Center</Text>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <HorizontalScroll title={t("discoverPage.lblSectionNearYou")}>
              {coffeeStores.map((store) => (
                <CoffeeStoreCard
                  key={store.id}
                  store={store}
                  onPress={() => push(`/(coffeeStore)/${store.id}`)}
                />
              ))}
            </HorizontalScroll>
            <HorizontalScroll title={t("discoverPage.lblSectionPopular")}>
              {coffeeStores.map((store) => (
                <CoffeeStoreCard
                  key={store.id}
                  store={store}
                  onPress={() => push(`/(coffeeStore)/${store.id}`)}
                />
              ))}
            </HorizontalScroll>
            <HorizontalScroll title={t("discoverPage.lblSectionRecommended")}>
              {coffeeStores.map((store) => (
                <CoffeeStoreCard
                  key={store.id}
                  store={store}
                  onPress={() => push(`/(coffeeStore)/${store.id}`)}
                />
              ))}
            </HorizontalScroll>
            <HorizontalScroll title={t("discoverPage.lblSectionFavourites")}>
              {coffeeStores.map((store) => (
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
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  container: {
    paddingVertical: 8,
    display: "flex",
    gap: 16,
  },
});
