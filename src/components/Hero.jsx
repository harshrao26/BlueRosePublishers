import React from "react";
import Button from "./Button";
import overlays from "../../public/overlays.png";
import overlays2 from "../../public/overlays2.png";
const Hero = () => {
  return (
    <div
      className="w-full relative bg-[#052449]  py-20 md:py-40 flex flex-col items-center justify-center px-4 md:px-0 bg-cover overflow-hidden bg-center"
      style={{
        backgroundImage:
          "url('htt://images.unsplash.com/photo-1520032525096-7bd04a94b5a4?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="backdrop-blur- py-8 px-4 rounded-xl z-20 flex flex-col items-center justify-center ">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white text-center max-w-4xl leading-tight">
          <span className="text-blue-400">Your Premier</span> Partner for
          Monetizing Commercial Assets with{" "}
          <span className="text-blue-400">Coworking Spaces</span>
        </h1>
        <p className="text-sm md:text-md lg:text-lg max-w-3xl text-center  py-4 capitalize text-gray-100">
          Helping property owners, entrepreneurs, and real estate professionals
          transform and matchmake spaces into{" "}
          <span className="text-blue-400">profitable coworking businesses</span>
        </p>
        <div className="w-full flex items-center justify-center">
          <Button name="Let's Talk" />
        </div>
      </div>
      {/* <img src="https://img.freepik.com/premium-vector/dashed-line-paper-airplane-route_536326-465.jpg?w=900" alt="" className="absolute z-10 ml-80 mt-80 mix-blend-darken p-4 "/> */}
      <img
        src="https://www.freepnglogos.com/uploads/paper-plane-png/paper-plane-making-hammer-paper-airplane-that-flies-far-emerging-11.png"
        alt=""
        className="absolute z-10 md:w-full md:p-96 w-60 md:ml-[45vw] ml-[0vw] z-20 "
      />
      <img
        src={overlays}
        alt=""
        className="absolute z-10 h-screen mr-[52vw] -mt-20 opacity-50   "
      />
      <img
        src={overlays2}
        alt=""
        className="absolute z-10 h-screen ml-[52vw] -mt-20 opacity-50   "
      />
    </div>
  );
};

export default Hero;
