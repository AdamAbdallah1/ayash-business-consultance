import React from 'react';
import Logo from '../assets/logo.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Company Logo" className="w-20 h-20" />
          <span className="text-xl font-semibold text-white">Consulting Co.</span>
        </div>

        <div className="flex space-x-6">
          <a href="#hero" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#packages" className="hover:text-yellow-400">Packages</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-400"><FaLinkedinIn /></a>
        </div>
      </div>

      <p className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Consulting Co. All rights reserved.
      </p>
    </footer>
  );
}
