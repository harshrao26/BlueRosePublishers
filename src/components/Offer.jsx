import React from "react";

const Offer = () => {
  return (
    <div className=" mx-auto px-8 py-8">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl capitalize font-semibold text-center  py-8">
        What We Offer
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://propques.com/wp-content/uploads/2024/09/Asset-6-1-jpg.webp"
            alt="Coworking Spaces"
            className="w-full h-[75vh] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold  leading-snug">
            Creating Sustainable Coworking Brands with Asset Owners at the Core
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Two friends, while working for a coworking startup, realized during
            the COVID-19 pandemic that the key to a sustainable coworking
            business lies with asset owners. By generating additional revenue
            for asset owners, more coworking brands can thrive—even in
            challenging times. This inspired the creation of <span className="font-bold">Propques</span>, India’s
            only coworking consultancy dedicated to helping asset owners start,
            manage, and grow their coworking journey. Our goal is to empower
            asset owners to build sustainable coworking spaces that remain
            resilient, no matter what the market brings.
          </p>

          {/* Button */}
          <button className="px-6 py-3 bg-zinc-800 text-white font-medium rounded-md shadow-md hover:bg-zinc-900 transition-colors duration-300">
            Ready to Start Your Coworking Journey?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
