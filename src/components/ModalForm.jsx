import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import close icon
import { useModal } from "../ModalContext"; // Import modal context
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA

const ModalForm = () => {
  const { isFormOpen, toggleForm } = useModal();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); // Captcha state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rentalExpectation: "",
    city: "",
    microMarket: "",
    areaCarpet: "",
    areaSuper: "",
    propertyDetails: "",
    coworkingOption: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle captcha verification
  const onCaptchaChange = (value) => {
    if (value) {
      setIsCaptchaVerified(true);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }

    // Prepare the email data (In practice, you'll need an email sending API or backend logic)
    const emailData = {
      to: "buzz@propques.com",
      subject: "New Property Submission",
      body: JSON.stringify(formData, null, 2),
    };

    console.log("Form Data Sent: ", formData);

    // Example API call to send the form data (using your backend or email service):
    // fetch("/send-email", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(emailData),
    // }).then(() => {
    //   alert("Form submitted successfully!");
    // });

    alert("Form submitted successfully!");
  };

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
          Please fill out this form to provide us with more details about your property.
        </h2>
        <p className="text-sm font-semibold text-center mb-4">
          We will reach out to you if we are a mutual fit.
        </p>

        {/* Form Content */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your name"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your phone number"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="number"
                name="rentalExpectation"
                value={formData.rentalExpectation}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Rental expectation"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your city"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="text"
                name="microMarket"
                value={formData.microMarket}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Micro market"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="number"
                name="areaCarpet"
                value={formData.areaCarpet}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Area carpet"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="number"
                name="areaSuper"
                value={formData.areaSuper}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Area super"
              />
            </div>
          </div>

          <div className="mb-1">
            <textarea
              name="propertyDetails"
              value={formData.propertyDetails}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Tell us about your property"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-1">
            <select
              name="coworkingOption"
              value={formData.coworkingOption}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select an option</option>
              <option value="start_coworking">Start your own coworking</option>
              <option value="matchmaking_coworking">
                Matchmaking with coworking
              </option>
            </select>
          </div>

          {/* Google reCAPTCHA */}
          <div className="mb-4 flex justify-center">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your own site key
              onChange={onCaptchaChange}
            />
          </div>

          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full ${
              !isCaptchaVerified ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isCaptchaVerified}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
