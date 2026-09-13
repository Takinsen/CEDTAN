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

A better explanation of the same material, not a shorter copy of it. The words in italics
below (_narration_, _boundary marker_, _added material_, _inherited gap_, _image-carried
slide_) are defined in `CONTEXT.md`.

## Guardrails

The repo is public. Two things never enter it:

- Anything under `data/`. The decks are copyrighted.
- An image taken from a slide. Draw your own figure instead.

## Steps

A deck from a course that has no entry in `lib/courses.ts` needs the course listed first:
follow `docs/agents/courses.md`, then come back here.

1. Confirm the PDF is at `data/<COURSE-CODE>/Lecture-N.pdf`.
2. Read every page of the PDF. Try the Read tool first, at most 20 pages per call, so a
   60-page deck is three calls. On a machine without `poppler-utils` it fails to render —
   extract the text with `pdfjs-dist` instead, reading `{ data: new Uint8Array(buffer) }`.
   Done when every page number has been read.
3. Write a coverage list: every topic the page must contain. For an _image-carried slide_,
   write down the mechanism the picture shows, not the slide's title — its extracted text is
   too thin to remind you later. Keep the list visible while you write and tick items off.
4. Write `content/<course>/lecture-<n>.mdx`, to the quality bar below.
5. Draw each diagram you need. Read `docs/agents/figures.md` first.
6. Add the page to `"pages"` in `content/<course>/meta.json`, after its `.mdx` file exists.
   A missing file is dropped silently, so a typo in the name is invisible.
7. Run `pnpm check`. Done when it passes.
8. Build and serve with `pnpm build && PORT=3101 pnpm start`. `pnpm dev` runs out of memory
   on lecture pages. Read the page end to end. Done when all of these hold:
   - every section read in light mode and in dark mode
   - every figure's text readable in both
   - at a 400px-wide window, the page body has no sideways scroll
   - every coverage-list item ticked, and every name in a list found somewhere else on the page

When revising a page that already exists, extract every number, code span, quotation, English
token and URL before and after, and account for every difference. A reorganisation moves facts;
it never drops one.

## Quality bar

Every one of these is a blocker, not a preference.

- **Cover everything.** Every topic on the slides appears on the page, minor-looking ones
  included, with enough left of each to carry its meaning.
- **Reason before definition.** Open each concept with the problem it solves (`<Why>`), then
  say what it is.
- **Name a term when its problem arrives.** Tell one idea at a time: show the problem, then
  introduce the term that solves it, right there. A list of names up front, explained later,
  makes the reader memorise words that mean nothing yet. Mention a term only once the page
  has introduced it.
- **One concrete example per abstract idea.** Real input and real output, computed with a
  script or a tool rather than by hand. If the slides give no example, write one in
  `<Example added>`. Its badge already says `เสริม — ไม่ได้อยู่ในสไลด์`; inside the box, say
  what the slides left out.
- **Keep one running example.** Build later examples from material the reader has already seen
  on the page — the same message, the same table. When the real thing works on a different
  representation (bytes instead of letters), make the switch its own step, and show both
  sides of it.
- **Quote the deciding lines, fold the rest.** Show the lines of command output that prove the
  point and put the full output, or a long lookup table, in a `<Detail>`.
- **Assume no background.** If a term needs earlier knowledge, explain that first or link to
  the lecture that covers it.
- **Thai prose, English terms.** Explain in Thai. Keep standard technical terms in English.
  Wrap the first use of each term in `<Term en="..." th="..." />`.
- **Own the order.** Group sections by idea, and sequence them so each one is understandable
  from the ones before it. The deck's order is one candidate; follow it where it is already
  the best teaching order, as a decision. Walking the deck splits topics that belong together
  and copies its _inherited gaps_ — step 8's name check catches the second.
- **End with `<Recap>`.** Bullets a student can read the night before an exam. The table of
  contents links `สรุปท้ายคาบ` to `#recap` on every page, so without it that link is dead.

## Write about the subject

The reader cannot open the deck, so every sentence is about the material. Prose about the deck
is _narration_: rewrite `สไลด์หน้า 9 นิยาม X ไว้ว่า…` as `X คือ…`, and
`เปิดคาบมาด้วยรายชื่อภัยเก้าอย่าง` as `ภัยที่เจอบ่อยที่สุดมีเก้าอย่าง`. The source callout and
the `credit` field already say where the material came from.

- The test for each sentence: could someone who has never seen the deck have written it?
- The only sentences about the deck are the four kinds of _boundary marker_.
- Keep emphasis that carries meaning, and leave out how the slide looked (`ติดป้ายไว้ว่า Facts`,
  `ตัวใหญ่เต็มหน้า`).
- A heading names what the section teaches (`ภัยเก้าอย่างที่ต้องแยกให้ออก`), not what the slide
  held (`รู้จักกันครบไหม`).

When a page is done, grep for these. Each is usually the visible end of a narrating sentence,
and each hit needs a reason:
`สไลด์` `กำกับไว้` `เขียนกำกับ` `เปิดคาบมาด้วย` `เรียงแบบนี้` `อยู่ใต้หัวเรื่อง` `ใต้รายการ`
`ให้มาแค่` `ยกมาไว้` `ระบุไว้ว่า` `เขียนไว้เท่านั้น` `ตัวพิมพ์ใหญ่` `บรรทัดล่าง` `ทิ้งคำถามไว้`

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

The schema lives in `lib/source.ts`; a wrong type fails the build.

- `sidebarTitle` on every page. Full titles wrap over three lines in the sidebar. Use
  `N · Short topic` for a lecture and a plain Thai phrase for a course index page.
- `credit` tells a stranger this is a student's summary, not the real slides.
- `source` renders nowhere. It is a repo path for the next agent to find the PDF.
- `readingMinutes`: other pages run about 500–850 Thai characters per minute.

## Components

Registered globally, used with no import line.

| Component | Use it for |
| --- | --- |
| `<KeyIdea>` | The one sentence to remember. |
| `<Why>` | The problem the concept solves. Comes before the definition. |
| `<Analogy>` | Everyday comparison. |
| `<Example title="...">` | Concrete case with input and output. |
| `<Example added>` | Same, for an example the slides did not have. |
| `<Detail label="...">` | Folds away reference material: full command output, long tables. |
| `<Pitfall>` | A mistake people make here. |
| `<Term en="Coupling" th="..." />` | First use of an English term. |
| `<Figure number={1} caption="...">` | Wraps a diagram. |
| `<Compare><Wrong>…</Wrong><Right>…</Right></Compare>` | A real wrong-way / right-way pair. |
| `<StepThrough><Step title="...">…</Step></StepThrough>` | A process, one step at a time. |
| `<Quiz question="...">` | Self-check, answer hidden. |
| `<Recap>` | Bullet summary at the end. |

From Fumadocs: `<Callout>`, `<Card>`, `<Cards>`, `<Tabs>`/`<Tab>`,
`<Accordions>`/`<Accordion>`, `<Files>`/`<File>`/`<Folder>`, and fenced code blocks. For
numbered steps use `<StepThrough>`; Fumadocs `<Steps>` is unregistered because its `Step`
clashes.

## Page mechanics

- **Headings.** The page title is the `h1`. Use `##` for a part divider, `###` for a section,
  `####` for a subsection. Name a part divider `## ส่วนที่ N — หัวข้อ`; the progress line counts
  those and reads `ส่วนที่ 3 จาก 6`.
- **`<Compare>`** shows a red cross and a green check. Two quotes, two vendors, or two options
  of equal standing go in `<Callout>` blocks.
- **`<StepThrough>`.** Keep its steps close to the same length; the card resizes to the step
  picked. Put a `<Detail>` outside the step-through: inside a step it is only in the DOM while
  that step is selected, so `เปิดกล่องที่พับไว้ทั้งหมด` and find-in-page miss it.
- **Blockquote.** `>` prints its own opening quote mark, so start the line with the words.
- **Code blocks.** Keep them ASCII. Thai characters have a different width in monospace and
  break column alignment; put a table with Thai labels in a markdown table. Write `XOR` in
  code, and `⊕` only in prose.
- **Lint** with `eslint .`; `next lint` is gone in Next.js 16.
- **Code comments** are one line, saying what the block does.
