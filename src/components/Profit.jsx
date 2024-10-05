import React from "react";
import Button from "./Button";
import bg from '../../public/bg.webp'
const Profit = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center  px-8 md:px-16  "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text Section */}
      <h1 className="text-3xl md:text-4xl text-center font-semibold leading-snug pt-8 pb-4 text-gray-100">
        Maximize Your Asset’s Profit Potential in Just{" "}
        <span className="inline-block text-semibold text-white px-4 py-1 bg-blue-500">
          6 Months
        </span>
      </h1>
      <div className="flex justify-center w-full flex-col items-cener space-y-4 pb-8">
        <h1 className="text-lg md:text-lg md:px-64 text-center leading-relaxed text-gray-100">
          <span className="text-5xl  font-semibold font text-white">
            65% <br />
          </span>
          of our clients have tripled their profits in the first 6 months by
          monetizing their assets with our proven strategies.
        </h1>
        <h1 className="text-lg md:text-lg md:px-64 text-center leading-relaxed text-gray-100">
          <span className="text-5xl  font-semibold font text-white">
            80% <br />
          </span>
          Leveraging data from multiple brands, we’ve consistently turned
          underutilized spaces into high-performing coworking hubs. Achieve 80%
          Occupancy & Beyond.
        </h1>
      </div>
    </div>
  );
};

export default Profit;
