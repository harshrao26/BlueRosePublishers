import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed p-4 z-40 w-full top-0  py-5 transition-colors ${isScrolled ? 'bg-white' : 'bg-red-0'}`}>
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo in the center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="text-white text-2xl font-bold">
            <img src="https://propques.com/wp-content/uploads/2023/12/Untitled_design__2_-removebg-preview-e1702983011868-60x61.png" alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Menu on the right */}
        <div className="ml-auto z-40">
          <button
            onClick={toggleMenu}
            className="text-zinc-800 text-3xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu Links */}
        <div className={`fixed top-0 right-0 bg-white shadow-md w-64 h-screen transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col text-zinc-800 mt-20 space-y-6 text-center">
            <li>
              <Link to="/" className="text-lg hover:text-gray-400" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/services" className="text-lg hover:text-gray-400" onClick={toggleMenu}>Our Service</Link>
            </li>
            <li>
              <Link to="/about" className="text-lg hover:text-gray-400" onClick={toggleMenu}>About Us</Link>
            </li>
            <li>
              <Link to="/case-studies" className="text-lg hover:text-gray-400" onClick={toggleMenu}>Case Studies</Link>
            </li>
            <li>
              <Link to="/faqs" className="text-lg hover:text-gray-400" onClick={toggleMenu}>FAQs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
