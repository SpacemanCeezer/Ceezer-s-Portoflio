import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/main.css';

const App = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.add('slide-in'); 
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const targets = document.querySelectorAll('.fade-in');
    targets.forEach(target => observer.observe(target));

    return () => {
      targets.forEach(target => observer.unobserve(target));
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div id="contact">
        <Contact />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="resume">
      <Resume />
      </div>
      <Footer />
    </div>
  );
};

export default App;
