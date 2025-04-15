import image1 from '../../assets/homepage/ian-picture1.jpg'; // Adjust the path to your image
import styles from './FrontPage.module.css';

const FrontPage = () => {

  return (
    <div className={styles.container}>
      {/* SECTION 1 */}
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>&lt;HEY!/&gt;</h1>
        <p className={styles.paragraph}>
          Welcome to my portfolio! I'm Ian Yeh, a 17-year-old aspiring software developer from Richmond Hill, Ontario.
        </p>
        <p className={styles.paragraph}>
          I'm glad that you're here, feel free to take a look!
        </p>

       </div>

      <div className={styles.imageContainer}>
        <img src={image1} alt="My Image" className={styles.image}/>
      </div>
    </div>
  )
}

export default FrontPage;
