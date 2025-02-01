'use client'
import React from 'react';
'../globals.css';
import Image from 'next/image';
import styles from "./industries.module.css";
import heroImage from './industriesImages/Group 1197132576 (1).png'
import ClientTestimonials from '../home/testimonial'
import RadioSlider from '../home/radioSlider'
import Header from '../header/page'
import Footer from '../footer/page'
import IndustriesSection from './industriesSection';
import FormWithStats from './contactForm';
const IndustriesPage = () => {
  return (
    <>
    <Header/>
    <section className={styles.heroSectionMain}>
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h1 className={styles.heading}>
          The Industries
          We Serve
          </h1>
          <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
          <p  className={styles.description2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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

      <section className={styles.secondSection}>
      <div className={styles.container2}>
       <div className={styles.rightSide}>
  <div className={styles.yellowCircle}></div>
  <div className={styles.statCardmain}>
    <div className={styles.statCarddiv}>
      <div className={styles.statCard}>
        <h3 className={styles.statHeading}>+150</h3>
        <p className={styles.statText}>Served Industries</p>
      </div>
      <div className={styles.statCard}>
        <h3 className={styles.statHeading}>+56 K</h3>
        <p className={styles.statText}>Successful Projects</p>
      </div>
      <div className={styles.statCard}>
        <h3 className={styles.statHeading}>+30K</h3>
        <p className={styles.statText}>Happy Clients</p>
      </div>
      <div className={styles.statCard}>
        <h3 className={styles.statHeading}>+104k</h3>
        <p className={styles.statText}>Hours of Work</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>

    </section>
    <IndustriesSection/>
    {/* section2 */}
    <RadioSlider/>
<ClientTestimonials/>
<FormWithStats/>
    </section>
    <Footer/>
    </>
  );
};

export default IndustriesPage;