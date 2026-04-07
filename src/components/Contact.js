```javascript
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section container">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-intro">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="contact-info-grid">
        <div className="contact-item">
          <strong>Email:</strong> <a href="mailto:your.email@example.com">harsha.goud@example.com</a>
        </div>
        <div className="contact-item">
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Harsha Vardhan Goud</a>
        </div>
        <div className="contact-item">
          <strong>GitHub:</strong> <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a>
        </div>
      </div>
      {/* You could add a simple contact form here if desired */}
    </div>
  );
};

export default Contact;
```