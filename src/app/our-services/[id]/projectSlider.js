"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./services-details.module.css"; // your CSS module (example)


export default function ProjectSlider({ slides }) {
    // currentIndex holds the index of the current slide
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Auto-advance the slider every 6000ms (6 seconds)
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
  
      return () => clearInterval(interval);
    }, [slides.length]);
  
    // Handle dot click to manually jump to a slide
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
              <div key={index} className={styles.slide}>
                {/* Each slide shows two images side by side */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1} - Image 1`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={slide.image2}
                    alt={`Slide ${index + 1} - Image 2`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.projectImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Dot Navigation */}
        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </section>
    );
  }