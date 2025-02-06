import React from 'react';
import styles from './home.module.css';
import Image from 'next/image';
import techImage1 from './homeImages/Group.png'
import techImage2 from './homeImages/Group (1).png'
import techImage3 from './homeImages/Group 1171278189.png'
import techImage4 from './homeImages/Group 1171278192.png'
import techImage5 from './homeImages/Group 1171278195.png'
import techImage6 from './homeImages/Group 1171278198.png'
import techImage7 from './homeImages/Group 1171278201.png'
import techImage8 from './homeImages/Group 1171278204.png'
import techImage9 from './homeImages/Group 1171278208.png'
const OurTechnologies = () => {
  return (
    <div>
       <section className={styles.section2Main}>
    <div className={styles.section3}>
      <h1 className={styles.serveH}>Our Technologies </h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
      <div className={styles.techMain}>
      <div className={styles.tech}>
        <Image
        src={techImage1}
        alt='techlonogies Image'/>
        <span>Figma</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage2}
        alt='techlonogies Image'/>
        <span>React</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage3}
        alt='techlonogies Image'/>
        <span>Photoshop</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage4}
        alt='techlonogies Image'/>
        <span>Illustrator</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage5}
        alt='techlonogies Image'/>
        <span>HTML</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage6}
        alt='techlonogies Image'/>
        <span>CSS</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage7}
        alt='techlonogies Image'/>
        <span>JavaScript</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage8}
        alt='techlonogies Image'/>
        <span>VS Code</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage9}
        alt='techlonogies Image'/>
        <span>Python</span>
      </div>
      </div>
    </div>
    </section>
    </div>
  );
}

export default OurTechnologies;

