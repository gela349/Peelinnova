import React from "react";
import peel from "../assets/images/peel.mp4"; // Adjust the path as necessary
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={peel}
        autoPlay
        loop
        muted
        playsInline
      />

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full relative z-10"
      >
        {/* Slide 1 */}
        <SwiperSlide className="w-screen h-screen relative">
          <div className="bg-black/40 absolute inset-0 z-10"></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
            <h1 className="font-[Poppins] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-white font-bold italic text-center">
              In the lush of pineapple farms, farmers work tirelessly to bring
              fresh produce to our tables.
            </h1>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="w-screen h-screen relative">
          <div className="bg-black/40 absolute inset-0 z-10"></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
            <h1 className="font-[Poppins] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-white font-bold italic text-center">
              Did you know that millions of tons of fruits like pineapples and
              oranges are wasted globally every year?
            </h1>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="w-screen h-screen relative">
          <div className="bg-black/40 absolute inset-0 z-10"></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
            <h1 className="font-[Poppins] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-white font-bold italic text-center">
              This not only harms our environment but also wastes valuable
              resources.
            </h1>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="w-screen h-screen relative">
          <div className="bg-black/40 absolute inset-0 z-10"></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
            <h1 className="font-[Poppins] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-white font-bold italic text-center">
              Mosquitoes continue to spread diseases like malaria and dengue
              fever.
            </h1>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide className="w-screen h-screen relative">
          <div className="bg-black/40 absolute inset-0 z-10"></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
            <h1 className="font-[Poppins] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-white font-bold italic text-center">
              To some there are no accessible solutions and to many, the cost for
              the solutions are extremely expensive.
            </h1>
          </div>
        </SwiperSlide>

        {/* Slide 6 - Courgette main title */}
        <SwiperSlide className="w-screen h-screen relative">
          <div className="bg-black/40 absolute inset-0 z-10"></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
            <h1 className="font-[Courgette] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-white font-bold italic text-center">
              An innovative solution that tackles both fruit waste and malaria.
              This is it.
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}