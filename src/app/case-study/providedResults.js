'use client'
import React from 'react';
'../globals.css';
import styles from './results.module.css';
import Image from 'next/image';
import image1 from './images/Mask group.png';
// import image3 from './health-care-imgs/Medical insurance policy or health insurance.png';
// import image4 from './health-care-imgs/user interface elements.png';
// import image5 from './health-care-imgs/Healthy lifestyle app on smartphone screen.png';
// import image6 from './health-care-imgs/Health technology and digital health solutions.png';
// import image7 from './health-care-imgs/Smartphone with online medical app surrounded by pills and thermometer.png';


const ProvidedResults = () => {
  const solutions = [
    {
      id: 1,
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: image1,
    },
    {
      id: 2,
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: image1,
    },
    {
      id: 3,
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: image1,
    },
    {
      id: 4,
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: image1,
    },
    {
      id: 5,
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      icon: image1,
    },
  
  ];

  return (
    <section className={styles.heroSectionMain2}>
  <section className={styles.solutionsSectionC}>
    <h2 className={styles.headingS}>
    the Results We Provide to our Customer
    </h2>
    <div className={styles.cardContainer}>
      {solutions.map((solution) => (
        <div key={solution.id} className={styles.card}>
          <Image
            src={solution.icon}
            alt="Image"
            className={styles.icon}
          />
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

export default ProvidedResults;
