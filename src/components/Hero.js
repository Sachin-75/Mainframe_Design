import React from 'react';
import './styles.css';
import hero from './images/hero.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Launch Your Vision with Our innovative Solutions</h1>
        <p>We empower startups to transform ideas into reality with cutting-edge web solutions. Our expert team crafts innovative, user-friendly platforms that fuel your growth and captivate your audience.</p>
        <div className="cta-buttons">
          <a href="#" className="btn-primary">Get Started</a>
          <a href="#" className="btn-secondary">Explore More</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
