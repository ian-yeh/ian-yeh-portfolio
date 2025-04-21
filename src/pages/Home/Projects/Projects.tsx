import { forwardRef } from 'react';

import { projectsData } from '../../../data/projects.js';

import { FadeInSection } from '../../../components/FadeInSection/FadeInSection.tsx';
import Project from '../../../components/Project/Project.tsx';

import styles from './Projects.module.css';

const Projects = forwardRef((props, ref) => {

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.contentContainer}>

        {/* adding my projects into the site */}
        <FadeInSection>
          <p className={styles.heading}>( PROJECTS )</p>
        </FadeInSection>

        <div className={styles.projectList}>
          {projectsData.map((project) => (
            <FadeInSection key={project.id}>
              <Project
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                repository={project.repository}
              />
            </FadeInSection>
          ))}
        </div>
      </div>

    </div>
  )
});

export default Projects;
