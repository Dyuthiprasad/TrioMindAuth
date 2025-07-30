import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/About/headerSection';
import ProjectOverview from '../components/About/ProjectOverview';
import CallToAction from '../components/About/CTA';
import CoreServices from '../components/About/corevalues';


function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <ProjectOverview/>
      <CallToAction/>
      <CoreServices/>
      <Footer />
    </div>
  );
}

export default App;