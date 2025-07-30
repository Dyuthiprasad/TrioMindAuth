import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        background:
          "linear-gradient(104.9deg, #1E3A8A 0%, #3B82F6 50%, #FF6B35 100%)",
      }}
      className="text-white py-20 px-4 text-center"
    >
      {/* ✅ Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-5">
        About the Project
      </h1>

      {/* ✅ Subheading */}
      <p className="max-w-2xl mx-auto mb-10 font-light text-xl">
        Explore the technologies and tools used in development..
      </p>

      {/* ✅ Project Description */}
      <p
        style={{
          textAlign: "justify",
          lineHeight: "1.8",
          fontSize: "1.4rem",
          maxWidth: "900px",
          margin: "0 auto",
          marginBottom: "2rem",
        }}
      >
      Our project is an AI-powered detection platform designed to identify deepfakes, voice clones, fake news, and

manipulated media. It allows users to upload or link any content – video, image, audio, or text – and instantly 

verifies its authenticity using advanced AI models and fact-checking APIs. By providing a trust score, clear 

detection insights, and access to verified sources, our platform helps users stay safe from misinformation and 

scams. Built with a focus on privacy, education, and real-time awareness, this solution empowers individuals to 

detect fakes and build digital trust.
      </p>

      {/* ✅ CTA Button */}
      <div className="flex justify-center mb-16">
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white text-xl px-8 py-3 rounded-lg font-semibold shadow-md transition-all transform hover:scale-110 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-300"
        >
          Back to Home
        </button>
      </div>

     
    </section>
  );
}
