import React, { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";

export default function AnnouncementBar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const dismissed = localStorage.getItem("announcementDismissed");
        if (!dismissed) setShow(true);
    }, []);

    const handleClose = () => {
        setShow(false);
        localStorage.setItem("announcementDismissed", "true");
    };

    if (!show) return null;

    return ( <div className="fixed bottom-0 w-full bg-[#B82E33] text-white py-3 px-6 flex items-center justify-between shadow-lg z-50"> <span className="text-sm sm:text-base">
    We use cookies to enhance your experience. By continuing, you agree to our policy. </span> <button
        onClick={handleClose}
        className="ml-4 p-1 rounded-full hover:bg-white/20 transition"
    > <HiX size={20} /> </button> </div>
    );
}
