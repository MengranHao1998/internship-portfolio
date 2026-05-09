"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./blog.module.css";

const posts = [
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
    title: "Reflection on My Progress",
    description:
      "Looking back at my growth since the beginning of the internship.",
    tag: "Reflection",
    date: "May 2026",
  },
  {
    title: "Learning About Clean Code",
    description:
      "Improving code readability with better structure and naming.",
    tag: "Code",
    date: "May 2026",
  },
  {
    title: "Final Thoughts",
    description:
      "Reflecting on frontend, backend and personal growth.",
    tag: "Growth",
    date: "June 2026",
  },
];

const tags = ["All", ...new Set(posts.map((post) => post.tag))];

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredPosts =
    selectedTag === "All"
      ? posts
      : posts.filter((post) => post.tag === selectedTag);

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

      <section className={styles.header}>
        <h2>Blog Posts</h2>
        <p>
          Weekly reflections about my programming internship, focusing on
          frontend, backend, APIs, debugging and teamwork.
        </p>
      </section>

      <section className={styles.filterSection}>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={
              selectedTag === tag ? styles.activeButton : styles.filterButton
            }
          >
            {tag}
          </button>
        ))}
      </section>

      <section className={styles.postGrid}>
        {filteredPosts.map((post, index) => (
          <article className={styles.card} key={index}>
            <span className={styles.tag}>{post.tag}</span>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <small>{post.date}</small>
          </article>
        ))}
      </section>
    </main>
  );
}