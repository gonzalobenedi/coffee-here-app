import CoffeeStoreCard from "@/components/Cards/CoffeeStore/CoffeStoreCard";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import { CoffeeStore } from "@/models/CoffeeStore";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

export default function Index() {
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
          <Text>Header placeholder: show current user location</Text>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <HorizontalScroll title="Near to you">
              {coffeeStores.map((store) => (
                <CoffeeStoreCard
                  key={store.id}
                  store={store}
                  onPress={() => alert(store.name)}
                />
              ))}
            </HorizontalScroll>
            <HorizontalScroll title="Top rated">
              {coffeeStores.map((store) => (
                <CoffeeStoreCard
                  key={store.id}
                  store={store}
                  onPress={() => alert(store.name)}
                />
              ))}
            </HorizontalScroll>
            <HorizontalScroll title="Recently added">
              {coffeeStores.map((store) => (
                <CoffeeStoreCard
                  key={store.id}
                  store={store}
                  onPress={() => alert(store.name)}
                />
              ))}
            </HorizontalScroll>
            <HorizontalScroll title="Your favourites">
              {coffeeStores.map((store) => (
                <CoffeeStoreCard
                  key={store.id}
                  store={store}
                  onPress={() => alert(store.name)}
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
