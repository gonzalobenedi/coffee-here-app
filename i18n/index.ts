import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";
import dk from "./dk.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
  dk: { translation: dk },
};

const initI18n = async () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
