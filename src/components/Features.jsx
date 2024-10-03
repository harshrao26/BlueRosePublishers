import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { IoMdBarcode } from "react-icons/io";
import { IoIosLink } from "react-icons/io";

const Features = () => {
  return (
    <>
      <h1 className="text-5xl capitalize w-full font-semibold text-center py-4 ">
        Our Services​
        
      </h1>
      <div className="flex flex-col md:flex-row w-full gap-8 md:px-16 py- px-4">
        {/* Left Section - Quote */}
        <div className="md:w-1/3 h-auto flex items-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-left">
            <RiDoubleQuotesL className="text-red-500 inline-block text " />
            Maximize Your Asset's Potential with {" "} 
            <span className="font-semibold font">Coworking Consultancy</span> 
            <RiDoubleQuotesR className="text-green-500 inline-block text " />
          </h1>
        </div>

        {/* Middle Section - Branding */}
        <div className="md:w-1/3 w-full  rounded md:mt-10 hover:scale-105 transition-all ease-in-out bg-red-500  flex flex-col items-center justify-around p-8 shadow-xl text-center">
          <IoMdBarcode className="text-white mb-4" size={60} />
          <p className="text-white text-base leading-5 text-justify">
            Looking to build your own commercial asset brand with seamless
            management? We’ll handle everything — from creating your brand name
            and website to designing marketing strategies and implementing SOPs.
            You focus on growth, while we manage the day-to-day operations,
            turning your asset into a sellable, thriving brand.
          </p>
          <button className="mt-4 py-2 px-4 bg-zinc-800  -white rounded text-white hover:bg-zinc-700 transition duration-300">
            Start Your Brand Today
          </button>
        </div>

        {/* Right Section - Partnership */}
        <div className="md:w-1/3 w-full rounded mb-10 md:mb-10 hover:scale-105 transition-all ease-in-out  shadow-xl  bg-green-500 flex flex-col items-center justify-around p-8 text-center">
          <IoIosLink className="text-white mb-4" size={60} />
          <p className="text-white text-base leading-5 text-justify">
            Looking to partner with a coworking brand? We’ll take a mandate and
            use our industry connections to find the perfect brand for your
            property, whether through partnership or rental. Let us handle the
            matchmaking while you enjoy the benefits.
          </p>
          <button className="mt-4 py-2 px-4 bg-zinc-800  -white rounded text-white hover:bg-zinc-700 transition duration-300">
            Get Your Free Assessment
          </button>
        </div>
      </div>
    </>
  );
};

export default Features;
