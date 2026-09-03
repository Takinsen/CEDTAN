<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

How to add a lecture summary to CEDTAN.

## The job

Turn one PDF of lecture slides into one MDX page that a student can read instead of the
slides — and understand better than the slides.

Not a shorter version of the slides. A better explanation of the same material.

## Steps

1. Confirm the PDF is at `data/<COURSE-CODE>/Lecture-N.pdf`.
2. Read every page of the PDF. The Read tool takes at most 20 pages per call, so a 60-page
   deck is three calls. Do not skim, and do not stop at the first call.
3. Write a coverage list before writing any prose: every topic on the slides that the page
   must contain. Keep it visible while you write and tick items off.
4. Write `content/<course>/lecture-<n>.mdx`.
5. Draw any diagram you need into `components/figures/<course>/<name>.tsx` and use it inside
   `<Figure>`.
6. Add the page to `"pages"` in `content/<course>/meta.json`.
7. Run `pnpm check`. It must pass.
8. Open the page in a browser and read it end to end in both light and dark mode.

## Quality bar

Every one of these is a blocker, not a preference.

- **Cover everything.** Every topic on the slides appears on the page. Do not skip a slide
  because it looks minor. Do not compress until the meaning is gone.
- **Reason before definition.** Open each concept with the problem it solves (`<Why>`), then
  say what it is. A definition with no motivation is the thing the slides already do badly.
- **One concrete example per abstract idea.** At least one `<Example>` with real input and
  real output. No example means the idea is not explained yet.
- **Assume no background.** If a term needs earlier knowledge, explain that first or link to
  the lecture that covers it.
- **Thai prose, English terms.** Explain in Thai. Keep standard technical terms in English.
  Wrap the first use of each term in `<Term en="..." th="..." />`.
- **End with `<Recap>`.** Bullets a student can read the night before an exam.

## Frontmatter

```yaml
---
title: "Lecture 1 — Introduction to Software Design"
description: "หนึ่งประโยคว่าคาบนี้ตอบคำถามอะไร?"
lecture: 1
source: "data/2110506-SDS/Lecture-1.pdf"
readingMinutes: 25
---
```

`title` and `description` are required. The rest are optional. A wrong type fails the build.

## Components

Registered globally. Use them in MDX with no import line.

| Component | Use it for |
| --- | --- |
| `<KeyIdea>` | The one sentence to remember. |
| `<Why>` | The problem the concept solves. Comes before the definition. |
| `<Analogy>` | Everyday comparison. |
| `<Example title="...">` | Concrete case with input and output. |
| `<Pitfall>` | A mistake people make here. |
| `<Term en="Coupling" th="..." />` | First use of an English term. |
| `<Figure number={1} caption="...">` | Wraps a diagram. |
| `<Compare><Wrong>…</Wrong><Right>…</Right></Compare>` | Wrong way vs right way. |
| `<StepThrough><Step title="...">…</Step></StepThrough>` | A process, one step at a time. |
| `<Quiz question="...">` | Self-check, answer hidden. |
| `<Recap>` | Bullet summary at the end. |

From Fumadocs, also available: `<Callout>`, `<Tabs>`, `<Steps>`, `<Accordion>`, `<Files>`,
and fenced code blocks with syntax highlighting.

## Diagrams

Hand-written inline SVG in `components/figures/<course>/`. One file per diagram.

Use `stroke="currentColor"` and `fill="currentColor"`, or a Fumadocs theme variable. Never a
hard-coded hex. A hard-coded color disappears in one of the two themes.

Never extract an image from the slides. It cannot be re-themed and it is the lecturer's work.

## Rules that are easy to break by accident

- Never commit anything under `data/`.
- Never add a page to `meta.json` before its `.mdx` file exists — a missing file is dropped
  silently, so the typo is invisible.
- `next lint` does not exist in Next.js 16. Lint with `eslint .`.
- Comments in code: one line, saying what the block does.
