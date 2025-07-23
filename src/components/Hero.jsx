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
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center px-4">

        <div className="text-center text-white max-w-2xl px-6">
          <h1 className="text-4xl sm-text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
      
          </h1>
          <p className=" text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
