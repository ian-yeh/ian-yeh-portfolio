import { useRef } from 'react';
import FrontPage from './FrontPage/FrontPage';
import AboutSection from './AboutSection/AboutSection';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';

const Home = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div>
      <Header 
        scrollToAbout={() => scrollTo(aboutRef)} 
        scrollToProjects={() => scrollTo(projectRef)}
        scrollToHome={() => scrollTo(homeRef)}
      />

      <FrontPage 
        scrollToContact={() => scrollTo(contactRef)}
        ref={homeRef}
      />

      <AboutSection ref={aboutRef} />
      <Projects ref={projectRef} />
      <Contact ref={contactRef} />

      <Footer />
    </div>
  );
};

export default Home;
