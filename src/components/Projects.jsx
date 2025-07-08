import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <h3>StudySphere</h3>
          <p>Designed a smart student dashboard in Figma with user flows, interactive prototypes, and modern UI elements using auto layout and components.</p>
          <a href="https://www.figma.com/design/RLilWy7AOpP5eaYrBE4Irs/StudySphere?node-id=0-1&m=dev&t=CJ5FS2Zg8zbI16gz-1">Figma Link</a>
        </div>
        <div className="project-card">
          <h3>Real-Time Answer Evaluation System</h3>
          <p>Built a web platform to evaluate answer scripts using AI feedback, implemented asynchronous operations using AJAX & JSON. Utilized HTML, CSS, JavaScript, PHP, MySQL to build & deploy, & Python for model training.</p>
          <a href="https://github.com/manasa2129/Real_time-Answer-Evaluation-System">GitHub Link</a>
        </div>
        <div className="project-card">
          <h3>Dream Wedding Planners</h3>
          <p>Developed a responsive wedding planning site with slot booking and budget-friendly event options across 10 major Indian cities. And deployed GitHub Pages hosting.</p>
          <a href="https://manasa2129.github.io/Wedding-Planners-Project/PROJECT.HTML">GitHub Link</a>
        </div>
        <div className="project-card">
          <h3>UNIHUB</h3>
          <p>Designed a full-stack e-commerce site with 100+ product categories, implementing front-end, back-end, and database integration. Utilized HTML, CSS, JavaScript, PHP, and MySQL to build and deploy the solution.</p>
          <a href="https://github.com/manasa2129/Uni-Hub-">GitHub Link</a>
        </div>
        <div className="project-card">
          <h3>Responsive Portfolio</h3>
          <p>This professional portfolio website built using React+Vite and CSS for clean, responsive design, featuring reusable components.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
