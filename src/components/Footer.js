export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        
        {/* Services */}
        <div>
          <div className="text-lg font-semibold mb-2">Home</div>
          <ul className="text-[16px] text-gray-400 space-y-1">
            <li>Overview</li>
            <li>Mission</li>
            <li>CTA Start</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="text-lg font-semibold mb-2">Features</div>
          <ul className="text-[16px] text-gray-400 space-y-1">
            <li>Detection</li>
            <li>Insights</li>
            <li>Verification</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-lg font-semibold mb-2">Trends</div>
          <ul className="text-[16px] text-gray-400 space-y-1">
            <li>Live Data</li>
            <li>Posts</li>
            <li>Awareness</li>
          </ul>
        </div>

        {/* Extra Column 1 */}
        <div>
          <div className="text-lg font-semibold mb-2">Education</div>
          <ul className="text-[16px] text-gray-400 space-y-1">
            <li>Literacy</li>
            <li>Tips</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Extra Column 2 */}
        <div>
          <div className="text-lg font-semibold mb-2">About</div>
          <ul className="text-[16px] text-gray-400 space-y-1">
            <li>Problem</li>
            <li>TTech Stack</li>
            <li>Team</li>
          </ul>
        </div>

      </div>
      
      <div className="border-t border-gray-700 pt-4 text-xs text-gray-500 text-center">
        © 2025 TRIO MIND. Built with ❤️ for HackSky 2025. <span className="mx-2">|</span> Privacy Policy <span className="mx-2">|</span> Terms of Service
      </div>
    </footer>
  );
}
