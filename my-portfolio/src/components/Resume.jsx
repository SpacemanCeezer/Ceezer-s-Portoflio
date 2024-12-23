import React, { useEffect, useRef } from 'react';
import '../styles/main.css';
import ResumeImage from '../assets/Resume.png'; // Path to the image
import ResumePDF from '../assets/Resume.pdf'; // Path to the PDF file

const Resume = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const viewFullImage = () => {
    window.open(ResumeImage, '_blank');
  };

  return (
    <section id="resume" className="section fade-in" ref={ref}>
      <div className="resume-content">
        <h2>Resume</h2>

        <div className="image-container">
          <img
            src={ResumeImage}
            alt="Resume"
            className="resume-image"
            width="100%"
            onClick={viewFullImage}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="button-container">
          <a
            href={ResumePDF} 
            download="My_Resume.pdf" 
            className="resume-download"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;