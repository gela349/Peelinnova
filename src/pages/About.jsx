

import React from "react";

export default function About() {
  return (
    <div className="px-6 py-16 bg-white text-gray-800">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
          about Us
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          PeelInnova is dedicated to innovating sustainable solutions that empower communities and promote environmental stewardship.
        </p>
      </div>

      {/* Image Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <img
          src="/images/team-placeholder.jpg"
          alt="Our Team"
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Mission, Vision, Values */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🌿 Our Mission</h3>
          <p className="text-gray-700">
            To create impactful, eco-friendly products that solve real problems and support healthier communities.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-green-700 mb-2">💡 Our Vision</h3>
          <p className="text-gray-700">
            A future where waste becomes a powerful resource in fighting mosquito-borne diseases.
          </p>
        </div>

        {/* Values */}
        <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🤝 Our Values</h3>
          <p className="text-gray-700">
            Innovation, sustainability, inclusiveness, and community empowerment.
          </p>
        </div>
      </div>
    </div>
  );
}
