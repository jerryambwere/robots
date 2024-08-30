import React from 'react';
import './Home.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1 className="hero-title">Welcome to the Future of Robotics</h1>
        <p className="hero-subtitle">Explore cutting-edge technology and engage with our innovative bots.</p>
        <a href="#features" className="cta-button">Discover More</a>
      </header>
      
      <section id="features" className="features-section">
        <div className="feature">
          <h2 className="feature-title">Innovative Design</h2>
          <p className="feature-description">Our bots feature state-of-the-art technology and sleek, modern designs.</p>
        </div>
        <div className="feature">
          <h2 className="feature-title">Unmatched Performance</h2>
          <p className="feature-description">Experience superior performance with our high-efficiency bots.</p>
        </div>
        <div className="feature">
          <h2 className="feature-title">Future-Proof</h2>
          <p className="feature-description">Stay ahead with our constantly evolving technology.</p>
        </div>
      </section>
      
      <footer className="footer">
        <p className="footer-text">© 2024 Future Robotics Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
