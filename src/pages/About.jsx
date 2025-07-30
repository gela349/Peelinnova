import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-br from-green-50 to-orange-50 mt-[80px] py-20 px-6 text-gray-800">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
            About Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-black">
            PeelInnova is an innovative social enterprise dedicated to tackling mosquito-borne illnesses and promoting sustainability in Africa. We transform agricultural waste, such as pineapple and orange peels, into eco-friendly mosquito-repellent products. By incorporating other natural ingredients, we create chemical-free, effective solutions that protect public health and the environment. Our goal is to provide affordable, sustainable alternatives that help improve lives and reduce the environmental impact of harmful repellents. 
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Our Mission</h3>
            <p className="text-gray-800">
              To create a healthier Africa, free from mosquito-borne diseases, where public health thrives and sustainability matters. We strive to be the leading producers of innovative mosquito-repelling solutions in Africa, driven by our dedication to customer satisfaction.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Our Vision</h3>
            <p className="text-gray-800">
              At PeelInnova, we are committed to protecting African communities from mosquito-borne diseases through innovative, sustainable, and customer-focused solutions. Leveraging cutting-edge technology and eco-friendly practices, we strive to enhance public health while ensuring a greener, healthier future for all.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Our Values</h3>
            <p className="text-gray-800">
              Innovation, sustainability, inclusiveness, and community empowerment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
