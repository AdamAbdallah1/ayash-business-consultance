import React from 'react';
import { FcAbout } from "react-icons/fc";

function About() {
  return (
    <section
      id="about" data-aos="fade-up"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20 px-6"
    >
      <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-10 max-w-3xl text-center border border-white/40">
        
        <h2 className="text-4xl font-extrabold text-gray-800">
          About Our Company
        </h2>

        <div className="w-24 h-1 bg-yellow-400 mx-auto my-4 rounded-full"></div>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          At Ayash Business Consultancy, we help individuals turn their available capital into a
          fully functioning business. From branding and strategy to launching your
          online presence, our team builds modern, profitable business systems
          tailored to your goals and budget.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Whether you're starting a new project or expanding your digital services,
          we guide you step-by-step and deliver premium, practical solutions.
        </p>
        
      </div>
      <a
        href="#contact"
        className="mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:scale-105 transition"
      >
        Get in Touch
      </a>
    </section>
  );
}

export default About;
