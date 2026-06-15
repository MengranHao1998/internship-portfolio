"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./blog.module.css";

const posts = [
  {
    title: "Starting My Internship",
    date: "February 2026",
    tag: "Reflection",
    image: "/images/blog/week1.jpg",
    description:
      "Getting introduced to Renoman SRL, the development environment and the project structure.",
    tasks: [
      "Getting introduced to Renoman SRL",
      "Setting up the development environment",
      "Exploring the existing project structure",
    ],
    challenges: [
      "Understanding a new codebase",
      "Getting familiar with the workflow",
    ],
    learned: [
      "Documentation is important",
      "Communication helps avoid misunderstandings",
      "A good setup makes development easier",
    ],
  },
  {
    title: "Understanding the Project Structure",
    date: "February 2026",
    tag: "Frontend",
    image: "/images/blog/week2.jpg",
    description:
      "Exploring how the frontend project is structured and how components work together.",
    tasks: [
      "Reading existing frontend code",
      "Understanding reusable components",
      "Checking how pages are connected",
    ],
    challenges: [
      "Finding where specific features were located",
      "Understanding the folder structure",
    ],
    learned: [
      "Reusable components reduce duplicated code",
      "A clear structure makes maintenance easier",
    ],
  },
  {
    title: "First Frontend Tasks",
    date: "February 2026",
    tag: "Frontend",
    image: "/images/blog/week3.jpg",
    description:
      "Making small UI changes and improving the visual consistency of the application.",
    tasks: [
      "Updating buttons and spacing",
      "Improving layout details",
      "Testing the UI on different screen sizes",
    ],
    challenges: [
      "Making changes without breaking existing styles",
      "Keeping the layout consistent",
    ],
    learned: [
      "Small UI changes can improve user experience",
      "Testing after every change is necessary",
    ],
  },
  {
    title: "Learning More About APIs",
    date: "February 2026",
    tag: "Backend",
    image: "/images/blog/week4.jpg",
    description:
      "Learning how frontend and backend communicate through API requests.",
    tasks: [
      "Studying API requests",
      "Checking how data is fetched",
      "Understanding response data",
    ],
    challenges: [
      "Understanding asynchronous code",
      "Knowing where data comes from",
    ],
    learned: [
      "APIs connect frontend and backend",
      "Async and await make data fetching easier",
    ],
  },
  {
    title: "Working With Dynamic Data",
    date: "March 2026",
    tag: "Debugging",
    image: "/images/blog/week5.jpg",
    description:
      "Displaying backend data in the frontend and handling missing or unexpected values.",
    tasks: [
      "Rendering lists of data",
      "Using map() to display items",
      "Handling loading and empty states",
    ],
    challenges: [
      "Some data fields were missing",
      "The frontend had to avoid crashing",
    ],
    learned: [
      "Data should be checked before rendering",
      "Error handling improves stability",
    ],
  },
  {
    title: "Improving the User Interface",
    date: "March 2026",
    tag: "Frontend",
    image: "/images/blog/week6.jpg",
    description:
      "Improving layout, spacing, readability and user experience.",
    tasks: [
      "Improving page layout",
      "Adjusting spacing and typography",
      "Making the interface easier to use",
    ],
    challenges: [
      "Balancing design and functionality",
      "Keeping the style consistent",
    ],
    learned: [
      "Good UI is simple and clear",
      "Feedback helps improve design decisions",
    ],
  },
  {
    title: "Understanding Backend Logic",
    date: "March 2026",
    tag: "Backend",
    image: "/images/blog/week7.jpg",
    description:
      "Learning how backend routes, requests and database communication work.",
    tasks: [
      "Studying backend routes",
      "Understanding request and response flow",
      "Checking how data is processed",
    ],
    challenges: [
      "Following data from frontend request to backend response",
      "Understanding how backend files connect",
    ],
    learned: [
      "Backend logic controls how data is handled",
      "Frontend and backend must match correctly",
    ],
  },
  {
    title: "Solving Bugs",
    date: "March 2026",
    tag: "Debugging",
    image: "/images/blog/week8.jpg",
    description:
      "Investigating bugs and solving problems step by step.",
    tasks: [
      "Checking reported issues",
      "Reproducing bugs",
      "Testing possible solutions",
    ],
    challenges: [
      "Finding the real cause of the problem",
      "Avoiding new bugs while fixing existing ones",
    ],
    learned: [
      "Debugging requires patience",
      "A structured approach saves time",
    ],
  },
  {
    title: "Reusable React Components",
    date: "April 2026",
    tag: "React",
    image: "/images/blog/week9.jpg",
    description:
      "Learning how reusable components make code cleaner and easier to maintain.",
    tasks: [
      "Creating reusable UI components",
      "Avoiding duplicated code",
      "Improving component structure",
    ],
    challenges: [
      "Deciding what should become reusable",
      "Passing data correctly with props",
    ],
    learned: [
      "Reusable components make code more maintainable",
      "Props help components stay flexible",
    ],
  },
  {
    title: "Team Collaboration",
    date: "April 2026",
    tag: "Teamwork",
    image: "/images/blog/week10.jpg",
    description:
      "Learning how developers communicate, review code and solve problems together.",
    tasks: [
      "Discussing tasks with colleagues",
      "Receiving feedback",
      "Improving code based on suggestions",
    ],
    challenges: [
      "Explaining technical problems clearly",
      "Understanding feedback correctly",
    ],
    learned: [
      "Communication is important in software development",
      "Code review improves quality",
    ],
  },
  {
    title: "Learning More About Git",
    date: "April 2026",
    tag: "Git",
    image: "/images/blog/week11.jpg",
    description:
      "Practicing branches, commits, pull requests and merge conflicts.",
    tasks: [
      "Creating branches",
      "Making commits",
      "Understanding pull requests",
      "Solving merge conflicts",
    ],
    challenges: [
      "Understanding merge conflicts",
      "Keeping commits clear and organized",
    ],
    learned: [
      "Git is essential for teamwork",
      "Clear commit messages are useful",
    ],
  },
  {
    title: "Backend Validation",
    date: "April 2026",
    tag: "Backend",
    image: "/images/blog/week12.jpg",
    description:
      "Understanding why backend validation is important for data quality and security.",
    tasks: [
      "Checking user input",
      "Studying validation logic",
      "Testing invalid data cases",
    ],
    challenges: [
      "Thinking about edge cases",
      "Handling invalid data correctly",
    ],
    learned: [
      "The backend should not blindly trust input",
      "Validation protects data quality",
    ],
  },
  {
    title: "Responsive Design",
    date: "May 2026",
    tag: "CSS",
    image: "/images/blog/week13.jpg",
    description:
      "Testing layouts on different screen sizes and improving responsiveness.",
    tasks: [
      "Testing pages on mobile and desktop",
      "Adding responsive CSS",
      "Improving layout behavior on small screens",
    ],
    challenges: [
      "Fixing elements that did not fit on mobile",
      "Keeping the design usable on all screen sizes",
    ],
    learned: [
      "Responsive design is necessary",
      "Mobile testing should not be skipped",
    ],
  },
  {
    title: "Working With Customer Requests",
    date: "May 2026",
    tag: "Customer Requests",
    image: "/images/blog/week14.jpg",
    description:
      "Implementing requested changes and understanding customer needs.",
    tasks: [
      "Analyzing customer requirements",
      "Changing existing functionality",
      "Adding small requested features",
      "Testing the changes",
    ],
    challenges: [
      "Understanding the exact customer need",
      "Making changes without affecting other features",
    ],
    learned: [
      "Customer requirements must be clearly understood",
      "Small changes can affect multiple parts of an application",
    ],
  },
  {
    title: "Learning About Clean Code",
    date: "May 2026",
    tag: "Code",
    image: "/images/blog/week15.jpg",
    description:
      "Improving code readability with better structure and naming.",
    tasks: [
      "Cleaning duplicated code",
      "Improving names",
      "Making code easier to read",
    ],
    challenges: [
      "Knowing when code should be refactored",
      "Keeping the same functionality while improving structure",
    ],
    learned: [
      "Readable code is easier to maintain",
      "Good naming makes code clearer",
    ],
  },
  {
    title: "Application Maintenance and Bug Fixing",
    date: "June 2026",
    tag: "Maintenance",
    image: "/images/blog/week16.jpg",
    description:
      "Maintaining existing functionality and solving daily issues.",
    tasks: [
      "Investigating reported bugs",
      "Fixing small issues",
      "Improving application stability",
      "Testing after bug fixes",
    ],
    challenges: [
      "Reproducing bugs correctly",
      "Finding the root cause",
    ],
    learned: [
      "Maintenance is an important part of software development",
      "Small bugs can affect user experience",
    ],
  },
  {
    title: "Final Thoughts",
    date: "June 2026",
    tag: "Growth",
    image: "/images/blog/week17.jpg",
    description:
      "Reflecting on frontend, backend, teamwork and personal growth.",
    tasks: [
      "Looking back at the internship period",
      "Reviewing technical progress",
      "Reflecting on personal growth",
    ],
    challenges: [
      "Explaining my growth clearly",
      "Connecting technical work with reflection",
    ],
    learned: [
      "I became more confident with frontend and backend development",
      "I learned how professional development teams work",
      "I still want to improve my problem-solving and code structure",
    ],
  },
  {
  title: "Working With Customer Requests",
  description:
    "Implementing requested changes and understanding customer needs.",
  tag: "Backend",
  date: "May 2026",
  image: "/images/blog/week14.jpg"
  },
  {
  title: "Application Maintenance and Bug Fixing",
  description:
    "Maintaining existing functionality and solving daily issues.",
  tag: "Code",
  date: "June 2026",
  image: "/images/blog/week15.jpg"
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
        <p className={styles.subtitle}>Weekly Internship Journal</p>
        <h2>Internship Blog</h2>
        <p>
          These weekly blog posts describe my progress during my internship at
          Renoman SRL. I reflect on frontend development, backend logic,
          customer requests, debugging, teamwork and personal growth.
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
            <img src={post.image} alt={post.title} className={styles.postImage} />

            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <span className={styles.tag}>{post.tag}</span>
                <small>{post.date}</small>
              </div>

              <h3>{post.title}</h3>
              <p>{post.description}</p>

              <h4>What I Did</h4>
              <ul>
                {post.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>

              <h4>Challenges</h4>
              <ul>
                {post.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>

              <h4>What I Learned</h4>
              <ul>
                {post.learned.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
