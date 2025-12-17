import { Colors } from "@/styles/tokens";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { useTranslation } from "react-i18next";
import { DynamicColorIOS } from "react-native";

export default function TabsLayout() {
  const { t } = useTranslation();
  return (
    <NativeTabs
      labelStyle={{
        default: {
          color: DynamicColorIOS({ dark: Colors.WHITE, light: "" }),
        },
        selected: {
          color: Colors.PRIMARY,
        },
      }}
      tintColor={DynamicColorIOS({
        dark: Colors.PRIMARY,
        light: Colors.PRIMARY,
      })}
    >
      <NativeTabs.Trigger name="index">
        <Label>{t("tabsLayout.discover")}</Label>
        <Icon sf="safari" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="browse">
        <Icon sf="map" />
        <Label>{t("tabsLayout.browse")}</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors.PRIMARY,
    //     headerShown: false,
    //   }}
    // >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: t("tabsLayout.discover"),
    //       tabBarIcon: ({ color, focused }) => (
    //         <Ionicons
    //           name={focused ? "compass" : "compass-outline"}
    //           color={color}
    //           size={24}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="browse"
    //     options={{
    //       title: t("tabsLayout.browse"),
    //       tabBarIcon: ({ color }) => (
    //         <Ionicons name={"search"} color={color} size={24} />
    //       ),
    //     }}
    //   />
    // </Tabs>
  );
}
