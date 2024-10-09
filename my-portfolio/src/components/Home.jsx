import React from 'react';
import Header from './Header';

const Home = ({ loaded }) => {
  return (
    <div id="home" className={`section home ${loaded ? 'loaded' : ''}`}>
      <Header />
      <div className="home-content">
        <h1>Welcome to My Website</h1>
        <p>Scroll down to learn more</p>
      </div>
    </div>
  );
};

export default Home;