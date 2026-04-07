```javascript
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Harsha Vardhan Goud. All rights reserved.</p>
        <p>Built with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a></p>
      </div>
    </footer>
  );
};

export default Footer;
```