import React from 'react';
import Background from '../assets/background2.svg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center text-center bg-cover bg-center
                 md:bg-cover md:bg-center bg-[length:120%] md:bg-[length:100%]"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-white flex flex-col justify-center items-center px-4">

        <motion.h1
          className="text-3xl md:text-6xl font-bold mb-4 md:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Business Development & Consultancy
        </motion.h1>

        <motion.div
          className="flex flex-col items-center mt-4 md:mt-0 space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="max-w-2xl text-lg md:text-xl opacity-90">
            We transform your capital into a working business.
          </p>

          <motion.button
            onClick={() => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }}
            className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Get Started
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
