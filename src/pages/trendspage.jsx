import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Herosection from '../components/Trends/Herosection';
import Threat from '../components/Trends/Threat';
import Awareness from '../components/Trends/Awareness';
import CallToAction from '../components/Trends/CTA';

function App() {
  return (
    <div className="font-sans">
      <Header />
     <Herosection/>
      <Threat />
      <CallToAction/>
       <Awareness />
      <Footer />
    </div>
  );
}

export default App;