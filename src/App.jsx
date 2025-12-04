import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const btn = document.getElementById("backToTop");
    const handleScroll = () => {
      if (window.scrollY > 400) btn.style.display = "block";
      else btn.style.display = "none";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <Loader setLoading={setLoading} />;

  return (
    <div
      className="font-sans bg-white text-gray-900"
      style={{
        background: "white",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <Contact />
      <Footer />

      <button
        id="backToTop"
        className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-500 hover:scale-105 transition hidden"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
}

export default App;
