import React from "react";
import logo from "../../assets/images/logo.png"; // Logoyu import ediyoruz
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <img src={logo} alt="Logo" className="project-logo" /> {/* Logoyu burada gösteriyoruz */}
      <p>Here are some of the projects I have worked on:</p>
    </div>
  );
};

export default Projects;
