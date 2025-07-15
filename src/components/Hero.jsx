import React from "react";
 import peel   from "../assets/images/peel.mp4"; // Adjust the path as necessary

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={peel}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">

        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to PeelInnova
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">
            Turning agricultural waste into eco-friendly mosquito repellents.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-medium transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
