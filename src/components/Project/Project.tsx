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
      <h2 className="section2Text" style={styles.title}>{title}</h2>
      <img style={styles.image} src={imageUrl} alt={title} />
      <p className="section2Text" style={styles.description}>{description}</p>
      <div style={styles.technologies}>
        {technologies.map((tech, index) => (
          <span className="section2Text" key={index} style={styles.tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  project: {
    border: '1px solid white',
    width: '600px', 
    height: '600px', 
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
    borderRadius: '5%',
  },
  image: {
    width: '424px',
  },
  description: {
    paddingLeft: "2%",
    paddingRight: "2%",
    textAlign: "center",
    marginTop: "24px",
    fontSize: "18px",
  },
  title: {
    marginTop: "8px",
    marginBottom: "8px",
    fontSize: "30px",
  },
  technologies: {
    marginTop: "20px",
  },
  tech: {
    marginLeft: "4px",
    marginRight: "4px",
    backgroundColor: "rgb(230, 230, 230)",
    padding: "8px",
    borderRadius: "5px",
  }
}


export default Project;
