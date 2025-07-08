import React from "react";
import "../styles/Skills.css";

const skills = [
  "HTML5", "CSS3", "JavaScript", "React.js",
  "Node.js", "PHP", "MySQL",
  "User Interface", "User Experience", "Figma",
  "Git & GitHub", "VS Code"
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
