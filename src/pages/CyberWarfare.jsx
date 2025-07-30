import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroPost from '../components/SubFolder/HeroPost4';
import HeroSection from '../components/SubFolder/HeroSection4';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <HeroPost />
      <Footer />
      
    </div>
  );
}

export default App;