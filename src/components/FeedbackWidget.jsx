import React, { useState, useEffect } from "react";

export default function FeedbackWidget() {
const [open, setOpen] = useState(false);
const [submitted, setSubmitted] = useState(false);
const [rating, setRating] = useState(0);

useEffect(() => {
const saved = localStorage.getItem("feedbackSubmitted");
if (saved) setSubmitted(true);
}, []);

const handleSubmit = () => {
if (rating === 0) return;
localStorage.setItem("feedbackSubmitted", "true");
localStorage.setItem("feedbackRating", rating);
setSubmitted(true);
setOpen(false);
alert("Thanks for your feedback! ✅");
};

if (submitted) return null; 

return ( <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
{!open && (
<button
onClick={() => setOpen(true)}
className="bg-[#B82E33] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#b4151a] hover:scale-105 transition"
>
Feedback </button>
)}

```
  {open && (
    <div className="bg-white shadow-xl rounded-xl p-4 w-64 flex flex-col items-center border border-gray-300">
      <h4 className="text-sm font-semibold mb-2 text-gray-800 text-center">
        How helpful was this page?
      </h4>

      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setRating(num)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition ${
              rating >= num ? "bg-[#B82E33] text-white" : "bg-gray-200 text-gray-700"
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
);
}
