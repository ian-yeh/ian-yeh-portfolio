import { projectsData } from '../../../data/projects.js';

import { FadeInSection } from '../../../components/FadeInSection/FadeInSection.tsx';
import Project from '../../../components/Project/Project.tsx';

import styles from './Projects.module.css';

const Projects = () => {

  console.log(projectsData);

  return (
    <div className={styles.projectContainer}>

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
            />
          </FadeInSection>
        ))}
      </div>

    </div>
  )
}

export default Projects;
