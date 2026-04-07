```javascript
import React from 'react';
import profilePic from '../../public/harsha-profile.jpg'; // Ensure this path is correct or update with your image

const Hero = () => {
  return (
    <div className="hero-content">
      <div className="profile-card">
        <img src={profilePic} alt="Harsha Vardhan Goud" className="profile-pic" />
        <div className="profile-info">
          <h1>Harsha Vardhan Goud</h1>
          <h2>Full-stack Developer | Specializing in AI/ML Deployment</h2>
          <p className="headline">
            Passionate about building scalable and efficient web applications with a strong foundation in React and Node.js. 
            Eager to contribute to innovative projects, particularly in the realm of AI and machine learning infrastructure.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn primary-btn">LinkedIn</a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="btn secondary-btn">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
```