# Revising a page

How to change a lecture page that already exists, from reviewer findings or a new rule. Read
this before editing a page under `content/` that is already in `meta.json`.

## Before the first edit

Copy the page to `~/.cache/cedtan-work/<course>/lecture-<n>/`, where the reviewers' reports
are saved too. Every later check compares against that copy, and `page-fact-checker` takes it as
the earlier version.

## Steps

1. **Confirm each finding** against the deck, the tool, or the page. A reviewer works without
   the deck or from memory, so some findings are wrong. Done when each one is marked fix or
   reject, with a one-line reason for each reject.
2. **Fix in this order:** wrong or self-contradicting statements; then `order`, `why`, `term`,
   `unexplained`, `unclear`, `crammed`, `coined` and `link`; then folds; then analogies; then
   the Recap quizzes. An `order` fix that moves text also fixes every pointer to it
   (`หัวข้อถัดไป`, `ด้านล่าง`, `ส่วนที่ N`, a section name, a link).
3. **Settle every claim you add** by opening its source: the deck, a man page, the upstream
   doc, or a run in a temp folder outside the repo. Memory is not a source: in the CSY 8–13
   revision, six claims the reviser called settled were wrong, among them "only netcat
   traditional has `-e`" and "a browser cannot turn the console off". A claim you cannot settle
   stays off the page.
4. **Keep the deck's wording once.** When a fix replaces a deck metaphor or term (the deck's
   envelope for a packet header), keep the deck's word in one sentence beside the new one. An
   exam question can key on it.
5. **Keep added material marked.** A case the deck does not carry sits in `<Example added>` or
   a callout titled `เสริม — …` (CONTEXT.md, _added material_). Turning an `<Example added>`
   into a bare `<Detail>` drops its badge; a folded one takes a label starting `เสริม — `.
6. **Paste output from a real run.** Never re-align or trim an output line by hand; say in one
   line what was cut.
7. **Account for every difference**: extract every number, code span, quotation, English token
   and URL from the saved copy and from the page, and give a reason for each one that is gone.
   A reorganisation moves facts; it never drops one.
8. **Measure the main path before and after**: `pnpm measure <saved copy> <page>` prints both,
   part by part (CONTEXT.md, _main path_). Set `readingMinutes` to the value
   `scripts/content.test.mjs` prints. Folding shortens it and every added explanation
   lengthens it: in the CSY 8–13 revision the two cancelled out. A part that grew names the
   addition that grew it. A `split` finding from `page-editor` goes to the owner with the
   minutes of each side; folding further does not replace it.
9. Run AGENTS.md step 7.3: `page-fact-checker` with the saved copy.

## Splitting a page

A page splits at a natural seam, which `page-editor` reports as a `split` finding and the owner
approves: a `##` boundary after which the rest answers a question of its own, opens on its own
problem, and needs from what came before only what a three-sentence bridge carries. No minute
count decides it; research gives no ideal length (`docs/research/concise-reading-evidence.md`,
section 8). Splitting saves no reading time; it makes each sitting shorter and spaces the two.

- Part 1 keeps `lecture-<n>.mdx`, so links to it still work; part 2 is `lecture-<n>-2.mdx`.
  Both set `lecture: <n>` and `part: 1` or `part: 2`; titles read `Lecture <n>.1 — …` and
  sidebar titles `<n>.1 · …`. `scripts/content.test.mjs` checks the numbers match the files.
- Each half is a whole lesson: its own opening problem, its own `description`, its own
  `<Recap>` with 2–3 quizzes. Part 2 opens with a bridge of at most three sentences that links
  to part 1.
- Part 2 numbers its `ส่วนที่` and figures from 1 and imports only its figures. A term part 1
  introduced gets a one-clause reminder with a link at its first use in part 2.
- Fix every pointer the split breaks, on the page and in links from other pages
  (`/<course>/lecture-<n>#…`). Add the new file to `meta.json` after part 1.

## Several pages at once

One worker per page, each touching only its page, its figures and its own log. Workers measure
with `pnpm measure`, not scripts of their own. The parent
owns `scripts/content.test.mjs` (the `RECAP_QUIZ_PENDING` list) and runs the one build, since
parallel builds run out of memory. A page with more than about 50 findings costs a worker
twice the usual tokens; split its findings between two workers by part.
