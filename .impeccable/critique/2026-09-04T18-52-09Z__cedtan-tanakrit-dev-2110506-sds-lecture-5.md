---
target: lecture page (2110506 SDS lecture 5)
total_score: 23
max_score: 36
na_heuristics: 5
p0_count: 1
p1_count: 2
target_identity: "url:https://cedtan.tanakrit.dev/2110506-sds/lecture-5"
timestamp: 2026-09-04T18-52-09Z
slug: cedtan-tanakrit-dev-2110506-sds-lecture-5
---
Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | 34,509px / 55-minute page, no desktop progress indicator. Mobile has a ring in the TOC bar. |
| 2 | Match System / Real World | 4 | Strongest. Slide-number citations in prose, `เลกเชอร์ 5 · อ่าน 55 นาที · เรียบเรียงจาก...`, `ลองตอบดู:`. |
| 3 | User Control and Freedom | 2 | No back-to-top, no jump-to-Recap. Fold state and StepThrough index reset on reload. |
| 4 | Consistency and Standards | 3 | Rigorous: one card, one radius, five fixed-meaning hues. Slip: English `Copy Markdown` / `Open` in Thai chrome. |
| 5 | Error Prevention | n/a | Read-only surface. No data entry, no destructive action. |
| 6 | Recognition Rather Than Recall | 2 | DESIGN.md assumes "learn the five marks once" — the site never teaches them. 13 `<Term>` glosses, no glossary. |
| 7 | Flexibility and Efficiency | 2 | Ctrl+K and Copy Markdown are wins. 53 unfiltered TOC entries, no expand-all. |
| 8 | Aesthetic and Minimalist | 3 | On its anti-references. Cost: after 10,000px sixty identical cards read as one grey run. |
| 9 | Error Recovery | 2 | The "ถ้าอ่านแล้วงงกลางทาง" warn callout is excellent — and fires once, then nothing for 34,000px. |
| 10 | Help and Documentation | 3 | Provenance on every page. Nothing explains what the coloured blocks mean. |
| **Total** | | **23 / 36** | **Acceptable (64%)** |

Heuristic 5 scored n/a (read-only surface); applicable maximum 36.

## Design Specificity Verdict

**Authored-for-this-product at the block layer, category-interchangeable at the shell layer — and the shell is where PRODUCT.md's first persona breaks.**

The content components are unmistakably this product: six Thai-labelled block types, an `เสริม — ไม่ได้อยู่ในสไลด์` badge, slide-number citations inline in prose, a `credit` line naming the real lecturer, `<Term en th>` keeping the English word the exam uses, 44 hand-drawn `currentColor` SVGs, 16/28 body because Thai stacks tone marks.

The shell is stock Fumadocs, and it produces this: `<Recap>` sits at 33,017px of 34,509px and cannot enter the TOC at all, because it is a React component and the TOC is built from headings. PRODUCT.md names the primary reader as "the night before an exam, jumping straight to `<Recap>` and the folded transcripts". Neither has a UI path.

**Deterministic scan:** `detect.mjs --json app components` over 65 files → exit 0, zero findings. No ignore config suppressing anything.

**Visual overlays:** injection failed. `document.title` and an inline `<script>` both succeeded, but `<script src="http://localhost:...">` was blocked as mixed content (HTTPS page). No CSP header present. No user-visible overlay rendered; all evidence is `page.evaluate` measurement.

## Overall Impression

The content wins, the shell loses. The design system is genuinely enforced in the shipped build — detector clean, 1,992 of 1,993 text nodes pass contrast in both themes, zero non-inline target-size failures, no skipped heading levels, no console errors, sidebar 268px at every width from 390 to 2560.

The biggest opportunity is not more polish. It is that the page is built for a linear reader while PRODUCT.md says the primary reader is a scanner.

## What's Working

**The provenance system is the real differentiator.** Slide-number citations in prose, `credit` surfaced in the meta line, the added-example badge, the "ข้อมูลในหน้านี้มาจากไหน" callout, the landing disclaimer. It solves the exact anxiety of using a stranger's summary before an exam: how far to trust this page, and which slide to fall back to.

**Progressive disclosure that shortens the page without dropping a topic.** 13 `<Detail>` folds hold the long kubectl tables and terminal output; a 71-slide deck fits one page complete.

**Typography and theming discipline, verified in the build.** Body 16/28, all 44 figures carry a Thai `aria-label` and draw in `currentColor`, console clean on all three routes.

## Priority Issues

### [P0] `<Recap>` and the folds have no path

**What:** Recap is at 96% depth and structurally cannot enter the 53-entry TOC — it is a component, not a heading. The 13 `<Detail>` folds are indexed nowhere and Ctrl+F cannot reach folded content.

**Why it matters:** PRODUCT.md's first-named persona is defined by exactly these two elements. Their session is End plus scroll-hunting.

**Fix:** give `<Recap>` `id="recap"` and pin `สรุปท้ายคาบ` as a permanent final TOC entry; add a `ข้ามไปสรุป` control beside `Copy Markdown`; add an `เปิดทุกกล่องที่พับไว้` toggle at the top so Ctrl+F reaches folded content.

**Suggested command:** `/impeccable shape`

### [P1] No legend for the five marks

**What:** DESIGN.md's Legend Rule rests on "learn the five marks once and you can skim any page". The site never teaches them.

**Why it matters:** a first-timer reads six identically-framed cards at equal weight, which destroys the skim the system was built for.

**Fix:** one row under the meta line on every lecture page — six icon + Thai-label chips, ~40px tall.

**Suggested command:** `/impeccable onboard`

### [P1] No landmark or progress on desktop across 34,509px

**What:** mobile has a progress ring in the sticky TOC bar; desktop has only the TOC highlight.

**Why it matters:** this is the whole 8,000–30,000px valley. A reader who cannot see "part 3 of 5, 60% done" has no reason to continue and cannot plan a study session.

**Fix:** mirror the mobile ring as a 2px progress rule on the content column; give each `ส่วนที่ N` divider a `3 / 5` chip.

**Suggested command:** `/impeccable layout`

### [P2] Focus ring at 2.31:1 on five chrome controls, light theme only

**What:** 10 of 15 tabbed elements use the browser outline at 9.32–16.85:1 and pass comfortably. Five use a Tailwind `box-shadow` ring `rgb(163,163,163)` measuring **2.31:1** against the required 3:1 (WCAG 1.4.11): Collapse Sidebar (x2), GitHub, Open Search, Copy Markdown. Dark theme measures 5.23:1 and passes.

**Why it matters:** PRODUCT.md commits to keyboard-only operation on long pages.

Downgraded from Assessment A's P1: A judged it to affect every button, step pill and summary; measurement shows five chrome controls in one theme, with a visible-but-under-contrast ring rather than none.

**Fix:** ring in `--color-fd-primary` at 2px with 2px offset; verify both themes.

**Suggested command:** `/impeccable polish`

### [P2] Mobile figures cut with no scroll affordance; one 2.71:1 glyph

**What:** at 390px the diagram is sliced mid-box inside `<Figure>`'s `overflow-x-auto` with no fade, scrollbar or hint. Separately, the only contrast failure on the whole site is the `✕` glyph in `components/figures/2110506-sds/self-healing.tsx:38-46` at `fontSize="9"` and `opacity 0.45` — 2.71:1 light, 3.44:1 dark.

**Why it matters:** the reader takes a cut figure for a broken image and skips the diagram the section depends on.

**Fix:** edge mask on the scroll container plus a `เลื่อนดูรูปได้ →` hint that hides after first scroll; raise the glyph to opacity 0.7 or draw it as a stroke.

**Suggested command:** `/impeccable adapt`

## Persona Red Flags

**Jordan (first-timer from a shared link).** No legend, so the amber Lightbulb, grey Info and violet Repeat on the first three cards mean nothing. `Copy Markdown` and `Open` are English buttons in all-Thai chrome. `<Term>`'s dotted underline plus `cursor: help` looks like a link, is not one, and its `title` only repeats the gloss already printed in parentheses.

**Sam (accessibility-dependent).** The 2.31:1 focus ring on five chrome controls. `<Term>`'s `title` is unreachable by keyboard and touch. Figure text at `fontSize={9}` and `{11}` — unreadable Thai with stacked tone marks, and it does not respond to browser text scaling. Genuine credit: all 44 figures carry `aria-label`, body is 16/28, zero non-inline target-size failures, reduced motion correctly keeps only the opacity crossfade.

**Casey (distracted mobile).** The cut figure at 390px with no hint. The mobile TOC bar shows only the current heading, so re-orienting costs a tap plus a scan of 53 entries. Backgrounding the browser loses every open `<Detail>` and resets `<StepThrough>` to step 1.

**The night-before-exam skimmer (PRODUCT.md's first-named case).** Fails on both elements that define the persona. Recap at 33,017px and absent from the TOC; the folds unindexed and styled as the quietest thing on the page. No compressed mode, no Recap-first entry, no keyboard route.

## Minor Observations

- StepThrough step 3 grows the card by ~100px (measured bodies 99/129/195/145px) and pushes content down; set a `min-height` from the tallest step.
- StepThrough carries no label saying what it is and no `ถัดไป` button.
- `<Recap>` is the only block using `text-fd-primary` rather than a legend hue; DESIGN.md lists it but assigns no colour.
- Figure captions are centred while every other run is left-aligned.
- `/2110506-sds` is a syllabus page, not a hub — no lecture list except in the sidebar.
- The landing page never says how many lectures the course has, so a reader cannot tell whether 5 is complete.
- At 1920+ there is a 235px gap between the sidebar's right edge (268) and the content column's left edge (503), from clamping to 900px and centring. Intended, but worth knowing.
- Body renders at 90% alpha (a Fumadocs default), not the full-weight ink DESIGN.md specifies. Still ~14:1, so a documentation-accuracy issue rather than a reading one.

## Questions to Consider

1. If the exam skimmer is the first persona, why is the page built for a linear reader? What would it look like if it opened at the Recap and expanded upward into detail on demand?
2. The Same Card Rule says every block is the same card. When sixty identical cards make the amber "remember this" mark invisible, is the rule serving the reader or the system's own tidiness?
3. 55 minutes is more than most students will give. Should this ship a declared 8-minute mode — KeyIdea, Pitfall, Recap only — as a real toggle?
4. "The content is the interface. Chrome earns its space or it goes." A 34,509px page with no progress indicator is not less chrome, it is less information. Which principle wins?
5. Every figure carries a Thai `aria-label`, and every figure sets its text at 9–11px. Who is the 9px for?
