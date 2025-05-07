// src/components/Footer/Footer.tsx
import styles from './Footer.module.css'; // Changed from Footer.module.css to match component name
import { IonIcon } from '@ionic/react';
import {
  logoGithub,
  logoLinkedin,
} from 'ionicons/icons';

function Footer() {
  return (
    <div className={styles.container}>

      <div className={styles.footerContainer}>
        <div className={styles.footerText}>
          Made with React.js and CSS by yours truly using NeoVim.
        </div>
        <div className={styles.footerIconContainer}>
          <a href="https://www.linkedin.com/in/ian-y-175b69319/" target="_blank">
            <IonIcon icon={logoLinkedin} className={styles.icon} />
          </a>
          <a href="https://github.com/ian-yeh" target="_blank">
            <IonIcon icon={logoGithub} className={styles.icon} />
          </a>
        </div>
      </div>

    </div>
  );
}

export default Footer;
