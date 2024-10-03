import React, { useState } from "react";
import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";

const ImagePopup = () => {
  const images = [
    {
      src: img1,
      name: "Thomas",
      title: "Marketing & Branding Lead",
      description:
        "Thomas helps coworking and shared office spaces attract more people to rent their spaces. He uses special marketing plans that are made just for your space. This way, you can get more people to rent your space and make more money. Coworking is a new way of working where people work together in the same space. People like coworking because they can meet new people, have a better work-life balance, and be more productive. But, because more and more coworking spaces are being built, it’s harder to stand out.  This will help you make more money and be more successful.",
    },
    {
      src: img2,
      name: "Adarsh",
      title: "Flexible Workspace Specialist",
      description:
        "Adarsh aims to help as many people as possible in making their names for themselves in the flexible workspace industry. He accomplished this by drawing on my extensive industry knowledge, operational proficiency, and more than eight years of experience operating across the nation. He collaborates directly with asset owners to launch co-working spaces, creating a profitable business strategy and building a healthy shared space community.",
    },
  ];

  return (
    <>
      <h1 className="text-5xl capitalize w-full font-semibold text-center py-8">
        Meet Our Founders
      </h1>
      <div className=" flex justify-evenly pb-8">
        {images.map((val, key) => {
          return (
            <div className="flex flex-col items-center justify-center">
              <img src={val.src} alt="" className="rounded-full h-80 w-80" />
              <h1 className="text-2xl font-semibold">{val.title}</h1>
              <FaLinkedin className="text-blue-500 text-xl" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImagePopup;
