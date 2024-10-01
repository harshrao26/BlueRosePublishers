import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons from react-icons
import '../index.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // To handle menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle between open and close
  };

  return (
    <div className='flex sticky top-0 z-50 bg-white w-full px-8 md:px-16 items-center justify-between py-4'>
      <img
        src="https://propques.com/wp-content/uploads/2023/12/Untitled_design__2_-removebg-preview-e1702983011868-60x61.png"
        alt="Logo"
        className="h-13 w-13"
      />

      {/* Hamburger icon for mobile view */}
      <div className="md:hidden text-[#2362AB]" onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Navigation links for larger screens */}
      <div className={`md:flex gap-10 arial text-[1rem] text-[#2362AB] hidden ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <Link to="/" className='font-normal'>Home</Link>
        <Link to="/service" className='font-normal'>Our Service</Link>
        <Link to="/about" className='font-normal'>About Us</Link>
        <Link to="/case-studies" className='font-normal'>Case Studies</Link>
        <Link to="/faqs" className='font-normal'>FAQs</Link>
      </div>

      {/* Let's Talk button */}
      <button className="bg-[#2362AB] font-normal text-[1.05rem] text-white px-6 flex items-center justify-center rounded-xl py-2.5 arial hidden md:block">
        Let's Talk
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 arial text-[#2362AB]">
          <Link to="/" className='font-normal' onClick={toggleMenu}>Home</Link>
          <Link to="/service" className='font-normal' onClick={toggleMenu}>Our Service</Link>
          <Link to="/about" className='font-normal' onClick={toggleMenu}>About Us</Link>
          <Link to="/case-studies" className='font-normal' onClick={toggleMenu}>Case Studies</Link>
          <Link to="/faqs" className='font-normal' onClick={toggleMenu}>FAQs</Link>
          <button className="bg-[#2362AB] font-normal text-[1.12rem] text-white px-6 flex items-center justify-center rounded-xl py-2.5">
            Let's Talk
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
