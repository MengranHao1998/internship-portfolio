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
            I am a student in Graduaat Programmeren. This portfolio was created
            for my WPL internship and shows my learning process, weekly
            reflections and growth as a future software developer.
          </p>

          <p>
            During this internship, I mainly focus on frontend and backend
            development. I work on improving existing features, adding new
            functionality based on customer requirements, fixing bugs and
            maintaining the application.
          </p>

          <h3>Internship Information</h3>

          <p>
            I am doing my internship at <strong>Renoman SRL</strong>. My role
            during the internship is <strong>stagiair</strong>.
          </p>

          <p>
            My tasks include making changes and optimizations based on customer
            needs, adding requested features, solving daily bugs and supporting
            the maintenance of the project.
          </p>

          <h3>My Focus Areas</h3>

          <ul>
            <li>Frontend development</li>
            <li>Backend development</li>
            <li>React and Next.js</li>
            <li>APIs and databases</li>
            <li>Bug fixing and maintenance</li>
            <li>Customer-oriented feature development</li>
            <li>Teamwork and communication</li>
          </ul>

          <h3>Goal of This Portfolio</h3>

          <p>
            The goal of this website is to document my internship experience,
            reflect on the work I do and show how I develop my technical and
            professional skills throughout the internship period.
          </p>

          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/mengran-hao-980423hmr/" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}