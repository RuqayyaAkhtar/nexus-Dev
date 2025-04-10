"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./brand.module.css";

// Component for each logo slide that handles hover state
const LogoSlide = ({ slide, width }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles.topSlide}
      style={{ width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.topImageWrapper}>
        <Image
          src={isHovered && slide.hoverImage ? slide.hoverImage : slide.image}
          alt={slide.title}
          layout="responsive"
          width={600}
          height={400}
          className={styles.topImage}
        />
      </div>
    </div>
  );
};

const TopSlider = ({ slides = [] }) => {
  if (!slides || slides.length === 0) return null;

  // Set the number of slides to show at once

  const slidesToShow = 3; 
  const totalSlides = slides.length;
  const totalPages = Math.ceil(totalSlides / slidesToShow);

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
          <LogoSlide 
            key={index} 
            slide={slide} 
            width={`${100 / slidesToShow}%`} 
          />
        ))}
      </div>
    </div>
  );
};

export default TopSlider;
  