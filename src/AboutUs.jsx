import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-content">
        Welcome to Paradise Nursery, where green meets serenity. We are dedicated to bringing nature closer to your living spaces by providing a wide selection of high-quality indoor, outdoor, air-purifying, and aromatic plants.
      </p>
      <p className="about-us-content">
        Our mission is to foster sustainable green living and make plant ownership accessible and enjoyable for everyone. Whether you are an experienced plant parent or just starting your green journey, our carefully curated collection and expert care guidance ensure your plants thrive.
      </p>
    </div>
  );
}

AboutUs.displayName = 'AboutUs';
export default AboutUs;