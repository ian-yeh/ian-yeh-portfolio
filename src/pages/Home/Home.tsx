//import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import FrontPage from '../../components/FrontPage/FrontPage';
import AboutSection from '../../components/AboutSection/AboutSection';


const Home = () => {


  return (
    <div>
      <FrontPage/>
      <AboutSection/>

    </div>
    
  );
};




export default Home;
