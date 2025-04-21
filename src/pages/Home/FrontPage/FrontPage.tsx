import { forwardRef } from 'react';
import styles from './FrontPage.module.css';

const FrontPage = forwardRef( ({ scrollToContact }, ref) => {

  return (
    <div ref={ref} className={styles.container}>
      {/* SECTION 1 */}
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Hello, I'm Ian Yeh.</h1>
        <p className={styles.paragraph}>
          Software Engineering @ McMaster University
        </p>
        <p className={styles.paragraph}>
          I'm glad that you're here, feel free to take a look!
        </p>

        <button onClick={scrollToContact} className={styles.button}>
          <p className={styles.buttonText}>Let's Talk</p>
        </button>


       </div>
    </div>
  )
});

export default FrontPage;
