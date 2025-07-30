import React from 'react';

function ModernizeSection() {
  return (
    <section className="text-white">
      {/* Background image with overlay */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-10 px-6 animate-bg-zoom"
        style={{ backgroundImage: "url('/images/Modernize.jpg')" }}
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green-600/80 animate-overlay-pulse-green z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto py-16 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
            Smart Features That Protects You
          </h2>
          <p className="text-xl font-semibold text-gray-300 animate-fade-in-up animation-delay-200">
            Powerful Features Built to Keep You Secure
          </p>

          {/* FeaturesのうちGrid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 md:px-0">
            <div className="bg-green-300/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:bg-green-300/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                Multimodal AI Detection
              </h3>
              <p className="text-base text-gray-200">
                Our system analyzes videos, images, audio, and text using advanced AI models to uncover manipulations, deepfakes, and synthetic patterns invisible to the human eye
              </p>
            </div>

            <div className="bg-green-300/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:bg-green-300/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                Trust Score & Insights
              </h3>
              <p className="text-base text-gray-200">
                Every analysis provides a trust score along with clear reasons and visual indicators, helping users understand exactly why content is flagged as real or fake
              </p>
            </div>

            <div className="bg-green-300/30 text-white p-6 rounded-3xl shadow-lg text-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:bg-green-300/40 group">
              <h3 className="text-lg font-semibold mb-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                Source Verification & Awareness
              </h3>
              <p className="text-base text-gray-200">
               The platform cross-checks content with trusted databases and fact-check APIs while educating users on ongoing fake trends and safe online practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernizeSection;
