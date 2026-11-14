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
slide_, _main path_) are defined in `CONTEXT.md`.

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
7. Review with two fresh subagents defined in `.claude/agents/`. Confirm each finding against
   the deck, the tool, or the page before acting on it: a reviewer can be wrong. Done when every
   finding is fixed or rejected with a reason. Save each report to
   `~/.cache/cedtan-work/<course>/lecture-<n>/`, outside the repo since a report quotes the
   deck: the fixes often run in a later session. To revise from findings, follow
   `docs/agents/revising.md`.
   1. `page-fact-checker`: is the page true and complete? Fix what it finds.
   2. `page-editor`: does the page teach? Save a copy of the page outside the repo first, then
      fix what it finds.
   3. `page-fact-checker` again, passing that copy, so the edits dropped no fact.
8. Run `pnpm check`. Done when it passes.
9. Run `pnpm build`, then `PAGES="<course>/lecture-<n>" pnpm test:pages`: it checks both
   themes load without errors, the Recap holds its quizzes, and a 400px window has no sideways
   scroll, and it saves every figure in both themes to a folder it names. `pnpm dev` runs out of
   memory on lecture pages. Done when all of these hold:
   - `pnpm test:pages` passes
   - every saved figure's text readable in both themes
   - the page read end to end on `PORT=3101 pnpm start`, every coverage-list item ticked, and
     every name in a list found somewhere else on the page

When revising a page that already exists, follow `docs/agents/revising.md`.

## Quality bar

Every one of these is a blocker, not a preference. The research behind each rule, and where
it stops, is in `docs/research/writing-rules-evidence.md`; the evidence on shortening a page
without losing understanding is in `docs/research/concise-reading-evidence.md`.

- **Cover every topic, depth by weight.** Every topic on the slides appears on the page,
  minor-looking ones included, with enough left of each to carry its meaning. Depth follows
  what the topic carries: a detail that no later section and no likely exam question needs
  folds into a `<Detail>`, so the main path stays the main points.
- **Reason before definition.** Open each concept with the problem it solves (`<Why>`), then
  say what it is. Make the problem a concrete case the reader can picture — a message, an
  attack, a number — and let the general statement follow it.
- **Name a term when its problem arrives.** Tell one idea at a time: show the problem, then
  introduce the term that solves it, right there. A list of names up front, explained later,
  makes the reader memorise words that mean nothing yet. Mention a term only once the page
  has introduced it. A mechanism with several parts may open by naming each part with its job,
  before the section shows the parts working together: a name with its job is grounded, a
  bare name is not.
- **One concrete example per abstract idea.** Real input and real output, computed with a
  script or a tool rather than by hand. Slide material comes first: it is what the exam draws
  on, and every added line costs reading stamina. When the slides give no example, add one
  only if it shows behaviour the prose cannot, such as a surprising result, an error, or two
  ways that differ. The varied second case comes from a `<Compare>` or a `<Quiz>`; see
  `docs/adr/0004-one-example-varied-by-contrast.md`.
  - **Passes but runs long:** give its result in one prose sentence with the real numbers, and
    fold the full run into a `<Detail>`.
  - **Shows only syntax the prose already explains:** leave it out.
  - **Slides give code but no output:** put the deciding output lines under that code. Do not
    repeat the code in a new box.
  - **Added in `<Example added>`:** its badge already says `เสริม — ไม่ได้อยู่ในสไลด์`. Inside
    the box, say what the slides left out. The visible part holds at most 15 lines of code and
    output together, and at most 3 sentences of prose. Everything else goes in a `<Detail>`.
- **Keep one running example.** Build later examples from material the reader has already seen
  on the page — the same message, the same table. When the real thing works on a different
  representation (bytes instead of letters), make the switch its own step, and show both
  sides of it.
- **Quote the deciding lines, fold the rest.** Show the lines of command output that prove the
  point and put the full output, or a long lookup table, in a `<Detail>`.
- **Say it once.** Each point has one home on the page; a later section names it or links back
  instead of explaining it again. Cut words that carry no meaning. A cut never drops a fact: a
  sentence goes only when everything it carries is said elsewhere. `<KeyIdea>`, `<Recap>` and
  a `<Quiz>` answer repeat on purpose.
- **Assume no background.** If a term needs earlier knowledge, explain that first or link to
  the lecture that covers it.
- **Thai prose, English terms.** Explain in Thai. Write each term the way Thai CS students
  say it aloud: English for stack, pointer, return address, packet, session; Thai where Thai
  is the everyday word, such as ช่องโหว่ or หน่วยความจำ. Wrap the first use of each term in
  `<Term en="..." th="..." />`. `th` is its meaning in a few natural Thai words
  (`เขียนข้อมูลเกินขนาด buffer`), since the page prints it inline in brackets; the sentence
  around it does the defining. `scripts/content.test.mjs` fails the coined Thai names listed in `scripts/prose.mjs`.
- **Talk to the reader.** Address the reader as `คุณ` or `เรา` where it reads naturally, as
  `content/2110413-csy/lecture-3.mdx` does. Tell a mechanism that runs in steps as events with
  actors (ผู้โจมตีส่ง… เซิร์ฟเวอร์ตอบ…); explain the rest directly, since telling every paragraph
  as a story makes it longer.
- **One point per paragraph.** A paragraph makes one point in one to three sentences. A term
  that needs explaining gets its own sentence where the reader first needs it. Name only what
  the reader meets again or needs for the exam; describe the rest in plain words. Open each
  paragraph with its key words, and say how it follows from the one before (`เพราะ…`, `แต่…`,
  `ผลคือ…`): a reader with little background cannot guess the link between short paragraphs.
- **Own the order.** Group sections by idea, and sequence them so each one is understandable
  from the ones before it. The deck's order is one candidate; follow it where it is already
  the best teaching order, as a decision. Walking the deck splits topics that belong together
  and copies its _inherited gaps_ — step 9's name check catches the second.
- **End each part on its point.** Every `##` part ends with a `<KeyIdea>` or a `<Quiz>`, so a
  reader short of time can read those and the Recap and still keep the core. When
  `pnpm narration` reports a _main path_ over 40 minutes, offer the owner a split point.
- **End with `<Recap>`.** Bullets a student can read the night before an exam, then two or
  three `<Quiz>` blocks inside it that make the reader recall the page's main mechanisms:
  recalling an answer fixes it in memory, rereading a bullet barely does. The table of
  contents links `สรุปท้ายคาบ` to `#recap` on every page, so without it that link is dead.

## Teaching blocks

These blocks steer what the reader believes, so each has a shape. Every shape is a blocker.

- **`<Analogy>` maps, then marks its edge.** Say which everyday part stands for which real
  part, then end on the place the comparison stops holding: `อุปมานี้ใช้ไม่ได้ตรงที่…`. A reader
  carries an analogy past an unmarked edge, and a wrong analogy costs more than none. Take the
  everyday side from something a Thai student has done first-hand (a bank queue, a LINE group,
  a condo keycard): an analogy helps only a reader who knows its source well. The
  subject's own workflow (checking a download against its published hash) is an example, not
  an analogy: write it as prose or `<Example>`.
- **`<Pitfall>` refutes a belief.** Four moves, in order: the wrong belief as a student would
  say it; that it is wrong; why it looks right; what holds instead, with the mechanism that
  makes it so and the case that shows it. The mechanism does most of the correcting: a reader
  told only the right answer drifts back to the belief. A bare rule (`อย่าใช้ nonce ซ้ำ`) becomes a pitfall once it names the belief that breaks
  it (`nonce ไม่ใช่ความลับ ใช้ซ้ำก็ไม่เสียหาย`).
- **`<Quiz>` makes the reader use the section.** Its question gives a case the section has not
  shown — a new input, a new system, a choice between two options — so the answer comes from
  reasoning rather than from finding a sentence above. Place it right after the section it
  tests; every `##` part that teaches a mechanism has at least one. The answer gives the
  reasoning, then the result, then the wrong answer a student most likely gives and why it
  fails. The component already asks the reader to answer before opening, so the question
  holds only the case.
- **An added block earns its length.** A `<Pitfall>` refutes a belief the slides raise or an
  exam question is likely to test, and that no nearby `<Quiz>` already tests. An `<Analogy>`
  brings an image the prose does not already use. Delete a block that fails this rather than
  fold it: readers rarely open a fold, and a fold still pulls attention.
- **Predict before a surprising result.** When a student would guess an output wrong, ask for
  the guess on the line before it: `ลองทายก่อน: …`. Keep it for results that surprise; asking
  for the obvious is noise.

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

When a page is done, run `pnpm narration content/<course>/lecture-<n>.mdx`. It lists lines
holding words that usually end a narrating sentence; each hit is a boundary marker, named by
kind, or a rewrite. It then warns on paragraphs over 300 Thai characters, paragraphs with more
than two glosses, and a main path over 40 minutes: split the paragraph, or say why it stays.

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
- `part` only on a lecture split into parts (`docs/agents/revising.md`, "Splitting a page"):
  `lecture-8.mdx` sets `part: 1`, `lecture-8-2.mdx` sets `part: 2`, and both keep `lecture: 8`.
- `credit` tells a stranger this is a student's summary, not the real slides.
- `source` renders nowhere. It is a repo path for the next agent to find the PDF.
- `description` is the question the page answers, asked concretely enough that a student
  recognises it (`ทำไมพิมพ์ชื่อยาวเกินแค่ช่องเดียว โปรแกรมถึงถูกยึดได้`), not a list of topics.
  It renders under the title.
- `readingMinutes` is measured, not estimated: the _main path_'s Thai characters at 450 a
  minute plus its English words at 238 a minute, code blocks left out (`scripts/prose.mjs`).
  `scripts/content.test.mjs` prints the value when it is off; `pnpm measure` gives it per part.

## Components

Registered globally, used with no import line.

| Component | Use it for |
| --- | --- |
| `<KeyIdea>` | The one sentence to remember. |
| `<Why>` | The problem the concept solves. Comes before the definition. |
| `<Analogy>` | Everyday comparison, mapped, with its edge. |
| `<Example title="...">` | Concrete case with input and output. |
| `<Example added>` | Same, for an example the slides did not have. |
| `<Detail label="...">` | Folds away depth the main thread does not need: full command output, long tables. It prints `ลงลึก` before the label. |
| `<Pitfall>` | A wrong belief people hold here, refuted. |
| `<Term en="Coupling" th="..." />` | First use of an English term. |
| `<Figure number={1} caption="...">` | Wraps a diagram. |
| `<Compare><Wrong>…</Wrong><Right>…</Right></Compare>` | A real wrong-way / right-way pair. |
| `<StepThrough><Step title="...">…</Step></StepThrough>` | A process, one step at a time. |
| `<Quiz question="...">` | A new case to apply the section to, answer hidden. |
| `<Recap>` | Bullet summary at the end. |

From Fumadocs: `<Callout>`, `<Card>`, `<Cards>`, `<Tabs>`/`<Tab>`,
`<Accordions>`/`<Accordion>`, `<Files>`/`<File>`/`<Folder>`, and fenced code blocks. For
numbered steps use `<StepThrough>`; Fumadocs `<Steps>` is unregistered because its `Step`
clashes.

## Page mechanics

- **Headings.** The page title is the `h1`. Use `##` for a part divider, `###` for a section,
  `####` for a subsection. Name a part divider `## ส่วนที่ N — หัวข้อ`; the progress line counts
  those and reads `ส่วนที่ 3 จาก 6`. Open on the problem, not a list of the parts: the table
  of contents and the progress line already show them, and `scripts/content.test.mjs` fails a
  `คาบนี้จะพาไปไหน` section.
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
