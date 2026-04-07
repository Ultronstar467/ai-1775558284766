```javascript
import React from 'react';

const Projects = () => {
  return (
    <div className="projects-section container">
      <h2 className="section-title">Projects</h2>
      <div className="project-card">
        <h3>AI Deployment Platform</h3>
        <p className="project-description">
          Developed a comprehensive platform for deploying, managing, and monitoring AI/ML models. 
          Features include model versioning, API endpoint generation, real-time inference monitoring, 
          and user authentication. Built with React for a dynamic frontend, Node.js/Express for robust 
          backend APIs, and integrated with Docker for containerized model deployment.
        </p>
        <div className="project-tech">
          <span>React</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Docker</span>
          <span>Python (ML Integration)</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/yourprofile/ai-platform" target="_blank" rel="noopener noreferrer" className="btn project-btn">GitHub Repo</a>
          {/* <a href="https://live-demo.com" target="_blank" rel="noopener noreferrer" className="btn project-btn">Live Demo</a> */}
        </div>
      </div>
      {/* Add more projects here as needed */}
    </div>
  );
};

export default Projects;
```