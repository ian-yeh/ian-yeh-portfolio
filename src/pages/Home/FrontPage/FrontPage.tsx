import styles from './FrontPage.module.css';

const FrontPage = () => {

  const handleButton = () => {
    alert("Hello, World!");
  }

  return (
    <div className={styles.container}>
      {/* SECTION 1 */}
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Hello, I'm Ian Yeh.</h1>
        <p className={styles.paragraph}>
          A 17-year-old aspiring software developer from Ontario, Canada. An Engineering student at McMaster University.
        </p>
        <p className={styles.paragraph}>
          I'm glad that you're here, feel free to take a look!
        </p>

        <button onClick={handleButton} className={styles.button}>
          <p className={styles.buttonText}>Let's Talk</p>
        </button>

       </div>
    </div>
  )
}

export default FrontPage;
