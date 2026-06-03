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
    image: "/images/blog/week1.jpg"
  },
  {
    title: "Understanding the Project Structure",
    description:
      "Exploring how a React project is structured and how components work together.",
    tag: "Frontend",
    date: "February 2026",
        image: "/images/blog/week2.jpg"
  },
  {
    title: "First Frontend Tasks",
    description:
      "Making small UI improvements and learning how details affect user experience.",
    tag: "Frontend",
    date: "February 2026",
    image: "/images/blog/week3.jpg"
  },
  {
    title: "Learning More About APIs",
    description:
      "Understanding how the frontend communicates with the backend through API requests.",
    tag: "Backend",
    date: "February 2026",
    image: "/images/blog/week4.jpg"
  },
  {
    title: "Working With Dynamic Data",
    description:
      "Displaying backend data in the frontend and handling missing values.",
    tag: "Debugging",
    date: "March 2026",
    image: "/images/blog/week5.jpg"
  },
  {
    title: "Improving the User Interface",
    description:
      "Improving layout, spacing and consistency in the user interface.",
    tag: "Frontend",
    date: "March 2026",
    image: "/images/blog/week6.jpg"
  },
  {
    title: "Understanding Backend Logic",
    description:
      "Learning how backend routes, requests and database communication work.",
    tag: "Backend",
    date: "March 2026",
    image: "/images/blog/week7.jpg"
  },
  {
    title: "Solving Bugs",
    description:
      "Debugging API response issues and learning to solve problems step by step.",
    tag: "Debugging",
    date: "March 2026",
    image: "/images/blog/week8.jpg"
  },
  {
    title: "Reusable React Components",
    description:
      "Learning how reusable components make code cleaner and easier to maintain.",
    tag: "React",
    date: "April 2026",
    image: "/images/blog/week9.jpg"
  },
  {
    title: "Team Collaboration",
    description:
      "Learning how developers communicate and solve problems together.",
    tag: "Teamwork",
    date: "April 2026",
    image: "/images/blog/week10.jpg"
  },
  {
    title: "Learning More About Git",
    description:
      "Practicing branches, commits and merge conflicts.",
    tag: "Git",
    date: "April 2026",
    image: "/images/blog/week11.jpg"
  },
  {
    title: "Backend Validation",
    description:
      "Understanding why backend validation is important.",
    tag: "Backend",
    date: "April 2026",
    image: "/images/blog/week12.jpg"
  },
  {
    title: "Responsive Design",
    description:
      "Testing layouts on different screen sizes and improving responsiveness.",
    tag: "CSS",
    date: "May 2026",
    image: "/images/blog/week13.jpg"
  },
  {
  title: "Working With Customer Requests",
  description:
    "Implementing requested changes and understanding customer needs.",
  tag: "Backend",
  date: "May 2026",
  image: "/images/blog/week13.jpg"
  },
  {
  title: "Application Maintenance and Bug Fixing",
  description:
    "Maintaining existing functionality and solving daily issues.",
  tag: "Code",
  date: "June 2026",
  image: "/images/blog/week13.jpg"
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
                <img className={styles.postImage} src={post.image} alt={post.title} />
                <div className={styles.cardContent}>
                <span className={styles.tag}>{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <small>{post.date}</small>
                </div>
            </article>
        ))}
      </section>
    </main>
  );
}
