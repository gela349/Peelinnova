import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import sdgs1 from "../assets/images/sdgs1.png";
import sdgs3 from "../assets/images/sdgs3.png";
import sdgs8 from "../assets/images/sdgs8.png";
import sdgs9 from "../assets/images/sdgs9.png";
import sdgs12 from "../assets/images/sdgs12.png";

const sdgs = [
  {
    number: 1,
    title: "No Poverty",
    icon: sdgs1,
    description:
      "Empowering local communities to generate income through waste-to-repellent innovations.",
  },
  {
    number: 3,
    title: "Good Health and Well-being",
    icon: sdgs3,
    description:
      "Reducing mosquito-borne diseases with natural, safe, and eco-friendly repellents.",
  },
  {
    number: 8,
    title: "Decent Work and Economic Growth",
    icon: sdgs8,
    description:
      "Creating sustainable green jobs in production, packaging, and community outreach.",
  },
  {
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    icon: sdgs9,
    description:
      "Using agricultural waste to fuel innovation in eco-health solutions.",
  },
  {
    number: 12,
    title: "Responsible Consumption and Production",
    icon: sdgs12,
    description:
      "Transforming fruit waste into useful products, reducing landfill and pollution.",
  },
];

export default function Sdgs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="px-6 py-16 bg-white text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          our contribution to the sdgs
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          PeelInnova supports global sustainability through innovation, inclusion, and eco-conscious production aligned with the UN Sustainable Development Goals.
        </p>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sdgs.map((goal, index) => (
          <div
            key={goal.number}
            className="bg-green-50 rounded-xl p-6 text-center shadow hover:shadow-xl transition duration-300 relative group"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* IMAGE */}
            <img
              src={goal.icon}
              alt={`SDG ${goal.number}`}
              className="h-20 w-20 mx-auto mb-4 object-contain"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/100";
              }}
            />

            {/* TITLE */}
            <h2 className="text-xl font-bold text-green-700 mb-2">
              Goal {goal.number}: {goal.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-700">{goal.description}</p>

            {/* TOOLTIP on hover */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-80 text-white p-4 rounded-xl text-sm flex items-center justify-center text-center pointer-events-none">
              {goal.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
