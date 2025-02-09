'use client';
import Image from 'next/image';
import Footer from '../footer/page';
import Header from '../header/page';
import styles from './portfolio.module.css';
import heroImage from './images/cuate.png'
import ProjectSection from './projects';

const Portfolio = () => {
    return (
        <>
            <Header />
             <section className={styles.heroSectionMain}>
            <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h1 className={styles.heading}>
          Portfolio
          </h1>
          <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         </p>
          <p  className={styles.description2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className={styles.description3}>
          Latest update on 12 sep, 2024
         </p>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.imageContainer}>
            <Image
              src={heroImage}
              alt="Handshake"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>

    </section>
    <section className={styles.heroSectionMain2}>
            <div className={styles.section2}>
                <h1 className={styles.titlee}>The List Of Projects We Worked on and Currently Working</h1>
               <ProjectSection/>
            </div>
            </section>
            </section>
            <Footer />
        </>
    );
};

export default Portfolio;
