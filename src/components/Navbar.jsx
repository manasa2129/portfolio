// src/components/Navbar.jsx
import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
