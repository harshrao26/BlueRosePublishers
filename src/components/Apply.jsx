import { IoChatbubblesSharp } from "react-icons/io5"; // Importing React Icon
import React, { useState, useEffect } from 'react';
import Button from './Button'

const Apply = () => {
  const [showApply, setShowApply] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        setShowApply(true);
      } else {
        setShowApply(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex px-16 bg-blue-500 items-center justify-between fixed bottom-0 w-full z-[100000] py-2 transition-all ease-in-out duration-500 transform ${
          showApply ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <h1 className="text-white text-xl">Want to work with us?</h1>
        <Button />
      </div>
    </>
  );
};

export default Apply;
