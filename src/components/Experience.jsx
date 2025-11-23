import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <div className="experience-timeline">
        <div className="experience-item">
          <h3>Full Stack Development Intern</h3>
          <p className="company">Gussmann Technologies</p>
          <p className="duration">Jan 2025 - Present</p>
          <p className="details">Worked on end-to-end web application development using HTML, CSS, JavaScript, PHP, and MySQL. Contributed to both front-end UI design and back-end logic, with hands-on experience in building responsive interfaces, database integration, and real-time features using AJAX and JSON.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

