---
target: lecture page (2110506 SDS lecture 5)
total_score: 26
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 3
target_identity: "url:https://cedtan.tanakrit.dev/2110506-sds/lecture-5"
timestamp: 2026-09-05T06-00-29Z
slug: cedtan-tanakrit-dev-2110506-sds-lecture-5
---
Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Progress line works, but renders only at ≥1280px; the bulk-fold toggle gives no count and quietly under-delivers by one |
| 2 | Match System / Real World | 3 | `Copy Markdown`, `Open` and `On this page` sit untranslated at the head of an all-Thai row; the legend never says it is a legend |
| 3 | User Control and Freedom | 2 | Both reading tools exist only at y=0 of a 34,569px page. No back-to-top. Fold state and StepThrough index reset on reload |
| 4 | Consistency and Standards | 2 | `<Example added>` ships the KeyIdea amber; `<Quiz>` is the one unmarked block; `<Detail>` the one non-card; the framework header uses `backdrop-blur`, which DESIGN.md forbids by name |
| 5 | Error Prevention | 2 | `เปิดกล่องที่พับไว้ทั้งหมด` correctly skips all 3 quizzes but reaches 10 of 11 folds |
| 6 | Recognition Rather Than Recall | 3 | The legend shipped and works, but appears once at y=0 and one of its six hues is reused for a second meaning |
| 7 | Flexibility and Efficiency | 2 | No skip link — 14 Tab presses to the article, every page. No resume point for a 55-minute read |
| 8 | Aesthetic and Minimalist Design | 3 | Coherent and restrained; 98 identical cards over 34,569px is not minimal, and the mobile first screen is ~70% chrome |
| 9 | Error Recovery | 3 | 11 `<Pitfall>` blocks and the figure scroll hint are real recovery aids; nothing signals the unreachable fold |
| 10 | Help and Documentation | 3 | Source callout, credit line, `<Term>` glosses, legend all land; the 3 quizzes are never advertised |
| **Total** | | **26/40** | **Acceptable** |

Note: the previous run scored 23/36 with heuristic 5 marked n/a. It is scored this time, because the bulk-fold toggle created a real error-prevention surface. The two totals are 63.9% and 65% — not a like-for-like number.

## Design Specificity Verdict

**LLM assessment.** The content architecture is authored for this product with conviction. A block kit whose first-class type is `<Why>` — the problem before the definition — is a pedagogical system, not a documentation system. `ข้ามไปสรุป` and `เปิดกล่องที่พับไว้ทั้งหมด` only make sense for one named person: a student at 1 a.m. with an exam at 8. `<Example added>` with its `เสริม — ไม่ได้อยู่ในสไลด์` pill is an honesty device no other product needs. The 1.75 line-height is argued from Thai tone-mark stacking, not from taste.

The visual and interaction surface is not. Strip the Thai and what remains is stock Fumadocs: three-column shell, search chip, `Copy Markdown` / `Open`, "On this page", prev-page footer, blurred mobile header. The system's one strong visual idea — colour as a semantic mark — is throttled by the Glyph-Only Rule to a 16px icon, then diluted by volume: 98 identical 12px cards, one every 353px, longest unbroken run 9. "The Marked-Up Textbook" describes a page where marks stand out against quiet paper. There is no quiet paper left; the card is the paper.

**Verdict: a strongly authored content system inside a stock docs shell. The two buttons in the tools row do most of the product-specific work the interface does.**

**Deterministic scan.** `detect.mjs --json components app content` → `[]`, exit 0. Zero findings across 75 component files plus `app/`. One coverage gap matters: `.mdx` is not in the detector's `SCANNABLE_EXTENSIONS`, so passing `content/` scanned zero files — every lecture page's markup is outside its reach. The detector was proved alive, not silently no-op: a piped `font-family:Inter` + `box-shadow` div returned `1 anti-pattern found`.

**Visual overlays.** Not attempted — the target is a deployed URL and the run used direct browser measurement instead of script injection.

## Overall Impression

The last three passes fixed what they set out to fix, and the measurements confirm it: zero text-contrast failures across 2,057 nodes in both themes, zero target-size violations, zero horizontal overflow from 320 to 2560, zero console errors, one `h1` per page, no heading jumps, and the recap / legend / progress / scroll-hint additions all behave exactly as specified. That is a clean floor.

The ceiling is the figures. Two agents reached them from opposite directions — one by reading them, one by measuring them — and both found the same thing. 176 of 193 `<text>` nodes render under 11px, the smallest being 8.5px Thai. 20 of 27 stroke groups fall under the 3:1 non-text minimum. And 12,038px of the page — 35%, the hardest part — contains no figure at all. The single biggest opportunity is not another control; it is making the ten diagrams do the work the prose cannot.

## What's Working

**The legend teaches.** Six icon-and-label pairs, always visible, never folded, in the order the reader meets them. It is the precondition that makes a colour-coded system honest, and most products that colour-code never ship it. Measured at 825×16px on one line at 1440 and 343×40px on two at 390.

**Dark mode is an execution, not an inversion.** The card surface stays exactly one step off the page, hairlines stay visible, the five hues shift to their 400 step and hold identity, and four overridden Shiki tokens keep code readable. Worst text ratio in dark is 5.43:1, worst icon 5.43:1.

**`<Why>`-before-definition is enforced by the component kit, not by discipline.** A page physically cannot open a concept with a definition. Ten `<Why>` blocks on this page, each naming a problem a student actually has.

## Priority Issues

### [P0] Diagrams sit below the legibility floor, and the hardest 35% of the page has none

**What:** 176 of 193 `<text>` nodes across the ten figures render under 11px; the smallest is 8.5px Thai (`เก็บสถานะทั้งหมด`). The SVGs render at their natural 620px inside a 792px card, so scale is exactly 1.0 and ~170px of card width sits empty while labels run at half the 16px body size. Independently, stroke contrast fails on 20 of 27 groups in light and 18 of 27 in dark: `stroke-opacity: 0.30` measures 1.87:1, `0.40` measures 2.38:1, `0.45` measures 2.71:1, against the 3:1 of WCAG 1.4.11. And from y=9,626 to y=21,664 — 12,038px, roughly 20 minutes, all of ส่วนที่ 3 — there is not one figure, only kubectl commands, 24 tables and 39 code blocks.

**Why it matters:** the figures are the only thing that can carry a reader through the middle of a 55-minute page, and Thai at 8.5px loses its tone marks. The `✕` glyph fixed last pass was one instance of a class: about 70 more strokes are still under 3:1.

**Fix:** let the SVG fill its card (`width: 100%; height: auto; min-width: 560px` in `components/lecture/scroll-frame.tsx`), which buys 1.28× on desktop and keeps the mobile scroll behaviour. Raise the font floor in `components/figures/2110506-sds/*.tsx` from 8.5 to 11 viewBox units. Raise every shape-defining `stroke-opacity` to 0.5 or above. Then draw the two diagrams ส่วนที่ 3 does not have: the kubectl → apiserver → etcd path, and the manifest → object lifecycle.

**Suggested command:** `/impeccable layout`

### [P1] 55 of 239 tab stops are focusable but paint nothing

**What:** 53 `Copy Anchor Link` buttons — one per heading — compute to `opacity: 0` *while focused*, and two controls in the floating sidebar bar sit inside an `opacity: 0` parent. Screenshot crops before and after focus are byte-identical; the control case (`ข้ามไปสรุป`) differs by 614 bytes, so the method resolves real rings. That is 23% of tab stops at 1440 and 53 of 235 at 390. WCAG 2.4.7 Focus Visible, Level AA. The source is Fumadocs — `grep -rn "opacity-0" app components lib` returns nothing from project code.

**Why it matters:** this is the same class as the `--color-fd-ring` neutral-400 already caught and fixed, and it is worse: a ring at 16.44:1 on a control that paints no pixels is still an invisible focus. It compounds with the second half of the finding — there is no skip link anywhere in `app/`, so a keyboard reader spends 14 Tab presses crossing the sidebar on every page load, with 180 more focusables waiting.

**Fix:** force `opacity: 1` on those buttons under `:focus-visible` in `app/global.css`, and add a visually-hidden skip link to `#nd-page`.

**Suggested command:** `/impeccable polish`

### [P1] `<Example added>` ships the KeyIdea amber

**What:** `components/lecture/blocks.tsx:51` reads `accent={added ? 'text-amber-700 dark:text-amber-400' : 'text-emerald-700 dark:text-emerald-400'}`. Both icons resolve to the same amber in the live DOM, measured at 4.45:1 on the card surface. The legend directly above teaches amber = แนวคิดหลัก and emerald = ตัวอย่าง.

**Why it matters:** this breaks DESIGN.md's own Legend Rule ("Amber is always the key idea") and Named Mark Rule, in the one component whose entire job is honesty. A reader scanning by colour reads an added example as the sentence to remember.

**Fix:** keep emerald for every `<Example>`. The `เสริม — ไม่ได้อยู่ในสไลด์` pill already carries the distinction, and it carries it in words rather than in a hue the reader was taught to mean something else.

**Suggested command:** `/impeccable polish`

### [P1] Both reading tools vanish after the first screen

**What:** `ข้ามไปสรุป` and `เปิดกล่องที่พับไว้ทั้งหมด` live only in the `border-b` row at the top of `app/(lecture)/[...slug]/page.tsx`. Past y≈400 of 34,569 they are gone. The progress line has the opposite limit: it renders inside `#nd-toc`, which is `display: none` below 1280px, so it measures 0×0 at 1024, 768 and 390.

**Why it matters:** these controls exist for the scanner, and the scanner is the reader who scrolls furthest and therefore loses them soonest. A reader who decides at 60% that they want the recap must scroll 20,000px back up.

**Fix:** mirror both into the `tableOfContent.header` slot under the progress rule — that slot is already wired in `page.tsx` — and into the mobile TOC popover. Add a back-to-top in the same place.

**Suggested command:** `/impeccable layout`

### [P2] The bulk toggle says ทั้งหมด and reaches 10 of 11

**What:** `content/2110506-sds/lecture-5.mdx:628` places a `<Detail label="ดูผลลัพธ์ของการลบแล้วสร้างใหม่">` inside `<Step title="ลบทิ้ง">` (lines 620–644). Only 10 `details[data-fold]` exist in the DOM at load; clicking through the four StepThrough tabs gives `[10, 10, 10, 11]`. The toggle opens 10 and 0 quizzes — correct on quizzes, short by one on folds. `AGENTS.md` names this exact trap under "Rules that are easy to break by accident."

**Why it matters:** the label promises everything, find-in-page cannot reach that content at all, and this is precisely the failure the button was built to prevent.

**Fix:** move that one `<Detail>` out of the `<Step>` in the MDX.

**Suggested command:** `/impeccable clarify`

## Persona Red Flags

**The night-before-exam student (the product's own first-named persona).** `ข้ามไปสรุป` works and lands `#recap` at exactly 80px from the top. Then they are in a 1,370px card — four phone screens — holding seven topic groups written as `**bold**` paragraphs. None is a heading, so none is in the table of contents and none can be linked or jumped to. They wanted `กับดักที่เจอบ่อย` and must thumb past everything else. Then they want to self-test: three `<Quiz>` blocks exist at y=19,095, 24,058 and 32,154, and nothing on the page ever says so. The page ends on `‹ 4 · Microservices`, a back-link to the lecture they already finished.

**Sam (accessibility-dependent).** Fourteen Tab presses through the sidebar before the article, no bypass, then 53 tab stops that paint no focus ring at all. `<Term>` renders a dotted underline, `cursor: help` and a `title` attribute — unreachable by keyboard and by touch, and repeating verbatim the Thai gloss already printed two characters later. `<html lang="th">` carries heavy inline English with no `lang="en"`, so a Thai screen reader pronounces `kubectl`, `StatefulSet` and `livenessProbe` phonetically. Genuine credit: all ten figures carry `role="img"` with a full Thai `aria-label`, zero text-contrast failures, zero target-size failures, and reduced motion correctly strips the positional tween.

**Casey (distracted mobile).** The first 844px screen holds a three-line title, a description, a two-line meta, four buttons on two rows, a hairline and a six-item legend on two rows — and zero lecture content, which starts around y=605. Both mobile bars compute to `bg-fd-background/80` with `backdrop-filter: blur(8px)`, stacking to 97px of every subsequent screen, with body text visibly ghosting through as it scrolls. DESIGN.md's Flat-Forever Rule forbids `backdrop-filter` by name; the source is `node_modules/fumadocs-ui/dist/layouts/docs/slots/header.js`. The first figure they reach is cut at 55% with a note asking them to scroll it sideways.

**Jordan (first-timer).** Sees six coloured icon-and-label pairs with no heading above them and no way to tell whether they are filters, tags or buttons — the legend never says it is a legend. Ten screens later Jordan meets an amber flask, recalls "แนวคิดหลัก" from the legend, and mislabels an example the writer added as the sentence to remember.

## Minor Observations

- `<Quiz>` is the only block with no icon, no colour and no legend entry, marked solely by the browser's default `▶`. It is also correctly excluded from the bulk toggle, so a reader who opens everything may reasonably believe nothing is left closed.
- `<Detail>` is the only container in the system that is not a card: a bare 14px muted line between two cards. Eleven of them hold the reference material the exam-night reader wants, and they are the least visible elements on the page.
- The TOC scroller holds 1,880px in a 765px window with `scrollbar-width: none`. `สรุปท้ายคาบ` is item 55 at `offsetTop: 1830` — present as claimed, but invisible until you scroll a list with no scrollbar.
- The description paragraph is 18px muted grey while body is 16px near-black: the largest paragraph on the page is also the lowest-contrast.
- `ส่วนที่ 3 จาก 6` implies even parts. Part 3 is 8,856px, part 2 is 3,180px. The `%` beside it is what saves the counter.
- `<Compare>` panel borders measure 1.43:1–1.80:1, below 3:1 — but each panel also carries a coloured icon and bold title at ≥4.68:1, so the border is not the sole indicator. Not a violation.
- Under `prefers-reduced-motion: reduce`, 101 elements in `#nd-page` still carry a non-zero transition — identical count to normal mode. Almost all are `color` / `background-color` at 100–150ms, which is not motion; the exceptions are the step-panel opacity (deliberate) and 53 anchor-button opacity fades.
- Weight: 45 requests, 851 KiB encoded / 4,010 KiB decoded, 4,333 DOM nodes, TTFB 82ms, FCP 244ms, load 411ms. Nothing to fix.
- StepThrough height varies 173→269px across four steps. DESIGN.md argues this case and the argument holds at this size.

## Questions to Consider

1. If the Glyph-Only Rule means finding a 16px icon in a field of 98 identical cards, has the rule protected the marked-up-textbook metaphor or quietly spent it? What would the page look like if only `<KeyIdea>` and `<Pitfall>` got a card, and `<Why>`, `<Analogy>` and `<Callout>` were set as marked prose in the flow?
2. The Recap is where the primary persona starts and the only place they may ever read. It is the last 4% of the page, one card, seven unnavigable groups. Why has the product's most-used surface received the least design?
3. ส่วนที่ 3 runs 8,856px with no diagram, and the two tools built for the reader who gets lost there are reachable only from the top. Is the reading experience being designed for the student who reads straight through — the one PRODUCT.md lists third?
