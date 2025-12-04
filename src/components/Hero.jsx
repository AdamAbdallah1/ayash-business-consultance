import React from "react";
import { motion } from "framer-motion";
import HeroBg from "../assets/HeroBg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 overflow-hidden mt-10
                 bg-white md:bg-transparent"
    >
      {/* Background Image only on md and up */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      ></div>

      {/* Dark Overlay only on md and up */}
      <div className="absolute inset-0 hidden md:block bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug sm:leading-tight mb-4 sm:mb-6
                     text-black md:text-white"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Business Development & Consultancy
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-2xl max-w-xl sm:max-w-2xl mb-6 sm:mb-10
                     text-gray-700 md:text-white/90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We transform your capital into a working business.
        </motion.p>

        <motion.button
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 sm:px-10 py-3 sm:py-4 bg-[#B82E33] text-white font-bold rounded-xl shadow-lg
                     hover:bg-[#8f1519] hover:scale-105 transition-all"
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
