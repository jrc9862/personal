'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Layout({ children }) {
  return (
    <motion.div
      className="container"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <motion.nav className="nav" variants={sectionVariant}>
        <Link href="/">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/writings">Writings</Link>
        <a
          href="https://allegedly-brilliant.beehiiv.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a
          href="https://calendly.com/jrc9862/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="book-time"
        >
          Chat with me
        </a>
      </motion.nav>

      <motion.main variants={sectionVariant}>{children}</motion.main>

      <motion.footer className="footer" variants={sectionVariant}>
        <a href="https://allegedly-brilliant.beehiiv.com/" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
        <a href="https://github.com/jrc9862" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jrcollett/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:james@collett.land">Email</a>
      </motion.footer>
    </motion.div>
  );
}
