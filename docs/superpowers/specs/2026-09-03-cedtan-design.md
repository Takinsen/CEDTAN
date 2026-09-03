# CEDTAN — Design

Date: 2026-09-03
Status: Approved

## Goal

A website that turns lecture slides into summaries a student can actually learn from.

One page per lecture. Complete coverage of the slides. Written so a reader with no
background can follow it: reason first, then concept, then a concrete example, then a picture.

Explanations are in Thai. Technical terms stay in English.

## Non-goals

- No AI generation at build time or runtime. An agent writes the content by hand.
- No user accounts, comments, or progress tracking.
- No CMS. Content lives in the repo as MDX.
- No PDF viewer on the site. Slides are source material, not published files.

## Stack

| Part | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 16 (App Router) | Required. Deploys to Vercel with no config. |
| Docs layer | Fumadocs (`fumadocs-ui`, `fumadocs-mdx`) | Gives sidebar tree, TOC, static search, typed frontmatter, and Shiki highlighting for free. Custom React components still drop into MDX. |
| Styling | Tailwind CSS v4 | Fumadocs ships a v4 preset. |
| Animation | `motion` | Successor to framer-motion. Used only where movement explains something. |
| Package manager | pnpm | User standard. |
| Hosting | Vercel | Required. |

Rejected: plain `@next/mdx` (would mean hand-building sidebar, TOC, search, and frontmatter
typing — work that adds nothing to content quality). Nextra 4 (less room to customize).

## URL structure

```
/                          landing, lists every course
/2110506-sds               course page: overview, how it is graded, lecture list
/2110506-sds/lecture-1     lecture summary
```

`app/page.tsx` is a plain landing page. `app/[...slug]/page.tsx` is the Fumadocs catch-all.
The sidebar only appears inside a course route.

## Content model

Content directory mirrors `data/`, lowercased.

```
content/
  2110506-sds/
    meta.json        title, description, page order
    index.mdx        course overview
    lecture-1.mdx
    lecture-2.mdx
```

`meta.json` controls sidebar order. Without it, Fumadocs sorts alphabetically, which puts
`lecture-10` before `lecture-2`.

### Frontmatter

Defined in `source.config.ts` as a Zod schema on top of Fumadocs' `frontmatterSchema`.

```yaml
title: "Lecture 1 — Introduction to Software Design"
description: "One sentence on what this lecture answers."
lecture: 1
source: "data/2110506-SDS/Lecture-1.pdf"
readingMinutes: 25
```

`lecture` is optional so `index.mdx` can skip it. A bad frontmatter fails `pnpm build`.

## Source PDFs

`data/` holds the raw slides. It is git-ignored.

Two reasons. It is 48 MB today and grows with every course. `Textbook.pdf` is copyrighted
and must not be published.

`data/.gitkeep` keeps the folder. README explains where to put files.

## Component kit

Lives in `components/lecture/`. Registered globally through `components/mdx.tsx` so MDX files
use them without importing.

| Component | Purpose |
| --- | --- |
| `<KeyIdea>` | The one sentence a reader must remember. |
| `<Why>` | The problem this concept exists to solve. Comes before the definition. |
| `<Analogy>` | Everyday comparison for a reader with no background. |
| `<Example>` | Concrete case with clear input and output. |
| `<Figure>` | Wraps an SVG with a caption and figure number. |
| `<StepThrough>` | Click through a process one step at a time. Uses `motion`. |
| `<Compare>` | Side by side "wrong way vs right way". |
| `<Pitfall>` | A mistake people make here. |
| `<Term>` | English technical term with a Thai gloss on hover. |
| `<Quiz>` | Self-check question with a hidden answer. |
| `<Recap>` | Bullet summary at the end of a lecture. |

From Fumadocs, already available: `Callout`, `Tabs`, `Steps`, `Accordion`, `Files`, code blocks.

### Diagrams

Hand-written inline SVG, one file per diagram, at `components/figures/<course>/<name>.tsx`.

Colors come from CSS variables, so light and dark mode work without a second asset.
No images extracted from the slides — those cannot be re-themed and carry the lecturer's
copyright.

### Typography

`IBM Plex Sans Thai` for body, `IBM Plex Mono` for code, both via `next/font/google`.

Body `line-height` is raised to about 1.85. Thai vowels and tone marks sit above and below
the line and collide at the default prose value.

## Authoring workflow

1. Put the PDF at `data/<COURSE-CODE>/Lecture-N.pdf`.
2. Read every page of the PDF. The Read tool takes at most 20 pages per call.
3. Write a coverage list: every topic on the slides that the summary must contain.
4. Write `content/<course>/lecture-n.mdx`.
5. Draw any SVG needed into `components/figures/<course>/`.
6. Run `pnpm check`.

### Quality bar

- Cover every topic on the slides. Do not skip. Do not compress until meaning is lost.
- Answer "why does this exist" before "what is it".
- Every abstract idea gets at least one `<Example>`.
- Explain in Thai. Keep technical terms in English. Wrap the first use in `<Term>`.
- End with `<Recap>`.

This list is repeated in AGENTS.md, which is the file an agent reads.

## Files to create

```
README.md              what it is, setup, structure, deploy
AGENTS.md              authoring contract and component reference
.gitignore             data/ .source/ .next/ node_modules/
source.config.ts       frontmatter schema and MDX options
lib/source.ts          content loader
lib/layout.shared.tsx  shared nav options
app/layout.tsx         root layout, fonts, RootProvider
app/page.tsx           landing
app/[...slug]/page.tsx lecture and course pages
app/[...slug]/layout.tsx
app/api/search/route.ts
components/mdx.tsx     global MDX component map
components/lecture/*   component kit
components/figures/*   diagrams
content/2110506-sds/   first course
```

## Verification

`pnpm check` runs `tsc --noEmit`, `eslint .`, and `next build`.

`next lint` was removed in Next.js 16. Linting uses the ESLint CLI with `eslint-config-next`.

Build is the real test. Bad frontmatter, a broken MDX import, or a missing component all
fail it. No unit tests — there is no logic to test, only content and presentation.

## Deploy

Vercel, Next.js preset, `pnpm build`. No environment variables.

Search is static Orama served from `app/api/search/route.ts` via `createFromSource`. No
external search service.

## Open items

- Second course `2110413-CSY` has no PDFs yet. Structure supports it; content waits.
- Course code slugs (`2110506-sds`) are verbose but searchable. Easy to change later since
  the URL comes from the folder name.
