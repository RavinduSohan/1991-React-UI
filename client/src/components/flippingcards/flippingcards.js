import React from 'react';
import './FlippingCards.css';

const FlippingCards = () => {
  const features = [
    { src: 'https://via.placeholder.com/150', description: 'Fast Ticketing' },
    { src: 'https://via.placeholder.com/150', description: 'Live Train Updates' },
    { src: 'https://via.placeholder.com/150', description: 'Travel History' },
  ];

  return (
    <div className="flipping-cards-section">
      {features.map((feature, index) => (
        <div className="flip-card" key={index}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={feature.src} alt={feature.description} />
            </div>
            <div className="flip-card-back">
              <p>{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlippingCards;
