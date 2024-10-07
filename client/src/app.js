import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FlippingCards from './FlippingCards';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <FlippingCards />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default App;
