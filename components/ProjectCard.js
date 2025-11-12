'use client';

import { useState } from 'react';

export default function ProjectCard({ title, description, link }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`project-card ${isExpanded ? 'expanded' : ''}`}
      onClick={toggleExpand}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleExpand();
        }
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          View Project →
        </a>
      )}
    </div>
  );
} 