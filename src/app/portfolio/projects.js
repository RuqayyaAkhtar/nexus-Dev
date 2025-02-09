import React, { useState } from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import Image1 from "./images/image (1).png";
import Image2 from "./images/image (2).png";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const projects = [
  {
    image: Image1,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "USA",
    core: "FIGMA, HTML, CSS, JAVA & PHP",
    industry: "Feshion & Design",
  },
  {
    image: Image2,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "Canada",
    core: "Vue, Laravel",
    industry: "E-commerce",
  },
  {
    image: Image1,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "UK",
    core: "Angular, Firebase",
    industry: "Education",
  },
  {
    image: Image2,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "Germany",
    core: "FIGMA, HTML, CSS, JAVA & PHP",
    industry: "Feshion & Design",
  },
  {
    image: Image1,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "Australia",
    core: "Django, PostgreSQL",
    industry: "Finance",
  },
  {
    image: Image2,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "India",
    core: "Spring Boot, MySQL",
    industry: "Retail",
  },
  {
    image: Image1,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "France",
    core: "FIGMA, HTML, CSS, JAVA & PHP",
    industry: "Feshion & Design",
  },
  {
    image: Image2,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "Japan",
    core: "Swift, CoreData",
    industry: "Gaming",
  },
  {
    image: Image1,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "Australia",
    core: "Django, PostgreSQL",
    industry: "Finance",
  },
  {
    image: Image2,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "Japan",
    core: "Swift, CoreData",
    industry: "Gaming",
  },
  {
    image: Image1,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "Australia",
    core: "Django, PostgreSQL",
    industry: "Finance",
  },
  {
    image: Image2,
    title: "PROJECT NAME",
    description:
      "We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,",
    disciption2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    country: "Japan",
    core: "Swift, CoreData",
    industry: "Gaming",
  },
];

const ProjectSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(4);
  const totalPages = Math.ceil(projects.length / resultsPerPage);

  // Pagination Logic
  const startIndex = (currentPage - 1) * resultsPerPage;
  const displayedProjects = projects.slice(startIndex, startIndex + resultsPerPage);

  return (
    <div className={styles.containerP}>
      {/* Project Grid */}
      <div className={styles.projectGrid}>
        {displayedProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {index % 2 === 0 ? (
              <>
                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <p className={styles.projectDescription2}>{project.disciption2}</p>
                  <p className={styles.projectDetails}>
                    <strong>Country:</strong>
                    <span className={styles.spann}>{project.country}</span>
                    <br />
                    <strong>Core:</strong>
                    <span className={styles.spann}> {project.core}</span>
                    <br />
                    <strong>Industry:</strong>
                    <span className={styles.spann}>{project.industry}</span>
                  </p>
                  <button className={styles.exploreButton}>
                    Explore More <GoArrowUpRight />
                  </button>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </>
            ) : (
              <>
                <Image
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <p className={styles.projectDescription2}>{project.disciption2}</p>
                  <p className={styles.projectDetails}>
                    <strong>Country:</strong>
                    <span className={styles.spann}>{project.country}</span>
                    <br />
                    <strong>Core:</strong>
                    <span className={styles.spann}> {project.core}</span>
                    <br />
                    <strong>Industry:</strong>
                    <span className={styles.spann}>{project.industry}</span>
                  </p>
                  <button className={styles.exploreButton}>
                    Explore More <GoArrowUpRight />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={styles.paginationContainer}>
        {/* Results Per Page */}
        <div className={styles.resultsPerPage}>
          <label>Result per page</label>
          <select
            value={resultsPerPage}
            onChange={(e) => setResultsPerPage(Number(e.target.value))}
            className={styles.select}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </select>
        </div>

        {/* Pagination */}
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
                currentPage === index + 1 ? styles.active : ""
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
  );
};

export default ProjectSection;
