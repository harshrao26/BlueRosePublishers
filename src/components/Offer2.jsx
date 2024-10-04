import React from "react";
import {
  FaCheckCircle,
  FaChartBar,
  FaHandsHelping,
  FaIndustry,
  FaUsers,
  FaBullseye,
  FaHandshake,
  FaTachometerAlt,
} from "react-icons/fa";
import Button from "./Button";

// Array of service items with corresponding icon and text
const services = [
  {
    icon: <FaBullseye className="text-blue-500 text-4xl mb-2" />,
    title: "Brand Ideation",
    description: "We help you create a coworking brand tailored to your market and property.",
  },
  {
    icon: <FaChartBar className="text-blue-500 text-4xl mb-2" />,
    title: "Feasibility Analysis",
    description: "We evaluate local demand, competition, and ROI potential.",
  },
  {
    icon: <FaTachometerAlt className="text-blue-500 text-4xl mb-2" />,
    title: "Coworking Analysis",
    description: "We optimize layouts for maximum space utilization and appeal.",
  },
  {
    icon: <FaIndustry className="text-blue-500 text-4xl mb-2" />,
    title: "Sellable Layouts",
    description: "We design layouts that maximize space potential and attract clients.",
  },
  {
    icon: <FaCheckCircle className="text-blue-500 text-4xl mb-2" />,
    title: "Complete Brand Creation",
    description: "From website development to marketing, we handle it all.",
  },
  {
    icon: <FaHandsHelping className="text-blue-500 text-4xl mb-2" />,
    title: "Hands-Free Management",
    description: "We manage operations so you can focus on growth.",
  },
  {
    icon: <FaUsers className="text-blue-500 text-4xl mb-2" />,
    title: "Constant Occupancy",
    description: "We ensure high occupancy rates with regular clients.",
  },
  {
    icon: <FaHandshake className="text-blue-500 text-4xl mb-2" />,
    title: "Coworking Matchmaking",
    description: "We connect you with top coworking brands for partnerships.",
  },
];

const Offer = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8">
      {/* Main Heading */}
      <div className="flex flex-col items-center space-y-8">
        {/* Text Content */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 leading-snug">
            Leverage Our Expertise in Coworking Consultancy
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We are India’s only coworking consultancy that offers comprehensive services to help you build or partner with a coworking brand. Here’s what we do:
          </p>
        </div>

        {/* List of Services */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-center w-full">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-center text-lg w-full flex-col border-2 border-blue-500 rounded-lg p-4 sm:p-6 bg-white hover:bg-blue-100 transition-all"
            >
              {service.icon}
              <span className="font-semibold text-zinc-900 text-center mt-2">{service.title}:</span>
              <p className="text-gray-700 text-center mt-2 text-sm sm:text-base">{service.description}</p>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="mt-6">
          <Button name="Submit Your Interest" />
        </div>
      </div>
    </div>
  );
};


export default Offer;
