"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "./brand.module.css";

const BottomSlider = ({ slides = [] }) => {
  if (!slides || slides.length === 0) return null;

  const totalSlides = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const overlayText = `${currentIndex + 1}/${totalSlides}`;

  return (
    <div className={styles.bottomSliderContainer}>
      <div className={styles.bottomSliderTrack}>
        <div className={styles.bottomSlide}>
          <div className={styles.bottomImageWrapper}>
            <div className={styles.bottomOverlayCount}>{overlayText}</div>
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              layout="responsive"
              width={600}
              height={400}
              className={styles.bottomImage}
            />
          </div>
        </div>
      </div>
      {/* ..... */}
      <div className={styles.bottomDots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.bottomDot} ${index === currentIndex ? styles.bottomActiveDot : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className={styles.bottomNav}>
        <button onClick={prevSlide} className={styles.bottomPrevBtn}>
          <BsArrowLeft />
        </button>
        <button onClick={nextSlide} className={styles.bottomNextBtn}>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BottomSlider;
