import React from "react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  const handleDetectClick = () => {
    navigate("/features");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold mb-4">
          Think you’ve spotted a fake? Test it now!
        </h2>
        <p className="text-xl font-normal md:text-xl text-white/90 mb-8">
          Click below to upload and verify your content instantly
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <button
            onClick={handleDetectClick}
            className="border border-orange-600 text-orange-600 bg-white px-6 py-3 rounded-md hover:bg-orange-600 hover:text-white hover:scale-105 transition-all duration-300 font-normal text-lg"

          >
            Start Detecting
          </button>
          <button
            onClick={handleHomeClick}
            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-orange-600 hover:scale-105 transition-all duration-300 text-lg"
          >
            Go to Home
          </button>
        </div>
      </div>
    </section>
  );
}
