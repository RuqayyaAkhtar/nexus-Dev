'use client'
import React from 'react';
'../globals.css';
import Image from 'next/image';
import styles from "./home.module.css";
import heroImage from "./homeImages/Group 1197132576.png"
import { RiArrowDownFill } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { LuBoxes } from "react-icons/lu";
import { MdOutlineStarPurple500 } from "react-icons/md";
import talkImage from './homeImages/male-female-graphic-designers-interacting-computer.png';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import serveImage1 from './homeImages/representations-user-experience-interface-design.png'
import serveImage2 from './homeImages/man working on graphic tablet.png'
import serveImage3 from './homeImages/representation-user-experience-interface-design.png'
import serveImage4 from './homeImages/website-development-links-seo-webinar-cyberspace-concept.png'
import techImage1 from './homeImages/Group.png'
import techImage2 from './homeImages/Group (1).png'
import techImage3 from './homeImages/Group 1171278189.png'
import techImage4 from './homeImages/Group 1171278192.png'
import techImage5 from './homeImages/Group 1171278195.png'
import techImage6 from './homeImages/Group 1171278198.png'
import techImage7 from './homeImages/Group 1171278201.png'
import techImage8 from './homeImages/Group 1171278204.png'
import techImage9 from './homeImages/Group 1171278208.png'
import RadioSlider from './radioSlider'
import ClientTestimonials from './testimonial'
const HeroSection = () => {
  return (
    <section className={styles.heroSectionMain}>
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h1 className={styles.heading}>
            Empowering Your Business with Cutting-Edge Solutions
          </h1>
          <p className={styles.description}>
            At Nexus, we provide innovative digital solutions to help your
            business grow. From web development to digital marketing, our expert
            team tailors strategies for success. Let’s transform your vision into
            reality with scalable, results-driven services.
          </p>
          <button className={styles.ctaButton}>Start A Project</button>
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
        <div className={styles.leftSide}>
          <button className={styles.smallButton}><RiArrowDownFill /></button>
        </div>

        <div className={styles.rightSide}>
  <div className={styles.yellowCircle}></div>
  <div className={styles.statCardmain}>
    <div className={styles.statCarddiv}>
      <div className={styles.statCard}>
        <h3 className={styles.statHeading}>+30K</h3>
        <p className={styles.statText}>Happy Clients</p>
      </div>
      <div className={styles.statCard}>
        <h3 className={styles.statHeading}>500+</h3>
        <p className={styles.statText}>Big Projects</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>

      <div className={styles.footerStats}>
        <span className={styles.fSpan}><span className={styles.dot}></span><AiOutlineGlobal className={styles.bottomIcon} /> Professionals</span>
        <span className={styles.fSpan}><span className={styles.dot}></span><LuBoxes className={styles.bottomIcon} /> 150+ Industries Served</span>
        <span className={styles.fSpan}><span className={styles.dot}></span><AiOutlineGlobal  className={styles.bottomIcon}/> 5 Years+ Experience</span>
        <span className={styles.fSpan}><span className={styles.dot}></span><MdOutlineStarPurple500 className={styles.bottomIcon} /> 5 Star Rated by Clients</span>
      </div>
    </section>
    {/* section2 */}
    <section className={styles.section2Main}>
    <div className={styles.section2}>
      <div className={styles.left2}>
        <Image
        src={talkImage}
        alt='servicesImage'
        />
      </div>
      <div className={styles.right2}>
        <h1>Lets Talk</h1>
        <h4>We makes custom mobile apps, Web & enterprise Solutions for Startups. Enterprises & mid - Scale Businesses,</h4>
        <a href="#"><button>Learn More<BsArrowUpRightCircle /></button></a>
        <p>Whether you’re looking to redesign your website, enhance your online presence, or develop a custom digital solution, we’re here to help. Our team of experts is committed to understanding your unique needs and providing tailored strategies that align with your business goals. We take pride in delivering innovative, results-driven solutions that drive growth and efficiency. Let’s discuss how we can transform your ideas into reality and take your business to the next level. Reach out today to get started and experience the difference of working with a dedicated digital partner. We look forward to hearing from you.</p>
      </div>
     </div>
    </section>
{/* section3 */}
    <section className={styles.section2Main}>
    <div className={styles.section3}>
      <h1 className={styles.serveH}>Expertise that Drives Your Success: Explore Our Services</h1>
      <p>We provide tailored digital services, including web development, marketing, and custom solutions, to drive your business growth.</p>
      <div className={styles.serveCardMain}>

      <div className={styles.serveCard}>
       <div className={styles.serveTop}>
          <Image 
          src={serveImage1}
          alt='servicesImage'
          />
       </div>
       <div className={styles.serveBottom}>
        <h1>UI UX DESIGN</h1>
        <p>Designing application and website interfaces and dashboards</p>
       </div>
      </div>
      {/* card2 */}
      
      <div className={styles.serveCard}>
       <div className={`${styles.serveTop} ${styles.serveTopM}`}>
          <Image 
          src={serveImage2}
          alt='servicesImage'
          />
       </div>
       <div className={styles.serveBottom}>
        <h1>UI UX DESIGN</h1>
        <p>Designing application and website interfaces and dashboards</p>
       </div>
      </div>
     
      {/* card3 */}
      
      <div className={styles.serveCard}>
       <div className={styles.serveTop}>
          <Image 
          src={serveImage3}
          alt='servicesImage'
          />
       </div>
       <div className={styles.serveBottom}>
        <h1>UI UX DESIGN</h1>
        <p>Designing application and website interfaces and dashboards</p>
       </div>
      </div>
      
      {/* card4 */}
      
      <div className={styles.serveCard}>
       <div className={styles.serveTop}>
          <Image 
          src={serveImage4}
          alt='servicesImage'
          />
       </div>
       <div className={styles.serveBottom}>
        <h1>UI UX DESIGN</h1>
        <p>Designing application and website interfaces and dashboards</p>
       </div>
      </div>
      </div>
      <div className={styles.btnDIv}>
       <a href="#"><button className={styles.explore}>Explore More<GoArrowUpRight /></button></a>
      </div>
      </div>
    </section>
    {/* section4 */}
    <section className={styles.section2Main}>
    <div className={styles.section2}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <h1 className={styles.heading1}>
          Why choose Us
          </h1>
          <div className={styles.Ychoose}>
            <h5>Proven Results:</h5>
            <p>Our success is reflected in the measurable outcomes we deliver. From increased traffic to higher conversions, we drive results that make a real impact on your business.</p>
          </div>
          <div className={styles.Ychoose}>
            <h5>Customer-Centric Approach:</h5>
            <p>Your satisfaction is our priority. We work closely with you at every step, ensuring seamless communication and delivering solutions that exceed your expectations.</p>
          </div>
          <div className={styles.Ychoose}>
            <h5>Innovative & Future-Ready:</h5>
            <p>We stay ahead of industry trends, utilizing the latest technologies to provide scalable, innovative solutions that will grow with your business.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.imageContainer1}>
          <div className={`${styles.circle} ${styles.smallCircle} ${styles.topCircle}`}></div>
      <div className={`${styles.circle} ${styles.smallCircle} ${styles.bottomCircle}`}></div>
      <div className={`${styles.circle} ${styles.largeCircle}`}></div>

      {/* First Card */}
      <div className={`${styles.card} ${styles.darkCard}`}>
        <h3 className={styles.title}>Team of Experts</h3>
        <p className={styles.text}>
          With years of experience in the digital industry, our team brings
          deep knowledge and cutting-edge skills to every project, ensuring
          top-notch results.
        </p>
      </div>

      {/* Second Card */}
      <div className={`${styles.card} ${styles.lightCard}`}>
        <h3 className={styles.title}>Personalization</h3>
        <p className={styles.text}>
          We understand that every business is unique. That’s why we offer
          personalized strategies that are designed to meet your specific goals
          and challenges.
        </p>
      </div>
          </div>
    </div>
    </div>
    </section>
    {/* section5 */}
    <section className={styles.section2Main}>
    <div className={styles.section3}>
      <h1 className={styles.serveH}>Our Technologies </h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
      <div className={styles.techMain}>
      <div className={styles.tech}>
        <Image
        src={techImage1}
        alt='techlonogies Image'/>
        <span>Figma</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage2}
        alt='techlonogies Image'/>
        <span>React</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage3}
        alt='techlonogies Image'/>
        <span>Photoshop</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage4}
        alt='techlonogies Image'/>
        <span>Illustrator</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage5}
        alt='techlonogies Image'/>
        <span>HTML</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage6}
        alt='techlonogies Image'/>
        <span>CSS</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage7}
        alt='techlonogies Image'/>
        <span>JavaScript</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage8}
        alt='techlonogies Image'/>
        <span>VS Code</span>
      </div>
      <div className={styles.tech}>
        <Image
        src={techImage9}
        alt='techlonogies Image'/>
        <span>Python</span>
      </div>
      </div>
    </div>
    </section>
{/* section6 */}
<RadioSlider/>
<ClientTestimonials/>
{/* section8 */}
<section className={styles.section2Main}>
    <div className={styles.section8}>
      <div className={styles.mainB}>
<h1>Already Have a Project?</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry <a href="#">ourcompany@gmail.com</a> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
<button className={styles.ctaButton}>Start A Project</button>
      </div>
     </div>
    </section>
    </section>
  );
};

export default HeroSection;