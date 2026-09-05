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

// Runs at build time only (output: 'export'). Returns [] on any failure so a
// clone without a token still builds — the page just falls back to data/projects.js.
export default async function getPinnedRepos() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn('GITHUB_TOKEN not set — skipping pinned repos');
    return [];
  }

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': `${GITHUB_USER}-personal-website`,
      },
      body: JSON.stringify({ query: PINNED_QUERY }),
    });

    if (!res.ok) {
      console.warn(`GitHub API returned ${res.status} — skipping pinned repos`);
      return [];
    }

    // GraphQL errors come back with a 200, so check the body too.
    const body = await res.json();
    if (body.errors) {
      console.warn('GitHub GraphQL errors — skipping pinned repos:', body.errors);
      return [];
    }

    const nodes = body.data?.user?.pinnedItems?.nodes ?? [];
    return nodes.map((repo) => ({
      id: `gh-${repo.id}`,
      title: repo.name,
      description: repo.description ?? '',
      link: repo.url,
    }));
  } catch (err) {
    console.warn('Failed to fetch pinned repos:', err.message);
    return [];
  }
}
