import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <div className="feature-item">
        <img src="https://via.placeholder.com/300" alt="E-Ticketing" />
        <div className="feature-description">
          <h3>E-Ticketing</h3>
          <p>RFID-based e-ticketing ensures contactless and hassle-free entry at stations with secure transactions.</p>
        </div>
      </div>
      <div className="feature-item">
        <img src="https://via.placeholder.com/300" alt="Real-time Tracking" />
        <div className="feature-description">
          <h3>Real-time Tracking</h3>
          <p>Track your train in real time, get live updates on delays, and stay informed about your journey.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
