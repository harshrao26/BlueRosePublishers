import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Routing from "./utils/Routing.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { BsWhatsapp } from "react-icons/bs";
import { ModalProvider } from "./ModalContext.jsx"; // Modal Context Provider
import ModalForm from "./components/ModalForm.jsx"; // The form modal component
import Button from "./components/Button";
function App() {
  return (
    <>
      <div className="tracking-tighter relative">
        <ModalProvider>
          <ModalForm /> {/* Modal form that is globally accessible */}
          <Navbar />
          <Routing />
          <Footer />
          <BsWhatsapp className="absolue bottom-16 right-16 l text-green-600 fixed text-6xl" />
        </ModalProvider>
      </div>
    </>
  );
}

export default App;
