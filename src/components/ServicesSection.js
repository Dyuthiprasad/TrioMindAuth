
import React from 'react';

function ServicesSection() {
  return (
    <section className="bg-gray-100 py-20 animate-bg-pulse-gray">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 animate-fade-in-up hover:animate-title-hover">
        What Makes Us Different in Detecting Fake?
      </h2>
      <p className="text-center text-xl font-normal text-gray-500 mb-12 animate-fade-in-up animation-delay-200">
        A powerful blend of AI models, real-time insights, and user-focused design to uncover the truth behind any content..
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-[1280px] mx-auto">
        {/* Web Development */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-3.svg" 
            alt="Web Development" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Multimodal Detection Capability
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
            Our platform detects fakes across videos, images, audio, and text in one place.It uses advanced models to uncover manipulations invisible to the human eye.Users don’t need multiple tools — everything is integrated into a single system.
          </p>
        </div>

        {/* Software */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-4.svg" 
            alt="Software" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Explainable AI Results
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
            Instead of just saying real or fake, the system gives a Trust Score with confidence levels.It also explains why the content is flagged, showing anomalies or suspicious patterns.This transparency builds user confidence in the detection results.
          </p>
        </div>

        {/* SaaS Applications */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-5.svg" 
            alt="SaaS Applications" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
           Real-Time Awareness
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
            The Trends section shows what fake content types are spreading the most.It uses visual graphs and live updates to keep users informed.By tracking threats, users stay ahead of ongoing misinformation tactics.
          </p>
        </div>

        {/* AI Applications */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-6.svg" 
            alt="AI Applications" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Educational Impact
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
            The platform educates users on spotting deepfakes and misinformation themselves.It offers tips, guides, and fact-checking resources for awareness.This helps build digital literacy and responsible online behavior.
          </p>
        </div>

        {/* Managed IT Services */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-7.svg" 
            alt="Managed IT Services" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Integration with Verification API
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
           The platform uses external APIs like Google Fact Check, TinEye, and InVID for cross-verification.This ensures results are supported by trusted global databases.Users get stronger, more reliable detection.
          </p>
        </div>

        {/* IT Consultancy */}
        <div className="bg-white rounded-3xl p-10 shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] group">
          <img 
            src="/images/Overlay-8.svg" 
            alt="IT Consultancy" 
            className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Security & Privacy First
          </h3>
          <p className="text-[16px] font-normal text-[#4B5563]">
            All uploads are encrypted, securely processed, and auto-deleted after analysis.Users have full control over their data with a privacy-first approach.These measures build trust and confidence in using the platform.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
