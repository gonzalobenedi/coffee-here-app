import { Link } from "expo-router";
import { Text, SafeAreaView } from "react-native";

export default function LoginPage() {
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Link href="/(tabs)">Simulate login</Link>
    </SafeAreaView>
  );
}
