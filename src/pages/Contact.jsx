import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      {/* Map Header and Map */}
      <section className="bg-[#fefefe] mt-0 py-14 px-6 text-gray-800 font-[Montserrat]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-wide font-[Courgette]">
          Find Us
        </h2>

        <div className="w-full">
          <iframe
            title="PeelInnova Kumasi Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126804.83017610651!2d-1.6161060500000002!3d6.6900854999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb93e59a4e4c49%3A0x829c711d7b65e682!2sKumasi!5e0!3m2!1sen!2sgh!4v1754836021304!5m2!1sen!2sgh"
            className="w-full h-[400px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 bg-white text-gray-800 font-[Montserrat]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2 tracking-wide font-[Poppins]">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-4 text-base leading-relaxed">
              Reach out today. We’re here to help!
            </p>
            <div className="space-y-2 text-base text-gray-700 leading-relaxed">
              <p className="text-lg">📧 peellnnova25@gmail.com</p>
              <p className="text-lg">3rd Floor Marble, Kumasi, Ghana</p>
            </div>

            {/* Partnerships Contact */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-black tracking-wide font-[Poppins]">
                For Partnerships, contact:
              </h3>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                  <span className="text-green-600"></span> 059 491 6406
                </p>
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                  <span className="text-green-600"></span> 024 710 4398
                </p>
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                  <span className="text-green-600"></span> 020 755 1942
                </p>
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                  <span className="text-green-600"></span> 050 343 7462
                </p>
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 tracking-wide font-[Poppins]">
              Send a Message
            </h2>
            <form
              action="https://formspree.io/f/mqalbkjg"
              method="POST"
              className="space-y-3"
            >
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-base"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-base"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-base"
                placeholder="Your Message"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-green-700 transition text-lg font-medium"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}