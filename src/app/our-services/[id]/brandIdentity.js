"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "./brand.module.css";

/**
 * @param {Array}   slides          - Array of slide objects (e.g. {image, title, description}).
 * @param {number}  slidesToShow    - How many images to show side by side (3 for top, 1 for bottom).
 * @param {boolean} showDots        - Whether to show dot navigation.
 * @param {boolean} showArrows      - Whether to show next/prev arrows.
 * @param {boolean} overlayCount    - Whether to overlay "1/5" style counter on the image.
 */
const ProjectSlider = ({
  slides = [],
  slidesToShow = 1,
  showDots = false,
  showArrows = false,
  overlayCount = false,
}) => {
  if (!slides || slides.length === 0) return null;

  // If top slider has 5 slides but slidesToShow=3 & showArrows=false,
  // the extra 2 slides won't be visible or navigable.
  // This is per your requirement (no dots/no arrows).

  // For the bottom slider, we do have arrows/dots, so it can cycle through all items.

  // The width (in %) for each slide
  const slideWidthPercent = 100 / slidesToShow;
  // Max index: last "page" of slides
  const maxIndex = slides.length - slidesToShow;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  // For overlaying "1/4", "2/4", etc.
  const overlayText = `${currentIndex + 1}/${slides.length}`;

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderTrack}
        style={{
          width: `${slides.length * slideWidthPercent}%`,
          transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={styles.slide}
            style={{ width: `${slideWidthPercent}%` }}
          >
            <div className={styles.imageWrapper}>
              {/* If overlayCount is true, display the "1/4" style counter */}
              {overlayCount && (
                <div className={styles.overlayCount}>{overlayText}</div>
              )}
              <Image
                src={slide.image}
                alt={slide.title}
                layout="responsive"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
            {/* Title/description (optional) */}
            <h3 className={styles.title}>{slide.title}</h3>
            <p className={styles.description}>{slide.description}</p>
          </div>
        ))}
      </div>

      {/* Show arrows only if showArrows is true */}
      {showArrows && (
        <>
          <button onClick={prevSlide} className={styles.prevBtn}>
            <BsArrowLeft />
          </button>
          <button onClick={nextSlide} className={styles.nextBtn}>
            <BsArrowRight />
          </button>
        </>
      )}

      {/* Dot Navigation */}
      {showDots && (
        <div className={styles.dots}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectSlider;
