// Works.jsx
import React from 'react';
import './Works.css';
import flyer from '../work/flyer.png';
import log from '../work/log.png';
import web from '../work/web.png';

const projects = [
  {
    id: 1,
    title: "Company Logo",
    category: "Logo",
    image: log, // Remove the curly braces around the imported variable
    description: "A sleek logo design for a corporate client."
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Website",
    image: web, // Remove the curly braces around the imported variable
    description: "A modern e-commerce website built with React and Node.js."
  },
  {
    id: 3,
    title: "UI/UX Design",
    category: "Design",
    image: flyer, // Remove the curly braces around the imported variable
    description: "A minimalistic user interface for a mobile application."
  },
];

const Works = () => {
  return (
    <div className="works-container">
      <h1>Check Out my Previous Works</h1>
      <div className="works-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={`${project.title}`} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
