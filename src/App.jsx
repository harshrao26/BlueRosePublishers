import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Routing from "./utils/Routing.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { BsWhatsapp } from "react-icons/bs";

function App() {
  return (
    <>
      <div className="tracking-tighter relative">
        <Navbar />
        <Routing />
        <Footer />
        <BsWhatsapp className="absolue bottom-10 right-16 l text-green-600 fixed text-6xl" />
      </div>
    </>
  );
}

export default App;
