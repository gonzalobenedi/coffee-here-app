import i18n from "@/i18n";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { Text, SafeAreaView, Button } from "react-native";

export default function LoginPage() {
  const { t } = useTranslation();
  const currentLang = i18n.language;

  const switchLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  return (
    <SafeAreaView>
      <Text>{t("loginPage.title")}</Text>
      <Link href="/(tabs)">{t("loginPage.btnSimulateLogin")}</Link>
      <Button
        title={t("loginPage.btnSwitchToEnglish")}
        disabled={currentLang === "en"}
        onPress={() => switchLanguage("en")}
      />
      <Button
        title={t("loginPage.btnSwitchToSpanish")}
        disabled={currentLang === "es"}
        onPress={() => switchLanguage("es")}
      />
      <Button
        title={t("loginPage.btnSwitchToDanish")}
        disabled={currentLang === "dk"}
        onPress={() => switchLanguage("dk")}
      />
    </SafeAreaView>
  );
}
