interface ProjectProps {
  title: string;
  description: string;
  technologies: string;
  imageUrl: string;
}

const Project: React.FC<ProjectProps> = (
  {
    title, description, technologies, imageUrl
  }
) => {
  return (
    <div style={styles.project}>
      <h2 className="section2Text">{title}</h2>
      <img style={styles.image} src={imageUrl} alt={title} />
      <p className="section2Text">{description}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  project: {
    border: '1px solid white',
    width: '300px', // Added 'px'
    backgroundColor: 'white',
    display: 'flex', // Added
    flexDirection: 'column', // Added
    alignItems: 'center', // Centers horizontally
  },
  image: {
    width: '150px',
    // marginLeft: 'auto', // Remove these
    // marginRight: 'auto', // Remove these
  },
}


export default Project;
