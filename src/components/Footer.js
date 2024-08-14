import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-column logo-section">
          <p>Stay up to date on the latest features and releases by joining our newsletter.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter email address" />
            <button>SignUp</button>
          </div>
          <p className="disclaimer">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
        </div>
        <div className="footer-column">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="column">Follow Us</h3>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
