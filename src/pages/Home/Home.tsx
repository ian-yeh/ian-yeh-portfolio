//import React from 'react';
import image1 from '../../assets/homepage/ian-picture1.jpg'; // Adjust the path to your image
import './Home.css';
import { Link } from 'react-router-dom';

import { FadeInSection } from '../../components/FadeInSection/FadeInSection.tsx';

import Project from '../../components/Project/Project';

import { projectsData } from '../../data/projects.js';

const Home = () => {

  console.log(projectsData);

  return (
    <div>
      <div style={styles.container}>
        {/* SECTION 1 */}
        <div style={styles.textContainer}>
          <h1 style={styles.heading} className="home-text">&lt;HEY!/&gt;</h1>
          <p style={styles.paragraph} className="home-text">
            Welcome to my portfolio! I'm Ian Yeh, a 17-year-old aspiring software developer from Richmond Hill, Ontario.
          </p>
          <p style={styles.paragraph} className="home-text">
            I'm glad that you're here, feel free to take a look!
          </p>

         </div>

        <div style={styles.imageContainer}>
          <img src={image1} alt="My Image" style={styles.image} className='home-images'/>
        </div>
      </div>


      <div style={section2style.container} className='section2'>
        {/* SECTION 2 MY TECHNOLOGIES USED */}
        <div style={section2style.textContainer}>

          <FadeInSection>
            <p style={section2style.smallHeading} className='section2Text'>( TECHNOLOGIES )</p>
          </FadeInSection>

          <FadeInSection>
            <p style={section2style.mainText} className='section2Text'>

          I AM CONSTANTLY LEARNING NEW THINGS AND EXPANDING MY TOOLKIT. I BUILD WITH TYPESCRIPT, REACT, NODE.JS,
          CSS AND EXPRESS.JS, AND THREE.JS, BUT I LOVE KEEPING UP WITH WHAT IS NEW.  

            </p>
          </FadeInSection>

        </div>

        <div style={section2style.projectContainer}>

          {/* adding my projects into the site */}
          <FadeInSection>
            <p style={section2style.smallHeading} className='section2Text'>( PROJECTS )</p>
          </FadeInSection>

          <div style={section2style.projectList}>
            {projectsData.map((project) => (
              <FadeInSection key={project.id}>
                <Project
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  imageUrl={project.imageUrl}
                />
              </FadeInSection>
            ))}
          </div>

        </div>

      </div>

    </div>
    
  );
};

const section2style = {
  container: {
    display: 'block',
    padding: '150px',
    margin: '0 0 0 0', 
    height: 'fit-content',
  },
  smallHeading: {
    color: 'white',
    textAlign: 'center',
    marginBottom: '32px',
  },
  textContainer: {
    height: 'fit-content',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mainText: {
    textAlign: 'center',
    fontSize: '32px',
    color: 'white',
  },
  projectContainer: {
    marginTop: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  projectList: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 300px)',
    gap: '20px',
    justifyContent: 'center',
  },
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '150px',
    maxWidth: '1200px',
    margin: '0 auto', 
    backgroundColor: '#ffffff',
  },
  textContainer: {
    flex: 1,
    paddingRight: '40px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontfamily: 'Lato',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontfamily: 'Lato',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};


export default Home;
