import React from "react";
import Button from "./Button";
import { DivideCircle } from "lucide-react";

const Risk = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:px-16 px-4 bg-zinc-900 py-8 shadow-lg">
      {/* Left Section - Image */}
      <div className="flex-1 mb-4 md:mb-0">
        <img
          src="https://cdn2.hubspot.net/hub/7379058/hubfs/20201208_Blog%20Featured%20Image.gif?width=750&name=20201208_Blog%20Featured%20Image.gif"
          alt="Operational Efficiency"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      
      {/* Right Section - Text Content */}
      <div className="flex-1 flex flex-col justify-center ">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#ffffff] mb-4">
          Maximize Revenue and Minimize Risk with Coworking Spaces
        </h1>
        <p className="text-lg text-zinc-100 mb-6 leading-relaxed">
          Transform your commercial property into a coworking space and unlock greater revenue potential. By converting your space, you’ll attract multiple clients, reducing the risk of complete vacancy and ensuring steady occupancy. Unlike traditional leases where your income relies on a single tenant, coworking spaces allow you to spread the risk across several clients. Plus, by outsourcing management, you can maintain and extend the life of your property, protecting your CAPEX investment for the long term. This approach ensures consistent income and maximizes the value of your asset.
        </p>
        <div className="">
        <Button name="Know Your Property Potential" />
          
          
        </div>
      </div>
    </div>
  );
};

export default Risk;
