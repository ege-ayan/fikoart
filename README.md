# Fikoart

The personal site of **Fikret Insel** (Fikoart): a 2D animator, illustrator, and visual artist working between Ankara and the United States.

Live site: [fikoart.com](https://fikoart.com)

The site presents a short biography, a selected portfolio of animation and illustration, and a CV. Content is available in English (default, no URL prefix) and Turkish (`/tr`).

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- [next-intl](https://next-intl.dev) for routing and copy
- Tailwind CSS v4
- Vitest

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Script              | Purpose                              |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Development server                   |
| `npm run build`     | Production build                     |
| `npm start`         | Serve the production build           |
| `npm run lint`      | ESLint                               |
| `npm run format`    | Prettier (write)                     |
| `npm run typecheck` | TypeScript                           |
| `npm test`          | Unit tests                           |
| `npm run ci`        | Lint, format check, types, and tests |

## Content

Editorial data lives in TypeScript, not a CMS:

| File                                    | Contents                          |
| --------------------------------------- | --------------------------------- |
| `src/content/site.ts`                   | Name, role, contact, social links |
| `src/content/works.ts`                  | Portfolio catalog and copy        |
| `src/content/resume.ts`                 | CV sections, skills, software     |
| `messages/en.json` / `messages/tr.json` | UI strings                        |
| `public/works/`                         | Artwork files                     |
| `public/videos/`                        | Optimized MP4s and posters        |
| `public/cv/`                            | Downloadable resume PDF           |

## Routes

| Path           | Page                |
| -------------- | ------------------- |
| `/`            | About               |
| `/animation`   | Animation films     |
| `/portfolio`   | All selected works  |
| `/cv`          | CV                  |
| `/work/[slug]` | Work detail         |
| `/tr`, `/tr/…` | Turkish equivalents |

`/illustration` redirects to `/portfolio`. `/resume` redirects to `/cv`.

## Deployment

The production host is `https://fikoart.com`. Set `site.socials.website` in `src/content/site.ts` if the canonical origin changes. HTTPS security headers are applied only when the request is already TLS-terminated (`x-forwarded-proto: https`), so local `npm start` stays on HTTP.
