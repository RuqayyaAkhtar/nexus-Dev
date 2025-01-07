'use client'
import React from 'react';
'../globals.css';
import Image from 'next/image';
import { useState, useEffect } from "react";
import styles from "./ClientTestimonials.module.css";
import avatar from "./homeImages/Avatar.png"

const testimonials = [
  {
    id: 1,
    name: "Jenny Wilson",
    role: "CEO",
    feedback: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    image: avatar, 

  },
  {
    id: 2,
    name: "John Doe",
    role: "Founder",
    feedback: `Lorem Ipsum has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    image: avatar,
 
  },
  {
    id: 3,
    name: "Sarah Smith",
    role: "CTO",
    feedback: `It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
    image:avatar, 
   
  },
];

  
  const ClientTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Auto-slide every 2 seconds
    useEffect(() => {
      // const interval = setInterval(() => {
      //   handleNext();
      // }, 2000);
  
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handleDotClick = (index) => {
      setCurrentIndex(index);
    };
  
    return (
        <>
        <section className={styles.testimonial}>
        <div className={styles.container}>
        <h2 className={styles.heading}>HERE IS WHAT OUR CLIENT HAVE TO SAY</h2>
        <p className={styles.subheading}>
          See what our clients have to say about working with us and how our
          solutions have helped their businesses thrive.
        </p>
  
        <div className={styles.sliderContainer}>
        <div className={`${styles.circle} ${styles.circleTopRight}`}></div>
        <div className={`${styles.circle} ${styles.circleBottomLeft}`}></div>
        <div className={styles.sliderContainerMain}>
          <div
            className={styles.slider}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                className={styles.slide}
                key={testimonial.id}
                style={{
                  backgroundColor: testimonial.bgColor,
                }}
              >
                {/* Circles inside each slide */}

               <div className={styles.imageMain}>

                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.image}
                />
               </div>
                <h3 className={styles.name}>{testimonial.name} <span className={styles.role}>{testimonial.role}</span></h3>
    
                <p className={styles.feedback}>{testimonial.feedback}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
  
        {/* Dots Navigation */}
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
      </section>
      </>
    );
  };
  
  export default ClientTestimonials;