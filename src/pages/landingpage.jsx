import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import EngineeringSection from '../components/EngineeringSection';
import ModernizeSection from '../components/ModernizeSection';
import ManageSection from '../components/ManageSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import Imagine from '../components/Imagine';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <Imagine />
      <EngineeringSection />
      <ModernizeSection />
      <ManageSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;