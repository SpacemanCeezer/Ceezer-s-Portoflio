import React, { useEffect, useRef } from 'react';
import '../styles/main.css';
import CV from '../assets/cv.png'; 

const Resume = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="resume" className="section fade-in" ref={ref}>
      <div className="resume-content">
        <h2>Resume</h2>
        <div className="pdf-container">
          <img src={CV} alt="Resume" className="resume-pdf" />
        </div>
        <a href={CV} target="_blank" rel="noopener noreferrer" className="resume-download">Download CV</a>
      </div>
    </section>
  );
};

export default Resume;
