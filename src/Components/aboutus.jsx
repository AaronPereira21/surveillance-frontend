// src/components/AboutUs/AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>
        Welcome to NovaWatch! We are dedicated to providing cutting-edge 
        security solutions that ensure the safety and privacy of individuals and organizations. 
        Our advanced anomaly detection system uses GANs (Generative Adversarial Networks) to 
        identify unusual patterns in surveillance footage, enabling real-time alerts and improving 
        the overall security infrastructure.
      </p>
      <p>
        Privacy is at the core of our platform, which is why we employ Split Learning to safeguard 
        sensitive data while maintaining the highest standards of security. Our team is composed 
        of experts in artificial intelligence, machine learning, and cybersecurity, working 
        tirelessly to ensure that our solutions are not only innovative but also reliable and 
        user-friendly.
      </p>
      <p>
        At our core, we believe in a future where technology and privacy coexist, empowering 
        individuals and organizations to feel safe without compromising their data. We continuously 
        innovate and adapt our solutions to meet the evolving needs of our clients, and we are 
        committed to making the world a safer place.
      </p>
    </div>
  );
};

export default AboutUs;
