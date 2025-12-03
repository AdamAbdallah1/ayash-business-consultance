import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 bg-[#1a0d3c]  flec-col items-center text-white justify-center"
    >
      <h2 className="text-4xl font-bold text-center">Contact Us</h2>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
        Have capital and want to turn it into a real working business?
        Reach out — we’ll guide you from idea to execution.
      </p>

      <div className="grid md:grid-cols-2 mt-14 gap-8">
        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl p-8 text-left border border-yellow-400/30">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Contact Information</h3>

          <p className="flex items-center gap-3 text-gray-200">
            <FaWhatsapp className="text-green-500" size={22} /> +961 81 090 757
          </p>

          <p className="flex items-center gap-3 text-gray-200 mt-3">
            <HiMail className="text-blue-400" size={22} />
            cedars.tech.consulting@gmail.com
          </p>

          <p className="flex items-center gap-3 text-gray-200 mt-3">
            <HiLocationMarker className="text-red-500" size={22} />
            Beirut, Lebanon
          </p>

          <div className="mt-4 flex gap-4">
            <a href="#" className="hover:text-yellow-400 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl p-8 text-left border border-yellow-400/30">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Business Hours</h3>

          <p className="text-gray-200">Monday – Friday</p>
          <p className="font-semibold text-white">10:00 AM – 6:00 PM</p>

          <p className="mt-4 text-gray-200">Saturday – Sunday</p>
          <p className="font-semibold text-white">Closed</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/96181090757"
          className="px-10 py-4 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-500 hover:scale-105 transition flex items-center gap-2 justify-center"
        >
          <FaWhatsapp size={20} />
          WhatsApp Us
        </a>

        <a
          href="mailto:cedars.tech.consulting@gmail.com"
          className="px-10 py-4 bg-yellow-500 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-400 hover:scale-105 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
