"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./industry-detail.module.css";
import Image from "next/image";
import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import servicesData from "../data"; // your data.js
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ContactForm from "/src/app/industries/contactForm";
import Solutions from "./solutions"; // your existing Solutions component

export default function ServiceDetails() {
  const { id } = useParams();
  const router = useRouter();

  // ===== Find matching service =====
  const service = servicesData.find((item) => item.id === Number(id));
  if (!service) {
    return <p className={styles.notFound}>Service not found</p>;
  }

  return (
    <>
      <Header />

      {/* ===== Banner Section ===== */}
      <section className={styles.heroSectionMain}>
        <section className={styles.heroSection}>
          {service.banner &&
            service.banner.map((banner, index) => (
              <div key={index} className={styles.container}>
                {/* Left Column */}
                <div className={styles.leftColumn}>
                  <h1 className={styles.heading}>{banner.heading}</h1>
                  <p className={styles.description}>{banner.para1}</p>
                </div>
                {/* Right Column */}
                <div className={styles.rightColumn}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={banner.image}
                      alt="Handshake"
                      className={styles.heroImage}
                    />
                  </div>
                </div>
              </div>
            ))}
        </section>

        {/* ===== Solutions Section (Single-Solution) ===== */}
        <section className={styles.heroSectionMain2}>
          <div className={styles.section2}>
            {service.solution && <Solutions content={service.solution} />}
            {/* ........ */}

            <section className={styles.cardsSection}>
              {/* ===== New: Challenges Section (zigzag cards) ===== */}
              {service.challenges && (
                <section className={styles.challengesSection}>
                  <h2 className={styles.sectionHeading}>
                    {service.challenges.heading}
                  </h2>
                  {service.challenges.cards.map((card, index) => (
                    <ZigzagCard key={index} card={card} index={index} />
                  ))}
                </section>
              )}
            </section>
            {/* ........................ */}
            {/* ===== New: Nexus-Dev Solutions for Professionals (zigzag cards) ===== */}
            {service.solutionsForProfessionals && (
              <section className={styles.solutionsSection}>
                <h2 className={styles.sectionHeading}>
                  {service.solutionsForProfessionals.heading}
                </h2>
                {service.solutionsForProfessionals.cards.map((card, index) => (
                  <ZigzagCardBotton key={index} card={card} index={index} />
                ))}
              </section>
            )}
          </div>
        </section>
      </section>



      {/* ===== Contact Form ===== */}
      <ContactForm />

      <Footer />
    </>
  );
}

/* 
   ---------------------------------------------------------
   ZigzagCard Component 
   (Same structure you provided, but now it renders the data
   from "challenges" and "solutionsForProfessionals" arrays)
   ---------------------------------------------------------
*/
function ZigzagCard({ card, index }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider handlers

  const isEven = index % 2 === 0;

  return (
    <div className={styles.cardsMain}>
      <div
        className={`${styles.zigzagCard} ${isEven ? styles.normalRow : styles.reverseRow
          }`}
      >
        {/* ====== Content Section (Heading, Bullet List, Button) ====== */}
        <div className={styles.contentDivv}>
          {card.text?.map((textItem, textIndex) => (
            <div key={textIndex}>
              <h1>{textItem.title}</h1>
              <ul className={styles.listt}>
                {textItem.bulletPoints?.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* ====== Slider Section ====== */}
        <div className={styles.sliderSection}>
          {card.images && card.images.length > 0 && (
            <>
              <div className={styles.sliderImageWrapper}>
                <Image
                  src={card.images[currentSlide]}
                  alt={card.title || "Slider Image"}
                  width={500}
                  height={300}
                  className={styles.sliderImage}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
// ............................................................
function ZigzagCardBotton({ card, index }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const isEven = index % 2 === 0;

  return (
    <div className={styles.cardsMain}>
      <div className={`${styles.zigzagCard} ${isEven ? styles.normalRow : styles.reverseRow}`}>
        {/* ====== Content Section (Heading, Bullet List, Button) ====== */}
          {card.text?.map((textItem, textIndex) => (
            <section key={textIndex} className={styles.healthS}>
              <h1>{textItem.title}</h1>
              <div className={styles.contentMain}>
              <div className={styles.contentDivv}>
              <div key={textIndex}>
              <div className={styles.listtHealth}>
                {textItem.bulletPoints?.map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className={styles.box}>
                    {bullet.icon ? (
                      <div className={styles.healthIcon}>
                      <Image
                        src={bullet.icon}
                        alt="icon"
                        width={50}
                        height={50}
                        className={styles.iconHealth}
                      />
                      </div>
                    ) : null} 
                    <h5>{bullet.title}</h5>
                    <p>{bullet.description}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
        {/* ......... */}
        {/* ====== Slider Section ====== */}
        <div className={styles.sliderSection}>
          {card.images && card.images.length > 0 && card.images[currentSlide] ? (
            <div className={styles.sliderImageWrapper}>
              <Image
                src={card.images[currentSlide]}
                alt={card.title || "Slider Image"}
                width={500}
                height={300}
                className={styles.sliderImage}
              />
            </div>
          ) : null} {/* Do not render Image if there is no valid image */}
        </div>

</div>
        </section>
          ))}
        
      </div>
    </div>
  );
}
