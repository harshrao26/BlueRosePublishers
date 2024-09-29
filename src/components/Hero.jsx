import React, { useEffect, useRef } from 'react';
import { IoIosCall } from "react-icons/io";
import { gsap } from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const words = titleRef.current.querySelectorAll('span');
    gsap.from(words, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: "power2.out",
    });

    gsap.from(paragraphRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      delay: words.length * 0.1,
      ease: "power2.out",
    });

    gsap.from(buttonRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      delay: words.length * 0.1 + 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="bg-[#F0EEEB] flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-16">
      <div className="md:w-1/2 space-y-6">
        <h1 ref={titleRef} className="text-3xl md:text-5xl font-semibold uppercase leading-tight text-zinc-900">
          <span>Your</span> <span>Premier</span> <span>Partner</span> 
          <img 
            src="https://cdn.dribbble.com/users/2169669/screenshots/4378019/handshake.gif" 
            className='inline-block rounded-full md:h-16 h-10' 
            alt="" 
          /> 
          <span>for</span> <span>Monetizing</span> <span>Commercial</span> <span>Assets</span> <span>with</span> <span>Coworking</span> <span>Spaces.</span>
        </h1>
        
        <p ref={paragraphRef} className="text-lg md:text-xl text-zinc-700">
          Helping property owners, entrepreneurs, and real estate professionals transform and matchmake spaces into profitable coworking business.
        </p>

        <button 
          ref={buttonRef} 
          className="px-6 py-3 flex items-center gap-2 rounded shadow-lg bg-zinc-800 text-white text-lg hover:bg-zinc-700 transition duration-300 ease-in-out"
        >
          Let's Talk <IoIosCall size={20} />
        </button>
      </div>

      <div className="mt-8 md:mt-0 md:w-[60%]">
        <img 
          src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/10/WEWORK_FEATHER-1.gif" 
          alt="Coworking Spaces" 
          className="w-full h-auto rounded-md "
        />
      </div>
    </div>
  );
};

export default Hero;
