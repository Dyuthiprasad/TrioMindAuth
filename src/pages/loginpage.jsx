import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleLogin = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Please enter your email address.";
    if (!password) newErrors.password = "Please enter your password.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Dummy alert (you can replace this with real login logic)
    alert("✅ Login Successful (Dummy Alert)");
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
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
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-10 mr-2 rounded-full shadow-md"
          />
          <h1 className="text-xl font-bold">
            <span className="text-blue-700">Trio</span>
            <span className="text-orange-500">Mind</span>
          </h1>
        </div>

        {/* Welcome Message */}
        <h2 className="text-2xl font-bold text-orange-600 mb-1 animate-pulse">
          Welcome Back!
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Login to continue detecting and staying protected.
        </p>

        {/* Email Field */}
        <div className="mb-4">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 shadow-sm transition-all focus-within:border-orange-500 focus-within:shadow-md hover:border-orange-400 hover:shadow-md">
            <FiMail className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="outline-none flex-1 text-sm"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
              }}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-600 mt-1 text-left">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 shadow-sm transition-all focus-within:border-orange-500 focus-within:shadow-md hover:border-orange-400 hover:shadow-md">
            <FiLock className="text-gray-500 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              className="outline-none flex-1 text-sm"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: "" });
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500 focus:outline-none ml-2"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-600 mt-1 text-left">{errors.password}</p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-4">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-600 hover:text-orange-500"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white py-2 rounded-full font-semibold transition-transform transform hover:scale-110 hover:bg-green-600 hover:shadow-lg"
        >
          Login
        </button>

        {/* Register Redirect */}
        <p className="text-sm text-gray-700 mt-3">
          Don’t have an account?{" "}
          <button
            onClick={handleRegisterRedirect}
            className="text-green-600 font-medium hover:underline hover:text-green-700 transition-all"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
