import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to Elysion - a culinary journey to paradise! At Elysion, we
          believe that dining is not merely a meal; it's an immersive experience
          that takes you on a blissful expedition through flavors, aromas, and
          textures. Our restaurant is an oasis of culinary delights, where
          passion for food converges with exquisite craftsmanship to create
          unforgettable moments for every guest. Established with a dream to
          transport our patrons to gastronomic nirvana, Elysion represents the
          epitome of culinary excellence.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          In the vibrant heart of the city, a hidden gem named Elysion blossomed
          in 2010, seemingly born from the myths of old. Chef Kevin Luo, a
          culinary virtuoso with an adventurous spirit, dared to weave a
          modern-day culinary paradise. Inspired by the ethereal Elysian Fields
          of Greek legend, where souls found eternal bliss, Chef Luo set out to
          create a haven where food aficionados could discover their own nirvana
          through the art of dining.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
