import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-gray-400 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info and Logo */}
          <div>
            <img
              src="https://propques.com/wp-content/uploads/2023/12/Untitled_design__2_-removebg-preview-e1702983011868-60x61.png" // Replace with your logo URL
              alt="logo"
              className="mb-4"
            />
            <p className="text-gray-300 text-sm">
              Transform your property into a high-value, co-working space. Unlock
              potential revenue streams with ease.
            </p>
          </div>

          {/* Menu Section */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4">Menu</h2>
            <ul>
              <li className="mb-2">
                <a href="#blog" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#careers" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#offices" className="hover:text-white">
                  Looking for Offices
                </a>
              </li>
              <li className="mb-2">
                <a href="#partners" className="hover:text-white">
                  Partners
                </a>
              </li>
              <li className="mb-2">
                <a href="#webinars" className="hover:text-white">
                  Webinars
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4">Contact Us</h2>
            <p>Naagarabhavi, Bangalore</p>
            <p>3rd Floor, Tushar Arcade, Service Road</p>
            <p>Bengaluru, Karnataka 560072</p>
            <a href="mailto:buzz@propques.com" className="block mt-4 hover:text-white">
              buzz@propques.com
            </a>
            <a href="tel:+917392037856" className="block mt-1 hover:text-white">
              +91-7392037856
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Newsletter */}
          <div className="mb-4 md:mb-0">
          <h2 className="text-white font-semibld text-lg ">Want Newsletter?</h2>

            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 bg-gray-700 border border-gray-600 text-gray-300 focus:outline-none focus:border-blue-400"
              />
              <button className="ml-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="text-center mt-6 text-sm">
          <p>
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#terms" className="hover:underline">
              Terms and Conditions
            </a>{" "}
            |{" "}
            <a href="#sitemap" className="hover:underline">
              Sitemap
            </a>{" "}
            | Copyright &copy; 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
