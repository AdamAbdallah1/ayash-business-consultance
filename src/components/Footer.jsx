import React from 'react';
import Logo from '../assets/logo.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a0d3c] text-gray-300 py-12 px-6 border-t border-yellow-500/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Company Logo" className="w-16 h-16" />
          <span className="text-xl font-semibold text-white tracking-wide">Consulting Co.</span>
        </div>

        <div className="flex space-x-8 text-sm font-medium">
          <a href="#hero" className="hover:text-yellow-400 transition">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#packages" className="hover:text-yellow-400 transition">Packages</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        <div className="flex space-x-4 text-lg">
          {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
            <a key={idx} href="#" className="hover:text-yellow-400 transition">
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Consulting Co. All rights reserved.
      </p>
    </footer>
  );
}
