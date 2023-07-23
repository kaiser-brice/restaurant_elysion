import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { useTranslation } from "react-i18next";

import "./Header.css";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={t("header.subheading")} />
        <h1 className="app__header-h1">{t("header.heading")}</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          {t("header.content")}
        </p>
        <button type="button" className="custom__button">
          <a href="#menu">{t("header.button")}</a>
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header-img" />
      </div>
    </div>
  );
};

export default Header;
