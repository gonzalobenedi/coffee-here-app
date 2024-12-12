import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/styles/tokens";

export default function TabsLayout() {
  const { t } = useTranslation();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("tabsLayout.browse"),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: t("tabsLayout.discover"),
          tabBarIcon: ({ color }) => (
            <Ionicons name={"search"} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
