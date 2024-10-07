import React from 'react';
import Navbar from './components/navbar/navbar.js';
import HeroSection from './components/herosection/herosection.js';
import FlippingCards from './components/flippingcards/flippingcards.js';
import FeaturesSection from './components/featuressection/featuressection.js';
import Footer from './components/footer/footer.js';
import Carousel from './components/carousel/carousel.js';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <FlippingCards />
      <Carousel />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default App;
