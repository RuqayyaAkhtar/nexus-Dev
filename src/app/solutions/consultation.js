'use client'
import React, { useState } from 'react';
import styles from './solutions.module.css';
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
import Image1 from './images/Rectangle 34625839.png'




const ConsultationPage = () => {

  return (
    <>
      <section className={styles.heroSectionMain2}>
        <section className={styles.sectionC}>
        <div className={styles.container2}>
    <div className={styles.section2ri8}>
      <Image
      src={Image1}
      alt=' img'
      />
    </div>
    <div className={styles.section2lft}>
      <h1>Explore Solutions & Get a Free Consultation</h1>
      <p>Discover innovative solutions tailored to your business needs. Whether you're looking to build an app, redesign your website, or revamp your brand, we provide expert-driven strategies to bring your vision to life. Get a free consultation today and explore how we can elevate your project with cutting-edge technology and creative solutions.</p>
      <a href="/nexus-Dev/contact-us"><button className={styles.contactUsBtn}>Contact Us < GoArrowUpRight/></button></a>
    </div>
      </div>
        </section>
      </section>
    </>
  );
};

export default ConsultationPage;
