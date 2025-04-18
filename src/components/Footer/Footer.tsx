// src/components/Header/Header.tsx
import styles from './Footer.module.css'; // If using CSS Modules

function Footer() {
  return (
    <div className={styles.footerContainer}> {/* CSS Modules version */}
      <div className={styles.footerText}>
        Made with React.js and CSS by yours truly using NeoVim.
      </div>
      <div className={styles.footerIconContainer}>
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
      </div>
    </div>
  );
}

export default Footer;
