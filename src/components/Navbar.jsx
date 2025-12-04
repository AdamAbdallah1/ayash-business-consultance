import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  return (
    <nav
  className={`w-full px-8 md:px-12 py-3 flex justify-between items-center fixed top-0 left-0 z-50
    bg-white backdrop-blur-xl shadow-lg border-b border-yellow-500/20
    transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}
  style={{ minHeight: '80px' }}
>
  <div className="flex items-center h-full">
    <img
      src={Logo}
      alt="Company Logo"
      className="h-16 object-contain scale-65"
    />
  </div>


      <div className="hidden md:flex items-center space-x-10">
        {['Home', 'About', 'Packages', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative font-semibold tracking-wide text-gray-900 hover:text-yellow-500 transition group"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        {/* GET STARTED BUTTON */}
        <a
          href="#contact"
          className="ml-4 px-6 py-2 bg-[#b6595c] hover:bg-[#8f1519] text-white font-semibold rounded-xl shadow-lg transition-all duration-300 ease-out"
        >
          Get Started
        </a>
      </div>

      <div className="md:hidden z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-black focus:outline-none"
        >
          {mobileMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#1a0d3c]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden z-40">
          {['Home', 'About', 'Packages', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-3xl font-semibold hover:text-yellow-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-6 py-3 bg-[#b6595c] hover:bg-[#8f1519] text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
