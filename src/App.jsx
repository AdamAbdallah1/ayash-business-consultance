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
import AnnouncementBar from "./components/AnnouncementBar";
import FeedbackWidget from "./components/FeedbackWidget";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
  const handleScrollBar = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    const scrollBar = document.getElementById("scrollBar");
    if (scrollBar) scrollBar.style.width = scrollPercent + "%";
  };

  window.addEventListener("scroll", handleScrollBar);
  return () => window.removeEventListener("scroll", handleScrollBar);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById("backToTop");
      if (!btn) return;

      if (window.scrollY > 400) {
        btn.classList.remove("opacity-0", "pointer-events-none");
        btn.classList.add("opacity-100");
      } else {
        btn.classList.add("opacity-0", "pointer-events-none");
        btn.classList.remove("opacity-100");
      }
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
      <div id="scrollBar" className="fixed top-0 left-0 h-1 bg-[#B82E33] w-0 z-50"></div>
      <Hero />
      <About />
      <Packages />
      <Contact />
      <Footer />
      <FeedbackWidget />
      <button
        id="backToTop"
        className="fixed bottom-6 right-6 bg-[#B82E33] text-white p-3 rounded-full shadow-lg 
        hover:bg-[#b4151a] hover:scale-105 transition opacity-0 pointer-events-none"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
      <AnnouncementBar />
    </div>
  );
}

export default App;
