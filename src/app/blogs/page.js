'use client';
import React from 'react';
import { useState } from "react";
import styles from './blog.module.css';
import Image from 'next/image';
import heroImage from './images/website designer with tablet and working process on desktop.png';
import Header from '../header/page';
import Footer from '../footer/page';
import Link from "next/link";
import blogData from "./data";
import { GoArrowUpRight } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { 
  MdOutlineKeyboardDoubleArrowLeft, 
  MdOutlineKeyboardArrowLeft, 
  MdOutlineKeyboardArrowRight, 
  MdOutlineKeyboardDoubleArrowRight 
} from "react-icons/md";

const categories = [
  "All",
  "Web Design",
  "UX Research",
  "Content Creation",
  "Future",
  "Meet Ups",
  "Updates"
];

const blogsData = blogData;
const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(6);

  // Filter blogs based on the selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.category === selectedCategory);

  const totalEntries = filteredBlogs.length;
  const totalPages = Math.ceil(totalEntries / resultsPerPage);

  // Calculate the entry numbers for "Showing X-Y of Z entries"
  const startEntry = (currentPage - 1) * resultsPerPage + 1;
  const endEntry = Math.min(currentPage * resultsPerPage, totalEntries);

  // Slice out the current page's blogs
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );
  return (
    <>
      <Header />
      <section className={styles.heroSectionMain}>
            <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h1 className={styles.heading}>
          The Nexus Blog
          </h1>
          <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         </p>
          <p  className={styles.description2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className={styles.searchDiv}>
          <HiMagnifyingGlass />
            <input type="search" placeholder="Search Question in you Mind" />
          </div>
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
                <div className={styles.blogsContainer}>
      {/* Category Filter Buttons */}
      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? styles.active : ""}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1); // reset page when category changes
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.entriesInfo}>
        Showing {startEntry} - {endEntry} of {totalEntries} entries
      </div>

      {/* Blog Cards List */}
      <div className={styles.blogsList}>
        {paginatedBlogs.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <Image src={blog.image} alt={blog.title} className={styles.blogImage} />
            <div className={styles.blogContent}>
              <h1>{blog.title}</h1>
              <p className={styles.date}>{blog.date}</p>
              <p className={styles.descriptionB} >{blog.description}</p>
              <Link href={`/blogs/${blog.id}`}>
                <button className={styles.readMore}>Read More <GoArrowUpRight /></button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section: Entries Info, Results Per Page, and Pagination Controls */}
      <div className={styles.paginationContainer}>
        {/* Results Per Page */}
        <div className={styles.resultsPerPage}>
          <label>Result per page</label>
          <select
            value={resultsPerPage}
            onChange={(e) => {
              setResultsPerPage(Number(e.target.value));
              setCurrentPage(1); // reset page when resultsPerPage changes
            }}
            className={styles.select}
          >
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </select>
        </div>

        {/* Pagination Buttons */}
        <div className={styles.pagination}>
          <button
            className={styles.doubleArrow}
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
          <button
            className={styles.singleArrow}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`${styles.pageButton} ${
                currentPage === index + 1 ? styles.activePage : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={styles.singleArrow}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
          <button
            className={styles.doubleArrow}
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
            </div>
            </section>
            </section>
      <Footer />
    </>
  );
};

export default Blogs;