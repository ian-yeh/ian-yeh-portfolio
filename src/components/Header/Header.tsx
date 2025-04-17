// src/components/Header/Header.tsx
import { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeBar, setActiveBar] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = Math.ceil((scrollTop / scrollHeight) * 100);

      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={styles.header}>

      <div >
        <Link className={`${styles.logo} ${styles.headerText} ${activeBar ? styles.scrolled : styles.notScrolled}`} to="/">
          &lt;IAN.YEH/&gt;
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.fadeUp1}`}>
            <Link 
              className={`${styles.headerText} ${styles.navLink} ${activeBar ? styles.scrolled:styles.notScrolled}`} 
              to="/"
            >
              (HOME)
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.fadeUp2}`}>
            <Link 
              className={`${styles.headerText} ${styles.navLink} ${activeBar ? styles.scrolled:styles.notScrolled}`} 
              to="/about"
            >
              (ABOUT)
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.fadeUp3}`}>
            <Link 
              className={`${styles.headerText} ${styles.navLink} ${activeBar ? styles.scrolled:styles.notScrolled}`} 
              to="/contact"
            >
              (CONTACT)
            </Link>
          </li>
        </ul>
      </nav>

      {/* Scroll progress */}
      <p className={`${styles.percentageDisplay} ${activeBar? styles.scrolled:styles.notScrolled}`}>
        {scrollPercentage}%
      </p>

    </header>
  );
}

export default Header;
