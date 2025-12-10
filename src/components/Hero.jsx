import React from "react";
import { motion } from "framer-motion";
import HeroBg from "../assets/HeroBg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 overflow-hidden mt-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/80 " />

      <div className="relative z-10 w-full max-w-4xl flex  flex-col items-start text-left sm:mt-20 px-4 sm:px-6">
        <motion.h1
          className="text-white font-extrabold leading-snug mb-4 sm:mb-6"
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)"
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ayash Business Development
        </motion.h1>

        <motion.p
          className="text-white/90 mb-3 sm:mb-6"
          style={{
            fontSize: "clamp(1rem, 3.5vw, 1.75rem)"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Build a Business That Scales.
        </motion.p>

        <motion.p
          className="text-white/70 mb-6 sm:mb-10"
          style={{
            fontSize: "clamp(0.875rem, 2.5vw, 1.25rem)"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Strategic business development for founders in Qatar ready to systemize growth, enter new markets, and lead with confidence.
        </motion.p>

        <motion.button
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 sm:px-10 py-3 sm:py-4 bg-[#B82E33] text-white font-bold rounded-xl shadow-lg hover:bg-[#8f1519] hover:scale-105 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
