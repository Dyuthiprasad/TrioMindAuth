import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Import your pages
import LandingPage from "./pages/landingpage";
import FeaturesPage from "./pages/featurespage";
import TrendsPage from "./pages/trendspage";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import AboutPage from "./pages/aboutpage";

// (Optional) NotFound Page if user enters unknown route
// import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* ✅ Features Page */}
        <Route path="/features" element={<FeaturesPage />} />

        {/* ✅ Trends Page */}
        <Route path="/trends" element={<TrendsPage />} />

          {/* ✅ About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* ✅ Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* ✅ Register Page */}
        <Route path="/register" element={<RegisterPage />} />

        {/* ❌ Optional: 404 Not Found Page */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
