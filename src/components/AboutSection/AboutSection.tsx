import { FadeInSection } from '../FadeInSection/FadeInSection.tsx';
import Project from '../Project/Project';

import styles from './AboutSection.module.css';

import { projectsData } from '../../data/projects.js';

const AboutSection = () => {

  console.log(projectsData);

  return (
    <div className={styles.container}>
      {/* SECTION 2 MY TECHNOLOGIES USED: TO DO ADD BACKGROUND */}
      <div className={styles.textContainer}>

        <FadeInSection>
          <p className={styles.smallHeading}>( TECHNOLOGIES )</p>
        </FadeInSection>

        <FadeInSection>
          <p className={styles.mainText}>

        I AM CONSTANTLY LEARNING NEW THINGS AND EXPANDING MY TOOLKIT. I BUILD WITH TYPESCRIPT, REACT, NODE.JS,
        CSS AND NEXT.JS, AND THREE.JS, BUT I LOVE KEEPING UP WITH WHAT IS NEW.  

          </p>
        </FadeInSection>

      </div>

      <div className={styles.projectContainer}>

        {/* adding my projects into the site */}
        <FadeInSection>
          <p className={styles.smallHeading}>( PROJECTS )</p>
        </FadeInSection>

        <div className={styles.projectList}>
          {projectsData.map((project) => (
            <FadeInSection key={project.id}>
              <Project
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
              />
            </FadeInSection>
          ))}
        </div>

      </div>

    </div>
  );
}

export default AboutSection;
