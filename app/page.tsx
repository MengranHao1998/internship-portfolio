import Link from "next/link";
import styles from "./page.module.css";

const latestPosts = [
  {
    title: "Starting My Internship",
    description:
      "Getting introduced to the company, the development environment and the project structure.",
    tag: "Reflection",
    date: "February 2026",
  },

  {
    title: "Understanding the Project Structure",
    description:
      "Exploring how a React project is structured and how components work together.",
    tag: "Frontend",
    date: "February 2026",
  },

  {
    title: "First Frontend Tasks",
    description:
      "Making small UI improvements and learning how details affect user experience.",
    tag: "Frontend",
    date: "February 2026",
  },

  {
    title: "Learning More About APIs",
    description:
      "Understanding how the frontend communicates with the backend through API requests.",
    tag: "Backend",
    date: "February 2026",
  },

  {
    title: "Working With Dynamic Data",
    description:
      "Displaying backend data in the frontend and handling missing values.",
    tag: "Debugging",
    date: "March 2026",
  },

  {
    title: "Improving the User Interface",
    description:
      "Improving layout, spacing and consistency in the user interface.",
    tag: "Frontend",
    date: "March 2026",
  },

  {
    title: "Understanding Backend Logic",
    description:
      "Learning how backend routes, requests and database communication work.",
    tag: "Backend",
    date: "March 2026",
  },

  {
    title: "Solving Bugs",
    description:
      "Debugging API response issues and learning to solve problems step by step.",
    tag: "Debugging",
    date: "March 2026",
  },

  {
    title: "Reusable React Components",
    description:
      "Learning how reusable components make code cleaner and easier to maintain.",
    tag: "React",
    date: "April 2026",
  },

  {
    title: "Team Collaboration",
    description:
      "Learning how developers communicate and solve problems together.",
    tag: "Teamwork",
    date: "April 2026",
  },

  {
    title: "Learning More About Git",
    description:
      "Practicing branches, commits and merge conflicts.",
    tag: "Git",
    date: "April 2026",
  },

  {
    title: "Backend Validation",
    description:
      "Understanding why backend validation is important.",
    tag: "Backend",
    date: "April 2026",
  },

  {
    title: "Responsive Design",
    description:
      "Testing layouts on different screen sizes and improving responsiveness.",
    tag: "CSS",
    date: "May 2026",
  },
  {
  title: "Working With Customer Requests",
  description:
    "Implementing requested changes and understanding customer needs.",
  tag: "Backend",
  date: "May 2026",
},
{
  title: "Application Maintenance and Bug Fixing",
  description:
    "Maintaining existing functionality and solving daily issues.",
  tag: "Code",
  date: "June 2026",
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
            Programmeren Stage Portfolio
          </p>

          <h2>
            Hi, I'm Mengran.
            <br />
            Welcome to my internship journey.
          </h2>

          <p className={styles.description}>
            This website documents my internship journey as a student in
            Programmeren. During this internship, I focus on
            frontend and backend development, working with modern web
            technologies, APIs, databases and clean code practices.
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
