import { FadeInSection } from '../../../components/FadeInSection/FadeInSection.tsx';
import styles from './AboutSection.module.css';
import { IonIcon } from '@ionic/react';
import { 
  logoGithub, 
  logoHtml5, 
  logoLinkedin, 
  logoCss3, 
  logoReact, 
  logoNodejs, 
  logoInstagram,
  newspaperOutline 
} from 'ionicons/icons';

const AboutSection = () => {
  return (
    <div className={styles.container}>
      {/* SECTION 2 MY TECHNOLOGIES USED: TO DO ADD BACKGROUND */}
      <div className={styles.textContainer}>

        <FadeInSection>
          <p className={styles.heading}>( ABOUT ME )</p>
        </FadeInSection>

        <FadeInSection>
          <div className={styles.contentContainer}>
            <p className={styles.mainText}>
              I AM CONSTANTLY LEARNING NEW THINGS AND EXPANDING MY TOOLKIT. I BUILD WITH TYPESCRIPT, REACT, NODE.JS,
              CSS AND NEXT.JS, AND THREE.JS, BUT I LOVE KEEPING UP WITH WHAT IS NEW.  
            </p>
            <div className={styles.skills}>
              <p className={styles.skillsTitle}>SKILLS</p>
              <div className={styles.skillsContainer}>
                <ul className={styles.skillsList}>
                  <li>
                    <IonIcon icon={logoHtml5} size="small" />
                    HTML
                  </li>
                  <li>
                    <IonIcon icon={logoReact} size="small" />
                    REACT.JS
                  </li>
                </ul>
                <ul className={styles.skillsList}>
                  <li>
                    <IonIcon icon={logoCss3} size="small" />
                    CSS
                  </li>
                  <li>
                    <IonIcon icon={logoNodejs} size="small" />
                    NODE.JS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>

        <div className={styles.icons}>
          <IonIcon icon={logoLinkedin} className={styles.linkIcons}/>
          <IonIcon icon={logoGithub} className={styles.linkIcons}/>
          <IonIcon icon={logoInstagram} className={styles.linkIcons}/>
          <IonIcon icon={newspaperOutline} className={styles.linkIcons}/>
        </div>

      </div>
    </div>
  );
}

export default AboutSection;
