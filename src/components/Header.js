```javascript
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#hero" className="logo">Harsha Vardhan Goud</a>
        <nav className="nav-menu">
          <ul>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```