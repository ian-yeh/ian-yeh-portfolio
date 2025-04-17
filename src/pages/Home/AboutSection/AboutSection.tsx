import { FadeInSection } from '../../../components/FadeInSection/FadeInSection.tsx';

import styles from './AboutSection.module.css';


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
              <ul>
                <li>PYTHON</li>
                <li>HTML, CSS</li>
                <li></li>
                <li></li>

              </ul>
            </div>

          </div>
        </FadeInSection>

        <div className={styles.icons}>
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="newspaper-outline"></ion-icon>
        </div>

      </div>


    </div>
  );
}

export default AboutSection;
