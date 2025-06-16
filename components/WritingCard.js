'use client';

export default function WritingCard({ title, description, link }) {
  const handleClick = (e) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="writing-card"
      onClick={handleClick}
      tabIndex={0}
      role="link"
      aria-label={`Read article: ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
} 