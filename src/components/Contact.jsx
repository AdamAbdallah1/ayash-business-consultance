import React from "react";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-40 md:py-60 px-4 flex flex-col items-center text-black justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-3">Contact Us</h2>

      <p className="mt-2 text-black/80 max-w-2xl mx-auto text-lg text-center">
        Have capital and want to turn it into a real working business? Reach out — we’ll guide you from idea to execution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-y-6 gap-x-3 w-full max-w-5xl justify-items-center">
        
        <div className="bg-gray-900/10 backdrop-blur-xl shadow-xl rounded-2xl p-4 sm:p-6 text-left border border-white/20 w-full max-w-md hover:scale-[1.02] transition flex flex-col">
          <h3 className="text-lg font-semibold mb-3 text-black">Contact Information</h3>

          <p className="flex items-center gap-2 text-black/90">
            <FaWhatsapp className="text-green-500" size={20} /> +961 81 090 757
          </p>
          <p className="flex items-center gap-2 text-black/90 mt-2">
            <HiMail className="text-blue-400" size={20} /> cedars.tech.consulting@gmail.com
          </p>
          <p className="flex items-center gap-2 text-black/90 mt-2">
            <HiLocationMarker className="text-red-500" size={20} /> Beirut, Lebanon
          </p>

          <div className="mt-3 flex gap-3 text-black">
            <a href="#" className="hover:text-[#B52E33] transition"><FaLinkedin size={18} /></a>
            <a href="#" className="hover:text-[#B52E33] transition"><FaInstagram size={18} /></a>
          </div>
        </div>

        <div className="bg-gray-900/10 backdrop-blur-xl shadow-xl rounded-2xl p-4 sm:p-6 text-left border border-white/20 w-full max-w-md hover:scale-[1.02] transition flex flex-col">
          <h3 className="text-lg font-semibold mb-3 text-black">Business Hours</h3>

          <p className="text-black/80">Monday – Friday</p>
          <p className="font-semibold text-black">10:00 AM – 6:00 PM</p>

          <p className="mt-3 text-black/80">Saturday – Sunday</p>
          <p className="font-semibold text-black">Closed</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-3 justify-center w-full max-w-3xl">
  <a
    href="https://wa.me/96181090757"
    className="px-6 py-2 bg-[#25D366] text-black font-semibold rounded-xl shadow-lg hover:opacity-90 hover:scale-105 transition flex items-center gap-2 justify-center min-w-[180px]"
  >
    <FaWhatsapp color="white" size={18} /> 
    <span className="text-white text-sm sm:text-base">WhatsApp Us</span>
  </a>

  <a
    href="mailto:cedars.tech.consulting@gmail.com"
    className="px-6 py-2 bg-[#3A5487] text-white font-semibold rounded-xl shadow-lg hover:opacity-90 hover:scale-105 transition flex items-center gap-2 justify-center min-w-[180px]"
  >
    <span className="text-sm sm:text-base">Send Email</span>
  </a>
</div>
    </section>
  );
}
