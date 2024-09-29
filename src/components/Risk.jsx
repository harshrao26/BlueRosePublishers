import React from "react";

const Risk = () => {
  return (
    <div className="flex flex-col md:flex-row px-16 bg-[#001032] py-4 shadow-lg">
      {/* Left Section - Image */}
      <div className="flex-1 mb-4 md:mb-0">
        <img
          src="https://cdn2.hubspot.net/hub/7379058/hubfs/20201208_Blog%20Featured%20Image.gif?width=750&name=20201208_Blog%20Featured%20Image.gif"
          alt="Operational Efficiency"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      
      {/* Right Section - Text Content */}
      <div className="flex-1 flex flex-col justify-center px-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#ffffff] mb-4">
          Maximize Revenue and Minimize Risk with Coworking Spaces
        </h1>
        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
          Transform your commercial property into a coworking space and unlock greater revenue potential. By converting your space, you’ll attract multiple clients, reducing the risk of complete vacancy and ensuring steady occupancy. Unlike traditional leases where your income relies on a single tenant, coworking spaces allow you to spread the risk across several clients. Plus, by outsourcing management, you can maintain and extend the life of your property, protecting your CAPEX investment for the long term. This approach ensures consistent income and maximizes the value of your asset.
        </p>
        <button className="bg-[#FC1D40]  text-white rounded-lg px-6 py-3 transition duration-300 hover:bg-[#e61f3d] focus:outline-none focus:ring-2 focus:ring-[#FC1D40] focus:ring-opacity-50">
          Know Your Property Potential
        </button>
      </div>
    </div>
  );
};

export default Risk;
