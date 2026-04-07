```javascript
import React from 'react';

const skills = [
  'React', 'Node.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Express.js',
  'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS (Basic)', 'Python',
  'Machine Learning Concepts', 'RESTful APIs', 'UI/UX Principles'
];

const Skills = () => {
  return (
    <div className="skills-section container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
```