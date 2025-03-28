"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./brand.module.css";

const TopSlider = ({ slides = [] }) => {
  if (!slides || slides.length === 0) return null;

  const slidesToShow = 3; // Number of slides visible at a time
  const totalSlides = slides.length;
  const totalPages = Math.ceil(totalSlides / slidesToShow); // Total groups of 3 slides

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (totalPages > 1) {
      const interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [totalPages]);

  return (
    <div className={styles.topSliderContainer}>
          <h2 className={styles.headingS}>Brand Identity Design</h2>
        <p className={styles.subheadingS}>
          Our Brand Identity Design service focuses on creating a unique and cohesive 
          visual representation of your brand. We design custom logos, color schemes, 
          typography, and brand guidelines to ensure consistency across all touchpoints.
        </p>
      <div
        className={styles.topSliderTrack}
        style={{
          display: "flex",
          width: `${totalPages * 100}%`, 
          transform: `translateX(-${currentPage * (100 / totalPages)}%)`,
          transition: "transform 0.7s ease-in-out", 
        }}
      >
     
        {slides.map((slide, index) => (
          <div
            key={index}
            className={styles.topSlide}
            style={{ width: `${100 / slidesToShow}%` }}
          >
            <div className={styles.topImageWrapper}>
              <Image
                src={slide.image}
                alt={slide.title}
                layout="responsive"
                width={600}
                height={400}
                className={styles.topImage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSlider;
