import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

export default function TabsLayout() {
  const { t } = useTranslation();
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: t("tabsLayout.browse") }}
      />
      <Tabs.Screen
        name="browse"
        options={{ headerShown: false, title: t("tabsLayout.discover") }}
      />
    </Tabs>
  );
}
