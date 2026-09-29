const GITHUB_USER = 'jrc9862';

const PINNED_QUERY = `{
  user(login: "${GITHUB_USER}") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
        }
      }
    }
  }
}`;

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
    res = await fetch('https://api.github.com/graphql', {
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
  return nodes.map((repo) => ({
    id: `gh-${repo.id}`,
    title: repo.name,
    description: repo.description ?? '',
    link: repo.url,
  }));
}
