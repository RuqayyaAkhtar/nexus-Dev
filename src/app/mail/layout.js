// src/app/mail/layout.js
import Header  from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";
import Topbar  from "@/app/components/topbar";
import styles  from "./layout.module.css";

export default function MailLayout({ children }) {
  return (
    <>
    <section className={styles.section}>
    <div className={styles.container}>
      {/* Top header with logo, search, avatar */}
      <Header />

      {/* Main area: sidebar + content */}
      <div className={styles.layout}>
        <Sidebar />

        <div className={styles.main}>
          <Topbar />
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}
