import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaCommentDots } from "react-icons/fa";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const savedRating = localStorage.getItem("feedbackRating");
    if (savedRating) setRating(Number(savedRating));

    const handleScroll = () => {
      const backToTopBtn = document.getElementById("backToTop");
      if (backToTopBtn) {
        const isVisible = !backToTopBtn.classList.contains("opacity-0");
        setVisible(isVisible);
        if (!isVisible) setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = () => {
    if (rating === 0) return;
    localStorage.setItem("feedbackRating", rating);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setOpen(false); 
  };

  if (!visible) return null;

  const widget = (
    <>
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="bg-[#B82E33] text-white p-3 rounded-full shadow-lg hover:bg-[#b4151a] hover:scale-110 transition text-xl flex items-center justify-center"
          >
            <FaCommentDots />
          </button>
        )}

        {open && (
          <div className="bg-white shadow-xl rounded-xl p-4 w-64 flex flex-col items-center border border-gray-300 mt-2">
            <h4 className="text-sm font-semibold mb-2 text-gray-800 text-center">
              How helpful was this page?
            </h4>

            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setRating(num)}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition ${
                    rating >= num
                      ? "bg-[#B82E33] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSubmit}
                className="bg-[#B82E33] text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-[#b4151a] transition"
              >
                Submit
              </button>
              <button
                onClick={() => setOpen(false)}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {showToast && (
        <div className="fixed bottom-6 right-6 bg-[#B82E33] text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in-up z-50">
          Thanks for your feedback!
        </div>
      )}
    </>
  );

  return createPortal(widget, document.body);
}
