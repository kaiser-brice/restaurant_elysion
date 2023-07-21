import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import FoodMenu from "./container/Menu/FoodMenu";
import Blog from "./container/Blog/Blog";
import BookingForm from "./container/BookingForm/BookingForm";
const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <FoodMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Blog />
    <BookingForm />
    <FindUs />
    <Footer />
  </div>
);

export default App;