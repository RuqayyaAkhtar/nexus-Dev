'use client'
import React from 'react';
'../globals.css';
import styles from './choose-nexus.module.css';
import Image from 'next/image';
import image1 from './health-care-imgs/Mask group.png';
import image2 from './health-care-imgs/two doctors making finger heart.png';

const ChooseNexus = () => {
  const solutions = [
    {
      id: 1,
      title: "High Security:",
      description: "The healthcare software we build are known for their robustness. We build them to be highly secure and hack-proof.",
      icon: image1,
    },
    {
      id: 2,
      title: "Better Interoperability",
      description: "The healthcare software we build are known for their robustness. We build them to be highly secure and hack-proof.",
      icon: image1,
    },
    {
      id: 3,
      title: "Technology Inclusion: ",
      description: "The healthcare software we build are known for their robustness. We build them to be highly secure and hack-proof.",
      icon: image1,
    },
    {
      id: 4,
      title: "Customer Satisfaction",
      description: "The healthcare software we build are known for their robustness. We build them to be highly secure and hack-proof.",
      icon: image1,
    },
    {
      id: 5,
      title: "Flexible Engagement Models",
      description: "The healthcare software we build are known for their robustness. We build them to be highly secure and hack-proof.",
      icon: image1,
    },
    {
      id: 6,
      title: "Cost-effective Rates",
      description: "The healthcare software we build are known for their robustness. We build them to be highly secure and hack-proof.",
      icon: image1,
    },
  
  ];

  return (
    <section className={styles.heroSectionMain2}>
  <section className={styles.solutionsSectionC}>
    <h2 className={styles.headingS}>
      Why Choose NEXUS for Healthcare App Development Solutions?
    </h2>
    <p className={styles.subheadingS}>
      Nexus has worked with more than 50+ healthcare firms helping them
      transform the space through digitalization. Our team of Health developers
      know what it takes to make secure, innovative solutions. The experience
      that we have gathered over the years makes us the top healthcare software
      development company around the globe.
    </p>
    <div className={styles.cardContainer}>
      {solutions.map((solution) => (
        <div key={solution.id} className={styles.card}>
          <Image
            src={solution.icon}
            alt={solution.title}
            className={styles.icon}
          />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{solution.title}</h3>
            <p className={styles.cardDescription}>{solution.description}</p>
          </div>
        </div>
        
      ))}
          <div className={styles.imageContainer2}>
            <Image
              src={image2}
              alt="Handshake"
              className={styles.heroImage2}
            />
          </div>
    </div>
  </section>
</section>

  );
};

export default ChooseNexus;
