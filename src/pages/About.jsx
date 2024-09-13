import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-white py-16" id="about">
      <div className="container mx-auto flex flex-col gap-8 md:flex-row items-center">
        <div className="w-full md:w-1/2 px-8 rounded-full bg-zinc-400">
          <img
            src="https://richardahenkorah.com/wp-content/uploads/2023/09/IMG-20230222-WA0062-removebg-preview-1.png"
            alt="About Me"
            className="w-full  "
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left px-4 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Hi, I'm John Doe, a passionate web developer with a love for
            creating beautiful, responsive websites and applications. I have
            over 5 years of experience in the industry and enjoy working with
            the latest web technologies like React, Tailwind CSS, and Node.js.
            My mission is to help businesses and individuals build strong online
            presences.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            When I'm not coding, I enjoy hiking, photography, and reading about
            the latest tech trends. Feel free to reach out to me for any project
            collaborations or freelance work.
          </p>
          <button className="bg-zinc-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-zinc-600 transition duration-300">
            Contact Me
          </button>
        </div>

        {/* Right Side: Image */}
      </div>
    </section>
  );
};

export default AboutMe;
