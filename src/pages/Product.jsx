import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import angel1 from "../assets/images/angel1.png";
import angel2 from "../assets/images/angel2.png";
import angel3 from "../assets/images/angel3.png";
import angel4 from "../assets/images/angel4.png";
import angel5 from "../assets/images/angel5.png";
import angel6 from "../assets/images/angel6.png";
import angel7 from "../assets/images/angel7.png";

// ✅ Import Google Fonts directly
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/courgette"; // Single weight
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

const products = [
  {
    name: "Night Guard Spray",
    image: angel6,
    description: "Sleep peacefully with night-time sachets designed for bedroom use.",
    details: ["Slow release overnight", "Lavender-infused", "Child-safe and tested"],
  },
  {
    name: "Repellent Coil",
    image: angel2,
    description: "Scented sachets that repel mosquitoes naturally. Ideal for drawers, bags, or small rooms.",
    details: ["Plant-based essential oils", "No synthetic chemicals", "Lasts up to 30 days"],
  },
  {
    name: "Natural Repellent Coil",
    image: angel3,
    description: "Spray-on repellent with natural oils for long-lasting mosquito protection.",
    details: ["Repels mosquitoes, gnats & ticks", "Non-greasy formula", "Safe for kids over 3 years"],
  },
  {
    name: "Repellent Spray XL",
    image: angel4,
    description: "Larger sachets for bigger spaces like closets or storerooms.",
    details: ["Extra coverage", "Infused with citronella and neem", "Environmentally friendly packaging"],
  },
  {
    name: "Eco Mosquito Coil",
    image: angel1,
    description: "Eco-friendly mosquito coil made from agricultural waste. Repels mosquitoes effectively while being safe for the environment.",
    details: ["Natural and eco-safe ingredients", "Smokeless and pleasant aroma", "Long-lasting burn time"],
  },
  {
    name: "Pocket Spray",
    image: angel5,
    description: "Handy pocket-size spray for outdoor use.",
    details: ["Fits in pockets and purses", "Instant protection on the go", "Fresh herbal scent"],
  },
  {
    name: "Night Angel Mosquito Coil",
    image: angel7,
    description: "Fruity-scented mosquito coil for long-lasting protection.",
    details: ["Contains 10 coils per box", "Effective for 12 hours", "Low smoke, long-lasting"],
  },
];

export default function Product() {
  const [showCatalog, setShowCatalog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (showCatalog || selectedProduct) {
      window.scrollTo(0, 0);
    }
  }, [showCatalog, selectedProduct]);

  return (
    <>
      <Navbar />
      <section className="bg-white mt-16 py-10 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-black" style={{ fontFamily: "Courgette, cursive" }}>
            What We Make
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-black">
            At PeelInnova, we turn waste into wonders – creating safe and sustainable mosquito-repellent products.
          </p>
        </div>

        {selectedProduct ? (
          <div className="max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="bg-gray-50 p-4 rounded-xl">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-[400px] object-contain rounded-xl"
              />
            </div>
            <div>
              <p className="text-sm uppercase font-semibold text-green-700 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                Product Info
              </p>
              <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                {selectedProduct.name}
              </h2>
              <p className="text-gray-700 text-base mb-4">{selectedProduct.description}</p>
              <ul className="list-disc pl-5 text-gray-800 space-y-2 mb-8">
                {selectedProduct.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                Back to Products
              </button>
            </div>
          </div>
        ) : showCatalog ? (
          <>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-60 w-full object-contain mb-6 rounded-lg"
                  />
                  <h3 className="text-xl font-bold text-black" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {product.name}
                  </h3>
                  <p className="mt-2 text-gray-700">{product.description}</p>
                  <ul className="list-disc mt-3 ml-4 text-gray-600">
                    {product.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={() => setShowCatalog(false)}
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                Back to Products
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="relative max-w-7xl mx-auto">
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                <button className="swiper-button-prev w-6 h-6 bg-black rounded-full"></button>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                <button className="swiper-button-next w-6 h-6 bg-black rounded-full"></button>
              </div>

              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
                onSlideChange={(swiper) => {
                  if (swiper.isEnd) {
                    setTimeout(() => setShowCatalog(true), 300);
                  }
                }}
              >
                {products.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:scale-95 hover:shadow-2xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-48 w-full object-contain mx-auto rounded-xl mb-4"
                      />
                      <h3 className="text-lg font-semibold text-black mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {item.name}
                      </h3>
                      <button
                        onClick={() => setSelectedProduct(item)}
                        className="bg-green-700 text-white font-bold text-xs px-9 py-3 rounded-full hover:bg-green-800 transition duration-200"
                      >
                        LEARN MORE
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        )}
      </section>

      {/* 🔻 ADD THIS TO REMOVE DEFAULT SWIPER ARROWS */}
      <style>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
        content: "";
        display: none !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
         width: 40px;
         height: 40px;
         background-color: black;
         border-radius: 9999px;
         z-index: 10;
        }
      `}</style>
    </>
  );
}