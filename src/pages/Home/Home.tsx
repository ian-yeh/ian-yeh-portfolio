import { useRef } from 'react';

import FrontPage from './FrontPage/FrontPage';
import AboutSection from './AboutSection/AboutSection';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';

const Home = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <div>
      <Header 
        scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} 
        scrollToProjects={() => projectRef.current?.scrollIntoView({ behavior: 'smooth' })} 
        scrollToHome={() => homeRef.current?.scrollIntoView({ behavior: 'smooth' })} 
      />

      <FrontPage 
        scrollToContact={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })} 
        ref={homeRef}
      />

      <AboutSection
        ref={aboutRef}
      />

      <Projects
        ref={projectRef}
      />

      <Contact 
        ref={contactRef} 
      />

      <Footer />
    </div>
    
  );
};




export default Home;
