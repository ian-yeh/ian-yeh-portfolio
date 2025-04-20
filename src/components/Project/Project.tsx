import styles from './Project.module.css';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repository: string;
}

const Project: React.FC<ProjectProps> = ({
  title, 
  description, 
  technologies, 
  imageUrl,
  repository
}) => {
  return (
    <div className={styles.container}>
      <a href={repository} className={styles.link}>
        <img className={styles.image} src={imageUrl} alt={title} />
        <h2 className={`section2Text ${styles.title}`}>{title}</h2>
        <p className={`section2Text ${styles.description}`}>{description}</p>
        
        <div className={styles.technologies}>
          {technologies.map((tech: string, index) => (
            <span className={`section2Text ${styles.tech}`} key={index}>{tech}</span>
          ))}
        </div>
      </a>

    </div>
  );
}

export default Project;
