import React from "react";

export default function ProjectOverview() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-white">
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-8">
        Project Overview
      </h2>

      <div className="max-w-5xl mx-auto border border-gray-300 rounded-lg shadow-lg p-8 bg-gray-50">
        <p className="text-gray-800 mb-6 leading-relaxed">
          We are implementing an AI-powered detection platform that verifies the
          authenticity of videos, images, audio, and text. The system uses
          advanced machine learning models to detect deepfakes, manipulated
          media, and AI-generated misinformation.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-black">
          What we are implementing?
        </h3>

        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="font-semibold text-gray-900 text-lg">
              Multimodal Detection:
            </span>{" "}
            Supports image, video, audio, and text analysis in one platform.
          </li>
          <li>
            <span className="font-semibold text-gray-900 text-lg">
              Trust Score with Explainability:
            </span>{" "}
            Shows authenticity percentage and reasons for detection.
          </li>
          <li>
            <span className="font-semibold text-gray-900 text-lg">
              Fact-Check Integration:
            </span>{" "}
            Cross-verifies suspicious content with APIs like Google Fact Check,
            TinEye, and InVID.
          </li>
          <li>
            <span className="font-semibold text-gray-900 text-lg">
              Trends Section:
            </span>{" "}
            Displays real-time data on the most common fake content patterns.
          </li>
          <li>
            <span className="font-semibold text-gray-900 text-lg">
              Education Section:
            </span>{" "}
            Provides guides and resources to help users recognize misinformation.
          </li>
          <li>
            <span className="font-semibold text-gray-900 text-lg">
              Privacy-First Security:
            </span>{" "}
            Secure uploads, encrypted processing, and auto-deletion of files.
          </li>
          <li>
            <span className="font-semibold text-gray-900 text-lg">
              User-Friendly Interface:
            </span>{" "}
            Clean React + Tailwind UI for smooth interaction.
          </li>
        </ul>
      </div>
    </div>
  );
}
