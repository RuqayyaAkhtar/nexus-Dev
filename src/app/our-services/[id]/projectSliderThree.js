"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./projectThree.module.css";

export default function ProjectSlider({ slides = [] }) {
  const isThreeCard = slides && slides[0] && slides[0].image3 ? true : false;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let mobileSlides = [];
  if (isMobile && slides.length > 0) {
    slides.forEach((slide) => {
      mobileSlides.push({ src: slide.image, title: slide.title, desc: slide.desc });
      mobileSlides.push({ src: slide.image2, title: slide.title2, desc: slide.desc2 });
      if (isThreeCard && slide.image3) {
        mobileSlides.push({ src: slide.image3, title: slide.title3, desc: slide.desc3 });
      }
    });
  }

  useEffect(() => {
    const slideLength = isMobile ? Math.ceil(mobileSlides.length / 2) : slides.length;
    if (slideLength === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slideLength - 1 ? 0 : prevIndex + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides, isMobile, mobileSlides]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const renderImageCard = (src, title, desc, key) => (
    <div className={styles.imageWrapper} key={key}>
      <Image
        src={src}
        alt={title || `Slide ${key + 1}`}
        layout="responsive"
        width={1600}
        height={900}
        className={styles.projectImage}
      />
      <div className={styles.overlayContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDesc}>{desc}</p>
        <a href="/nexus-Dev/case-study">
          <button className={styles.viewButton}>View</button>
        </a>
      </div>
    </div>
  );

  // Mobile slider view: render 2 cards per "page"
  if (isMobile) {
    const totalPages = Math.ceil(mobileSlides.length / 2);
    return (
      <section className={styles.sliderSection1}>
        <div className={styles.sliderContainer}>
          <div
            className={styles.mobileSlidesWrapper}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const firstIndex = pageIndex * 2;
              return (
                <div className={styles.mobileSlide} key={pageIndex}>
                  {mobileSlides
                    .slice(firstIndex, firstIndex + 2)
                    .map((item, idx) =>
                      renderImageCard(item.src, item.title, item.desc, firstIndex + idx)
                    )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Dot Navigation for mobile */}
        <div className={styles.dotsContainer}>
          {Array.from({ length: totalPages }).map((_, index) => (
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
              {renderImageCard(slide.image, slide.title, slide.desc, index)}
              {renderImageCard(slide.image2, slide.title2, slide.desc2, index + 100)}
              {isThreeCard &&
                slide.image3 &&
                renderImageCard(slide.image3, slide.title3, slide.desc3, index + 200)}
            </div>
          ))}
        </div>
      </div>
      {/* Dot Navigation for desktop */}
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
