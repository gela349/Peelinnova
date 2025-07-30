import React from "react";
import angel1 from "../assets/images/angel1.png";
import angel2 from "../assets/images/angel2.png";
import angel3 from "../assets/images/angel3.png";
import Navbar from "../components/Navbar";
import angel4 from "../assets/images/angel4.png";
import angel5 from "../assets/images/angel5.png";
import angel6 from "../assets/images/angel6.png";

export default function Product() {
  const items = [
    {
      name: "Eco Mosquito Coil",
      description: "",
      image: angel1,
    },
    {
      name: "Repellent Sachets",
      description: "",
      image: angel2,
    },
    {
      name: "Natural Repellent Spray",
      description: "",
      image: angel3,
    },
    {
      name: "Repellent Sachets",
      description: "",
      image: angel4,
    },
    {
      name: "Repellent Sachets",
      description: "",
      image: angel5,
    },
    {
      name: "Repellent Sachets",
      description: "",
      image: angel6,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-orange-100 mt-[80px] py-20 px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-orange-900">What We Make</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-orange-800">
            At PeelInnova, we turn waste into wonders – creating safe and sustainable mosquito-repellent products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:scale-95 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-48 object-contain rounded-xl mb-4 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold text-orange-900 hover:text-orange-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-[15px] mt-1 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
