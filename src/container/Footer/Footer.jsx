import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">{t("footer.contact")}</h1>
          <p className="p__opensans">{t("footer.content1")}</p>
          <p className="p__opensans">{t("footer.content2")}</p>
          <p className="p__opensans">{t("footer.content3")}</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.elysion} alt="footer_logo" />
          <p className="p__opensans">{t("footer.content4")}</p>
          <img
            src={images.spoon}
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">{t("footer.hours")}</h1>
          <p className="p__opensans">{t("footer.hour1")}</p>
          <p className="p__opensans">{t("footer.hour2")}</p>
          <p className="p__opensans">{t("footer.hour3")}</p>
          <p className="p__opensans">{t("footer.hour4")}</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">{t("footer.copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;
