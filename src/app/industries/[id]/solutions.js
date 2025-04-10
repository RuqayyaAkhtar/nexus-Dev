'use client'
import React from 'react';
import styles from './industry-detail.module.css';
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';

const ConsultationPage = ({ content = [] }) => {
    if (!content || content.length === 0) return null;

    return (
        <>
            <section className={styles.heroSectionMain2}>
                <section className={styles.sectionC}>
                    <div className={styles.container2}>
                        {content.map((slide, index) => (
                            <div key={index} className={styles.sectionWrapper}>
                                <div className={styles.section2ri8}>
                                    <Image
                                        src={slide.image}
                                        alt="img"
                                        width={500} // Ensure you specify width and height for Next.js images
                                        height={300}
                                    />
                                </div>
                                <div className={styles.section2lft}>
                                    <h1>{slide.title}</h1>
                                    <p>
                                        {slide.description}
                                    </p>
                                    <a href="/nexus-Dev/contact-us"> <button className={styles.contactUsBtn}>
                                        Contact Us <GoArrowUpRight />
                                    </button></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    );
};

export default ConsultationPage;
