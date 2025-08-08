import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-10 px-6 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h4 className="text-lg md:text-xl font-semibold mb-3 text-white">PeelInnova</h4>
          <p className="text-base">3rd Floor, Accra, Ghana</p>
          <p className="mt-1 text-base">peelinnova@gmail.com</p>
          <p className="mt-1 text-base">Mon–Fri: 8:30am–4:30pm</p>
        </div>

        {/* About */}
        <div>
          <h4 className="text-lg md:text-xl font-semibold mb-3 text-white">About Us</h4>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="hover:underline">Mission</a></li>
            <li><a href="#" className="hover:underline">Vision</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg md:text-xl font-semibold mb-3 text-white">Categories</h4>
          <ul className="space-y-2 text-base">
            <li>Repellent Products</li>
            <li>Sustainability Projects</li>
            <li>Community Solutions</li>
            <li>Green Innovation</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="text-lg md:text-xl font-semibold mb-3 text-white">Get in Touch</h4>
          <div className="flex items-center gap-2 mb-2 text-base">
            <FaEnvelope className="text-orange-500 text-lg" />
            <span>peelinnova@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mb-4 text-base">
            <FaPhone className="text-orange-500 text-lg" />
            <span>+233 598 551 301</span>
          </div>
          <button className="bg-orange-500 text-black text-sm md:text-base px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition">
            Contact Us
          </button>
          <div className="flex space-x-4 mt-4 text-2xl text-gray-400">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} PeelInnova. All rights reserved.
      </div>
    </footer>
  );
}