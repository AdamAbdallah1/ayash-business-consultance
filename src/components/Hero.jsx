import React from "react";
import { motion } from "framer-motion";
import HeroBg from "../assets/HeroBg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 overflow-hidden"
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

      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-16 py-16 md:py-0">

        {/* Left Column: Title */}
        <motion.div
          className="flex flex-col justify-start w-full md:flex-1 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-white font-extrabold leading-snug md:leading-snug"
            style={{
              fontSize: "clamp(1.8rem, 6vw, 4rem)",
            }}
          >
            <span className="inline md:block">Ace</span>{" "}
            <span className="inline md:block">Boost</span>{" "}
            <span className="inline md:block">Management</span>{" "}
            <span className="inline md:block">Consulting</span>
          </motion.h1>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          className="flex flex-col justify-center w-full md:flex-1 mt-6 md:mt-0 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.p className="text-white/90 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl font-medium">
            Build a business that scales
          </motion.p>

          <motion.p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Strategic business development for founders in Qatar ready to systemize growth, enter new markets, and lead with confidence.
          </motion.p>

          <motion.button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#B82E33] text-white font-bold rounded-lg shadow-lg hover:bg-[#8f1519] hover:scale-105 transition-all text-sm sm:text-base md:text-lg max-w-max"
          >
            Get Started
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
