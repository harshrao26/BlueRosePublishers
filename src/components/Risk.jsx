import React from "react";

const Risk = () => {
  return (
    <div className="relative w-full h-auto px-8 md:px-16  bg-[#001132]">
      {/* Background Image */}
      <div>
        <img
          src="https://cdn2.hubspot.net/hub/7379058/hubfs/20201208_Blog%20Featured%20Image.gif?width=750&name=20201208_Blog%20Featured%20Image.gif"
          alt="Operational Efficiency"
          className="w-full h-[60vh]  object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex justify-between items-center px-8 md:px-8 ">
        {/* Minimize Risk */}
        <div className="text-rigt ">
          <h1 className="text-3xl md:text-6xl text-[#FC1D40] drop-shadow-lg">
            Minimize <br /> Risk
          </h1>
        </div>
        {/* Maximize Revenue */}
        <div className="text-right ">
          <h1 className="text-3xl md:text-6xl  text-[#52C656] drop-shadow-lg">
            Maximize <br /> Revenue
          </h1>
        </div>
      </div>
        {/* <button className="w-full flex items-center justify-center text-center text-white  rounded-xl px-2 py-1 ">
Know Your Property Potential</button> */}
    </div>
  );
};

export default Risk;
