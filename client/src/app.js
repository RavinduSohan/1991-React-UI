import React from 'react';
import Navbar from './components/navbar/navbar.js';
import HeroSection from './components/herosection/herosection.js';
import FlippingCards from './components/flippingcards/flippingcards.js';
import FeaturesSection from './components/featuressection/featuressection.js';
import Footer from './components/footer/footer.js';
import Carousel from './components/carousel/carousel.js';
import Timeline from './components/Timelinegraph/timeline.js';
import './app.css';
import NoticePanel from './components/noticepanel/noticepanel.js';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <FlippingCards />
      <Carousel />
      <FeaturesSection />
      <div className="timeline-wrapperr">
      <Timeline />
    </div>
    <div className="notice-panel-wrapper">
      <NoticePanel />
    </div>
      <Footer />
    </div>
  );
};

export default App;
