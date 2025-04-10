"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./services-details.module.css";

export default function ProjectSlider({ slides = [] }) {
  // 1. Track window width
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth <= 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 2. On small screens, flatten slides so each card is its own slide
  const flattened = slides.flatMap((slide) => {
    const cards = [
      {
        image: slide.image,
        heading: slide.heading,
        date: slide.date,
        paragraph: slide.paragraph,
      },
      {
        image: slide.image2,
        heading: slide.heading2,
        date: slide.date2,
        paragraph: slide.paragraph2,
      },
    ];
    if (slide.image3) {
      cards.push({
        image: slide.image3,
        heading: slide.heading3,
        date: slide.date3,
        paragraph: slide.paragraph3,
      });
    }
    return cards;
  });

  // 3. Choose which slides to render
  const renderSlides = isSmall
    ? flattened.map((card, idx) => ({ cards: [card], key: `s-${idx}` }))
    : slides.map((slide, idx) => ({
        cards: [
          {
            image: slide.image,
            heading: slide.heading,
            date: slide.date,
            paragraph: slide.paragraph,
          },
          {
            image: slide.image2,
            heading: slide.heading2,
            date: slide.date2,
            paragraph: slide.paragraph2,
          },
          ...(slide.image3
            ? [
                {
                  image: slide.image3,
                  heading: slide.heading3,
                  date: slide.date3,
                  paragraph: slide.paragraph3,
                },
              ]
            : []),
        ],
        key: `m-${idx}`,
      }));

  // 4. Slider logic
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (renderSlides.length === 0) return;
    const iv = setInterval(() => {
      setCurrentIndex((i) =>
        i === renderSlides.length - 1 ? 0 : i + 1
      );
    }, 6000);
    return () => clearInterval(iv);
  }, [renderSlides.length]);

  return (
    <section className={styles.sliderSection1}>
      <div className={styles.sliderContainer}>
        <div
          className={styles.slidesWrapper}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {renderSlides.map(({ cards, key }) => (
            <div
              key={key}
              className={styles.slide}
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cards.length}, 1fr)`,
                gap: "1rem",
              }}
            >
              {cards.map((c, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={c.image}
                      alt={c.heading}
                      layout="responsive"
                      width={1600}
                      height={900}
                      className={styles.projectImage}
                    />
                  </div>
                  <div className={styles.cardContentS}>
                    <h3 className={styles.cardTitleS}>{c.heading}</h3>
                    <p className={styles.cardDateS}>{c.date}</p>
                    <p className={styles.cardDescS}>{c.paragraph}</p>
                    <a href="/nexus-Dev/case-study">
                      <button className={styles.viewButton}>View</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className={styles.dotsContainer}>
        {renderSlides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              i === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
