import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Learners Hub</div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link onClick={toggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="resources">
            Resources
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
