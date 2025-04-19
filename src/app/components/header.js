// src/app/components/Header.js
import styles from "./header.module.css";
import Image from "next/image";
import Logo from "./images/Group 4.png";
import Avatar from './images/Ellipse 145.png'

export default function Header() {
  return (
    <section className={styles.headerMain}>
    <header className={styles.header}>
      <div className={styles.left}>
        <Image src={Logo} alt="logo" width={150} height={32} className={styles.logo} />
      </div>

      <div className={styles.right}>
        <Image
          src={Avatar}
          alt="Sarah"
          width={32}
          height={32}
          className={styles.avatar}
        />
        <div className={styles.name}>Sarah</div>
      </div>
    </header>
    </section>
  );
}
