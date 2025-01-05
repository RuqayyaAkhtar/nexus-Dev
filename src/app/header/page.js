'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from './headerImages/logo22.png'; // Adjust path as per your setup
import styles from '../page.module.css';
import '../globals.css';
import { CiMenuBurger } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.headerMain}>
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <a href="/stocklyhubdev">
          <Image className={styles.logoImage} src={logo} alt="Logo" priority />
        </a>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="/stocklyhubdev/industries">Home</a></li>
          <li><a href="/stocklyhubdev/features">Services</a></li>
          <li><a href="/stocklyhubdev/integration">Portfolio</a></li>
          <li><a href="/stocklyhubdev/pricing">About us</a></li>
        </ul>
      </nav>

      <div className={styles.btnMainBar}>
        <button className={styles.demoBtn}>
          <a href="/stocklyhubdev/bookDemo" className={styles.bookDemoA}>Get in Touch</a>
        </button>
        <a className={styles.menuLi}>
          <CiMenuBurger className={styles.menuIcon} onClick={toggleMenu} />
        </a>

        {menuOpen && (
          <div className={styles.pwrBurger}>
            <div className={styles.crossDiv}>
              <button onClick={toggleMenu} className={styles.crossButton}>
                <VscChromeClose className={styles.crossIcone} />
              </button>
            </div>
            <ul className={styles.menuList}>
              <li><a href="/stocklyhubdev">Home</a></li>
              <li><a href="/stocklyhubdev/industries">Industries</a></li>
              <li><a href="/stocklyhubdev/features">Features</a></li>
              <li><a href="/stocklyhubdev/integration">Integrations</a></li>
              <li><a href="/stocklyhubdev/pricing">Pricing</a></li>
              <li><a href="/stocklyhubdev/contacts">Contact Us</a></li>
              <li><a href="/stocklyhubdev/login">Login</a></li>
              <li><a href="/stocklyhubdev/blogs">Blogs</a></li>
              <li><a href="/stocklyhubdev/faqs">Faqs</a></li>
              <li>
                <button className={styles.demoBtn2}>
                  <a href="/stocklyhubdev/bookDemo" className={styles.text_light}>Free Demo</a>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
    </section>
  );
};

export default Header;
