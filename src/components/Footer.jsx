import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12)
      setGreeting("Good morning! Let's grow your business today.");
    else if (hour >= 12 && hour < 18)
      setGreeting("Good afternoon! Let’s boost your business now.");
    else
      setGreeting("Good evening! Planning for tomorrow? Let’s chat!");
  }, []);

  return (
    <footer className="bg-[#1a0d3c] text-gray-300 py-8 px-6 border-t border-yellow-500/20 relative overflow-hidden">
      
      {greeting && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#B82E33]/90 text-white px-4 py-2 rounded-b-xl shadow-lg text-sm font-semibold text-center max-w-xl w-full"
        >
          {greeting}
        </motion.div>
      )}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mt-12">
        
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Company Logo" className="w-12 h-12" />
          <span className="text-lg font-semibold text-white tracking-wide">
            Consulting Co.
          </span>
        </div>

        <div className="flex space-x-6 text-sm font-medium">
          {['Home', 'About', 'Packages', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#B82E33] transition transform hover:-translate-y-px"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex space-x-3 text-base">
          {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/ciaoace"
              className="hover:text-[#B82E33] transition transform hover:-translate-y-px"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-gray-500 text-xs md:text-sm">
        &copy; {new Date().getFullYear()} Consulting Co. All rights reserved.
      </p>
      <p className="text-[11px] text-gray-500 mt-2 opacity-70 flex justify-center">
        Powered by <span className="font-semibold"> Cedars Tech</span>
      </p>
    </footer>
  );
}
