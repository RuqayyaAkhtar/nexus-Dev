'use client';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import '../globals.css';
import styles from '../page.module.css';
import Image from 'next/image';
import footerlogo from './footerImages/Group 1197132328.png';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection1}>
            <div className={styles.logo}>
              <a href="/nexus-Dev">
                <Image
                  src={footerlogo}
                  className={styles.logo_im_n}
                  alt="Footer Logo"
                  width={600}
                  height={400}
                />
              </a>
            </div>
            <p>
            Design amazing digital experiences that create more happy in the world.
            </p>
            <div className={styles.contact}>
             <a href="tel:+92300 1265821"> <p><FaPhoneAlt />+92300 1265821</p></a>
             <a href="#"> <p><FaEnvelope />example@gmail.com</p></a>
            </div>
          </div>
          <div className={styles.footer_sec}>
            <div className={`${styles.footerSection} ${styles.footer2}`}>
              <h3>Services</h3>
              <ul>
               <a href="#"> <li>UI UX Design</li></a>
               <a href="#"> <li>3D Animation</li></a>
               <a href="#"> <li>App Development</li></a>
              <a href="#">  <li>Web Development</li></a>
              </ul>
            </div>
            <div className={`${styles.footerSection} ${styles.footer2}`}>
              <h3>Industries</h3>
              <ul>
               <a href="/nexus-Dev/health-care"> <li>Health Care</li></a>
               <a href="/nexus-Dev/industries"> <li>Logistic</li></a>
               <a href="/nexus-Dev/industries"> <li>Real Estate</li></a>
               <a href="/nexus-Dev/industries"> <li>Travel</li></a>
               <a href="/nexus-Dev/industries"> <li> Retail</li></a>
               <a href="/nexus-Dev/industries"> <li>Education</li></a>
              </ul>
            </div>
            <div className={`${styles.footerSection} ${styles.footer2}`}>
              <h3>Solutions</h3>
              <ul>
              <a href="#"> <li>App Build Cost</li></a>
               <a href="#"><li>Build own App</li></a>
              <a href="#"> <li>Redesign</li></a>
              <a href="#"> <li>Web Design</li></a>
              <a href="#"> <li>Wen Development</li></a>
              <a href="#"> <li>Rebrand</li></a>
              </ul>
            </div>
            <div className={`${styles.footerSection} ${styles.footer2}`}>
              <h3>Company</h3>
              <ul>
               <a href="/nexus-Dev/about-us"> <li>About us</li></a>
               <a href="#"> <li>Why us</li></a>
               <a href="/nexus-Dev/contact-us"> <li>Contact us</li></a>
               <a href="/nexus-Dev/case-study"> <li>Case Study</li></a>
               <a href="/nexus-Dev/faqs"> <li>FAQs</li></a>
              </ul>
            </div>
          </div>
        </div>
      </div>

        <div className={styles.footerBottomMain}>
        <div className={styles.footerBottom}>
          <p className={styles.fP}>© 2025 Nexus-Dev. All rights reserved.</p>
        <div className={styles.footerBottom2}>
          <div className={styles.termss}>
            <a href="/nexus-Dev/privacy-policy" >Privacy & Policy</a>
            <a href="/nexus-Dev/GDPR">GDPR</a>
            <a href="/nexus-Dev/terms-conditions">Terms & Conditions</a>
          </div>
        </div>
      
          <div className={styles.socialIcons}>
            <a href="#" className={styles.wts}><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaDribbble /></a>
          </div>
        </div>
        </div>
    </footer>
        </>
  );
};

export default Footer;
