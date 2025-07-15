import React from "react";

export default function Contact() {
  return (
    <section className="px-6 py-16 bg-white text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We'd love to hear from you. Reach out with questions, feedback, or partnership inquiries.
        </p>
      </div>

      {/* Contact Details & Form */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Get in Touch</h2>
          <p className="mb-4 text-gray-700">
            📍 Location: Accra, Ghana  
            <br />
            📞 Phone: +233 50 740 9659  
            <br />
            📧 Email: angelaadubea25@gmail.com  
          </p>

          <div className="mt-6 space-x-4">
            {/* Add your actual social links here */}
            <a href="#" className="text-orange-500 hover:underline">Facebook</a>
            <a href="#" className="text-orange-500 hover:underline">Instagram</a>
            <a href="#" className="text-orange-500 hover:underline">LinkedIn</a>
          </div>
        </div>

        {/* Right: Form */}
        <form className="bg-green-50 p-6 rounded-xl shadow">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
