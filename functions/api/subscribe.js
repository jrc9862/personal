// Cloudflare Pages Function: POST /api/subscribe
//
// The site is a Next.js static export (`output: 'export'`), so there are no
// Next API routes. Wrangler picks this directory up and deploys it alongside
// ./out. BREVO_API_KEY is a Pages secret; it never reaches the browser.
//
// Locally: `npx wrangler pages dev out` (after `npm run build`) with
// BREVO_API_KEY in .env.local — `next dev` alone will not serve this route.

// Only lists we actually offer. Without this, anyone could POST an arbitrary
// listId and write contacts into an unrelated list on the account.
const ALLOWED_LIST_IDS = [2];
const DEFAULT_LIST_ID = 2;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const json = (body, status) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

export async function onRequestPost({ request, env }) {
  if (!env.BREVO_API_KEY) {
    console.error('BREVO_API_KEY is not set');
    return json({ error: "Signup isn't available right now. Try again later." }, 500);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Something went wrong. Please try again.' }, 400);
  }

  const email = typeof payload?.email === 'string' ? payload.email.trim() : '';
  const firstName = typeof payload?.firstName === 'string' ? payload.firstName.trim() : '';
  const listId = Number(payload?.listId ?? DEFAULT_LIST_ID);

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return json({ error: 'That email address doesn’t look right.' }, 400);
  }
  if (!ALLOWED_LIST_IDS.includes(listId)) {
    return json({ error: 'Unknown newsletter.' }, 400);
  }

  const body = { email, listIds: [listId], updateEnabled: true };
  if (firstName) {
    body.attributes = { FIRSTNAME: firstName.slice(0, 100) };
  }

  let res;
  try {
    res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': env.BREVO_API_KEY,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error('Brevo request failed', err);
    return json({ error: "We couldn't reach the mailing list. Please try again in a minute." }, 502);
  }

  // 201 = created, 204 = updated an existing contact (updateEnabled).
  if (res.ok) {
    return json({ status: 'subscribed' }, 200);
  }

  const text = await res.text();
  let code;
  try {
    code = JSON.parse(text)?.code;
  } catch {
    // Non-JSON error body; fall through to the generic message.
  }

  // Brevo still returns duplicate_parameter in some cases despite
  // updateEnabled. Already on the list is a success, not an error.
  if (res.status === 400 && code === 'duplicate_parameter') {
    return json({ status: 'already_subscribed' }, 200);
  }
  if (res.status === 400 && code === 'invalid_parameter') {
    console.error('Brevo rejected the payload', text);
    return json({ error: 'That email address doesn’t look right.' }, 400);
  }

  console.error('Brevo error', res.status, text);
  return json({ error: "Something went wrong on our end. Please try again later." }, 502);
}

// Anything other than POST.
export async function onRequest() {
  return new Response('Method not allowed', { status: 405, headers: { allow: 'POST' } });
}
