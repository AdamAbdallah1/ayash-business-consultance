import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 flex flex-col items-center text-white justify-center"
    >
      <h2 className="text-4xl font-bold text-center">Contact Us</h2>
      <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg text-center">
        Have capital and want to turn it into a real working business? Reach out — we’ll guide you from idea to execution.
      </p>

      <div className="grid md:grid-cols-2 mt-14 gap-8 w-full max-w-6xl">
        <div className="bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl p-8 text-left border border-white/30 hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold mb-4 text-[#B52E33]">Contact Information</h3>
          <p className="flex items-center gap-3 text-white/90">
            <FaWhatsapp className="text-green-500" size={22} /> +961 81 090 757
          </p>
          <p className="flex items-center gap-3 text-white/90 mt-3">
            <HiMail className="text-blue-400" size={22} /> cedars.tech.consulting@gmail.com
          </p>
          <p className="flex items-center gap-3 text-white/90 mt-3">
            <HiLocationMarker className="text-red-500" size={22} /> Beirut, Lebanon
          </p>
          <div className="mt-4 flex gap-4 text-white">
            <a href="#" className="hover:text-[#B52E33] transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-[#B52E33] transition"><FaInstagram /></a>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl p-8 text-left border border-white/30 hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold mb-4 text-[#B52E33]">Business Hours</h3>
          <p className="text-white/80">Monday – Friday</p>
          <p className="font-semibold text-white">10:00 AM – 6:00 PM</p>
          <p className="mt-4 text-white/80">Saturday – Sunday</p>
          <p className="font-semibold text-white">Closed</p>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center w-full max-w-3xl">
        <a
          href="https://wa.me/96181090757"
          className="px-10 py-4 bg-[#B52E33] text-white font-semibold rounded-xl shadow-lg hover:opacity-90 hover:scale-105 transition flex items-center gap-2 justify-center"
        >
          <FaWhatsapp size={20} /> WhatsApp Us
        </a>

        <a
          href="mailto:cedars.tech.consulting@gmail.com"
          className="px-10 py-4 bg-[#3A5487] text-white font-semibold rounded-xl shadow-lg hover:opacity-90 hover:scale-105 transition flex items-center gap-2 justify-center"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
