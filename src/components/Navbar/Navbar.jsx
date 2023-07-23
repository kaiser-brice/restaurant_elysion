import React from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import Translate from "../../container/Traudction/Translate";

const Navbar = () => {
  const { t } = useTranslation();
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.elysion} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">{t("navbar.link1")}</a>
        </li>
        <li className="p__opensans">
          <a href="#about">{t("navbar.link2")}</a>
        </li>
        <div className="dropdown">
          <li className="p__opensans">
            <a href="#menu">{t("navbar.link3")}</a>
          </li>
          <div class="dropdown-content">
            <li className="p__opensans">
              <a href="#menu">{t("navbar.link4")}</a>
            </li>
            <li className="p__opensans">
              <a href="#food_menu">{t("navbar.link5")}</a>
            </li>
          </div>
        </div>

        <li className="p__opensans">
          <a href="#awards">{t("navbar.link6")}</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">{t("navbar.link7")}</a>
        </li>
        <li className="p__opensans">
          <a href="#blog">{t("navbar.link8")}</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          {t("navbar.link9")}
        </a>
        <div />
        <a href="#booking" className="p__opensans">
          {t("navbar.link10")}
        </a>
        <div />
        <Translate />
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  {t("navbar.link1")}
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  {t("navbar.link2")}
                </a>
              </li>
              <div className="dropdown">
                <li className="p__opensans">
                  <a href="#menu" onClick={() => setToggleMenu(false)}>
                    {t("navbar.link3")}
                  </a>
                </li>
                <div class="dropdown-content">
                  <li className="p__opensans">
                    <a href="#menu" onClick={() => setToggleMenu(false)}>
                      {t("navbar.link4")}
                    </a>
                  </li>
                  <li className="p__opensans">
                    <a href="#foodmenu" onClick={() => setToggleMenu(false)}>
                      {t("navbar.link5")}
                    </a>
                  </li>
                </div>
              </div>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  {t("navbar.link6")}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  {t("navbar.link7")}
                </a>
              </li>
              <li>
                <a href="#blog" onClick={() => setToggleMenu(false)}>
                  {t("navbar.link8")}
                </a>
              </li>
              <li>
                <a href="#login" onClick={() => setToggleMenu(false)}>
                  {t("navbar.link9")}
                </a>
              </li>
              <li>
                <a href="#booking" onClick={() => setToggleMenu(false)}>
                  {t("navbar.link10")}
                </a>
              </li>
              <li>
                <Translate onClick={() => setToggleMenu(false)} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
