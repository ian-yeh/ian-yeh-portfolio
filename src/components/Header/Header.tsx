// src/components/Header/Header.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToAbout, scrollToProjects, scrollToHome }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = Math.ceil((scrollTop / scrollHeight) * 100);

      setScrollPercentage(scrolled);

      if (scrollPercentage > 100) setScrollPercentage(100);
      if (scrollPercentage < 0) setScrollPercentage(0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={styles.header}>
      <div>
        <Link className={`${styles.logo} ${styles.headerText}`} to="/">
          &lt;IAN.YEH/&gt;
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.fadeUp1}`}>
            <button onClick={scrollToHome}>
              <p className={`${styles.headerText} ${styles.navLink}`}>
                (HOME)
              </p>
            </button>
          </li>
          <li className={`${styles.navItem} ${styles.fadeUp2}`}>
            <button onClick={scrollToAbout}>
              <p className={`${styles.headerText} ${styles.navLink}`}>
                (ABOUT) 
              </p>
            </button>
          </li>
          <li className={`${styles.navItem} ${styles.fadeUp3}`}>
            <button onClick={scrollToProjects}>
              <p className={`${styles.headerText} ${styles.navLink}`}>
                (PROJECTS) 
              </p>
            </button>
          </li>
        </ul>
      </nav>

      {/* Scroll progress */}
      <p className={styles.percentageDisplay}>
        {scrollPercentage}%
      </p>
    </header>
  );
}

export default Header;
