'use client';

import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="container">
      <nav className="nav">
        <Link href="/">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/writings">Writings</Link>
        <a 
          href="https://calendly.com/jrc9862/15min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="book-time"
        >
          Chat with me
        </a>
      </nav>

      <main>{children}</main>

      <footer className="footer">
        <a href="https://github.com/jrc9862" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jrcollett/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:james.collett@stern.nyu.edu">Email</a>
      </footer>
    </div>
  );
} 