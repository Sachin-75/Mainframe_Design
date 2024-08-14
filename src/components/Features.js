import React from 'react';
import './styles.css';
import png1 from './images/png1.png';
import png2 from './images/png2.png';

const Features = () => {
  return (
    <section className="features">
      <h2 id="h2">Innovate</h2>
      <h3 id="h3">Unlock new opportunities with our startup-centric solutions</h3>
      <div className="feature-list">
        {featuresData.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="feature-image">
              <img src={feature.image} alt="Feature Image" />
            </div>
            <div className="feature-content">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const featuresData = [
  { title: 'Feature Title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', image: png1 },
  { title: 'Feature Title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', image: png2 },
  { title: 'Feature Title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', image: png1 },
  { title: 'Feature Title', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', image: png2 }
];

export default Features;
