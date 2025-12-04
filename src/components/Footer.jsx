import React from 'react';
import Logo from '../assets/logo.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a0d3c] text-gray-300 py-6 px-6 border-t border-yellow-500/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Company Logo" className="w-12 h-12" />
          <span className="text-lg font-semibold text-white tracking-wide">Consulting Co.</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium">
          {['Home', 'About', 'Packages', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-400 transition transform hover:-translate-y-[1px]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3 text-base">
          {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-yellow-400 transition transform hover:-translate-y-[1px]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-gray-500 text-xs md:text-sm">
        &copy; {new Date().getFullYear()} Consulting Co. All rights reserved.
      </p>
    </footer>
  );
}
