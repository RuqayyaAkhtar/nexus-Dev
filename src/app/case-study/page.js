'use client';
import Image from 'next/image';
import Footer from '../footer/page';
import Header from '../header/page';
import styles from './study.module.css';
import heroImage from './images/rafiki.png'
import skillImage1 from './images/figma_svgrepo.com.png'
import skillImage2 from './images/html_svgrepo.com.png'
import skillImage3 from './images/java_svgrepo.com.png'
import skillImage4 from './images/php3_svgrepo.com.png'
import benefitImage from './images/image 16.png'
import probImage from './images/image 52.png'
import solutionImage from './images/image 53.png'
import goalsImage from './images/Rectangle 34625836.png'
import goalsImage2 from './images/Group 1197132447 (1).png'
import ProvidedResults from './providedResults';
import Testimonial from '../home/testimonial.js'
import { GoArrowUpRight } from "react-icons/go";
const CaseStudy = () => {
    return (
        <>
            <Header />
            <section className={styles.heroSectionMain}>
                <section className={styles.heroSection}>
                    <div className={styles.container}>
                        {/* Left Column */}
                        <div className={styles.leftColumn}>
                            <h1 className={styles.heading}>
                                Web Design Project for Elite Health Clinic
                            </h1>
                            <p className={styles.description}>
                                Elite Health Clinic is a leading medical center offering specialized healthcare services. They approached us to revamp their outdated website, aiming to improve user experience, increase online appointment bookings, and enhance patient trust.
                            </p>
                            <div className={styles.infomain}>
                                <div className={styles.inf}>
                                    <h4>Counter :</h4>
                                    <span>USA</span>
                                </div>
                                <div className={styles.inf}>
                                    <h4>Industry :</h4>
                                    <span>Fashion & Design</span>
                                </div>
                            </div>
                            {/* skills */}
                            <div className={styles.sliderContainer}>
                                <div className={`${styles.circle} ${styles.circleBottomLeft}`}></div>
                                <div className={styles.sliderContainerMain}>
                                    <div
                                        className={styles.slider}
                                    >
                                        <div
                                            className={styles.slide}
                                        >
                                            {/* Circles inside each slide */}

                                            <div className={styles.imageMain}>
                                                <Image
                                                    src={skillImage1}
                                                    alt='skillImage'
                                                    className={styles.image}
                                                />
                                            </div>
                                            <div className={styles.imageMain}>
                                                <Image
                                                    src={skillImage2}
                                                    alt='skillImage'
                                                    className={styles.image}
                                                />
                                            </div>
                                            <div className={styles.imageMain}>
                                                <Image
                                                    src={skillImage3}
                                                    alt='skillImage'
                                                    className={styles.image}
                                                />
                                            </div>
                                            <div className={styles.imageMain}>
                                                <Image
                                                    src={skillImage4}
                                                    alt='skillImage'
                                                    className={styles.image}
                                                />
                                            </div>
                                        </div>

                                    </div>
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
                <section className={styles.heroSectionMain2}>
                    <div className={styles.section2}>
                        <h1 className={styles.titlee}>Client Briefings</h1>
                        <p>Elite Health Clinic is a leading medical center offering specialized healthcare services. They approached us to revamp their outdated website, aiming to improve user experience, increase online appointment bookings, and enhance patient trust. Their previous site was hard to navigate, lacked mobile optimization, and failed to showcase their services effectively.</p>
                        <div className={styles.ImageDivv}>
                            <Image src={benefitImage} alt='benefitImage' />
                        </div>
                        <div className={styles.ImageDivv2}>
                            <div className={styles.contentDivv}>
                                <h1>complexities And problems</h1>
                                <div className={styles.listt}>
                                    <ul>
                                        <li><p>Outdated and Unresponsive Design: </p><small>The existing website was not mobile-friendly, making it difficult for patients to access important information or book appointments on mobile devices.</small></li>
                                        <li><p>Complicated Navigation: </p> <small>The site had a cluttered layout, and users struggled to find essential information like service details, doctor profiles, and contact information. </small> </li>
                                        <li><p>Lack of Online Appointment Booking System: </p> <small> The clinic relied on phone calls for appointment scheduling, which was inefficient and led to missed opportunities. </small> </li>
                                        <li><p> Poor SEO & Low Visibility: </p> <small>The website was not optimized for search engines, leading to low visibility and limited organic traffic from people searching for healthcare services in their area.</small> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.ImageDivC}>
                                <Image src={probImage} alt='problemImage' />
                            </div>
                        </div>
                        {/*  */}
                        <div className={styles.ImageDivv3}>
                            <div className={styles.ImageDivC}>
                                <Image src={solutionImage} alt='solutionsImage' />
                            </div>
                            <div className={styles.contentDivv}>
                                <h1>solutions</h1>
                                <div className={styles.listt}>
                                    <ul>
                                        <li><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis enim quis minima! </span></li>
                                        <li> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem quod itaque saepe ab mollitia magni voluptas illo excepturi nostrum!</span> </li>
                                        <li> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sit mollitia animi soluta voluptatibus odit!</span> </li>
                                        <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fuga! Expedita maiores nisi quia ipsam error asperiores aliquam doloremque alias quos deserunt?</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/*  */}
                <section className={styles.heroSectionMain2}>
                    <div className={styles.section2}>
                        <h1 className={styles.titlee2}>How NEXUS-DEV help them in achieving their Goals</h1>
                        <div className={styles.ImageDivv}>
                            <Image src={goalsImage} alt='benefitImage' />
                        </div>
                        <div className={styles.ImageDivv3}>
                            <div className={styles.ImageDivC}>
                                <Image src={goalsImage2} alt='solutionsImage' />
                            </div>
                            <div className={styles.contentDivv}>
                                <div className={styles.listt}>
                                    <ul>
                                        <li><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis enim quis minima! </span></li>
                                        <li> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem quod itaque saepe ab mollitia magni voluptas illo excepturi nostrum!</span> </li>
                                        <li> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sit mollitia animi soluta voluptatibus odit!</span> </li>
                                        <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fuga! Expedita maiores nisi quia ipsam error asperiores aliquam doloremque alias quos deserunt?</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <ProvidedResults />
                        <Testimonial />
                        {/*  */}
                        <div className={styles.bottomFaq}>
                            <div className={styles.top}>
                                <h1>Have any Query?</h1>
                                <p>Join 40000+ startups already growing with Nexus-Dev.</p>
                            </div>
                            <div className={styles.bottom}>
                                <button className={styles.demoBtn}>
                                    <a href="/nexus-Dev/contact-us" className={styles.bookDemoA}>Contact Us<GoArrowUpRight className={styles.iconss} /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
};

export default CaseStudy;
