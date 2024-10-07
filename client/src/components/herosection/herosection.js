import React from 'react';
import './herosection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src="https://via.placeholder.com/1200x400" alt="Train" className="hero-image" />
      <div className="hero-text">
        <h2>Welcome to the Future of Railway Travel</h2>
        <p>Efficient, convenient, and secure travel solutions with RFID-based ticketing and real-time tracking.</p>
      </div>
    </div>
  );
};

export default HeroSection;
