//import React from 'react';
import image1 from '../../assets/homepage/ian-picture1.jpg'; // Adjust the path to your image
import './Home.css';

import Project from '../../components/Project/Project';

const Home = () => {
  return (
    <div>
      <div style={styles.container}>
        {/* landing page */}
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
        {/* adding my projects into the site */}
        <p style={styles.paragraph} className='home-text'></p>
        <Project/>
      </div>
    </div>
    
  );
};

const section2style = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '150px',
    margin: '0 0 0 0', 
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
