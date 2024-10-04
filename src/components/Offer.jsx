import React from "react";
import Button from "./Button";

const Offer = () => {
  return (
    <div className=" mx-auto px-4 md:px-16 p8">
      {/* Main Heading */}
      <h1 className="md:text-5xl text-3xl  capitalize font-semibold text-center  pb-8">
        What We Offer
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between  md:space-y-0 md:space-x-12">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/office-interior-workplace_24908-56588.jpg"
            alt="Coworking Spaces"
            className="w-full h-[75vh] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-500 leading-snug">
            Creating Sustainable Coworking Brands with Asset Owners at the Core
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Two friends, while working for a coworking startup, realized during
            the COVID-19 pandemic that the key to a sustainable coworking
            business lies with asset owners. By generating additional revenue
            for asset owners, more coworking brands can thrive—even in
            challenging times. This inspired the creation of{" "}
            <span className="font-bold">Propques</span>, India’s only coworking
            consultancy dedicated to helping asset owners start, manage, and
            grow their coworking journey. Our goal is to empower asset owners to
            build sustainable coworking spaces that remain resilient, no matter
            what the market brings.
          </p>

          {/* Button */}
          <div className="">
            <Button name="Ready to Start Your Coworking Journey?" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
