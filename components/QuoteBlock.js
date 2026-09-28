'use client';

import { useEffect, useState } from 'react';
import quoteData from '../data/quotes.json';

// The site is a static export, so picking a quote during render would bake one
// quote into the HTML at build time. Pick after mount instead — different
// quote on every page load, and no hydration mismatch.
export default function QuoteBlock() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const { quotes } = quoteData;
    if (!quotes || quotes.length === 0) return;
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <figure className="quote-block" aria-live="polite">
      {quote && (
        <>
          <blockquote>{quote.text}</blockquote>
          <figcaption>— {quote.author}</figcaption>
        </>
      )}
    </figure>
  );
}
