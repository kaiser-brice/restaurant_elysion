import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translation/en.json";
import fr from "./translation/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    fr: fr,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
