import React from "react";

const Profit = () => {
  return (
    <div className="w-full flex flex-col md:flex-row px-8 md:px-16  items-center">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-gray-900">
          Maximize Your Asset’s Profit Potential in Just <span className="inline-block text-semibold text-white px-4 py-1 bg-blue-500">6 Months</span>
        </h1>
        <h1 className="text-lg md:text-xl leading-relaxed text-gray-700">
          <span className="text-5xl font-semibold font text-green-600">65% </span>
          <br />
          of our clients have tripled their profits in the first 6 months by
          monetizing their assets with our proven strategies.
        </h1>
        <h1 className="text-lg md:text-xl leading-relaxed text-gray-700">
          <span className="text-5xl font-semibold font text-yellow-500">80% </span>
          <br />
          Leveraging data from multiple brands, we’ve consistently turned
          underutilized spaces into high-performing coworking hubs. Achieve 80%
          Occupancy & Beyond.
        </h1>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="https://cdn.dribbble.com/userupload/7049513/file/original-adedd25d3935d84aa9fb71f90485c729.gif"
          alt="Profit Growth"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Profit;
