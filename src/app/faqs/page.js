'use client';
import Image from 'next/image';
import Footer from '../footer/page';
import Header from '../header/page';
import styles from './faq.module.css';
import heroImage from './images/pana.png'
import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { GoArrowUpRight } from "react-icons/go";


const faqData = {
  MobileApplication :[
    {
      question: "What is the role of a Business Consultant?",
      answer:
        "A Business Consultant provides expert advice to help companies optimize their operations, strategize for growth, and solve critical business challenges.",
    },
    {
      question: "What skills does a Business Consultant need?",
      answer:
        "Effective communication, strategic planning, and a deep understanding of market trends are vital for a successful Business Consultant.",
    },
    {
      question: "Produce say the ten moments parties?",
      answer:
        "Key skills include analytical thinking, excellent communication, and a strong grasp of both business operations and technology.",
    },
    {
      question: "Simple innate summer fat appear basket his desire joy?",
      answer:
        "Key skills include analytical thinking, excellent communication, and a strong grasp of both business operations and technology.",
    },
    {
      question: "Outward clothes promise at gravity do excited?",
      answer:
        "Key skills include analytical thinking, excellent communication, and a strong grasp of both business operations and technology.",
    },
  ],
  BusinessConsultant: [
    {
      question: "What is the role of a Business Consultant?",
      answer:
        "A Business Consultant provides expert advice to help companies optimize their operations, strategize for growth, and solve critical business challenges.",
    },
    {
      question: "What skills does a Business Consultant need?",
      answer:
        "Effective communication, strategic planning, and a deep understanding of market trends are vital for a successful Business Consultant.",
    },
  ],
    BusinessAnalyst: [
      {
        question: "The expense windows adapted sir. Wrong widen drawn.",
        answer:
          "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.",
      },
      {
        question: "Six curiosity day assurance bed necessary?",
        answer:
          "Key skills include analytical thinking, excellent communication, and a strong grasp of both business operations and technology.",
      },
      {
        question: "Produce say the ten moments parties?",
        answer:
          "Key skills include analytical thinking, excellent communication, and a strong grasp of both business operations and technology.",
      },
      {
        question: "Simple innate summer fat appear basket his desire joy?",
        answer:
          "Key skills include analytical thinking, excellent communication, and a strong grasp of both business operations and technology.",
      },
      {
        question: "Outward clothes promise at gravity do excited?",
        answer:
          "Key skills include analytical thinking, excellent communication, and a strong grasp of both business operations and technology.",
      },
    ],
    DigitalMarketing:[
      {
        question: "What is the role of a Business Consultant?",
        answer:
          "A Business Consultant provides expert advice to help companies optimize their operations, strategize for growth, and solve critical business challenges.",
      },
      {
        question: "What skills does a Business Consultant need?",
        answer:
          "Effective communication, strategic planning, and a deep understanding of market trends are vital for a successful Business Consultant.",
      },
    ],
    SystemArchitect: [
      {
        question: "What does a System Architect do?",
        answer:
          "A System Architect designs and oversees complex IT systems to ensure they meet current and future business needs.",
      },
      {
        question: "What qualifications are required for a System Architect?",
        answer:
          "A strong technical background, experience with system design, and familiarity with architectural patterns are important for this role.",
      },
    ],
    GraphicDesigner: [
      {
        question: "What is the role of a Business Consultant?",
        answer:
          "A Business Consultant provides expert advice to help companies optimize their operations, strategize for growth, and solve critical business challenges.",
      },
      {
        question: "What skills does a Business Consultant need?",
        answer:
          "Effective communication, strategic planning, and a deep understanding of market trends are vital for a successful Business Consultant.",
      },
    ],
    WebDevelopment: [
      {
        question: "What is the role of a Business Consultant?",
        answer:
          "A Business Consultant provides expert advice to help companies optimize their operations, strategize for growth, and solve critical business challenges.",
      },
      {
        question: "What skills does a Business Consultant need?",
        answer:
          "Effective communication, strategic planning, and a deep understanding of market trends are vital for a successful Business Consultant.",
      },
    ],
    UIDesigner:[
      {
        question: "What is the role of a Business Consultant?",
        answer:
          "A Business Consultant provides expert advice to help companies optimize their operations, strategize for growth, and solve critical business challenges.",
      },
      {
        question: "What skills does a Business Consultant need?",
        answer:
          "Effective communication, strategic planning, and a deep understanding of market trends are vital for a successful Business Consultant.",
      },
    ],
  };
  const buttonDisplayNames = {
    MobileApplication : "Mobile Application Development",
    BusinessConsultant: "Business Consultant",
    BusinessAnalyst: "Business Analyst",
    SystemArchitect: "System Architect",
    GraphicDesigner: "Graphic Designer",
    WebDevelopment: "Web Development",
    UIDesigner: "UI/UX Designer",
    DigitalMarketing: "Digital Marketing",
  };  
  

const FAQS = () => {
  const [activeCategory, setActiveCategory] = useState('MobileApplication');
  // Set the first accordion active by default (index 0)
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Reset the open accordion to the first FAQ of the new category
    setOpenAccordionIndex(0);
  };

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };


    return (
        <>
            <Header />
             <section className={styles.heroSectionMain}>
            <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h1 className={styles.heading}>
          Frequently asked questions
          </h1>
          <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         </p>
          <p className={styles.description3}>
          Latest update on 12 sep, 2024
         </p>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.imageContainer}>
            <Image
              src={heroImage}
              alt="Handshake"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>

    </section>
    <section className={styles.heroSectionMain2}>
            <div className={styles.section2}>
            <div className={styles.faqSection}>
      {/* Top buttons for FAQ categories */}
      <div className={styles.buttonsContainer}>
        {Object.keys(faqData).map((category) => (
          <button
            key={category}
            className={`${styles.button} ${
              activeCategory === category ? styles.active : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {buttonDisplayNames[category]}
          </button>
        ))}
      </div>

      {/* Accordions for the active category */}
      <div className={styles.accordionsContainer}>
        {faqData[activeCategory].map((item, index) => (
          <div key={index} className={styles.accordion} onClick={() => toggleAccordion(index)}>
            <div
              className={styles.accordionHeader}
            >
              <span>{item.question}</span>
              <span>{openAccordionIndex === index ? <HiMinus /> : <GoPlus />}</span>
            </div>
            <div
              className={`${styles.accordionContent} ${
                openAccordionIndex === index ? styles.open : ''
              }`}
            >
              <div className={styles.accordionContentInner}>
                <p>{item.answer}</p> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.bottomFaq}>
    <div className={styles.top}>
        <h1>Still have any Query?</h1>
        <p>Join 40000+ startups already growing with Nexus-Dev.</p>
    </div>
    <div className={styles.bottom}>
    <button className={styles.demoBtn}>
          <a href="/nexus-Dev/contact-us" className={styles.bookDemoA}>Contact Us<GoArrowUpRight className={styles.iconss}/></a>
        </button>
    </div>
    </div>
            </div>
            </section>
            </section>
            <Footer />
        </>
    );
};

export default FAQS;
