import { forwardRef } from 'react';

import { FadeInSection } from '../../../components/FadeInSection/FadeInSection.tsx';
import styles from './AboutSection.module.css';

import { skills } from '../../../data/skills.ts'

import { 
  logoGithub, 
  logoLinkedin, 
} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const AboutSection = forwardRef<HTMLDivElement>((_, ref) => {
  for (let i = 0; i < skills.length; i++) {
    console.log(skills[i].text)
  }

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.textContainer}>

        <FadeInSection>
          <p className={styles.heading}>( ABOUT ME )</p>
        </FadeInSection>

        <FadeInSection>
          <div className={styles.contentContainer}>
            <div className={styles.mainTextContainer}>
              <p className={styles.mainText}>
                I'm a self-taught full-stack engineer who is passionate about building applications that people use to make their lives easier. I care, I work hard, and I love what I do.
              <br/>
              <br/>
                I'm doing what I do because I know that I have the ability to make the world a better place. Our world is growing increasingly digital, and being there in the golden age of technology,
                where our education systems, politics, transit systems and workforce is online, I'm excited to build and contribute to society. Recently, I've been building tools to help real people solve real problems: tools for speedcubers to analyze their times, and AI summarization systems for your documents. I have so many ideas, and have all the time in the world to make them a reality. I'm glad you can be here for this journey! Feel free to reach out anytime.
              </p>
            </div>
            <div className={styles.skills}>
              <p className={styles.skillsTitle}>SKILLS</p>
              <div className={styles.skillsContainer}>
                <ul className={styles.skillsList}>
                  {skills.map((skill, index) => (
                    <li key={index}>
                      <skill.icon className={styles.skillIcon} />
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
