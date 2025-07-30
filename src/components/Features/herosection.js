import React from "react";

export default function HeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(104.9deg, #1E3A8A 0%, #3B82F6 50%, #FF6B35 100%)",
      }}
      className="text-white py-20 px-4 text-center"
    >
      {/* ✅ Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-5">
        Our Smart Features
      </h1>

      {/* ✅ Subheading */}
      <p className="max-w-2xl mx-auto mb-10 font-light text-xl">
        Discover how our AI detects fakes
      </p>

      {/* ✅ CTA Button */}
      <div className="flex justify-center mb-16">
        <button className="bg-orange-500 text-white text-xl px-8 py-3 rounded-lg font-semibold shadow-md transition-all transform hover:scale-110 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-300">
          What We Offer?
        </button>
      </div>

      {/* ✅ Feature Cards (Directly on Gradient) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-[1440px] mx-auto mt-10">
        
        {/* Feature 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img src="/images/Overlay-3.svg" alt="Multimodal Detection" className="mb-4 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-lg font-bold text-black mb-2 group-hover:text-orange-500 transition-colors">Multimodal Detection Capability</h3>
          <p className="text-sm text-gray-600">Detects fakes across videos, images, audio, and text in one place with advanced AI models.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img src="/images/Overlay-4.svg" alt="Explainable AI" className="mb-4 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-lg font-bold text-black mb-2 group-hover:text-orange-500 transition-colors">Explainable AI Results</h3>
          <p className="text-sm text-gray-600">Provides Trust Scores with clear reasons, explaining flagged anomalies and suspicious patterns.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img src="/images/Overlay-5.svg" alt="Real-Time Awareness" className="mb-4 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-lg font-bold text-black mb-2 group-hover:text-orange-500 transition-colors">Real-Time Awareness</h3>
          <p className="text-sm text-gray-600">Shows trending fake content with live updates, helping users stay ahead of misinformation tactics.</p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img src="/images/Overlay-8.svg" alt="Security Privacy" className="mb-4 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-lg font-bold text-black mb-2 group-hover:text-orange-500 transition-colors">Security & Privacy First</h3>
          <p className="text-sm text-gray-600">Ensures encrypted uploads, secure processing, and data auto-deletion with user-controlled privacy.</p>
        </div>
      </div>
    </section>
  );
}
