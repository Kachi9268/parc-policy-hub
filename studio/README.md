# PARC Sanity Studio

Standalone Sanity v3 Studio for the PARC website. It is **not** embedded in the
website — it lives in this folder and deploys separately.

- Project ID: `hcli3lb3`
- Dataset: `production`

## Run locally

```bash
cd studio
npm install
npx sanity login      # once, with the account that owns project hcli3lb3
npm run dev           # http://localhost:3333
```

## Seed the 10 blog categories (once)

```bash
npm run seed
```

## Deploy the hosted Studio

```bash
npm run deploy
```

This publishes to `https://parc-coou.sanity.studio` (change `studioHost` in
`sanity.cli.ts` if that name is taken).

## CORS

In sanity.io/manage → project → API → CORS origins, add the site origins so the
website can read content:

- `https://*.lovableproject.com`
- your Netlify domain

## Document types

Homepage Settings, Blog Post, Blog Category, Author, Gallery Image, Leadership,
Achievement, Activity, Site Settings.
