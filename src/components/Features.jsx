import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { IoMdBarcode } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "./Button";
const Features = () => {
  return (
    <>
      <h1 className="md:text-5xl text-3xl  capitalize w-full font-semibold text-center py-8 ">
        Our Services​
      </h1>
      <div className="md:px-32 px-4">
        {/* Left Section - Quote */}
        <div className=" ">
          <h1 className="w-full text-center text-2xl">
            <RiDoubleQuotesL className="text-blue-500 inline-block text " />
            Maximize Your Asset's Potential with{" "}
            <span className="font-semibold font">Coworking Consultancy</span>
            <RiDoubleQuotesR className="text-blue-500 inline-block text " />
          </h1>
        </div>

        <div className="w-full flex  bg-gray-100 rounded py-4 my-4">
          <IoMdBarcode className="text-black mb-4 w-1/2 " size={60} />
          <p className="w-1/2 flex flex-col gap-1 px-4">
            <span className=" text-2xl font-semibold text-blue-500 ">
              Looking to build your own commercial asset brand with seamless
              management?
            </span>
            <br />
            ⦿ 
            We’ll handle everything — from creating your brand name and website
            to designing marketing strategies and implementing SOPs.
            <br />
            ⦿ You focus on growth, while we manage the day-to-day operations,
            turning your asset into a sellable, thriving brand.
            <div className="py-2">
              <Button name="Know Your Property Potential" />
            </div>
          </p>
        </div>

        <div className=" w-full flex  bg-gray-100 rounded py-4 my-4">
          <IoIosLink className="text-black mb-4 w-1/2" size={60} />
          <p className="w-1/2 flex flex-col gap-1 px-4">
            <span className="text-2xl font-semibold text-blue-500 ">Looking to partner with a coworking brand?</span>
            <br />
            ⦿ We’ll take a mandate and use our industry connections to find the
            perfect brand for your property, whether through partnership or
            rental.
            <br />
            ⦿ Let us handle the matchmaking while you enjoy the benefits.
            <div className="py-2">
              <Button name="Get Your Free Assessment" />
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
