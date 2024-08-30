import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faRobot,
  faPersonMilitaryRifle,
  faBars, // Added for mobile menu toggle
  faTimes // Added for mobile menu toggle
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="nav-bar">
      <button className="mobile-menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
      </button>
      <ul className={`nav-list ${isMenuOpen ? "show" : ""}`}>
        <li className="home">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon
              icon={faHouse}
              size="2x"
              className="nav-icon"
            />
            <span className="nav-text">Home</span>
          </Link>
        </li>
        <li className="about">
          <Link to="/About" className="nav-link">
            <FontAwesomeIcon
              icon={faCircleInfo}
              size="2x"
              className="nav-icon"
            />
            <span className="nav-text">About</span>
          </Link>
        </li>
        <li className="Bots">
          <Link to="/BotDisplay" className="nav-link">
            <FontAwesomeIcon
              icon={faRobot}
              size="2x"
              className="nav-icon"
            />
            <span className="nav-text">Bots</span>
          </Link>
        </li>
        <li className="army">
          <Link to="/Enlisted" className="nav-link">
            <FontAwesomeIcon
              icon={faPersonMilitaryRifle}
              size="2x"
              className="nav-icon"
            />
            <span className="nav-text">Enlisted</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
