import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView>
      <Text>Products screen</Text>
      <Link href="/(tabs)/(products)/product-detail">Go to Details screen</Link>
    </SafeAreaView>
  );
}
