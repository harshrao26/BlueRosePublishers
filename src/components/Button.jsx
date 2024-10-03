import { IoChatbubblesSharp } from "react-icons/io5";
import React from "react";
import { useModal } from "../ModalContext"; // Import context

const Button = () => {
  const { toggleForm } = useModal(); // Get function to toggle modal state

  return (
    <div>
      <button
        onClick={toggleForm} // Call toggle function on click
        className="bg-zinc-800 w-full shadow-xl sm:w-auto text-center hover:bg-blue-500 transition-all ease-in-out px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-white text-sm sm:text-md flex items-center justify-center gap-2"
      >
        <IoChatbubblesSharp className="text-lg sm:text-xl" />
        Let's Talk
      </button>
    </div>
  );
};

export default Button;
