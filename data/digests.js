// Automated digests offered on /digests. Everything here is machine-
// assembled and AI-summarized — James's own writing lives on the blog
// (allegedly-brilliant.beehiiv.com), not here. Keep that distinction visible
// in the copy of anything added below.
//
// Adding another digest means appending an entry here AND adding its Brevo
// list ID to ALLOWED_LIST_IDS in functions/api/subscribe.js — the API refuses
// list IDs it doesn't know.
export const digests = [
  {
    id: 'polecon-digest',
    name: 'PolEcon Digest',
    listId: 2,
    cadence: 'Weekly',
    sources: ['RePEc', 'CEPR', 'arXiv'],
    description:
      'New political economy and behavioral economics research from the past week, summarized so you can skim what came out in a few minutes and decide what to read in full.',
    // Rendered verbatim under "How it's made". Say what the machine does.
    method: [
      'Pulls new working papers and preprints from the sources above.',
      'Filters to political economy and behavioral economics.',
      'Summarizes each one with an LLM and links the original.',
    ],
  },
];
