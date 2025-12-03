import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        relative w-full min-h-screen flex items-center 
        bg-gradient-to-br from-[#6b08d2] via-[#945a62] to-[#7c3c64]
        text-white px-6 md:px-20
      "
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Business Development & Consultancy
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We transform your capital into a working business.
        </motion.p>

        <motion.button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="
            px-10 py-4 bg-[#B82E33] text-black font-bold 
            rounded-xl shadow-lg hover:bg-yellow-500 hover:scale-105 
            transition-all
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
