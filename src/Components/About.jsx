import React from 'react';
import './About.css'; // Import your CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our world of innovation and excellence. We are dedicated to providing the best solutions in the industry, leveraging cutting-edge technology and unparalleled expertise. Our mission is to drive success and exceed expectations through relentless pursuit of excellence and creativity.
        </p>
        <div className="about-image">
          <img
            src="https://via.placeholder.com/600x400" 
            alt="About Us"
          />
        </div>
        <div className="about-team">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150" 
              alt="Team Member"
            />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150" 
              alt="Team Member"
            />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150" 
              alt="Team Member"
            />
            <h3>Emily Johnson</h3>
            <p>Lead Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
