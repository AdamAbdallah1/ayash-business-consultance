import React, { useState, useEffect } from "react";

export default function AnnouncementBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("announcementDismissed");
    if (!dismissed) setShow(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("announcementDismissed", "true");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("announcementDismissed", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-3xl bg-[#B82E33] text-white shadow-lg rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 z-50">
      
      <span className="text-sm sm:text-base text-center sm:text-left">
        We use cookies to enhance your experience. By continuing, you agree to our policy.
      </span>
      
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="bg-white text-[#B82E33] font-semibold px-4 py-1.5 rounded-lg hover:bg-white/90 transition"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-transparent border border-white/70 text-white font-semibold px-4 py-1.5 rounded-lg hover:bg-white/20 transition"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
