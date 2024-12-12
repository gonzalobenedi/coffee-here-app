import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { Text, SafeAreaView } from "react-native";

export default function CoffeeStorePage() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>{t("coffeeStorePage.title", { coffeeStoreId: id })}</Text>
    </SafeAreaView>
  );
}
