import React, { useEffect, useState } from "react";

export default function ExitIntentWidget() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10) setShow(true); // user moves mouse near top
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => setShow(false);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-[#B82E33] text-white p-4 rounded-xl shadow-xl flex items-center gap-3 z-50 max-w-xs">
      <span className="text-sm">Before you go, see our top packages!</span>
      <button
        onClick={handleClose}
        className="ml-auto p-1 rounded-full hover:bg-white/20 transition"
      >
        ✕
      </button>
    </div>
  );
}
