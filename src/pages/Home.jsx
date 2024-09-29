import React from "react";
import Hero from "../components/Hero.jsx";
import Marqueee from "../components/Marquee.jsx";
import About from "./About.jsx";
import Features from "@/components/Features.jsx";
import ImagePopup from "@/components/ImagePopup.jsx";
import Offer from "@/components/Offer.jsx";
import Offer2 from "@/components/Offer2.jsx";
import Profit from "@/components/Profit.jsx";
import Risk from "@/components/Risk.jsx";
import Contact from "./Contact.jsx";
import Shop from "./Shop.jsx";
const Home = () => {
  return (
    <div>
      <Hero />
      <Marqueee />
      <Features />
      <ImagePopup />
      <Offer />
      <Offer2 />
      <Profit />
      <Risk />
      {/* <Shop /> */}
      <Contact />
    </div>
  );
};

export default Home;
