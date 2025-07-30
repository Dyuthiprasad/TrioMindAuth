import React from 'react';

export default function Awareness() {
  return (
    <div className="bg-[#fdfdfd] min-h-screen py-10 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-orange-600 mb-8">
          Awareness Tips Section
        </h2>

        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm space-y-5">
          <div>
            <p className="font-medium text-lg">1. Verify Before Sharing :</p>
            <p className="text-gray-600">Always cross-check content with trusted sources before spreading it online.</p>
          </div>

          <div>
            <p className="font-medium text-lg">2. Be Skeptical of Viral Media</p>
            <p className="text-gray-600">Just because something is trending doesn’t mean it’s true.</p>
          </div>

          <div>
            <p className="font-medium text-lg">3. Check for Signs of Manipulation</p>
            <p className="text-gray-600">Look for inconsistencies in voices, faces, or metadata that may indicate fakes.</p>
          </div>

          <div>
            <p className="font-medium text-lg">4. Use Fact-Checking Tools</p>
            <p className="text-gray-600">Leverage platforms like Google Fact Check, TinEye, or your AI detector to confirm authenticity.</p>
          </div>

          <div>
            <p className="font-medium text-lg">5. Avoid Clicking Suspicious Links</p>
            <p className="text-gray-600">Fake content often comes with malicious links—don’t fall for phishing traps.</p>
          </div>

          <div>
            <p className="font-medium text-lg">6. Stay Informed About New Threats</p>
            <p className="text-gray-600">Keep learning about the latest scams and misinformation tactics to stay ahead.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
