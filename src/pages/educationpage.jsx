import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/Education/herosection';
import ThreatTypes from '../components/Education/ThreatTypes';
import Guide from '../components/Education/Guide';
import CTA from '../components/Education/CTA';
import Recommend from '../components/Education/Recommend';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <ThreatTypes/>
      <Guide />
      <CTA />
      <Recommend />
      <Footer />
      
    </div>
  );
}

export default App;