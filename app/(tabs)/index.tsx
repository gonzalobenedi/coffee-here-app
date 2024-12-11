import { Link } from "expo-router";
import { Text, SafeAreaView } from "react-native";

export default function DiscoverPage() {
  return (
    <SafeAreaView>
      <Text>Discover Page</Text>
      <Link href="/(coffeeStore)/1">Go to Coffee Store 1 details</Link>
      <Link href="/(coffeeStore)/2">Go to Coffee Store 2 details</Link>
    </SafeAreaView>
  );
}
