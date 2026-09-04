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
2. Read every page of the PDF. Try the Read tool first, at most 20 pages per call, so a
   60-page deck is three calls. It may fail to render on a machine without `poppler-utils`
   installed — if so, extract the text with `pdfjs-dist` instead. Do not skim, and do not
   stop at the first call or the first page of extracted text.
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
  real output. No example means the idea is not explained yet. If the slides give you no
  example, write one and mark it `<Example added>` so nobody mistakes it for the lecturer's.
- **Quote the deciding lines, fold the rest.** Never paste a whole screen of command output.
  Show the lines that prove the point, and put the full output in a `<Detail>`. Same for a
  long lookup table. This is how a page stays short without dropping a topic.
- **Assume no background.** If a term needs earlier knowledge, explain that first or link to
  the lecture that covers it.
- **Thai prose, English terms.** Explain in Thai. Keep standard technical terms in English.
  Wrap the first use of each term in `<Term en="..." th="..." />`.
- **End with `<Recap>`.** Bullets a student can read the night before an exam.

## Frontmatter

```yaml
---
title: "Lecture 1 — Introduction to Software-Defined Systems"
description: "หนึ่งประโยคว่าคาบนี้ตอบคำถามอะไร?"
sidebarTitle: "1 · Software-Defined Systems"
lecture: 1
source: "data/2110506-SDS/Lecture-1.pdf"
credit: "เรียบเรียงจากสไลด์ Lecture 1 ของ รศ.ดร.วีระ เหมืองสิน"
readingMinutes: 25
---
```

`title` and `description` are required. The rest are optional. A wrong type fails the build.

`sidebarTitle` is the short label shown in the sidebar and on the landing page. Full titles
wrap over three lines there and the list stops being scannable, so give every page one.
Use `N · Short topic` for a lecture, and a plain Thai phrase for a course index page.

`lecture`, `readingMinutes`, and `credit` render as one line under the description, joined by
`·`. Write `credit` so a stranger can tell this is a student's summary, not the real slides.

`source` is the only field nothing renders. It stays a repo path, for the next agent to find
the PDF.

## Components

The kit below is registered globally. Use it in MDX with no import line.

| Component | Use it for |
| --- | --- |
| `<KeyIdea>` | The one sentence to remember. |
| `<Why>` | The problem the concept solves. Comes before the definition. |
| `<Analogy>` | Everyday comparison. |
| `<Example title="...">` | Concrete case with input and output. |
| `<Example added>` | Same, but for an example you wrote because the slides had none. |
| `<Detail label="...">` | Folds away reference material: full command output, long tables. |
| `<Pitfall>` | A mistake people make here. |
| `<Term en="Coupling" th="..." />` | First use of an English term. |
| `<Figure number={1} caption="...">` | Wraps a diagram. |
| `<Compare><Wrong>…</Wrong><Right>…</Right></Compare>` | Wrong way vs right way. |
| `<StepThrough><Step title="...">…</Step></StepThrough>` | A process, one step at a time. |
| `<Quiz question="...">` | Self-check, answer hidden. |
| `<Recap>` | Bullet summary at the end. |

From Fumadocs, also available: `<Callout>`, `<Card>`, `<Cards>`, `<Tabs>`/`<Tab>`,
`<Accordions>`/`<Accordion>`, `<Files>`/`<File>`/`<Folder>`, and fenced code blocks with
syntax highlighting. `<Steps>`/`<Step>` is not registered — its `Step` clashes with
`StepThrough`'s.

## Diagrams

Hand-written inline SVG in `components/figures/<course>/`. One file per diagram.

Figures are not registered globally. Import each one in the MDX file that uses it:

```mdx
import { LayeredStack } from '@/components/figures/2110506-sds/layered-stack';

<Figure number={1} caption="...">
  <LayeredStack />
</Figure>
```

Use `stroke="currentColor"` and `fill="currentColor"`, or a Fumadocs theme variable. Never a
hard-coded hex. A hard-coded color disappears in one of the two themes.

Never extract an image from the slides. It cannot be re-themed and it is the lecturer's work.

## Rules that are easy to break by accident

- Never commit anything under `data/`.
- Never add a page to `meta.json` before its `.mdx` file exists — a missing file is dropped
  silently, so the typo is invisible.
- `next lint` does not exist in Next.js 16. Lint with `eslint .`.
- The page title is already an `h1`. Start MDX headings at `##` — a `#` gives the page a
  second `h1` and breaks the document outline. Use `##` for a part divider, `###` for a
  section, `####` for a subsection.
- Comments in code: one line, saying what the block does.
