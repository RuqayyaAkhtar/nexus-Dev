'use client'
import React from 'react';
'../globals.css';
import Image from 'next/image';
import styles from "./solutions.module.css";
import heroImage from './images/Group 1197132640.png'
import Header from '../header/page'
import Footer from '../footer/page'
import Consultation from './consultation'
import SolutionSection from './solutionCards.js';
import StackUsed from '../our-services/stack';
import ContactForm from '../industries/contactForm.js';
const SolutionPage = () => {
  return (
    <>
    <Header/>
    <section className={styles.heroSectionMain}>
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h1 className={styles.heading}>
          Solutions
          </h1>
          <p className={styles.description}>
        Tailored Solutions for Your Digital Success
          </p>
          <p  className={styles.description2}>From app development to rebranding, we empower businesses with cutting-edge solutions to scale and innovate.</p>
        <a href="/"><button className={styles.ctaButton}>Get Started</button></a>
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
    <Consultation/>
    
    <SolutionSection/>
    {/* section2 */}
    <StackUsed/>
<ContactForm/>
    </section>
    <Footer/>
    </>
  );
};

export default SolutionPage;