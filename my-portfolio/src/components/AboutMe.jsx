import React, { useState, useEffect, useRef } from 'react';
import '../styles/main.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

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
    <div className={`about-container fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="about-content">
        <h2>About Me</h2>
        <p>My name is Cesar Castro. From a young age, I've been fascinated by the endless possibilities that coding offers, and my journey into programming has been one of constant discovery and growth.</p>
        <p>With a strong foundation in HTML, CSS, JavaScript, and a variety of other programming languages and tools, I'm equipped to tackle diverse projects and collaborate effectively with teams to deliver exceptional results.</p>
        <p>I'm excited to continue contributing to the world of technology while making connections and leaving a positive mark wherever I go.</p>
      </div>
    </div>
  );
};

export default About;