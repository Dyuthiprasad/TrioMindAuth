import React from 'react';

function Imagine() {
  return (
    <section className="text-white">
      {/* Background image with overlay */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-10 px-6 animate-bg-zoom"
        style={{ backgroundImage: "url('/images/Imagine.jpg')" }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900 animate-overlay-pulse z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto py-16 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
           The AI Truth-Detection Process
          </h2>
          <p className="text-xl font-semibold text-gray-300 animate-fade-in-up animation-delay-200">
            AI-Powered Steps to Detect Manipulated Content
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 md:px-0">
            <div className="bg-blue-300/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:bg-blue-300/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                Upload Content
              </h3>
              <p className="text-base text-gray-200">
                Choose any video, image, audio, or text you want to verify and upload it securely to our platform
              </p>
            </div>
            <div className="bg-blue-300/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:bg-blue-300/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
               AI Scans & Analyzers
              </h3>
              <p className="text-base text-gray-200">
               Our advanced AI models analyze the file for manipulation, deepfake patterns, and misinformation using multiple detection technique
              </p>
            </div>
            <div className="bg-blue-300/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:bg-blue-300/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                Get Results & Insights
              </h3>
              <p className="text-base text-gray-200">
                Receive a trust score with clear reasons for detection, verified sources, and tips to stay safe online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imagine;
