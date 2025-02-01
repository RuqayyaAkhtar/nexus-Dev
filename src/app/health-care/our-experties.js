'use client'
import React from 'react';
'../globals.css';
import styles from './our-experties.module.css';
import Image from 'next/image';
import image1 from './health-care-imgs/Developing a mobile application and software.png';
import image2 from './health-care-imgs/black doctor walking with clipboard in hand.png';
import image6 from './health-care-imgs/Health technology and digital health solutions.png';
import image5 from './health-care-imgs/Healthy lifestyle app on smartphone screen.png';
import image3 from './health-care-imgs/Lettering 404 with gears and exclamation mark text.png';
import image11 from './health-care-imgs/Personal finance management in app.png';
import image7 from './health-care-imgs/Smartphone with online medical app surrounded by pills and thermometer.png';
import image22 from './health-care-imgs/Workspace with analytics on computer.png';
import image4 from './health-care-imgs/computer board.png';
// import image3 from './health-care-imgs/Medical insurance policy or health insurance.png';
// import image4 from './health-care-imgs/user interface elements.png';
// import image5 from './health-care-imgs/Healthy lifestyle app on smartphone screen.png';
// import image6 from './health-care-imgs/Health technology and digital health solutions.png';
// import image7 from './health-care-imgs/Smartphone with online medical app surrounded by pills and thermometer.png';


const OurExperties = () => {
    const solutions = [
        {
            id: 1,
            title: "Task-Oriented Approach:",
            description: "We deliver easy-to-use and operate software using a task-orientation approach. It helps you to manage your staff efficiently",
            icon: image1,
        },
        {
            id: 2,
            title: "User-Friendly UI/UX:",
            description: "Our healthcare app comes with incredible patterns and a user-friendly UI/UX. The comprehensive interface allows smooth navigation.",
            icon: image22,
        },
        {
            id: 3,
            title: "App Maintenance:",
            description: "Our developer updates your healthcare app regularly as per the feedback from your audience. Fixing bugs and adding a feature is of top priority.",
            icon: image3,
        },
        {
            id: 4,
            title: "App Testing:",
            description: "We conduct testing to identify in your healthcare mobile app while also checking whether the app is compliant with HIPAA or not.",
            icon: image4,
        },
  
    ];

    return (
        <section className={styles.heroSectionMain2}>
            <section className={styles.solutionsSectionC}>
                <h2 className={styles.headingS}>
                    Our Expertise
                </h2>
                <p className={styles.subheadingS}>
                    Unlock your true potential, leverage the best of technology, and create applications based on a modern algorithm with our experts.
                </p>
                <div className={styles.cardContainer}>
                    <div className={styles.cardContainerr}>
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

export default OurExperties;
