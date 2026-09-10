'use client';

import { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MESSAGES = {
  subscribed: "You're in. Look out for the next issue.",
  already_subscribed: "You're already on the list — nothing more to do.",
};

export default function DigestSignup({ digest }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [state, setState] = useState('idle'); // idle | loading | done | error
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (state === 'loading') return;

    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setState('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setState('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: trimmed,
          firstName: firstName.trim(),
          listId: digest.listId,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.status) {
        setState('done');
        setMessage(MESSAGES[data.status] ?? MESSAGES.subscribed);
        setEmail('');
        setFirstName('');
        return;
      }

      setState('error');
      setMessage(data.error ?? 'Something went wrong. Please try again.');
    } catch {
      setState('error');
      setMessage("We couldn't reach the server. Check your connection and try again.");
    }
  }

  const loading = state === 'loading';

  return (
    <section className="digest-card">
      <h2>{digest.name}</h2>
      <p className="digest-meta">
        <span>{digest.cadence}</span>
        <span className="digest-meta-sep">/</span>
        <span>Auto-generated</span>
        <span className="digest-meta-sep">/</span>
        <span>{digest.sources.join(', ')}</span>
      </p>
      <p className="digest-description">{digest.description}</p>

      <details className="digest-method">
        <summary>How it&rsquo;s made</summary>
        <ol>
          {digest.method.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          No human writes these issues. I built the pipeline and I read the
          output, but the summaries are the machine&rsquo;s.
        </p>
      </details>

      {state === 'done' ? (
        <p className="digest-status digest-status-success" role="status">
          {message}
        </p>
      ) : (
        <form className="digest-form" onSubmit={handleSubmit} noValidate>
          <label className="visually-hidden" htmlFor={`${digest.id}-first-name`}>
            First name (optional)
          </label>
          <input
            id={`${digest.id}-first-name`}
            className="digest-input"
            type="text"
            name="firstName"
            autoComplete="given-name"
            placeholder="First name (optional)"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={loading}
          />

          <label className="visually-hidden" htmlFor={`${digest.id}-email`}>
            Email address
          </label>
          <input
            id={`${digest.id}-email`}
            className="digest-input"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={state === 'error'}
            required
            disabled={loading}
          />

          <button className="digest-button" type="submit" disabled={loading}>
            {loading ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      )}

      {state === 'error' && (
        <p className="digest-status digest-status-error" role="alert">
          {message}
        </p>
      )}
    </section>
  );
}
