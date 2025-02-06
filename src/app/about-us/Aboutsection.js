'use client'
import React, { useState } from 'react';
import styles from './about-us.module.css';
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
import Image1 from './aboutImages/image.png'
import Image2 from './aboutImages/cuate.png'
import Image3 from './aboutImages/amico.png'
import Image4 from './aboutImages/image 14.png'
const data = [

  {
    id: 1,
    title: 'Our Mission & Vision',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: Image2,
  },
  {
    id: 2,
    title: 'Our Values',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: Image3,
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

const AboutSection = () => {
  const [activeIndustry, setActiveIndustry] = useState('All Industries');

  const filteredData =
  activeIndustry === 'All Industries'
    ? data
    : data.filter((item) => item.title.toLowerCase().includes(activeIndustry.toLowerCase()));


  return (
    <>
      <section className={styles.heroSectionMain2}>
        <section className={styles.section}>
        <div className={styles.topAbout}>
        <div className={styles.imageContent}>
                  <Image src={Image1} alt='CEO' />
                </div>
                <div className={styles.textContent1}>
                  <h1>Few words by our CEO</h1>
                  <h3>We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,</h3>
                  <p className={styles.descriptionI}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  </div>
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
                  </div>
                
              </div>
            ))}
          </div>
          <div className={styles.topAbout1}>
                <div className={styles.textContent1}>
                  <h1>Providing the best service for you</h1>
                  <p className={styles.descriptionI}>At NEXUS-DEV, we offer a wide range of services designed to help your business succeed in the digital world. Whether you're looking for custom web design, SEO optimization, or digital marketing solutions, our team is here to deliver exceptional results. We focus on creating tailored strategies that meet your unique goals and challenges. With a commitment to innovation and quality, we ensure your brand stands out in a competitive market. Our expertise drives tangible growth, enhancing your online presence and user experience. Explore how our services can transform your business today.</p>
                  </div>
        <div className={styles.imageContent}>
                  <Image src={Image4} alt='CEO' />
                </div>
        </div>
        </section>
      </section>
    </>
  );
};

export default AboutSection;
