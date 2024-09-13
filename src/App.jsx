import React from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Routing from "./utils/Routing.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="tracking-tighter">
        <Nav />
        <Routing />
        <Footer />
      </div>
    </>
  );
}

export default App;
