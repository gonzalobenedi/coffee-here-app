import { useTranslation } from "react-i18next";
import { Text, SafeAreaView } from "react-native";

export default function BrowsePage() {
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <Text>{t("browsePage.title")}</Text>
    </SafeAreaView>
  );
}
