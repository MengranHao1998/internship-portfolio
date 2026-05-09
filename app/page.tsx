import Link from "next/link";
import styles from "./page.module.css";

const latestPosts = [
  {
    title: "First Week at Sungrow",
    description:
      "Learning about BESS systems and safety procedures.",
    tag: "Reflection",
    date: "May 2026",
  },
  {
    title: "Solving a Modbus Issue",
    description:
      "Debugging communication between controllers and battery racks.",
    tag: "Code",
    date: "May 2026",
  },
  {
    title: "Lessons Learned",
    description:
      "Communication is just as important as technical knowledge.",
    tag: "Lessons Learned",
    date: "May 2026",
  },
];

export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Internship Portfolio</h1>

        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.subtitle}>
            Energy & Software Engineering
          </p>

          <h2>
            Hi, I'm Mengran.
            <br />
            Welcome to my internship journey.
          </h2>

          <p className={styles.description}>
            This website documents my internship experience
            as a Field Service Engineer and software developer
            working on large-scale battery energy storage projects
            in Belgium.
          </p>

          <div className={styles.buttons}>
            <Link href="/blog" className={styles.primaryButton}>
              Read Blog
            </Link>

            <Link href="/about" className={styles.secondaryButton}>
              About Me
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src="/images/profile.jpg" alt="profile" />
        </div>
      </section>

      {/* Latest Posts */}
      <section className={styles.latestSection}>
        <h2>Latest Blog Posts</h2>

        <div className={styles.cardContainer}>
          {latestPosts.map((post, index) => (
            <div className={styles.card} key={index}>
              <span className={styles.tag}>{post.tag}</span>

              <h3>{post.title}</h3>

              <p>{post.description}</p>

              <small>{post.date}</small>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}