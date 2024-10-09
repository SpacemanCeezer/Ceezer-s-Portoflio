import React, { useEffect, useRef } from 'react';
import '../styles/main.css';
import image1 from '../assets/Recipeasy.png';
import image2 from '../assets/gamehub.png';
import image3 from '../assets/svg.png';
import image4 from '../assets/codequiz.png';

const projectsData = [
  {
    title: 'Recipeasy',
    description: "At Recipeasy, you can find hundreds of delicious and easy-to-make recipes that use ingredients commonly found in most kitchens. Whether you're a seasoned cook or just starting out, this easy-to-use website will be your go-to source for inspiration. Explore our wide range of recipes and start cooking up a storm!",
    image: image1,
  },
  {
    title: 'Gamehub',
    description: "This project exists to help video game enthusiasts, or video game gifters, make sure they are purchasing a video game title at the best deal possible.",
    image: image2,
  },
  {
    title: 'SVG Generator',
    description: "This project serves as a generator for an XML-based vector image format. It takes in certain parameters set by the user, such as text and its colors, the shape as well as its colors (also works with hexadeciamls).",
    image: image3,
  },
  {
    title: 'Simple Code Quiz',
    description: "This code quiz will test you javascript knowledge by asking you a series of 5 javscript related questions. The quiz has a timer of 30 seconds that begins once the user has started the quiz. If the answer the user has selected 5 seconds will be deducted from the timer, once the timer has reached 0 or the user has completed the quiz he will get a total score of 5 and be able to save that score.",
    image: image4,
  },
];

const Project = ({ title, description, image }) => {
  const ref = useRef(null);

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
    <div className="project fade-in mb-8 flex" ref={ref}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-details ml-4">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects section py-12">
      <h2 className="projects-heading">Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projectsData.map((project, index) => (
          <Project 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
