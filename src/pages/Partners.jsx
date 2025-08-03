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

  return (
    <>
      <Navbar />
      <section className="bg-white pt-[40px] py-10 px-6 text-gray-800">
        <h2
          data-aos="fade-down"
          className="text-4xl font-bold text-center text-black mb-2 drop-shadow-sm"
        >
          Our Partners
        </h2>
        <div
          data-aos="fade-down"
          className="w-24 h-1 bg-green-500 mx-auto mb-6 rounded"
        ></div>

        <p
          data-aos="fade-up"
          className="text-center text-gray-700 max-w-2xl mx-auto mb-10"
        >
          We proudly collaborate with forward-thinking partners to drive impact.
        </p>

        {/* Horizontal scroll slider */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-6 px-4 scroll-smooth snap-x snap-mandatory">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 bg-white border border-gray-200 rounded-xl shadow-lg p-4 w-[200px] h-[150px] flex items-center justify-center transform hover:scale-105 transition duration-300"
                data-aos="fade-up"
              >
                <img
                  src={partner.logo}
                  alt={`Partner ${index + 1}`}
                  className="h-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}