'use client'
import React from 'react';
'../globals.css';
import Image from 'next/image';
import styles from "./health-care.module.css";
import heroImage from './health-care-imgs/Group 1197132576.png'
import Header from '../header/page'
import Footer from '../footer/page'
import FormWithStats from '../industries/contactForm';
import HcareSolutionImage from './health-care-imgs/Rectangle 34625839.png'
import { GoArrowUpRight } from "react-icons/go";
import HealthcareSolutions from './health-care-solutions';
import ChooseNexus from './choose-nexus';
import OurExperties from './our-experties';

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
          Health Care
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

    </section>
    {/* section2 */}
    <section className={styles.heroSectionMain2}>
    <section className={styles.section2}>
      <div className={styles.container2}>
    <div className={styles.section2ri8}>
      <Image
      src={HcareSolutionImage}
      alt='health care solution img'
      />
    </div>
    <div className={styles.section2lft}>
      <h1>Build an App That Gives Effective Healthcare Solutions</h1>
      <p>We are the leading healthcare app development company providing award-winning solutions to healthcare startups and established firms. Right from basic clinic management solutions to complex diagnosis and treatment software, our team of healthcare app developers specialise in helping the healthcare domain with tech-powered digital solutions.</p>
      <a href="/nexus-Dev/contact-us"></a><button className={styles.contactUsBtn}>Contact Us < GoArrowUpRight/></button>
    </div>
      </div>

    </section>
      
    </section>
    <HealthcareSolutions/>
    <ChooseNexus/>
    <OurExperties/>
    <FormWithStats/>
    </section>
    <Footer/>
    </>
  );
};

export default IndustriesPage;