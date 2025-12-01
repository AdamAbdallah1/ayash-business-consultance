import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide on scroll down, show on scroll up
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full px-6 py-1 flex justify-between items-center fixed top-0 left-0 z-50 bg-white/20 backdrop-blur-md shadow-md transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Company Logo" className="w-20 h-20" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#hero" className="text-black hover:text-yellow-400 font-semibold">Home</a>
        <a href="#about" className="text-black hover:text-yellow-400 font-semibold">About</a>
        <a href="#packages" className="text-black hover:text-yellow-400 font-semibold">Packages</a>
        <a href="#contact" className="text-black hover:text-yellow-400 font-semibold">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-black focus:outline-none"
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md flex flex-col items-center justify-center space-y-6 md:hidden z-40">
          <a href="#hero" className="text-black text-2xl font-semibold" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="text-black text-2xl font-semibold" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#packages" className="text-black text-2xl font-semibold" onClick={() => setMobileMenuOpen(false)}>Packages</a>
          <a href="#contact" className="text-black text-2xl font-semibold" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
