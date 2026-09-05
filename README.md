Find the site [here](https://collett.land)

## Setup

The Projects page merges the hardcoded entries in `data/projects.js` with the
repositories pinned on my GitHub profile. Pinned repos are only available through
GitHub's GraphQL API, which requires a token even for public data, so the fetch
happens at build time.

Create `.env.local` in the project root:

```
GITHUB_TOKEN=<token>
```

The token needs **no scopes** — a classic PAT with nothing checked, or a
fine-grained token with only "Public Repositories (read-only)". Without the
`NEXT_PUBLIC_` prefix it stays server-side and never reaches the browser.

If the token is missing or the API call fails, the build still succeeds and the page
falls back to `data/projects.js` alone. Re-pinning a repo on GitHub shows up on the
site at the next deploy.

## Roadmap

- Optimize for mobile (ik it's bad)
- Project & Writing card behavior still isn't exactly what I'm looking for
- Add resources to .json
- Add some site arrival animations
