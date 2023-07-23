import React from "react";
import { useTranslation } from "react-i18next";

const Translate = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const swapLanguage = () => {
    if (i18n.language === "en") {
      changeLanguage("fr");
    } else {
      changeLanguage("en");
    }
  };

  return (
    <button className="custom__button" onClick={() => swapLanguage()}>
      {t("lang")}
    </button>
  );
};

export default Translate;
