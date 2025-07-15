import React from "react";


export default function VisionMission() {
  return (
    <section className="px-6 py-16 bg-white text-gray-800">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Our Vision, Mission & Values
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          At PeelInnova, our purpose is rooted in sustainability, innovation, and community empowerment.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {/* Vision */}
        <div className="bg-green-50 rounded-xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Our Vision</h2>
          <p className="text-gray-700">
            To lead the transformation of agricultural waste into sustainable mosquito-repellent innovations that protect health and nurture the planet.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-orange-50 rounded-xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-orange-600 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            To create eco-friendly, community-driven solutions that reduce mosquito-borne illnesses while promoting economic growth and environmental care.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-black text-white rounded-xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-white mb-3">Our Values</h2>
          <ul className="space-y-2 text-sm">
            <li>• Sustainability</li>
            <li>• Innovation</li>
            <li>• Community Impact</li>
            <li>• Health & Safety</li>
            <li>• Environmental Responsibility</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
