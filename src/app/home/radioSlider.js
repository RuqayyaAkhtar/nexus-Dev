'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
import styles from './home.module.css';
import image1 from './homeImages/web-design-website-coding-concept.png';
import image2 from './homeImages/website-layout-company-specializing-yoga-exercise_1096167-127581.png';
import image3 from './homeImages/image 14.png';

const sliderData = [
  {
    title: "Transforming Brand Presence with a Modern Web Design",
    description: `Luxe Interiors, a high-end interior design firm, approached us with the challenge of modernizing their outdated website to better reflect their premium brand and engage their audience. We redesigned the site with a focus on responsive design, an interactive portfolio, improved user experience, and SEO optimization, resulting in a more visually appealing and functional online presence. The new website led to increased engagement, higher conversions, and a stronger brand image, helping Luxe Interiors connect with more potential clients.`,
    client: "Luxe Interiors",
    country: "USA",
    industry: "Web Design & Development",
    image: image1,
  },
  {
    title: "Enhancing E-Commerce Sales with an Intuitive Online Store",
    description: `Luxe Interiors, a high-end interior design firm, approached us with the challenge of modernizing their outdated website to better reflect their premium brand and engage their audience. We redesigned the site with a focus on responsive design, an interactive portfolio, improved user experience, and SEO optimization, resulting in a more visually appealing and functional online presence. The new website led to increased engagement, higher conversions, and a stronger brand image, helping Luxe Interiors connect with more potential clients.`,
    client: "Luxe Interiors",
    country: "USA",
    industry: "Web Design & Development",
    image: image2,
  },
  {
    title: "Boosting Engagement with a Custom Mobile App",
    description: `Luxe Interiors, a high-end interior design firm, approached us with the challenge of modernizing their outdated website to better reflect their premium brand and engage their audience. We redesigned the site with a focus on responsive design, an interactive portfolio, improved user experience, and SEO optimization, resulting in a more visually appealing and functional online presence. The new website led to increased engagement, higher conversions, and a stronger brand image, helping Luxe Interiors connect with more potential clients.`,
    client: "Luxe Interiors",
    country: "USA",
    industry: "Web Design & Development",
    image: image1,
  },
];

const ProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.section2Main}>
      <div className={styles.section3}>
        <h1 className={styles.serveH}>LOOK AT SOME OF OUR LATEST PROJECTS</h1>
        <p>Explore our latest projects and see how we’re helping businesses thrive with innovative digital solutions.</p>
        <div className={styles.containerR}>
          <div className={styles.sliderR}>
            <div
              className={styles.slidesWrapper}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {sliderData.map((item, index) => (
                <div key={index} className={styles.slideR}>
                  <div className={styles.textContentR}>
                    <h3 className={styles.titleR}>{item.title}</h3>
                    <p className={styles.descriptionR}>{item.description}</p>
                    <ul className={styles.detailsR}>
                      <li>
                        <strong>Client:</strong> &nbsp;{item.client}
                      </li>
                      <li>
                        <strong>Country:</strong> &nbsp;{item.country}
                      </li>
                      <li>
                        <strong>Industry:</strong>&nbsp; {item.industry}
                      </li>
                    </ul>
                    <button className={styles.exploreButtonR}>
                      Explore More <span className={styles.arrowR}><GoArrowUpRight /></span>
                    </button>
                  </div>
                  <div className={styles.imageContainerR}>
                    <Image src={item.image} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className={styles.dots}>
            {sliderData.map((_, index) => (
              <span
                key={index}
                className={`${styles.dotR} ${
                  index === currentIndex ? styles.activeDot : ''
                }`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
