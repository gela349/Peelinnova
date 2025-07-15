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
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="/" className="flex items-center space-x-2 text-green-700 text-2xl font-bold">
          <img src={logo} alt="PeelInnova Logo" className="h-8 w-8" />
          <span>Peel<span className="text-orange-500">Innova</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="space-x-6 hidden md:flex">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-black hover:text-green-600 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
