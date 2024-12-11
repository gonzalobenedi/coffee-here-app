import { useLocalSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";

export default function CoffeeStorePage() {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>Coffee Store {id} Page</Text>
    </SafeAreaView>
  );
}
