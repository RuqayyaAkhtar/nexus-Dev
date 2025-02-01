'use client'
import React from 'react';
'../globals.css';
import styles from './health-care.module.css';
import Image from 'next/image';
import image1 from './health-care-imgs/Personal finance management in app.png';
import image2 from './health-care-imgs/Tablet with medical health indicators.png';
import image3 from './health-care-imgs/Medical insurance policy or health insurance.png';
import image4 from './health-care-imgs/user interface elements.png';
import image5 from './health-care-imgs/Healthy lifestyle app on smartphone screen.png';
import image6 from './health-care-imgs/Health technology and digital health solutions.png';
import image7 from './health-care-imgs/Smartphone with online medical app surrounded by pills and thermometer.png';


const HealthcareSolutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Healthcare App Consultancy",
      description: "Our team of business consultants sit with you to understand your objective and find the way to approach and augment them.",
      icon: image1,
    },
    {
      id: 2,
      title: "Healthcare App Security",
      description: "Our team of business consultants sit with you to understand your objective and find the way to approach and augment them.",
      icon: image2,
    },
    {
      id: 3,
      title: "Prescription App Solution",
      description: "Our team of business consultants sit with you to understand your objective and find the way to approach and augment them.",
      icon: image3,
    },
    {
      id: 4,
      title: "Multiple Use Cases",
      description: "Our team of business consultants sit with you to understand your objective and find the way to approach and augment them.",
      icon: image4,
    },
    {
      id: 5,
      title: "Lifestyle Tracking",
      description: "Our team of business consultants sit with you to understand your objective and find the way to approach and augment them.",
      icon: image5,
    },
    {
      id: 6,
      title: "Electronic Health Record",
      description: "Our team of business consultants sit with you to understand your objective and find the way to approach and augment them.",
      icon: image6,
    },
    {
      id: 7,
      title: "Healthcare App Deployment",
      description: "Our team of business consultants sit with you to understand your objective and find the way to approach and augment them.",
      icon:image7,
    },
  ];

  return (
     <section className={styles.heroSectionMain2}>
    <section className={styles.solutionsSection}>
      <h2 className={styles.headingS}>Our Healthcare App Development Solutions</h2>
      <p className={styles.subheadingS}>
        We help you make healthcare accessible and affordable for the masses in a timeline and price that would suit the business needs. With extensive experience in both consumer-end and in-hospital healthcare solutions, we help you transform the domain.
      </p>
      <div className={styles.cardContainer}>
        {solutions.map((solution) => (
          <div key={solution.id} className={styles.card}>
            <Image src={solution.icon} alt={solution.title} className={styles.icon} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{solution.title}</h3>
              <p className={styles.cardDescription}>{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
};

export default HealthcareSolutions;
