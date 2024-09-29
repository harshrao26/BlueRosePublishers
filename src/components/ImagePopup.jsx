import React, { useState } from 'react';
import img1 from '../../public/img1.png'
import img2 from '../../public/img2.png'
const ImagePopup = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    {
      src: img1,
      name: "Thomas",
      title: 'Marketing & Branding Lead ',
      description: 'Thomas helps coworking and shared office spaces attract more people to rent their spaces. He uses special marketing plans that are made just for your space. This way, you can get more people to rent your space and make more money. Coworking is a new way of working where people work together in the same space. People like coworking because they can meet new people, have a better work-life balance, and be more productive. But, because more and more coworking spaces are being built, it’s harder to stand out. Thomas wants to help coworking spaces get noticed by using the internet. He has some special plans to help you get more people to rent your space, and to keep them renting it for a long time. This will help you make more money and be more successful.',
    },
    {
      src: img2,
      name: "Adarsh",
      title: 'Flexible Workspace Specialist',
      description: 'Adarsh aims to help as many people as possible in making their names for themselves in the flexible workspace industry. He accomplished this by drawing on my extensive industry knowledge, operational proficiency, and more than eight years of experience operating across the nation. He collaborates directly with asset owners to launch co-working spaces, creating a profitable business strategy and building a healthy shared space community.',
    },
   
  ];

  return (
    <div className="flex justify-center px-4 py-16" id="services">
  {images.map((image, index) => (
    <div
      key={index}
      className="relative group"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Rounded Image with scale effect on hover */}
      <img
        src={image.src}
        alt={image.title}
        className="w-40 h-40 ml-6 md:ml- lg:ml0 md:w-96 md:h-96 rounded-full shadow-xl transition-transform duration-300 transform group-hover:scale-105 hover:opacity-90 cursor-pointer"
      />
      {/* Image name and title */}
      <h1 className="w-full text-center font-semibold text-2xl pt-4 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
        {image.name}
      </h1>
      <h2 className="w-full text-center font-medium text-xl text-gray-600">
        {image.title}
      </h2>

      {/* Popup with Information */}
      {hoveredIndex === index && (
        <div
          className="absolute top-0 w-[40vw] left-24 z-10 bg-white p-6 rounded-lg shadow-2xl transform -translate-y-12 group-hover:scale-105 transition-transform duration-300"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h3 className="font-bold text-2xl mb-4 text-indigo-700">
            {image.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{image.description}</p>
        </div>
      )}
    </div>
  ))}
</div>

  );
};

export default ImagePopup;
