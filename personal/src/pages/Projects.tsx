import React from "react";
import "../styles/Projects.css";

const projects = [
  { id: 1, name: "E-Commerce Website", description: "A fully responsive e-commerce platform built with React.js." },
  { id: 2, name: "Portfolio Website", description: "A personal portfolio showcasing my projects and skills." },
  { id: 3, name: "Blog Platform", description: "A dynamic blog platform with commenting and user authentication." },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
