import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import sdgs1 from "../assets/images/sdgs1.png";
import sdgs3 from "../assets/images/sdgs3.png";
import sdgs8 from "../assets/images/sdgs8.png";
import sdgs9 from "../assets/images/sdgs9.png";
import sdgs12 from "../assets/images/sdgs12.png";
import sdgs13 from "../assets/images/sdgs13.png";

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
  {
    number: 13,
    title: "Climate Action",
    icon: sdgs13,
    description:
      "Mitigating climate change by promoting circular economy practices through waste reduction.",
  },
];

export default function Area() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="px-6 py-16 bg-white text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
          Our Contribution to the SDGs
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
            className="bg-green-600 rounded-xl p-6 text-center shadow-md hover:shadow-lg hover:scale-95 transition-transform duration-300 relative group text-white"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* IMAGE */}
            <img
              src={goal.icon}
              alt={`SDG ${goal.number} - ${goal.title}`}
              className="h-30 w-30 mx-auto mb-4 object-contain bg-white p-2"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/100";
              }}
            />

            {/* TITLE */}
            <h2 className="text-xl font-bold mb-2">
              Goal {goal.number}: {goal.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm">{goal.description}</p>

            {/* HOVER TOOLTIP (Description) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity bg-opacity-80 text-white p-4 rounded-xl text-sm flex items-center justify-center text-center pointer-events-none">
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
