'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from './headerImages/logo22.png'; 
import styles from '../page.module.css';
import '../globals.css';
import { CiMenuBurger } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
import { usePathname } from 'next/navigation';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        <a href="/nexus-Dev">
          <Image className={styles.logoImage} src={logo} alt="Logo" priority />
        </a>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="/nexus-Dev" className={pathname === '/' ? styles.active : ''}>Home</a></li>
          <li><a href="/nexus-Dev/industries" className={pathname.startsWith('/industries') ? styles.active :''} >Industries</a></li>
          <li><a href="/nexus-Dev/our-services" className={pathname.startsWith('/our-services') ? styles.active : ''}>Services</a></li>
          <li><a href="/nexus-Dev/portfolio"  className={pathname.startsWith('/portfolio') ? styles.active : ''}>Portfolio</a></li>
          <li><a href="/nexus-Dev/about-us" className={pathname.startsWith('/about-us') ? styles.active : ''} >About us</a></li>
        </ul>
      </nav>

      <div className={styles.btnMainBar}>
        <button className={styles.demoBtn}>
          <a href="/nexus-Dev/contact-us" className={styles.bookDemoA}>Get in Touch</a>
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
              <li><a href="/nexus-Dev" >Home</a></li>
              <li><a href="/nexus-Dev/industries">Industries</a></li>
              <li><a href="/nexus-Dev/our-services">Service</a></li>
              <li><a href="/nexus-Dev/portfolio">Portfolio</a></li>
              <li><a href="/nexus-Dev/about-us">About us</a></li>
              <li><a href="/nexus-Dev/blogs">Blogs</a></li>
              <li><a href="/nexus-Dev/faqs">Faqs</a></li>
              <li><a href="/nexus-Dev/health-care">Health Care</a></li>
              <li><a href="/nexus-Dev/login">Login</a></li>
              <li>
                <button className={styles.demoBtn2}>
                  <a href="/nexus-Dev/contact-us" className={styles.text_light}>Get in Touch</a>
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
