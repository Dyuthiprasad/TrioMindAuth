import React from 'react';

function EngineeringSection() {
  return (
    <section className="text-white">
      {/* Background image with overlay */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-10 px-6 animate-bg-zoom"
        style={{ backgroundImage: "url('/images/Engineer.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/90 via-orange-500/90 to-orange-400/90 animate-overlay-pulse-orange z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto py-16 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
           Why AI vs AI Is Crucial?
          </h2>
          <p className="text-xl font-semibold text-gray-300 animate-fade-in-up animation-delay-200">
            Understanding the Need for AI-Powered Defense
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 md:px-0">
            <div className="bg-orange-300/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:bg-orange-300/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                Protects Trust in Information
              </h3>
              <p className="text-base text-gray-200">
               In an age where fake media looks real, our platform ensures that users can confidently trust the authenticity of the content they encounter online.
              </p>
            </div>

            <div className="bg-orange-300/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:bg-orange-300/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
               Prevents Scams & Manipulation
              </h3>
              <p className="text-base text-gray-200">
             By detecting voice clones, deepfake videos, and manipulated images, we protect individuals  from falling victim to fraud, scams, and digital deception
              </p>
            </div>

            <div className="bg-orange-300/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:bg-orange-300/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                Fights the Spread of Misinformation
              </h3>
              <p className="text-base text-gray-200">
                Our AI actively flags and explains fake content, stopping the rapid spread of misinformation that can mislead communities and disrupt society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngineeringSection;
