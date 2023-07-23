import React, { useState } from "react";
import { SubHeading } from "../../components";
import "./Newsletter.css";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any form submission logic here (e.g., send data to the backend)
    console.log("Email submitted:", email);

    // Reset the email input after submission
    setEmail("");
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title={t("newsletter.subheading")} />
        <h1 className="headtext__cormorant">{t("newsletter.heading")}</h1>
        <p className="p__opensans">{t("newsletter.content")}</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={t("newsletter.email")}
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit" className="custom__button">
            {t("newsletter.validate")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
