import { useEffect } from "react";
import Logo from "../assets/logo.svg";

export default function Loader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <img
        src={Logo}
        alt="Logo"
        className="w-24 h-24 animate-pulse"
      />
    </div>
  );
}
