'use client'
import React, { useState } from 'react';
import styles from './industries.module.css';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Data from './data';
const buttons = [
  'All Industries',
  'Telecommunication',
  'State Agencies ',
  'Health Care',
  'Accountants',
  'Educations',
  'Law Firms',
  'Travel',
  'E-Commerce',
];

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState('All Industries');

  const filteredData =
    activeIndustry === 'All Industries'
      ? Data
      : Data.filter((item) => item.title.toLowerCase().includes(activeIndustry.toLowerCase()));


  return (
    <>
      <section className={styles.heroSectionMain2}>
        <section className={styles.section}>
          <div className={styles.buttonsContainer}>
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`${styles.button} ${activeIndustry === button ? styles.active : ''
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
                  <Link href={`/industries/${item.id}`}>
                    <button className={styles.exploreButton}>
                      Explore More <GoArrowUpRight />
                    </button>
                  </Link>
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
