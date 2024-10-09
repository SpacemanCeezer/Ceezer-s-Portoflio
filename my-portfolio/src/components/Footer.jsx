import React from 'react';
import '../styles/main.css';

const Footer = () => {
  return (
    <footer className="footer">
      
      <section>
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
                <p className="legal">© 2023 All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;