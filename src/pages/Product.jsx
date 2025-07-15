import React from "react";
import coil1 from "../assets/images/coil1.png";
import coil2 from "../assets/images/coil2.png";
import coil3 from "../assets/images/coil3.png";

export default function Product() {
  const products = [
    {
      name: "Eco Mosquito Coil",
      description:
        "An organic mosquito-repellent coil made from dried orange peels and natural binders—smoke-free, safe for all ages.",
      image: coil1,
    },
    {
      name: "Repellent Sachets",
      description:
        "Eco-friendly sachets made from fruit peel waste, ideal for keeping mosquitoes away from indoor spaces.",
      image: coil2,
    },
    {
      name: "Natural Repellent Spray",
      description:
        "A non-toxic spray made with essential oils and bio-waste extract, designed for personal and home use.",
      image: coil3,
    },
  ];

  return (
    <div className="px-6 py-16 bg-white text-gray-800">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          our products
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          At PeelInnova, we transform agricultural waste into innovative mosquito-repellent products that are safe, sustainable, and effective.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-700">{product.description}</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
