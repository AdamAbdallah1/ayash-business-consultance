import React from "react";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-40 md:py-60 px-4 flex flex-col items-center text-black justify-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Contact Us</h2>

      <p className="mt-2 text-black/80 max-w-2xl mx-auto text-lg text-center">
        Define your growth challenge. We'll bring the plan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6 w-full max-w-5xl">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 sm:p-8 flex flex-col w-full hover:scale-[1.03] transition-transform duration-300">
          <h3 className="text-lg font-semibold mb-4 text-black">Contact Information</h3>

          <p className="flex items-center gap-2 text-black/90">
            <FaWhatsapp className="text-green-500" size={20} /> +974 3999 5533
          </p>
          <p className="flex items-center gap-2 text-black/90 mt-3">
            <HiMail className="text-blue-400" size={20} /> elayashdaniel@gmail.com
          </p>
          <p className="flex items-center gap-2 text-black/90 mt-3">
            <HiLocationMarker className="text-red-500" size={20} /> Doha, Qatar
          </p>

          <div className="mt-4 flex gap-4 text-black">
            <a href="#" className="hover:text-[#B82E33] transition"><FaLinkedin size={18} /></a>
            <a href="#" className="hover:text-[#B82E33] transition"><FaInstagram size={18} /></a>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 sm:p-8 flex flex-col w-full hover:scale-[1.03] transition-transform duration-300">
          <h3 className="text-lg font-semibold mb-4 text-black">Business Hours</h3>

          <p className="text-black/80">Sunday – Thursday</p>
          <p className="font-semibold text-black">09:00 AM – 6:00 PM</p>

          <p className="mt-3 text-black/80">Friday – Saturday</p>
          <p className="font-semibold text-black">Closed</p>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-4 justify-center w-full max-w-3xl">
        <a
          href="https://wa.me/97439995533"
          className="px-6 py-3 bg-linear-to-r from-[#25D366] to-[#1AA54A] text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform flex items-center gap-2 justify-center min-w-[180px]"
        >
          <FaWhatsapp size={18} /> WhatsApp Us
        </a>

        <a
          href="mailto:elayashdaniel@gmail.com"
          className="px-6 py-3 bg-linear-to-r from-[#3A5487] to-[#2A3D6D] text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform flex items-center gap-2 justify-center min-w-[180px]"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
