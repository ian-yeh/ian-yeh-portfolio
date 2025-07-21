import { forwardRef } from 'react';

import { FadeInSection } from '../../../components/FadeInSection/FadeInSection.tsx';
import styles from './AboutSection.module.css';

import { skills } from '../../../data/skills.ts'

// importing logos
import { 
  logoGithub, 
  logoLinkedin, 
} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const AboutSection = forwardRef<HTMLDivElement>(({}, ref) => {
  for (let i = 0; i < skills.length; i++) {
    console.log(skills[i].text)
  }

  return (
    <div ref={ref} className={styles.container}>
      {/* SECTION 2 MY TECHNOLOGIES USED: TO DO ADD BACKGROUND */}
      <div className={styles.textContainer}>

        <FadeInSection>
          <p className={styles.heading}>( ABOUT ME )</p>
        </FadeInSection>

        <FadeInSection>
          <div className={styles.contentContainer}>
            <p className={styles.mainText}>
              I'm a developer who discovered my passion for technology at a young age, turning early curiosity into a commitment to creating meaningful, functional projects. Today, I focus on using code to build tools that improve lives and solve real problems, especially enjoying the intersection of thoughtful design and practical development. Every project is an opportunity to learn, grow, and contribute something useful to the world.
            <br/>
            <br/>
Outside of coding, I'm passionate about sports—volleyball, basketball, frisbee, and baseball—and love spending time outdoors with friends and family. I'm continuing to build and learn with purpose, starting with small projects that help me gain the technical knowledge to eventually build anything. I'm always looking for new opportunities to collaborate, take on challenges, and use my skills to make a positive impact.
            </p>
            <div className={styles.skills}>
              <p className={styles.skillsTitle}>SKILLS</p>
              <div className={styles.skillsContainer}>
                <ul className={styles.skillsList}>
                {skills.map((skill) => (
                  <li key={skill.id}>
                  {skill.ionicon ? (
                    <IonIcon icon={skill.image} size="small" />
                  ):(
                    <img src={skill.image} width="14" height="14"/>
                  )}
                    <span className={styles.skillsItem}>
                      {skill.text}
                    </span>
                  </li> 
                ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>

        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/ian-y-175b69319/" target="_blank">
            <IonIcon icon={logoLinkedin} className={styles.linkIcons}/>
          </a>
          <a href="https://github.com/ian-yeh" target="_blank">
            <IonIcon icon={logoGithub} className={styles.linkIcons}/>
          </a>
        </div>

      </div>
    </div>
  );
});

export default AboutSection;
