import i18n from "@/i18n";
import { Colors } from "@/styles/tokens";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

export default function LoginPage() {
  const { t } = useTranslation();
  const { push } = useRouter();
  const currentLang = i18n.language;

  const switchLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t("loginPage.title")}</Text>
      <Pressable
        style={styles.logInButton}
        onPress={() => {
          push("/(tabs)");
        }}
      >
        <Text style={styles.logInButtonText}>
          {t("loginPage.btnSimulateLogin")}
        </Text>
      </Pressable>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logInButton: {
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    padding: 10,
    borderRadius: 5,
    marginTop: 12,
  },
  logInButtonText: {
    color: Colors.WHITE,
  },
});
