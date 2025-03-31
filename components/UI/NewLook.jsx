"use client"
import { useState, useEffect } from "react";

export default function NewLook() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Separate state for transition

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Make it visible first
      setTimeout(() => setIsOpen(true), 50); // Delay opening for transition
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false); // Slide out
    setTimeout(() => setIsVisible(false), 300); // Hide after animation
  };

  return (
    <>
      {isVisible && (
        <div
          className={`fixed my-2 lg:w-1/5 top-20 right-0 bg-gray-900 bg-opacity-50 flex items-center rounded-l-xl justify-center z-50 
          transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Modal Content */}
          <div className="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 px-4 py-2 rounded-l-xl shadow-xl max-w-lg mx-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-left text-white w-[95%]">
              <h2 className="text-sm lg:text-base font-semibold">
                🚀 We've given our website a fresh new design, What do you think about our new look!
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
