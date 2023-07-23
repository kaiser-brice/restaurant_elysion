import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";
import { useTranslation } from "react-i18next";

const FoodMenu = () => {
  const { t } = useTranslation();
  return (
    <div
      className="app__specialMenu flex__center section__padding"
      id="food_menu"
    >
      <div className="app__specialMenu-title">
        <SubHeading title={t("menu.subheading")} />
        <h1 className="headtext__cormorant">{t("menu.heading")} </h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">{t("menu.heading2")}</p>
          <div className="app__specialMenu_menu_items">
            {data.desserts.map((desserts, index) => (
              <MenuItem
                key={desserts.title + index}
                title={desserts.title}
                price={desserts.price}
                tags={desserts.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">{t("menu.heading3")}</p>
          <div className="app__specialMenu_menu_items">
            {data.meals.map((meals, index) => (
              <MenuItem
                key={meals.title + index}
                title={meals.title}
                price={meals.price}
                tags={meals.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">
          {t("menu.button")}
        </button>
      </div>
    </div>
  );
};

export default FoodMenu;
