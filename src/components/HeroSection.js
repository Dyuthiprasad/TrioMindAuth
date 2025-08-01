import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-orange-500 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          
          <h1 className="text-[42px] md:text-[55px] font-bold mb-4 mt-10 leading-tight">
            Stay Ahead of Deepfakes <br/> with <span className="text-orange-500">With AI Detection</span>
          </h1>

          <p className="text-lg md:text-xl mt-6 text-gray-200 mb-8">
            An AI-powered tool that detects deepfakes, voice clones, and AI-generated misinformation — so you know what’s real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 text-white font-bold py-3 px-6 rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1">
              Get Started
            </button>
            <button
              className="border border-white text-white hover:bg-white hover:text-blue-700 py-3 px-6 font-bold rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
         <div className="flex justify-center mt-10 md:mt-0">
      <div className="relative w-[300px] md:w-[500px] lg:w-[584px]  transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
        <img
          src="/images/HomePage.jpg"
          alt="AI Illustration"
          className="w-full rounded-2xl animate-gradient-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 via-blue-300/40 to-orange-500/80 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"></div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default HeroSection;
