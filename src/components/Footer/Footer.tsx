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
          <IonIcon icon={logoGithub} className={styles.icon} />
          <IonIcon icon={logoLinkedin} className={styles.icon} />
        </div>
      </div>

    </div>
  );
}

export default Footer;
