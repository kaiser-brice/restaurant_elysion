import React, { useState } from "react";
import { SubHeading } from "../../components";
import "./Newsletter.css";

const Newsletter = () => {
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
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit" className="custom__button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
