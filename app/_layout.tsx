import { Stack } from "expo-router";
import "@/i18n";

export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(coffeeStore)" options={{ headerShown: false }} />
    </Stack>
  );
}
