# Portfolio

Next.js 15 App Router portfolio with a typed MDX content layer, unit tests (Vitest), e2e tests (Playwright), and CI.

## Stack

- Next.js 15, TypeScript, Tailwind CSS
- MDX content via `gray-matter` for frontmatter parsing
- Vitest for unit tests, Playwright for e2e

## Structure

```
app/              Next.js App Router pages (home, projects, notes)
components/       Shared UI components
content/          MDX source files (projects/, notes/)
lib/content.ts    Typed content layer — reads and parses MDX frontmatter
```

## Local dev

```bash
npm install
npm run dev      # starts at http://localhost:3000
```

## Test

```bash
npm test         # Vitest unit tests
npm run test:e2e # Playwright e2e (requires built or running dev server)
```

## Deploy

Deployed on Vercel. Push to `main` triggers a production deploy.
