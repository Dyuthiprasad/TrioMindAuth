import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-700 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* ✅ Logo */}
      <div className="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" className="ml-4 md:ml-28 h-9" />
        <img src="/images/text.png" alt="Second Logo" className="ml-4 h-9" />
      </div>

      {/* ✅ Desktop Navigation */}
      <nav className="hidden md:flex space-x-5 items-center">
        <Link to="/" className="text-orange-400">Home</Link>
        <Link to="/features" className="hover:text-orange-400">Features</Link>
        <Link to="/trends" className="hover:text-orange-400">Trends</Link>
        <Link to="/education" className="hover:text-orange-400">Education</Link>
        <Link to="/about" className="hover:text-orange-400">About</Link>

        {/* ✅ Login/Register Button as Link */}
        <Link
          to="/login"
          className="border-2 border-green-300 bg-green-300 text-gray-700 hover:bg-orange-600 hover:text-white focus:bg-orange-600 py-1 px-3 rounded-3xl transition-all"
        >
          Login/Register
        </Link>
      </nav>

      {/* ✅ Mobile Menu Button */}
      <button
        className="md:hidden px-2 py-1 border rounded text-gray-700 border-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* ✅ Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-start p-4 space-y-2">
            <Link to="/" className="text-orange-400" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/features" className="hover:text-orange-400" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link to="/trends" className="hover:text-orange-400" onClick={() => setMenuOpen(false)}>Trends</Link>
            <Link to="/education" className="hover:text-orange-400" onClick={() => setMenuOpen(false)}>Education</Link>
            <Link to="/about" className="hover:text-orange-400" onClick={() => setMenuOpen(false)}>About</Link>

            {/* ✅ Mobile Login/Register */}
            <Link
              to="/login"
              className="hover:text-green-500 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Login/Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
