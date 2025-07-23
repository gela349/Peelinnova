import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/product' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-[#1f4f3f] shadow-md fixed w-full top-0 z-50 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="/" className="flex items-center space-x-2 text-white text-xl font-bold">
          <img
            src={logo}
            alt="PeelInnova Logo"
            className="h-40 w-40 -my-10 object-contain relative z-10"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="space-x-6 hidden md:flex">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-green-200 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden bg-green-700 px-4 pb-4 space-y-2">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-green-200 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}