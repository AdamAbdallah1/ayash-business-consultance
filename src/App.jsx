import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // animation duration in ms
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
