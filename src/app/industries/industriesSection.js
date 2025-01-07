'use client'
import React, { useState } from 'react';
import styles from './industries.module.css';
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
import Image1 from './industriesImages/website-layout-company-specializing-yoga-exercise_1096167-127581.png'
import Image2 from './industriesImages/doctors-using-laptop.png'
import Image3 from './industriesImages/smiling-business-persons.png'
import Image4 from './industriesImages/elevated-view-human-hands-holding-blocks-mobile-application-icons_23-2147844581.png'
const data = [
  {
    id: 1,
    title: 'Telecommunication',
    description:
      'Telecommunication refers to the transmission of information over distances using technologies like fiber optics, satellites, and wireless networks. It includes voice, data, and video communication systems that connect individuals and businesses globally.',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: Image1,
  },
  {
    id: 2,
    title: 'Health Care',
    description:
      'Website Design & Development: Create responsive and engaging websites that effectively communicate your tech offerings, showcase product features, and provide valuable resources for users and stakeholders.',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: Image2,
  },
  {
    id: 3,
    title: 'Real Estate Agencies ',
    description:
      'SEO & Local Search Optimization: Improve your website’s visibility on search engines with targeted SEO strategies, ensuring your listings appear in front of local buyers and sellers actively searching for real estate.',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: Image3,
  },
  {
    id: 4,
    title: 'Real Estate Agencies ',
    description:
      'SEO & Local Search Optimization: Improve your website’s visibility on search engines with targeted SEO strategies, ensuring your listings appear in front of local buyers and sellers actively searching for real estate.',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: Image4,
  },
];

const buttons = [
  'All Industries',
  'Telecommunication',
  'Health Care',
  'Real Estate',
  'Educations',
  'Retail',
  'Travel',
  'Market Place',
];

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState('All Industries');

  const filteredData =
  activeIndustry === 'All Industries'
    ? data
    : data.filter((item) => item.title.toLowerCase().includes(activeIndustry.toLowerCase()));


  return (
    <>
      <section className={styles.heroSectionMain2}>
        <section className={styles.section}>
          <div className={styles.buttonsContainer}>
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`${styles.button} ${
                  activeIndustry === button ? styles.active : ''
                }`}
                onClick={() => setActiveIndustry(button)}
              >
                {button}
              </button>
            ))}
          </div>

          <div className={styles.contentContainer}>
            {filteredData.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.card} ${index % 2 === 0 ? styles.zigzag : ''}`}
              >
                <div className={styles.imageContent}>
                  <Image src={item.image} alt={item.title} />
                </div>
                <div className={styles.textContent}>
                  <h1>{item.title}</h1>
                  <p className={styles.descriptionI}>{item.description}</p>
                  <p>
                    <strong>Core:</strong> {item.core}
                  </p>
                  <p>
                    <strong>Industry:</strong> {item.industry}
                  </p>
                 <a href="#"> <button className={styles.exploreButton}>Explore More <GoArrowUpRight/></button></a>
                </div>
                
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default IndustriesSection;
