import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.elysion} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <div className="dropdown">
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <div class="dropdown-content">
            <li className="p__opensans">
              <a href="#menu">Cocktails</a>
            </li>
            <li className="p__opensans">
              <a href="#food_menu">Food</a>
            </li>
          </div>
        </div>

        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
        <li className="p__opensans">
          <a href="#blog">Blog</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Subscribe
        </a>
        <div />
        <a href="#booking" className="p__opensans">
          Book Table
        </a>
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
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <div className="dropdown">
                <li className="p__opensans">
                  <a href="#menu" onClick={() => setToggleMenu(false)}>
                    Menu
                  </a>
                </li>
                <div class="dropdown-content">
                  <li className="p__opensans">
                    <a href="#menu" onClick={() => setToggleMenu(false)}>
                      Cocktails
                    </a>
                  </li>
                  <li className="p__opensans">
                    <a href="#foodmenu" onClick={() => setToggleMenu(false)}>
                      Food
                    </a>
                  </li>
                </div>
              </div>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" onClick={() => setToggleMenu(false)}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
