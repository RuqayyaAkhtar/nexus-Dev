'use client'
import React, { useState } from 'react';
import styles from './solutions.module.css';
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
import Image1 from './images/card1.png'
import Image2 from './images/card2.png'
import Image3 from './images/card3.png'
import Image4 from './images/card4.png'
import Image5 from './images/card5.png'

const data = [
  {
    id: 1,
    title: 'App Build Cost',
    description:
      'Estimate your app development cost with a detailed breakdown to fit your budget.',
      bulletPoints: [
        "Transparent pricing with no hidden charges.",
         "Get an instant quote based on your app's features." ,
         "Flexible pricing models for startups and enterprises. ",
      ],
    image: Image1,
  },
  {
    id: 2,
    title: 'Build Your Own App',
    description:
      'Bring your app idea to life with expert guidance and cutting-edge technology.',
      bulletPoints: [
        "End-to-end development from concept to launch.",
         "Cross-platform solutions (iOS, Android, Web)." ,
         "Scalable architecture for future growth. ",
      ],
    image: Image2,
  },
  {
    id: 3,
    title: 'Re-Designing ',
    description:
      'Revamp your digital presence with a modern and user-friendly design.',
      bulletPoints: [
        "UI/UX improvements for better engagement.",
         "Responsive and mobile-first approach." ,
         "Conversion-optimized designs for business growth. ",
      ],
    image: Image3,
  },
  {
    id: 4,
    title: 'Web Designing ',
    description:
      'Create visually stunning and high-performance websites tailored to your brand.',
      bulletPoints: [
        "Custom UI design aligned with your brand identity.",
         "SEO-friendly structure for better search rankings." ,
         "Fast-loading pages for a seamless user experience.",
      ],
    image: Image4,
  },
  {
    id: 5,
    title: 'Re-Branding',
    description:
      'Reimagine your brand with fresh visuals, messaging, and strategy.',
      bulletPoints: [
        "Brand identity design (logo, typography, colors).",
         "Complete rebranding strategy for businesses." ,
         "Align your brand with current market trends.",
      ],
    image: Image5,
  },
];



const SolutionCards = () => {
  const [activeIndustry, setActiveIndustry] = useState('All Industries');

  const filteredData =
  activeIndustry === 'All Industries'
    ? data
    : data.filter((item) => item.title.toLowerCase().includes(activeIndustry.toLowerCase()));


  return (
    <>
      <section className={styles.heroSectionMain2}>
        <section className={styles.section}>

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
                  <ul className={styles.listt}>
                  {item.bulletPoints &&
                    item.bulletPoints.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                </ul>
                 <a href="#"> <button className={styles.exploreButton}>Let's Talk <GoArrowUpRight/></button></a>
                </div>
                
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default SolutionCards;
