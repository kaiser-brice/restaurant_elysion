import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import { useTranslation } from "react-i18next";

const FindUs = () => {
  const { t } = useTranslation();
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title={t("findus.subheading")} />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          {t("findus.heading")}
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">{t("findus.content")}</p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            {t("findus.heure")}
          </p>
          <p className="p__opensans">{t("findus.time1")}</p>
          <p className="p__opensans">{t("findus.time2")}</p>
        </div>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          <a href="#map">{t("findus.visit")}</a>
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="finus_img" />
      </div>
    </div>
  );
};

export default FindUs;
