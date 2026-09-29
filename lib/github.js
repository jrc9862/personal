const GITHUB_USER = 'jrc9862';

// README filenames are case-sensitive in the GraphQL `object(expression:)` lookup
// and there is no glob, so ask for the common spellings as aliases. They all ride
// along on the one request; a name that does not exist comes back null.
const README_ALIASES = {
  readmeMd: 'README.md',
  readmeLowerMd: 'readme.md',
  readmeBare: 'README',
  readmeRst: 'README.rst',
};

const readmeFields = Object.entries(README_ALIASES)
  .map(([alias, path]) => `${alias}: object(expression: "HEAD:${path}") { ... on Blob { text } }`)
  .join('\n          ');

const PINNED_QUERY = `{
  user(login: "${GITHUB_USER}") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          ${readmeFields}
        }
      }
    }
  }
}`;

const MAX_DESCRIPTION = 150;

// Next keys its Data Cache on the request URL and persists it in .next/cache
// across builds. `cache: 'no-store'` is the usual opt-out, but under
// output: 'export' Next rejects it as dynamic server usage and the export fails,
// so make the URL itself unique per build. GitHub ignores the query string.
const API_URL = `https://api.github.com/graphql?build=${Date.now()}`;

// Lines that carry no prose: headings, rules, tables, fences, HTML, GitHub alerts.
const SKIP_LINE = /^(#|={3,}$|-{3,}$|\*{3,}$|_{3,}$|\||<|>\s*\[!)/;

// Badges and images, which is what the top of a README is usually made of. A line
// left empty once these are stripped is decoration, not a description.
const DECORATION = /!\[[^\]]*\]\([^)]*\)|\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)|<img\b[^>]*>/gi;

const clean = (line) =>
  line
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links keep their text
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const truncate = (text) => {
  if (text.length <= MAX_DESCRIPTION) return text;
  const cut = text.slice(0, MAX_DESCRIPTION);
  const boundary = cut.lastIndexOf(' ');
  return `${(boundary > MAX_DESCRIPTION / 2 ? cut.slice(0, boundary) : cut).trimEnd()}…`;
};

// First line of real prose in a README — the tagline that usually sits under the
// title and the badge row. Returns '' when the README is all decoration.
export function firstProseLine(markdown) {
  if (!markdown) return '';

  const lines = markdown.split(/\r?\n/);
  let inFence = false;
  let inAlert = false;
  let start = 0;

  // YAML frontmatter, if any, is metadata rather than prose.
  if (lines[0]?.trim() === '---') {
    const end = lines.findIndex((line, i) => i > 0 && line.trim() === '---');
    if (end !== -1) start = end + 1;
  }

  for (let i = start; i < lines.length; i++) {
    const raw = lines[i].trim();

    if (/^(```|~~~)/.test(raw)) {
      inFence = !inFence;
      continue;
    }
    // A GitHub alert (`> [!NOTE]`) runs until the quote stops, and none of it is
    // a description. A plain blockquote still counts as prose.
    if (/^>\s*\[!/.test(raw)) {
      inAlert = true;
      continue;
    }
    if (inAlert) {
      if (raw.startsWith('>')) continue;
      inAlert = false;
    }

    if (inFence || !raw || SKIP_LINE.test(raw)) continue;

    // Strip list and quote markers, then decoration, and see what is left.
    const body = raw.replace(/^([-*+]|\d+\.|>)\s+/, '');
    if (!body.replace(DECORATION, '').trim()) continue;

    // Markdown paragraphs are often hard-wrapped, so one physical line is a
    // sentence fragment. Take the rest of the paragraph too and join it.
    const paragraph = [body];
    for (let j = i + 1; j < lines.length; j++) {
      const next = lines[j].trim();
      if (!next || SKIP_LINE.test(next) || /^(```|~~~)/.test(next)) break;
      paragraph.push(next.replace(/^([-*+]|\d+\.|>)\s+/, ''));
    }

    const text = clean(paragraph.join(' ').replace(DECORATION, ''));
    if (text) return truncate(text);
  }

  return '';
}

// Runs at build time only (output: 'export'). Without a token it returns [] so a
// clone can still build — the page just falls back to data/projects.js. With a
// token it throws on any failure: a silent [] would ship a projects page missing
// the pinned repos, and a failed build is better than a quietly wrong deploy.
export default async function getPinnedRepos() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn('GITHUB_TOKEN not set — skipping pinned repos');
    return [];
  }

  let res;
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': `${GITHUB_USER}-personal-website`,
      },
      body: JSON.stringify({ query: PINNED_QUERY }),
    });
  } catch (err) {
    throw new Error(`Failed to reach the GitHub API: ${err.message}`);
  }

  if (!res.ok) {
    throw new Error(
      `GitHub API returned ${res.status} ${res.statusText} — check that GITHUB_TOKEN is valid.`
    );
  }

  // GraphQL errors come back with a 200, so check the body too.
  const body = await res.json();
  if (body.errors) {
    throw new Error(
      `GitHub GraphQL errors: ${body.errors.map((e) => e.message).join('; ')}`
    );
  }

  const nodes = body.data?.user?.pinnedItems?.nodes ?? [];
  return nodes.map((repo) => {
    const readme = Object.keys(README_ALIASES)
      .map((alias) => repo[alias]?.text)
      .find(Boolean);

    return {
      id: `gh-${repo.id}`,
      // The repo's own description is hand-written, so it wins. The README
      // tagline is the fallback for repos that never got one.
      description: repo.description || firstProseLine(readme),
      title: repo.name,
      link: repo.url,
    };
  });
}
