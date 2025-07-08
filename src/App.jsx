import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />

    </div>
  );
};

export default App;
