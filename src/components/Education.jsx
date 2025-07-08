import React from "react";
import "../styles/Education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2>Education</h2>
      <div className="education-timeline">
        <div className="education-item">
          <h3>B.Tech in Computer Science & Engineering</h3>
          <p className="institute">Nalla Malla Reddy Engineering College</p>
          <p className="duration">2022 - 2025</p>
          <p className="details">Specialization in UI/UX Design, Web Development, and Human-Computer Interaction.</p>
        </div>
        <div className="education-item">
          <h3>Diploma in Compu</h3>
          <p className="institute">Smt Durgabai Deshmukh Govt. Women's Technical Training Institute</p>
          <p className="duration">2019 - 2022</p>
          <p className="details">Covered fundamentals of engineering and concepts.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
