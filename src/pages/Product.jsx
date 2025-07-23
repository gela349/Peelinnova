import React from "react";
import angel1 from "../assets/images/angel1.png";
import angel2 from "../assets/images/angel2.png";
import angel3 from "../assets/images/angel3.png";
import Navbar from "../components/Navbar";
import spray1 from "../assets/images/spray1.png";
import spray2 from "../assets/images/spray2.png";
import spray3 from "../assets/images/spray3.png";
// lol don’t judge the padding, I'm still tweaking the vibe :)
export default function Product() {
  const items = [
    {
      name: "Eco Mosquito Coil",
      description:
        "",
      image: angel1,
    },
    {
      name: "Repellent Sachets",
      description:
        "",
      image: angel2,
    },
    {
      name: "Natural Repellent Spray",
      description:
        "",
      image: angel3,
    },
    {
      name: "Repellent Sachets",
      description:
        "",
      image: spray1,
    },
    {
      name: "Repellent Sachets",
      description:
        "",
      image: spray2,
    },
    {
      name: "Repellent Sachets",
      description:
        "",
      image: spray3,
    },
  ];

  return (
    <>
     <Navbar />
    <section className="bg-[#fefefe] mt-[80px] py-20 px-6 text-gray-800">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          What We Make 
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
         At peelinnova, we turn Waste into wonders - creating safe and sustainable mosquito-repel.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-48 object-contain rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold">
              {item.name}
            </h3>
            <p className="text-[15px] text-gray-700 mt-1">{item.description}</p>

            
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
