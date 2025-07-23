import React, { useEffect, useState } from "react";

export default function VisionMission() {
  const cards = [
    {
      title: "Our Vision",
      color: "text-green-700",
      
      content:
        "To create a healthier Africa free from mosquito-borne diseases, where public health thrives and sustainability matters. We strive to be the leading producers of innovate mosquito-repellent solutions in Africa, driven by our dedication to customer satisfaction.",
    },
    {
      title: "Our Mission",
      color: "text-green-700",
      bg: "bg-white",
      content:
        "At peellnnova, we are committed to protecting African communities from mosquito-borne diseases through innovative, sustainable, and customer-focused solutions. We leverage technology and eco-friendly practices to promote public health and a greener future.",
    },
    {
      title: "Our Values",
      color: "text-white",
      bg: "bg-black",
      content: (
        <ul className="text-sm space-y-1 text-white">
          <li>• Sustainability</li>
          <li>• Innovation</li>
          <li>• Community Impact</li>
          <li>• Health & Safety</li>
          <li>• Environmental Responsibility</li>
        </ul>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="bg-white text-gray-800 overflow-hidden px-6 py-16">
      {/* Left-Aligned Section Header */}
      <div className="mb-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Our Vision,Mission and Values
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Peellnnova is a social enterprise dedicated to tackling mosquito-borne
          illness by transforming agric waste into eco-friendly mosquito-repellent products.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-3xl h-auto mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className={`min-w-full px-6 py-8 rounded-2xl shadow-xl ${card.bg} transition-all duration-500`}
            >
              <h2 className={`text-2xl font-semibold mb-3 ${card.color}`}>
                {card.title}
              </h2>
              <div className="text-base leading-relaxed">{card.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
