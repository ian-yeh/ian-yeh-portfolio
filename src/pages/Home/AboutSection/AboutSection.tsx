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
              I'm a developer who started building websites from a young age. What began as curiosity quickly turned into a deep passion for technology and creativity. Over time, that early spark grew into a commitment to creating projects that are not only functional but meaningful. Today, I’m focused on using code to build tools that improve lives, solve real problems, and make a positive impact.
            <br/>
            <br/>
I’m especially interested in the connection between thoughtful design and practical development. I enjoy bringing ideas to life, whether that means crafting user-friendly interfaces, building powerful backend systems, or experimenting with new technologies. Every project is a chance to learn, grow, and contribute something useful to the world.
            <br/>
            <br/>
Outside of development, I’m also a volleyball, basketball, frisbee, and baseball player. I love getting outside and spending time with my friends and family and enjoying the simple joys of playing sports.
            <br/>
            <br/>
Right now, I’m continuing to build, learn, and create with purpose. I want to create projects that matter for people who need them most. Yes, it starts small, but these little projects eventually become part of my journey to get the technical knowledge to be able to build anything in the world. I’m always looking for new opportunities to collaborate, take on challenges, and use my skills to help make the world a better place.
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
                    {skill.text}
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
