import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import { useTranslation } from "react-i18next";

import "./Chef.css";

const Chef = () => {
  const { t } = useTranslation();
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title={t("chef.subheading")} />
        <h1 className="headtext__cormorant">{t("chef.heading")}</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">{t("chef.content1")}</p>
          </div>
          <p className="p__opensans">{t("chef.content2")}</p>
        </div>
        <div className="app__chef-sign">
          <p>{t("chef.name")}</p>
          <p className="p__opensans">{t("chef.title")}</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};
export default Chef;
