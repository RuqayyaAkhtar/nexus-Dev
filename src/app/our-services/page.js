'use client';
import React, { useState } from 'react';
import styles from './our-services.module.css';
import Image from 'next/image';
import heroImage from './images/Group 1197132640 (1).png';
import Header from '../header/page';
import Footer from '../footer/page';
import Link from "next/link";
import servicesData from "./data";
import { GoArrowUpRight } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import StackUsed from './stack'
import ContactForm from '../industries/contactForm'



const categories = [
  "All",
  "Mobile Application Development",
  "Business Analyst",
  "System Architect",
  "Business Consultant",
  "Graphic Designer",
  "Web Development",
  "UI/UX Designer",
  "Digital Marketing",
];

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((blog) => blog.category === selectedCategory);

  return (
    <>
      <Header />
      <section className={styles.heroSectionMain}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            {/* Left Column */}
            <div className={styles.leftColumn}>
              <h1 className={styles.heading}>Our Services</h1>
              <p className={styles.description}>
                Elevating the Future of Industries with our Services
              </p>
              <p className={styles.description2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.              </p>
              <a href='/nexus-Dev/contact-us'>
                <button className={styles.readMore}>
                  Let's Talk
                </button>
              </a>
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
            <div className={styles.blogsContainer}>
              {/* Category Filter Buttons */}
              <div className={styles.categories}>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={selectedCategory === category ? styles.active : ""}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Blog Cards List in Zigzag Pattern */}
              <div className={styles.blogsList}>
                {filteredBlogs.map((blog, index) => (
                  <div key={blog.id} className={styles.blogCard}>
                    <div className={styles.blogContent}>
                      <h1>{blog.title}</h1>
                      <p className={styles.descriptionB}>{blog.description}</p>
                      <Link href={`/our-services/${blog.id}`}>
                        <button className={styles.readMore}>
                          Explore More <GoArrowUpRight />
                        </button>
                      </Link>
                    </div>
                    {/*  */}
                    <div className={styles.blogImageWrapper}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        className={styles.blogImage}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*  */}
          <StackUsed />
          <ContactForm />
        </section>
      </section>
      <Footer />
    </>
  );
};

export default ServicesPage;
