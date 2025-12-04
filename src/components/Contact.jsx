import React from "react";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 flex flex-col items-center text-black justify-center"
    >
      <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
      <p className="mt-4 text-black/80 max-w-2xl mx-auto text-lg text-center">
        Have capital and want to turn it into a real working business? Reach out — we’ll guide you from idea to execution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-14 gap-8 w-full max-w-6xl justify-items-center">
        <div className="bg-gray-900/10 backdrop-blur-xl shadow-xl rounded-2xl p-6 sm:p-8 text-left border border-white/30 w-full max-w-md hover:scale-[1.02] transition flex flex-col">
          <h3 className="text-xl font-semibold mb-4 text-black">Contact Information</h3>

          <p className="flex items-center gap-3 text-black/90">
            <FaWhatsapp className="text-green-500" size={22} /> +961 81 090 757
          </p>
          <p className="flex items-center gap-3 text-black/90 mt-3">
            <HiMail className="text-blue-400" size={22} /> cedars.tech.consulting@gmail.com
          </p>
          <p className="flex items-center gap-3 text-black/90 mt-3">
            <HiLocationMarker className="text-red-500" size={22} /> Beirut, Lebanon
          </p>
          <div className="mt-4 flex gap-4 text-black">
            <a href="#" className="hover:text-[#B52E33] transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-[#B52E33] transition"><FaInstagram /></a>
          </div>
        </div>

        <div className="bg-gray-900/10 backdrop-blur-xl shadow-xl rounded-2xl p-6 sm:p-8 text-left border border-white/30 w-full max-w-md hover:scale-[1.02] transition flex flex-col">
          <h3 className="text-xl font-semibold mb-4 text-black">Business Hours</h3>
          <p className="text-black/80">Monday – Friday</p>
          <p className="font-semibold text-black">10:00 AM – 6:00 PM</p>
          <p className="mt-4 text-black/80">Saturday – Sunday</p>
          <p className="font-semibold text-black">Closed</p>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-4 justify-center w-full max-w-3xl">
        <a
          href="https://wa.me/96181090757"
          className="px-10 py-4 bg-[#B52E33] text-black font-semibold rounded-xl shadow-lg hover:opacity-90 hover:scale-105 transition flex items-center gap-2 justify-center"
        >
          <FaWhatsapp color="white" size={20} /> <span className="text-white">WhatsApp Us</span>
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
