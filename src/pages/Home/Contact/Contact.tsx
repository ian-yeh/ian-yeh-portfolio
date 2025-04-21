import { forwardRef } from 'react';
import { FadeInSection } from '../../../components/FadeInSection/FadeInSection.tsx';
import FormComponent from './Form/FormComponent.tsx';

import styles from './Contact.module.css';


const Contact = forwardRef((props, ref) => {

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.textContainer}>

        <FadeInSection>
          <p className={styles.heading}>( CONTACT )</p>
        </FadeInSection>


        <FadeInSection>
          <div className={styles.contentContainer}>

            {/* add form */}
            <div className={styles.formWrapper}>
              <FormComponent />
            </div>
            

          </div>
        </FadeInSection>

      </div>


    </div>
  );
});

export default Contact;
