import React from 'react';
import './AboutUs.css';
import Fade from 'react-reveal/Fade';

const ObjectiveComponent = () => {
  const objectives = [
    {
      title: 'Our Mission',
      description:
        'Welcome to our Surveillance System platform! We are dedicated to providing cutting-edge security solutions that ensure the safety and privacy of individuals and organizations. Our advanced anomaly detection system uses GANs (Generative Adversarial Networks) to identify unusual patterns in surveillance footage, enabling real-time alerts and improving the overall security infrastructure..',
    },
    {
      title: 'Privacy and Security',
      description:
        'Privacy is at the core of our platform, which is why we employ Split Learning to safeguard sensitive data while maintaining the highest standards of security. Our team is composed of experts in artificial intelligence, machine learning, and cybersecurity, working tirelessly to ensure that our solutions are not only innovative but also reliable and user-friendly.',
    },
    {
      title: 'Our Vision',
      description:
        'At our core, we believe in a future where technology and privacy coexist, empowering individuals and organizations to feel safe without compromising their data. We continuously innovate and adapt our solutions to meet the evolving needs of our clients, and we are committed to making the world a safer place.',
    },
  ];

  return (
    <div className="objective-container" id='objectives'>
        <h1 className="events-title" style={{'fontSize':'2rem','paddingBottom':'5px','fontWeight':500}}>Objectives</h1>
        <Fade bottom>
          <div className="cards-container">
              {objectives.map((objective, index) => (
                <div className="card" key={index}>
                  <h2 style={{'fontSize':'1.4rem'}}>{objective.title}</h2>
                  <p style={{'fontSize':'1.1rem'}}>{objective.description}</p>
                </div>
              ))}
          </div>
        </Fade>
    </div>
  );
};

export default ObjectiveComponent;