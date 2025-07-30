import React, { useState } from "react";
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("⚠️ Please fill in all fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }
    alert("✅ Registered successfully!");
    navigate("/landingpage");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #FF6B35 100%)",
      }}
    >
      <div className="bg-white w-[400px] rounded-lg shadow-2xl p-8 text-center transform transition-all hover:scale-105">
        {/* Logo and App Name */}
        <div className="flex items-center mb-6 justify-start hover:scale-105 transition-transform">
          <img src="/images/logo.jpg" alt="Logo" className="h-10 mr-2 rounded-full shadow-md" />
          <h1 className="text-xl font-bold">
            <span className="text-blue-700">Trio</span>
            <span className="text-orange-500">Mind</span>
          </h1>
        </div>

        {/* Welcome Message */}
        <h2 className="text-2xl font-bold text-orange-600 mb-1 animate-pulse">
          Create Your Account
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Login to continue detecting and staying protected
        </p>

        {/* Name Field */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-4 shadow-sm transition-all focus-within:border-orange-500 focus-within:shadow-md hover:border-orange-400 hover:shadow-md">
          <FiUser className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Enter Your Name"
            className="outline-none flex-1 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Field */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-4 shadow-sm transition-all focus-within:border-orange-500 focus-within:shadow-md hover:border-orange-400 hover:shadow-md">
          <FiMail className="text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="outline-none flex-1 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Field */}
        <div className="relative mb-2">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 shadow-sm transition-all focus-within:border-orange-500 focus-within:shadow-md hover:border-orange-400 hover:shadow-md">
            <FiLock className="text-gray-500 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              className="outline-none flex-1 text-sm pr-8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="relative mb-4">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 shadow-sm transition-all focus-within:border-orange-500 focus-within:shadow-md hover:border-orange-400 hover:shadow-md">
            <FiLock className="text-gray-500 mr-2" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Your Password"
              className="outline-none flex-1 text-sm pr-8"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-green-500 text-white py-2 rounded-full font-semibold transition-transform transform hover:scale-110 hover:bg-green-600 hover:shadow-lg"
        >
          Register
        </button>

        {/* Login Redirect */}
        <p className="text-sm text-gray-700 mt-3">
          Already have an account?{" "}
          <button
            onClick={handleLoginRedirect}
            className="text-green-600 font-medium hover:underline hover:text-green-700 transition-all"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
