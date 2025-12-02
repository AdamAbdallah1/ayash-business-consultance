import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section data-aos="fade-up" id="contact" className="py-20 px-6 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold">Contact Us</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Have capital and want to turn it into a real working business?
        Reach out to us — we’ll guide you from idea to execution.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        
        <div className="bg-white/50 backdrop-blur-md shadow-lg rounded-xl p-6 text-left hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="flex items-center gap-3 text-gray-700">
            <FaWhatsapp className="text-green-500" size={22} />
            +961 81 090 757
          </p>
          <p className="flex items-center gap-3 text-gray-700 mt-3">
            <HiMail className="text-blue-500" size={22} />
            cedars.tech.consulting@gmail.com
          </p>
          <p className="flex items-center gap-3 text-gray-700 mt-3">
            <HiLocationMarker className="text-red-500" size={22} />
            Beirut, Lebanon
          </p>

          <div className="mt-4 flex gap-4">
            <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin /></a>
            <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-md shadow-lg rounded-xl p-6 text-left hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
          <p className="text-gray-700">Monday – Friday</p>
          <p className="font-semibold text-gray-900">10:00 AM – 6:00 PM</p>
          <p className="mt-4 text-gray-700">Saturday – Sunday</p>
          <p className="font-semibold text-gray-900">Closed</p>
        </div>

      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/96181090757"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition flex items-center gap-2 justify-center"
        >
          <FaWhatsapp size={20} />
          WhatsApp Us
        </a>

        <a
          href="mailto:abc.consulting@gmail.com"
          className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
