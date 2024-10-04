import { IoClose } from "react-icons/io5"; // Import close icon
import React from "react";
import { useModal } from "../ModalContext"; // Import modal context

const ModalForm = () => {
  const { isFormOpen, toggleForm } = useModal();

  if (!isFormOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000000000000]">
      <div className="relative bg-zinc-300 rounded-lg shadow-lg p-8 max-w-2xl w-full"> 
        {/* Close Button */}
        <button
          onClick={toggleForm}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all"
        >
          <IoClose className="text-2xl" />
        </button> 

        <h2 className="text-base max-w-8xl font-bold mb-1 text-center">
          Please fill out this form to provide us with more details about your
          property.
        </h2>
        <p className="text-sm font-semibold text-center mb-4  ">We will reach out to you if we are mutual fit</p>

        {/* Form Content */}
        <form>
          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your name"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your phone number"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Rental expectation"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your city"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Micro market"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Area carpet"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Area super"
              />
            </div>
          </div>

          <div className="mb-1">
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Tell me about your property"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-1">
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
              <option value="">Select an option</option>
              <option value="start_coworking">Start your own coworking</option>
              <option value="matchmaking_coworking">
                Matchmaking with coworking
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
