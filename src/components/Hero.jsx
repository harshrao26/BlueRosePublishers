import React from "react";
import Button from './Button'
const Hero = () => {
  return (
    <div
      className="w-full relative  py-20 md:py-40 flex flex-col items-center justify-center px-4 md:px-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('htt://images.unsplash.com/photo-1520032525096-7bd04a94b5a4?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="backdrop-blur- py-8 px-4 rounded-xl z-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-center max-w-4xl leading-tight">
          <span className="text-blue-500">Your Premier</span> Partner for
          Monetizing Commercial Assets with{" "}
          <span className="text-blue-500">Coworking Spaces</span>
        </h1>
        <p className="text-sm md:text-md lg:text-lg max-w-3xl text-center py-4 capitalize text-gray-600">
          Helping property owners, entrepreneurs, and real estate professionals
          transform and matchmake spaces into{" "}
          <span className="text-blue-500">profitable coworking businesses</span>
        </p>
        <div className="w-full flex items-center justify-center">
          <Button name="Let's Talk" />
        </div>
      </div>
      {/* <img src="https://img.freepik.com/premium-vector/dashed-line-paper-airplane-route_536326-465.jpg?w=900" alt="" className="absolute z-10 ml-80 mt-80 mix-blend-darken p-4 "/> */}
      <img src="https://www.freepnglogos.com/uploads/paper-plane-png/paper-plane-making-hammer-paper-airplane-that-flies-far-emerging-11.png" alt="" className="absolute z-10 animate-updown mix-blend-darken md:p-4 md:h-80 md:ml-96 md:mt-60 mt-56 ml-32 h-40 trans "/>
    </div>
  );
};

export default Hero;
