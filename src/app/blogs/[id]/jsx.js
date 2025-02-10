"use client";
import React from "react";
import { useParams } from "next/navigation";
import styles from "./BlogDetail.module.css";
import Image from "next/image";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { RxCopy } from "react-icons/rx";
import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import blogsData from "../data";
import heroImage from "../images/image 51.png";
import Pimage from "../images/Ellipse 1.png"


export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogsData.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <p className={styles.notFound}>Blog not found</p>;
  }

  return (
    <>
      <Header />
            <section className={styles.heroSectionMain}>
                  <section className={styles.heroSection}>
            <div className={styles.container}>
              {/* Left Column */}
              <div className={styles.leftColumn}>
                <h1 className={styles.heading}>
                Valuable Tips for Engaging with Tech Users
                </h1>
                <p className={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               </p>
                <p  className={styles.description2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className={styles.description3}>
                Latest update on 12 sep, 2024
               </p>
               <div className={styles.person}>
                <div className={styles.img}>
                  <Image src={Pimage} alt="Person"/>
                </div>
                <div className={styles.personDetails}>
                  <h3>Milinda Peterson</h3>
                  <p>Latest update on 12 sep, 2024</p>
                  </div>
               </div>
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
          {/*  */}
          <section className={styles.heroSectionMain2}>
            <div className={styles.section2}>
                <h1 className={styles.titlee}>Mastering Engagement with Tech Users: Tips to Connect, Inform, and Inspire Your Audience</h1>
                   <div className={styles.blogDetailsContainer}>
        <h1 className={styles.blogTitle}>{blog.title}</h1>
        <p className={styles.blogDate}>{blog.date}</p>
        <p className={styles.blogDescription}>{blog.description}</p>
        
        {blog.content.map((section, index) => (
          <div key={index} className={styles.blogSection}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
            {section.image && (
              <Image src={section.image} alt={section.heading} width={600} height={400} className={styles.blogImage} />
            )}
          </div>
        ))}
        
        <div className={styles.shareSection}>
          <span>Share:</span>
          <GrFacebookOption />
          <RiTwitterXFill />
          <FaLinkedinIn />
          <FaPinterestP />
          <RxCopy />
        </div>
      </div>
            </div>
            </section>
          </section>
      <Footer />
    </>
  );
}
