import React from "react";
import { useTranslation } from "react-i18next";

const Map = () => {
  const { t } = useTranslation();
  return (
    <div className="app__bg app_wrapper" id="map">
      <h1 className="headtext__cormorant">{t("map.heading")}</h1>
      <iframe
        style={{
          height: "100vh",
          width: "100%",
          border: "0",
          frameborder: "2px solid gold",
        }}
        src="https://www.google.com/maps/embed/v1/place?q=3+Byward+Market+Square,+Ottawa,+ON,+Canada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      ></iframe>
    </div>
  );
};

export default Map;
