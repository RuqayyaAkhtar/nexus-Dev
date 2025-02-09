'use client';
import Image from 'next/image';
import Footer from '../footer/page';
import Header from '../header/page';
import styles from './contact.module.css';
import heroImage from './images/Group 1197132642 (1).png'

import { IoChatbubbleOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";

const ContactUs = () => {
    return (
        <>
            <Header />
            <section className={styles.heroSectionMain}>
                <section className={styles.heroSection}>
                    <div className={styles.container}>
                        {/* Left Column */}
                        <div className={styles.leftColumn}>
                            <h1 className={styles.heading}>
                                Contact our team
                            </h1>
                            <p className={styles.description}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <p className={styles.description2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
                        <div className={styles.ContactUs}>
                            <h1>Contact Us</h1>
                            <p>Drop us a line about your project at contact@nexus-dev.com or via the contact form below, and we will contact you soon.</p>
                            <div className={`${styles.rightSection}  ${styles.imageContainer2}`}>
                                <form className={styles.form}>
                                    <div className={styles.row}>
                                        <label className={styles.label}>
                                            First Name
                                            <input type="text" placeholder="First Name" className={styles.input} />
                                        </label>
                                        <label className={styles.label}>
                                            Last Name
                                            <input type="text" placeholder="Last Name" className={styles.input} />
                                        </label>
                                    </div>
                                    <label className={styles.labelFullWidth}>
                                        Email
                                        <input type="email" placeholder="your@company.com" className={styles.fullWidthInput} />
                                    </label>
                                    <div className={styles.row}>
                                        <label className={styles.label}>
                                            Phone Number
                                            <div className={styles.phoneContainer}>
                                                <select className={styles.countryCode}>
                                                    <option value="PK">PK +92</option>
                                                    <option value="PK">UK +44</option>
                                                    {/* Add more country options here */}
                                                </select>
                                                <input type="text" placeholder="92 000 0000000" className={styles.phoneInput} />
                                            </div>
                                        </label>
                                        <label className={styles.label}>
                                            Website
                                            <input type="text" placeholder="www.yourwebsite.com" className={styles.input} />
                                        </label>
                                    </div>
                                    <label className={styles.labelFullWidth}>
                                        Message
                                        <textarea rows={10} placeholder="Leave a Message here" className={styles.textarea}></textarea>
                                    </label>
                                    <h4 style={{ fontWeight: '500' }}>Select Business Type</h4>
                                    <div className={styles.businessType}>
                                        <label><input type="checkbox" className={styles.radioo} /> Web Developement</label>
                                        <label><input type="checkbox" className={styles.radioo} /> Mobile App Developement</label>
                                        <label><input type="checkbox" className={styles.radioo} /> UX/UI Design</label>
                                        <label><input type="checkbox" className={styles.radioo} /> System Architect</label>
                                        <label><input type="checkbox" className={styles.radioo} /> Bussiness Consultant</label>
                                        <label><input type="checkbox" className={styles.radioo} /> Bussiness Analyst</label>
                                        <label><input type="checkbox" className={styles.radioo} /> Digital Marketing</label>
                                        <label><input type="checkbox" className={styles.radioo} /> Graphic Designer</label>
                                        <label><input type="checkbox" className={styles.radioo} /> Other</label>
                                    </div>
                                    <button type="submit" className={styles.submitButton}>Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div className={styles.bottomC}>
                            <div className={styles.chat}>
                                <h2>Chat with us</h2>
                                <p>Speak to our Friendly team via live chat.</p>
                                <ul>
                                    <li><a href="#"><IoChatbubbleOutline className={styles.icons} />Start a live chat</a></li>
                                    <li><a href="#"><CiMail className={styles.icons} />Shoot us an email</a></li>
                                    <li><a href="#"><FaWhatsapp className={styles.icons} />Message on WhatsApp</a></li>
                                </ul>
                            </div>
                            <div className={styles.call}>
                                <h2>Call us</h2>
                                <p>Speak to our Friendly team via live Call.</p>
                                <p><a href="#"><LuPhoneCall className={styles.icons} />+92 000 101000101</a></p>
                                <p><a href="#"><LuPhoneCall className={styles.icons} /> +92 000 101000001</a></p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.map}>
                                <h1>Give us a Visit</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className={styles.mapContainer}>
                                <div className={styles.mapDescription}>
                                    <h3>Our Location</h3>
                                    <p>Find us at 123 Main Street, San Francisco, New York.</p>
                                </div>
                                {/* Embedded Google Map via iframe */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086948703022!2d-122.4194156846826!3d37.77492927975919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8f1a3a27%3A0x7c6a8b6a4d2a1e1!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1616451234567"
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Our Location"
                                ></iframe>
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

export default ContactUs;
