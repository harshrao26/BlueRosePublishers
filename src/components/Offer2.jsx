import React from "react";
import s1 from "../../public/s1.png";
import Button from "./Button";

const Offer = () => {
  return (
    <div className=" mx-auto px-4 md:px-16 py-8">
      {/* Main Heading */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold  leading-snug">
            Leverage Our Expertise in Coworking Consultancy
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are India’s only coworking consultancy that offers comprehensive
            services to help you build or partner with a coworking brand. Here’s
            what we do:
          </p>
          <ul>
            <li className="py-1 text-lg">
              <span className="font-semibold"> ⦿ Brand Ideation:</span> We help you create a coworking brand
              tailored to your market and property.
            </li>
            <li className="py-1 text-lg">
              <span className="font-semibold"> ⦿ Sellable Layouts:</span> Using proprietary occupancy data,
              we design layouts that maximize your space’s potential and attract
              clients. 
            </li>
            <li className="py-1 text-lg">
              <span className="font-semibold"> ⦿ Complete Brand Creation:</span> From website development to
              logo design and marketing, we take care of all the branding
              elements.
            </li>
            <li className="py-1 text-lg">
              <span className="font-semibold"> ⦿ Hands-Free Management:</span> We can manage the day-to-day
              operations, allowing you to focus on growth.
            </li>
            <li className="py-1 text-lg">
              <span className="font-semibold"> ⦿ Constant Occupancy:</span> We create coworking spaces where
              professionals and enterprises come regularly, ensuring high
              occupancy rates.
            </li>
            <li className="py-1 text-lg">
              <span className="font-semibold"> ⦿ Coworking Matchmaking:</span> If you don’t want to start
              your own brand, we’ll connect you with top coworking brands for
              partnerships or rentals.
            </li>
          </ul>

          {/* Button */}
          <div className="">
            
            <Button name="Sumbit Your Interest" />

          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src='https://img.freepik.com/premium-vector/home-office-interior-workplace-work-night-close-office_39422-219.jpg'
            alt="Coworking Spaces"
            className="w-full h-[75vh] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
