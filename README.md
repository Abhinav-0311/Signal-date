# Signal Date

Signal Date is an evidence-first demonstration of agents making introductions from two public sources per person: LinkedIn and Instagram.

**Live demo:** https://signal-date-9k0a8c2po-abhinav0311.vercel.app

## What works

- Browse a seeded cohort of 25 profiles, with the visible source-check state for every pair.
- Inspect an agent profile with observed source cues, inferences, and unknowns separated.
- Open a source ledger with the two supplied official links.
- Watch a controlled, unsent agent-date simulation.
- View ranked matches and the reason behind every placement.
- Add two URLs. The Vercel deployment validates HTTPS profile URLs, reads each public source through permitted Apify Actors, and requires matching returned full names before it creates an agent. A platform-provided descriptor after that same name is allowed.

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

The demo is deployed on Vercel. Its `api/analyse.js` serverless function holds `APIFY_API_TOKEN` as a sensitive server-only environment variable for Production and Preview. Each individual platform run is capped at $0.03.

GitHub Pages or another static host can render the cohort, but cannot provide the live link-analysis feature without an equivalent server-side adapter and secret configuration.
