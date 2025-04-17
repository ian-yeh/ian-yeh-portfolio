//import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import FrontPage from './FrontPage/FrontPage';
import AboutSection from './AboutSection/AboutSection';
import Projects from './Projects/Projects';

const Home = () => {

  return (
    <div>
      <FrontPage/>
      <AboutSection/>
      <Projects/>

    </div>
    
  );
};




export default Home;
