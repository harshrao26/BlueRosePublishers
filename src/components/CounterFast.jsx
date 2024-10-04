import React, { useState, useEffect, useRef } from "react";

const Counter = ({ desiredNumber }) => {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const counterRef = useRef(null); // Ref for the counter element

  useEffect(() => {
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible when the component is in the viewport
        }
      },
      {
        threshold: 0.5, // The component is considered in view when 50% is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current); // Observe the counter element
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  useEffect(() => {
    let timer;

    // Start the countdown only if the component is visible
    if (isVisible) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < desiredNumber) {
            return prevCount + 1; // Increment the count
          } else {
            clearInterval(timer); // Stop the timer when desiredNumber is reached
            return prevCount;
          }
        });
      }, 2); // Adjust the interval for speed
    }

    // Cleanup the interval on unmount or when the effect is rerun
    return () => clearInterval(timer);
  }, [isVisible, desiredNumber]);

  return (
    <div ref={counterRef} className="">
      <div className="font-semibold">
        {count}
      </div>
    </div>
  );
};

export default Counter;
