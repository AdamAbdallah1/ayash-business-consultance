import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 bg-[#1a0d3c] flex justify-center"
    >
      <div className="bg-white/10 backdrop-blur-xl shadow-xl rounded-3xl p-10 md:p-14 max-w-3xl border border-yellow-400/30 text-center">

        <h2 className="text-4xl font-extrabold text-white">About Our Company</h2>
        <div className="w-24 h-1 bg-[#B82E33] mx-auto my-4 rounded-full"></div>

        <p className="mt-4 text-gray-200 text-lg leading-relaxed">
          At Ayash Business Consultancy, we help individuals turn their available capital
          into a fully functioning business. From branding and strategy to launching your
          online presence, our team delivers profitable business systems tailored to your goals.
        </p>

        <p className="mt-4 text-gray-200 leading-relaxed">
          Whether you're starting a new project or expanding your digital services, we guide you
          step-by-step and provide premium, practical solutions built for real growth.
        </p>
        
      </div>
    </section>
  );
}

export default About;
