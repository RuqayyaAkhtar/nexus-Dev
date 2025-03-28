'use client'
import React from 'react';
'../globals.css';
import Image from 'next/image';
import styles from "./page.module.css";
import heroImage from './images/Group 1197132576 (2).png'
import ClientTestimonials from '../home/testimonial'
import Header from '../header/page'
import Footer from '../footer/page'
import FormWithStats from '../industries/contactForm';
import OurTechnologies from '../home/ourTechnologies';
import Consultant from '../solutions/consultation';
import { GoArrowUpRight } from 'react-icons/go';
import Image1 from './images/cuate.png';
import iconImage1 from './images/checked checkbox.png';
import iconImage2 from './images/Group 1197133064.png';
import iconImage3 from './images/last 24 hours.png';
import iconImage4 from './images/dollar sign inside red shape.png';

const WhyUsPage = () => {
  return (
    <>
      <Header />
      <section className={styles.heroSectionMain}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            {/* Left Column */}
            <div className={styles.leftColumn}>
              <h1 className={styles.heading}>
                Empowering Businesses with Cutting-Edge Digital Solutions.
              </h1>
              <p className={styles.description}>
                From design to development, we craft exceptional digital experiences that drive results. Let’s turn your vision into reality
              </p>
              {/* <p  className={styles.description2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
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

          <section className={styles.secondSection}>
            <div className={styles.container2}>
              <div className={styles.rightSide}>
                <div className={styles.yellowCircle}></div>
                <div className={styles.statCardmain}>
                  <div className={styles.statCarddiv}>
                    <div className={styles.statCard}>
                      <h3 className={styles.statHeading}>+150</h3>
                      <p className={styles.statText}>Served Industries</p>
                    </div>
                    <div className={styles.statCard}>
                      <h3 className={styles.statHeading}>+56 K</h3>
                      <p className={styles.statText}>Successful Projects</p>
                    </div>
                    <div className={styles.statCard}>
                      <h3 className={styles.statHeading}>+30K</h3>
                      <p className={styles.statText}>Happy Clients</p>
                    </div>
                    <div className={styles.statCard}>
                      <h3 className={styles.statHeading}>+104k</h3>
                      <p className={styles.statText}>Hours of Work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* section2 */}
        <Consultant />
        <section className={styles.heroSectionMain2}>
          <section className={styles.sectionC}>
            <div className={styles.container2}>
              <div className={styles.section2lft}>
                <h1>Core Values & Strengths</h1>
                <ul className={styles.listt}>
                  <li>Expertise You Can Trust:
                    <p>Years of experience in UI/UX, app development, and branding.</p>
                  </li>
                  <li>Client-Centric Approach:
                    <p>We focus on your needs, ensuring customized solutions.</p>
                  </li>
                  <li>Innovative & Future-Ready:
                    <p>
                    Utilizing the latest technologies for scalable growth.
                      </p>
                  </li>
                  <li>Transparent Pricing:
                    <p>No hidden costs, clear communication from day one.</p>
                  </li>
                  <li>Full-Stack Solutions:
                    <p>From ideation to execution, we handle it all.</p>
                  </li>
                  <li>Timely Delivery:
                    <p>Meeting deadlines without compromising on quality.</p>
                  </li>
                </ul>
              </div>
              <div className={styles.section2ri8}>
                <Image
                  src={Image1}
                  alt=' img'
                />
              </div>
            </div>
          </section>
        </section>
{/* ............. */}
     <section className={styles.heroSectionMain2}>
    <section className={styles.containerF}>
        <div className={styles.mainDiv}>
          <h1>What Sets Us Apart</h1>
          <p>Discover the Unique Advantages That Make Nexus-Dev Your Ideal Digital Partner.</p>
      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <div className={styles.icon}>
            <Image src={iconImage1} alt='image'/> 
          </div>
          <h1 className={styles.statLabel}>Custom Digital Solutions</h1>
        </div>
        <div className={styles.stat}>
        <div className={styles.icon}>
            <Image src={iconImage2} alt='image'/> 
          </div>
          <h1 className={styles.statLabel}>Industry<br/> Expertise</h1>
        </div>
        <div className={styles.stat}>
        <div className={styles.icon}>
            <Image src={iconImage3} alt='image'/> 
          </div>
          <h1 className={styles.statLabel}>Customer <br/> Support</h1>
        </div>
        <div className={styles.stat}>
        <div className={styles.icon}>
            <Image src={iconImage4} alt='image'/> 
          </div>
          <h1 className={styles.statLabel}>Transparent <br/> Pricing</h1>
        </div>
      </div>
      </div>
    </section>
    </section>

        <OurTechnologies />
        <ClientTestimonials />
        <FormWithStats />
      </section>

      <Footer />
    </>
  );
};

export default WhyUsPage;