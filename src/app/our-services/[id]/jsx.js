"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./services-details.module.css";
import Image from "next/image";
import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import servicesData from "../data";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import StackUsed from '../stack'
import ContactForm from '/src/app/industries/contactForm'
import { TiGroupOutline } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";
import ProjectSlider from "./projectSlider";
import ProjectSliderThree from "./projectSliderThree";
import BrandSliderTop from "./brandIdentityTop";
import BrandSliderBottom from "./brandIdentitybottom";




const categories = [
  "All",
  "Mobile Application Development",
  "Business Analyst",
  "System Architect",
  "Business Consultant",
  "Graphic Designer",
  "Web Development",
  "UI/UX Designer",
  "Digital Marketing"
];

export default function ServiceDetails() {
  const { id } = useParams();
  const router = useRouter();


  const service = servicesData.find((item) => item.id === Number(id));
  if (!service) {
    return <p className={styles.notFound}>Service not found</p>;
  }

  // Handle category button clicks
  const handleCategoryClick = (category) => {
    if (category === "All") {

      router.push("/our-services");
    } else {

      const matchedService = servicesData.find(
        (item) => item.category === category
      );
      if (matchedService) {
        router.push(`/our-services/${matchedService.id}`);
      }
    }
  };

  return (
    <>
      <Header />
      <section className={styles.heroSectionMain}>
        <section className={styles.heroSection} >
          {service.banner && service.banner.map((banner, index) => (
            <div key={index} className={styles.container}>
              <div className={styles.leftColumn}>
                <h1 className={styles.heading}>{banner.heading}</h1>
                <p className={styles.description}>
                  {banner.para1}
                </p>
                <p className={styles.description2}>
                  {banner.para2}
                </p>
                <p className={styles.description3}>
                  {banner.date}
                </p>
              </div>
              {/* Left Column */}
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


        {/*  */}
        <section className={styles.heroSectionMain2}>
          <div className={styles.section2}>
            {/* ========== Categories Bar ========== */}
            <div className={styles.categories}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={
                    service.category === cat ? styles.active : styles.category
                  }
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* ========== Hero Section (example) ========== */}
            <section className={styles.heroSection1}>
              {service.section1 && service.section1.map((cont, index) => (
                <div key={index} className={styles.heroContent}>
                  <h1 className={styles.heroTitle}>{cont.heading}</h1>
                  <p className={styles.heroDesc}>{cont.para}</p>
                  <div className={styles.imageContainer}>
                    <Image
                      src={cont.image}
                      alt="image"
                      className={styles.heroImage}
                    />
                  </div>
                </div>
              ))}
            </section>
            {/* brand identity data section with two sliders */}
            {service?.brandIdentityData && (
              <section className={styles.solutionsSectionC}>
                <h2 className={styles.headingS}>Brand Identity Design</h2>
                <p className={styles.subheadingS}>
                  Our Brand Identity Design service focuses on creating a unique and cohesive
                  visual representation of your brand. We design custom logos, color schemes,
                  typography, and brand guidelines to ensure consistency across all touchpoints.
                </p>

                {/* Top Slider: 3 images side by side, no dots/arrows/counter */}
                {service.brandIdentityData.topSlider && (
                  <div className={styles.PSliderContainer}>
                    <BrandSliderTop slides={service.brandIdentityData.topSlider} />
                  </div>
                )}

                {service.brandIdentityData.bottomSlider && (
                  <div className={styles.PSliderContainer}>
                    <BrandSliderBottom slides={service.brandIdentityData.bottomSlider} />
                  </div>
                )}
              </section>
            )}


            {/* ========== Zigzag Cards with Slider ========== */}
            <section className={styles.cardsSection}>
              {service.cards && service.cards.map((section, index) => {
                if (section.heading1 && section.description1) {
                  return (
                    <div key={`header-${index}`} className={styles.cardsHeader}>
                      <h1>{section.heading1}</h1>
                      <p>{section.description1}</p>
                    </div>
                  );
                }

                if (section.card && Array.isArray(section.card)) {
                  return section.card.map((cardItem, cardIndex) => (
                    <ZigzagCard
                      card={cardItem}
                      index={cardIndex}
                      key={`card-${cardIndex}`}
                    />

                  ));
                }

                return null;
              })}
            </section>
          </div>

          <StackUsed />
          <div className={styles.section2}>
            {/* ========== Existing Content (if you still want it) ========== */}
            {service.work && (
              <section className={styles.oldContentSection}>
                {service.work.map((item, idx) => (
                  <div key={idx} className={styles.process}>
                    <h1>{item.heading}</h1>
                    <p>{item.text}</p>
                    {/* ... etc. */}
                    <div key={idx} className={styles.processMain}>
                      <div className={styles.processleft}>
                        <Image
                          src={item.image}
                          alt="image"
                          className={styles.processImage}
                        />
                      </div>

                      <div className={styles.processright}>

                        {/* Map over item.cards to display each card */}
                        {item.cards && item.cards.map((card, cIndex) => (
                          <div key={cIndex} className={`${styles.cardP} ${(cIndex === 0 || cIndex === 4) ? styles.leftP : styles.leftZ}`} >
                            <div className={styles.flexC}>
                              <TiGroupOutline className={styles.iconP} />
                              <h3>{card.heading}</h3>
                              <button><GoArrowUpRight /></button>
                            </div>
                            <p>{card.description}</p>
                          </div>
                        ))}

                      </div>
                    </div>

                  </div>
                ))}
              </section>
            )}
          </div>
          {/*  */}
          <section className={styles.solutionsSectionC}>
            <h2 className={styles.headingS}>
              Results You Can Expect from My Services
            </h2>
            <p className={styles.subheadingS}>
              When you engage with Nexus as your Business Analyst, you can expect several positive outcomes
            </p>
            <div className={styles.cardContainer}>
              {service?.results?.map((solution) => (
                <div key={solution.id} className={styles.card}>
                  <Image
                    src={solution.icon}
                    alt={solution.title}
                    className={styles.icon}
                  />
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{solution.title}</h3>
                    <p className={styles.cardDescription}>{solution.description}</p>
                  </div>
                </div>

              ))}
            </div>
          </section>
          {/* ProjectSlider */}
          <section className={styles.solutionsSectionC}>
           
            <div className={styles.PSliderContainer}>
              {service?.ProjectSliderData ? (
                <section className={styles.solutionsSectionC}>
                  <h2 className={styles.headingS}>Look at some of our latest projects</h2>
                  <p className={styles.subheadingS}>
                    Explore our latest projects and see how we’re helping businesses thrive with innovative digital solutions.
                  </p>
                  <ProjectSlider slides={service.ProjectSliderData} />
                </section>
              ) : service?.ProjectSliderThreeData ? (
                <section className={styles.solutionsSectionC}>
                  <h2 className={styles.headingS}>Look at some of our latest projects</h2>
                  <p className={styles.subheadingS}>
                    Explore our latest projects and see how we’re helping businesses thrive with innovative digital solutions.
                  </p>
                  <ProjectSliderThree slides={service.ProjectSliderThreeData} />
                </section>
              ) : null}
            </div>
          </section>


          {/*  */}
          <ContactForm />
        </section>
      </section>
      <Footer />
    </>
  );
}


function ZigzagCard({ card, index }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider handlers
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % card.images.length);
  };
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + card.images.length) % card.images.length);
  };

  const isEven = index % 2 === 0;

  return (
    <div className={styles.cardsMain}>
      <div
        className={`${styles.zigzagCard} ${isEven ? styles.normalRow : styles.reverseRow
          }`}
      >
        {/* ====== Content Section (Heading, Bullet List, Button) ====== */}
        <div className={styles.contentDivv}>
          {card.text ? (
            card.text.map((textItem, textIndex) => (
              <React.Fragment key={textIndex}>
                <h1>{textItem.title}</h1>
                <ul className={styles.listt}>
                  {textItem.bulletPoints &&
                    textItem.bulletPoints.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                </ul>
                <a href="/nexus-Dev/contact-us"><button className={styles.contactButton}>Contact Now</button></a>
              </React.Fragment>
            ))
          ) : (
            <>
              {card.title && <h1>{card.title}</h1>}
              {card.description && (
                <ul>
                  <li>{card.description}</li>
                </ul>
              )}
            <a href="/nexus-Dev/contact-us"><button className={styles.contactButton}>Contact Now</button></a>
            </>
          )}
        </div>

        {/* ====== Slider Section ====== */}
        <div className={styles.sliderSection}>
          {card.images && card.images.length > 0 && (
            <>
              <div className={styles.sliderImageWrapper} style={{ borderRadius: "0px", overflow: "visible !important" }}>
                <Image
                  src={card.images[currentSlide]}
                  alt={card.title || "Slider Image"}
                  width={500}
                  height={300}
                  className={styles.sliderImage}
                  style={{ borderRadius: '0px !important', overflow: 'visible !important' }}
                />
              </div>
              <div className={styles.sliderButtons}>
                <button onClick={handlePrev}><BsArrowLeft /></button>
                <button onClick={handleNext}><BsArrowRight /></button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
