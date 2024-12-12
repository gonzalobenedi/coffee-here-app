import { Link } from "expo-router";
import { Trans, useTranslation } from "react-i18next";
import { Text, SafeAreaView } from "react-native";

const COFFEE_STORES_DUMMY_IDS = [1, 2];

export default function DiscoverPage() {
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <Text>{t("discoverPage.title")}</Text>
      {COFFEE_STORES_DUMMY_IDS.map((id) => (
        <Link key={id} href={`/(coffeeStore)/${id}`}>
          {t("discoverPage.lnkCoffeeStoreDetails", { coffeeStoreId: id })}
        </Link>
      ))}
    </SafeAreaView>
  );
}
