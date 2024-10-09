import React, { useEffect, useRef } from 'react';
import '../styles/main.css';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import slackIcon from '../assets/slack.svg';
import emailIcon from '../assets/email.svg';
import profileImage from '../assets/cesar.JPEG';

const Contact = () => {
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
    <section id="contact" className="section contact-container fade-in" ref={ref}>
      <h2>Hello, I'm</h2>
      <h1>Cesar Castro</h1>
      <h3>Full Stack Developer</h3>
      <div className="image-container">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="social-media">
        <a href="mailto:cesarocastro115@gmail.com"><img src={emailIcon} alt="Email" /></a>
        <a href="https://github.com/SpacemanCeezer"><img src={githubIcon} alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/cesar-castro-3450232b2/"><img src={linkedinIcon} alt="LinkedIn" /></a>
        <a href="https://slack.com/"><img src={slackIcon} alt="Slack" /></a>
      </div>
    </section>
  );
};

export default Contact;