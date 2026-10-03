# Signal Date

Signal Date is a static, evidence-first demonstration of agents making introductions from two public sources per person: LinkedIn and Instagram.

## What works

- Browse a seeded cohort of 25 profiles.
- Inspect an agent profile with observed source cues, inferences, and unknowns separated.
- Open a source ledger with the two supplied official links.
- Watch a controlled, unsent agent-date simulation.
- View ranked matches and the reason behind every placement.
- Add two URLs. URL validation works locally; the record stays blocked until a permitted source adapter returns evidence.

## Run locally

Open `index.html` in a modern browser. No build step or dependency installation is required.

## Source boundary

This repository intentionally does not scrape LinkedIn or Instagram in the browser. Platform access frequently requires an authenticated or permitted provider. The UI communicates unavailable/private/blocked states instead of generating a profile from unsupported assumptions.

For a Vercel deployment, the included `api/analyse.js` uses two named Apify Actors: `data_forge_org/linkedin-scraper` for public LinkedIn profiles and `apify/instagram-profile-scraper` for public Instagram profiles. Set this server-only environment variable in the host dashboard, never in browser code or Git:

```text
APIFY_API_TOKEN=
```

The adapter passes `profileUrls` to the LinkedIn Actor and `usernames` to the Instagram Actor. If either provider blocks a profile or returns no usable public evidence, the client retains its blocked/unavailable state.

## Deployment

Because this is a static site, deploy the `AI` folder with GitHub Pages, Vercel, Netlify, or any static host.
