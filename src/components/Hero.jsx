import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1>Hello, I'm Manasa 👋</h1>
        <p>
          I'm a passionate Web Developer who specializes in crafting modern,
          responsive websites that deliver real value to users.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="/portfolio/Manasa_Resume._.pdf" className="btn" type="application/pdf" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

