import React from 'react';
import { motion } from "framer-motion";
import { HiOutlineChartBar, HiOutlineLightBulb } from "react-icons/hi";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="about"
      className="w-full py-20 md:py-40 px-6 flex justify-center"
    >
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-14 max-w-3xl border border-white/20 text-center">
        
        <h2 className="text-2xl md:text-3xl font-extrabold text-black">About Us</h2>
        
        <div className="w-24 h-1 bg-linear-to-r from-[#B82E33] via-white/50 to-[#3B82F6] mx-auto my-4 rounded-full"></div>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed text-left flex items-start gap-2">
          <HiOutlineChartBar className="text-[#B82E33] mt-1" size={22} />
          We partner with ambitious founders and leaders in Qatar to build scalable, systematic growth. Our approach turns strategy into actionable plans with measurable results.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed text-left flex items-start gap-2">
          <HiOutlineLightBulb className="text-[#3B82F6] mt-1" size={22} />
          Whether you're starting a new project or expanding digital services, we guide you step-by-step and provide premium, practical solutions built for real growth.
        </p>

        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-linear-to-r from-[#B82E33] to-[#3B82F6] text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition"
          >
            Get in Touch
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default About;
