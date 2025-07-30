import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Herosection from '../components/Features/herosection';
import Offer from '../components/Features/offer';

function App() {
  return (
    <div className="font-sans">
      <Header />
     <Herosection/>
      <Offer />
      <Footer />
    </div>
  );
}

export default App;