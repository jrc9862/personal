'use client';

import { useState, useEffect } from 'react';

export default function WritingCard({ title, description, link }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = (e) => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    } else if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`writing-card ${isExpanded ? 'expanded' : ''}`}
      onClick={handleClick}
      tabIndex={0}
      role={isMobile ? "button" : "link"}
      aria-label={isMobile ? `View details for ${title}` : `Read: ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {isMobile && link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          Read →
        </a>
      )}
    </div>
  );
} 