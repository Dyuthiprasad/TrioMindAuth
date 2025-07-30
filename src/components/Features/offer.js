import React, { useState } from "react";
import { FiPaperclip } from "react-icons/fi";

export default function Offer() {
  const [score] = useState(75);
  const [inputText, setInputText] = useState("");

  const getBarColor = () => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-400";
    return "bg-red-500";
  };

  return (
    <section className="max-w-3xl mx-auto p-6 font-sans">
      {/* Title */}
      <h1 className="text-center text-2xl font-bold text-orange-600 mb-1">
        TruthGuard – <span className="italic">"Protecting what’s real."</span>
      </h1>
      <p className="text-center text-gray-600 mb-6">Upload to Unmask the Fake</p>

      {/* Upload & Text Prompt Box */}
      <div className="flex items-center border rounded-lg px-4 py-3 mb-6 shadow-sm hover:shadow-lg transition-all space-x-4">
        {/* Attachment Icon (left) */}
        <label htmlFor="fileInput" className="cursor-pointer flex items-center">
          <FiPaperclip className="text-gray-700 text-xl hover:text-orange-500 transition-colors" />
          <input type="file" id="fileInput" className="hidden" />
        </label>

        {/* User Input Text Field (center) */}
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-grow border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Type a prompt for AI verification or describe the file"
        />

        {/* Verify Button (right) */}
        <button className="bg-green-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md transform transition-all hover:scale-105 hover:bg-green-600">
          Verify
        </button>
      </div>

      {/* AI Detection Summary */}
      <h2 className="text-center text-xl font-semibold text-green-700 mb-4">AI Detection Summary</h2>

      <div className="border rounded-lg p-5 border-gray-400 bg-white shadow-md">
        <h3 className="text-lg font-bold text-red-500 mb-2">Test Score :</h3>

        {/* Score Bar */}
        <div className="w-full h-6 border-2 border-green-500 rounded-lg overflow-hidden mb-3">
          <div className={`${getBarColor()} h-full transition-all duration-700 ease-in-out`} style={{ width: `${score}%` }}></div>
        </div>
        <p className="text-sm text-gray-700 mb-4">Score: <strong>{score}%</strong></p>

        {/* Legend */}
        <div className="flex justify-around text-sm mb-5">
          <span className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>Green (80–100%) → Authentic
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></span>Yellow (50–79%) → Suspicious
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>Red (0–49%) → Fake/Manipulated
          </span>
        </div>

        {/* Detection Insights */}
        <h3 className="text-lg font-bold text-orange-600 mb-2">Detection Insights :</h3>
        <textarea
          className="w-full border-2 border-green-500 rounded-lg p-2 text-sm mb-5 h-28"
          placeholder="Truth Detector Output can be viewed here"
          readOnly
        />

        {/* Original Source Check */}
        <h3 className="text-lg font-bold text-orange-600 mb-2">Original source check :</h3>
        <input
          type="text"
          className="w-full border-2 border-green-500 rounded-lg p-2 text-sm"
          placeholder="Link will be provided if available"
          readOnly
        />
      </div>
    </section>
  );
}
