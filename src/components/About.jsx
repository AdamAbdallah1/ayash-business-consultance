import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from "../components/FadeIn";

function About() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
      id="about"
      className="w-full py-20 md:py-60 px-6 flex justify-center"
    >
      <div className="bg-gray-900/10 backdrop-blur-xl shadow-xl rounded-3xl p-10 md:p-14 max-w-3xl border border-white/30 text-center">

        <h2 className="text-2xl font-extrabold text-black">About Our Company</h2>
        <div className="w-24 h-1 bg-[#B82E33] mx-auto my-4 rounded-full"></div>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          At Ayash Business Consultancy, we help individuals turn their available capital
          into a fully functioning business. From branding and strategy to launching your
          online presence, our team delivers profitable business systems tailored to your goals.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Whether you're starting a new project or expanding your digital services, we guide you
          step-by-step and provide premium, practical solutions built for real growth.
        </p>
        
      </div>
    </motion.section>
  );
}

export default About;
