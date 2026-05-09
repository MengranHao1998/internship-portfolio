import Link from "next/link";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Internship Portfolio</h1>

        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>

      <section className={styles.aboutSection}>
        <div className={styles.imageBox}>
          <img src="/images/profile.jpg" alt="profile" />
        </div>

        <div className={styles.textBox}>
          <p className={styles.subtitle}>About Me</p>

          <h2>Hi, I'm Mengran.</h2>

          <p>
            I am a student in Graduaat Programmeren. This portfolio is created
            for my internship and shows my learning process, reflections and
            progress as a future software developer.
          </p>

          <p>
            During my internship, I focus on frontend and backend development.
            I work with modern web technologies, APIs, databases and clean code
            practices.
          </p>

          <h3>My Focus Areas</h3>

          <ul>
            <li>Frontend development</li>
            <li>Backend development</li>
            <li>React and Next.js</li>
            <li>APIs and databases</li>
            <li>Debugging and problem solving</li>
            <li>Teamwork and communication</li>
          </ul>

          <h3>Internship Information</h3>

          <p>
            This internship is part of my Graduaat Programmeren education. The
            goal is to apply programming knowledge in a professional development
            environment and to reflect on my growth throughout the internship
            period.
          </p>

          <div className={styles.links}>
            <a href="https://www.linkedin.com/" target="_blank">
              LinkedIn
            </a>

            <a href="https://github.com/" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}