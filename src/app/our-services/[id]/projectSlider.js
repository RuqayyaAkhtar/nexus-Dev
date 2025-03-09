"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./services-details.module.css"; 

export default function ProjectSlider({ slides = [] }) {
  
  const isThreeCard = slides && slides[0] && slides[0].image3 ? true : false;
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
  
    if (!slides || slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [slides?.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.sliderSection1}>
      <div className={styles.sliderContainer}>
        <div
          className={styles.slidesWrapper}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={styles.slide}
              
              style={{
                display: "grid",
                gridTemplateColumns: isThreeCard ? "1fr 1fr 1fr" : "1fr 1fr",
                gap: "1rem",
              }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1} - Image 1`}
                  layout="responsive"
                  width={1600}
                  height={900}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src={slide.image2}
                  alt={`Slide ${index + 1} - Image 2`}
                  layout="responsive"
                  width={1600}
                  height={900}
                  className={styles.projectImage}
                />
              </div>
              {isThreeCard && slide.image3 && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={slide.image3}
                    alt={`Slide ${index + 1} - Image 3`}
                    layout="responsive"
                    width={1600}
                    height={900}
                    className={styles.projectImage}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
