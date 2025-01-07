'use client';
import React from 'react';
import styles from './industries.module.css';
import { IoBagOutline } from "react-icons/io5";
import { TbFileStar } from "react-icons/tb";
import { PiClockUserFill } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";

const FormWithStats = () => {
  return (
    <>
      <section className={styles.heroSectionMain2}>
    <section className={styles.containerF}>
        <div className={styles.mainDiv}>
      <div className={styles.formContainer}>
        <h2 className={styles.headingF}>START GROWING YOUR BUSINESS WITH US</h2>
        <form className={styles.formF}>
          <input
            type="text"
            placeholder="Enter Full Name"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Enter Email"
            className={styles.input}
          />
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className={styles.input}
          />
          <textarea
            placeholder="Describe about your Project"
            className={`${styles.input} ${styles.textarea}`}
          ></textarea>
       <a href="#" className={styles.buttonF}><button type="submit" className={styles.buttonF1}>
            Send Message
          </button></a>
        </form>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <div className={styles.icon}><IoBagOutline /> </div>
          <p className={styles.statValue}>+05</p>
          <p className={styles.statLabel}>Years Experience</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.icon}><TbFileStar /></div>
          <p className={styles.statValue}>+56K</p>
          <p className={styles.statLabel}>Successful Projects</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.icon}><PiClockUserFill /></div>
          <p className={styles.statValue}>+104K</p>
          <p className={styles.statLabel}>Hours of Work</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.icon}><CiFaceSmile /></div>
          <p className={styles.statValue}>500+</p>
          <p className={styles.statLabel}>Happy Clients</p>
        </div>
      </div>
      </div>
    </section>
    </section>
    </>
  );
};

export default FormWithStats;
