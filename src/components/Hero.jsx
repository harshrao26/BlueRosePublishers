import React, { useState, useEffect } from 'react';

const Hero = () => {
    const images = [
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJvb2tzfGVufDB8MHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1536340314100-5147a6eb2b41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1592966719124-2ca2978ba325?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 4 seconds (4000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-800">
            Welcome to Our Website
          </h1>
          <p className="text-lg mb-6 text-zinc-800">
            Discover the best collection of books and get them delivered to your doorstep. Join us today and embark on your reading journey!
          </p>
          <button className="bg-zinc-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-zinc-600 transition duration-300">
            Know More
          </button>
        </div>

        {/* Right Side: Image Carousel */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4">
          <div className="relative w-full h-[400px] overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-zinc-800' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
