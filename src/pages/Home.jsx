import React from "react";
import Hero from "../components/Hero.jsx";
import Marqueee from "../components/Marquee.jsx";
import Features from "@/components/Features.jsx";
import ImagePopup from "@/components/ImagePopup.jsx";
import Offer from "@/components/Offer.jsx";
import Offer2 from "@/components/Offer2.jsx";
import Profit from "@/components/Profit.jsx";
import Risk from "@/components/Risk.jsx";
import Contact from "./Contact.jsx";
import Faq from "@/components/Faq.jsx";
const Home = () => {
  return (
    <div>
      <Hero id="home" />
      <Marqueee id="case" />
      <Features id="service" />
      <ImagePopup id="about" />
      <Offer id="" />
      <Offer2 id="" />
      <Profit id="" />
      <Risk id="" />
      <Faq id="faq" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
