import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

import partner1 from "../assets/images/partner1.png";
import partner2 from "../assets/images/partner2.png";
import partner3 from "../assets/images/partner3.png";
import partner4 from "../assets/images/partner4.png";
import partner5 from "../assets/images/partner5.png";
import partner6 from "../assets/images/partner6.png";
import partner7 from "../assets/images/partner7.png";
import partner8 from "../assets/images/partner8.png";

export default function Partners() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const partners = [
    { name: "", logo: partner1 },
    { name: "", logo: partner2 },
    { name: "", logo: partner3 },
    { name: "", logo: partner4 },
    { name: "", logo: partner5 },
    { name: "", logo: partner6 },
    { name: "", logo: partner7 },
    { name: "", logo: partner8 },
  ];

  const scrollingPartners = [...partners, ...partners];

  return (
    <>
      <Navbar />
      <section className="bg-white pt-20 px-6 text-gray-800 overflow-hidden">
        <h2
          data-aos="fade-down"
          className="text-4xl font-bold text-center text-black mb-2 drop-shadow-sm"
        >
          Our Partners
        </h2>
        <div
          data-aos="fade-down"
          className="w-24 h-1 bg-gradient-to-r from-green-500 via-lime-500 to-green-600 mx-auto mb-6 rounded"
        ></div>

        <p
          data-aos="fade-up"
          className="text-center text-gray-700 max-w-2xl mx-auto mb-10"
        >
          
        </p>

        {/* Auto-scrolling marquee with animated zoom cards */}
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-8 w-max animate-marquee">
            {scrollingPartners.map((partner, index) => (
              <div
                key={index}
                className="partner-card w-[200px] h-[150px] flex-shrink-0 bg-white border border-gray-200 rounded-xl shadow-md flex flex-col items-center justify-center transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-[80px] object-contain mb-2"
                />
                <p className="text-sm text-gray-600">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animation styles */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes zoomInOut {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }

          .partner-card {
            animation: zoomInOut 4s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
}
