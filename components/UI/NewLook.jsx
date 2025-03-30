"use client"
import { useState, useEffect } from "react";

export default function NewLook() {
  const [isOpen, setIsOpen] = useState(false); // Initially, modal is closed

  // Show modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true); // Open the modal after 3 seconds
    }, 3000); // 3000ms = 3 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Modal Background */}
      {isOpen && (
        <div className="fixed m-2 lg:w-1/5 top-25 right-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 px-4 py-2 rounded-t-xl rounded-l-xl shadow-xl max-w-lg mx-auto relative">
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
              <h2 className="text-sm lg:text-base font-semibold ">🚀 We've given our website a fresh new design, What do you think about our new look!</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
