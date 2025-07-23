import React from "react";
import Navbar from "../components/Navbar";
import partner1 from "../assets/images/partner1.png";
import partner2 from "../assets/images/partner2.png";
import partner3 from "../assets/images/partner3.png";
import partner4 from "../assets/images/partner4.png";
import partner5 from "../assets/images/partner5.png";

export default function Partners() {
  const partners = [
    { name: "partner1", logo: partner1 },
    { name: "partner2", logo: partner2 },
    { name: "partner3", logo: partner3 },
    { name: "partner4", logo: partner4 },
    { name: "partner5", logo: partner5 }, 
  ];

  return (
    <>
    <Navbar />
    <section className="bg-[#fefefe] mt-[80px] py-20 px-6 text-gray-800">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-green-700 mb-2 drop-shadow-sm">
        Our Partners
      </h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded"></div>

      {/* Intro Paragraph */}
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
        At PeelInnova, we collaborate with incredible organizations to expand our impact and bring sustainable innovations to life. Here are some of our valued partners:
      </p>

      {/* Partner Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-20 object-contain"
            />
            <p className="text-sm text-center mt-2 text-gray-600 font-medium">
              {partner.name}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center border-t pt-8 border-green-600">
        <h3 className="text-2xl font-semibold text-green-700">
          For Partnerships, contact:
        </h3>
        <p className="mt-3 text-lg font-semibold text-black">
          059 491 6406 / 024 710 4398 / 020 755 1942 / 050 343 7462
        </p>
      </div>
    </section>
    </>
  );
}