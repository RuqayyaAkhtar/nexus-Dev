import React from 'react';
import styles from './stack.module.css';
import Image from 'next/image';
import techImage1 from './images/image 24.png'
import techImage2 from './images/image 29.png'
import techImage3 from './images/image 26.png'
import techImage4 from './images/image 27.png'
import techImage5 from './images/image 28.png'
import techImage6 from './images/image 25.png'
import techImage7 from './images/image 32.png'
import techImage8 from './images/image 31.png'
import techImage9 from './images/image 30.png'
const StackUsed = () => {
  return (
    <div>
       <section className={styles.section2Main}>
    <div className={styles.section3}>
      <h1 className={styles.serveH}>Stack We Use</h1>
      <p>We leverage a wide range of industry-leading tools to ensure efficient analysis, project management, and data-driven decision-making. From process mapping and requirements documentation to advanced data analytics and reporting, we use the best tools to deliver actionable insights and seamless solutions tailored to your business needs.</p>
      <div className={styles.techMain}>
      <div className={styles.tech}>
        <Image
        src={techImage1}
        alt='techlonogies Image'/>
        <span>Confluence</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage2}
        alt='techlonogies Image'/>
        <span>Slack</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage3}
        alt='techlonogies Image'/>
        <span>Tableau</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage4}
        alt='techlonogies Image'/>
        <span>Asana</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage5}
        alt='techlonogies Image'/>
        <span>Basecamp</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage6}
        alt='techlonogies Image'/>
        <span>Lucid chart</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage7}
        alt='techlonogies Image'/>
        <span>SQL</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage8}
        alt='techlonogies Image'/>
        <span>Visio</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage9}
        alt='techlonogies Image'/>
        <span>Power BI</span>
      </div>
      </div>
    </div>
    </section>
    </div>
  );
}

export default StackUsed;

