---
name: CEDTAN
description: Lecture summaries a student reads instead of the slides, in Thai with English terms
colors:
  page: "#f5f5f5"
  surface: "#f1f1f1"
  ink: "#0a0a0a"
  ink-muted: "#666666"
  hairline: "rgba(203, 203, 203, 0.5)"
  key-idea: "#bb4d00"
  reason: "#0069a8"
  analogy: "#7008e7"
  pitfall: "#c70036"
  example: "#007a55"
typography:
  display:
    fontFamily: "Bai Jamjuree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.4
  headline:
    fontFamily: "Bai Jamjuree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.4
  title:
    fontFamily: "Bai Jamjuree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Bai Jamjuree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Bai Jamjuree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.43
  code:
    fontFamily: "Red Hat Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.43
rounded:
  md: "8px"
  lg: "12px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
  block-label:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  compare-wrong:
    backgroundColor: "rgba(255, 39, 78, 0.05)"
    textColor: "{colors.pitfall}"
    rounded: "{rounded.lg}"
    padding: "16px"
  compare-right:
    backgroundColor: "rgba(0, 177, 118, 0.05)"
    textColor: "{colors.example}"
    rounded: "{rounded.lg}"
    padding: "16px"
  figure:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "16px"
  step-tab:
    backgroundColor: "#ededed"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  step-tab-active:
    backgroundColor: "#171717"
    textColor: "#fafafa"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  sidebar-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  sidebar-link-active:
    backgroundColor: "#e5e5e5"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
---

# Design System: CEDTAN

## Overview

**Creative North Star: "The Marked-Up Textbook"**

This is what a good textbook looks like after a careful student has worked through it. The
page itself is quiet: near-neutral paper, one typeface, no ornament. Everything that carries
meaning was added by someone who read the slides and decided what mattered. A coloured glyph
in the margin says *this is the idea to remember*, *this is the trap*, *this is the worked
example*. Learn the five marks once and you can skim any page in the site.

The system therefore invests almost nothing in surface and almost everything in structure.
There are no shadows, no gradients, no illustrations that are not diagrams, and exactly two
fonts. What it does spend is precision: a strict four-level heading outline, a fixed rhythm
between blocks, and a colour that is never decorative. Density is generous rather than tight,
because Thai stacks vowels and tone marks above and below the line and needs the room.

The reader is not browsing. They came for one lecture, often the night before an exam, and
they want to finish it. Nothing on the page competes with that.

**Key Characteristics:**

- Neutral paper, ink, and one hairline; colour appears only as a semantic mark
- Flat by construction — depth comes from a surface tint plus a hairline, never a shadow
- One typeface (Bai Jamjuree) for Thai and Latin, one mono (Red Hat Mono) for code
- Every block is the same 12px-radius card; only the icon and its colour differ
- Both themes are first-class and every value is checked in both

## Colors

A near-neutral greyscale carries the whole page, and five hues carry the whole meaning.

### Primary

- **Ink** (`#0a0a0a` light, `#ebebeb` dark): body text, headings, and the active sidebar
  entry. The only value with full weight on the page.
- **Ink Muted** (`#666666` light, `rgba(179,179,179,0.8)` dark): block labels, the meta line
  under a lecture title, table headers, sidebar entries at rest, and the description on the
  landing page. Deliberately set darker than a typical muted grey so it clears 4.5:1 on the
  surface tint, not just on the page.

### Secondary

The five semantic marks. Each names one kind of block and appears **only** as the block's
icon, at 16px. Light mode uses the 700 step, dark mode the 400 step, so both clear 3:1
against the surface.

- **Key-Idea Amber** (`#bb4d00` light, `#ffb900` dark): the one sentence to remember.
- **Reason Sky** (`#0069a8` light, `#00bcff` dark): the problem a concept exists to solve.
- **Analogy Violet** (`#7008e7` light, `#a684ff` dark): the everyday comparison.
- **Pitfall Rose** (`#c70036` light, `#ff637e` dark): the mistake people make here. Also the
  border and title of the wrong side of a comparison.
- **Example Emerald** (`#007a55` light, `#00d492` dark): a concrete case with real input and
  real output. Also the right side of a comparison.

A side note (`<Callout>`) sits outside the legend: `type="info"` takes the muted grey, because
it adds context rather than a category, and `type="warn"` reuses Pitfall Rose, because to a
reader it means the same thing.

### Neutral

- **Page** (`#f5f5f5` light, `#121212` dark): the reading ground.
- **Surface** (`#f1f1f1` light, `#191919` dark): every block, figure, code frame, and the
  sidebar. One step off the page, never two.
- **Hairline** (`rgba(203,203,203,0.5)` light, `rgba(100,100,100,0.2)` dark): the only border
  weight in the system, at 1px.

### Named Rules

**The Legend Rule.** A hue means one thing across the whole site. Amber is always the key
idea; rose is always the trap. Never reach for a colour because a block "needs" one, and
never introduce a sixth hue without giving it a meaning first.

**The Glyph-Only Rule.** Semantic colour is carried by a 16px icon and nothing else. No
tinted block backgrounds, no coloured borders on blocks, no coloured headings. The one
exception is the comparison pair, where a 5% tint and a 40% border separate two options that
sit side by side.

**The Two-Surface Rule.** There are exactly two greys behind content: page and surface. A
block on a block does not get a third.

## Typography

**Display / Body Font:** Bai Jamjuree (with `ui-sans-serif, system-ui, sans-serif`)
**Label / Mono Font:** Red Hat Mono (with `ui-monospace, monospace`)

**Character:** Bai Jamjuree is a Thai–Latin humanist sans with slightly squared terminals; it
sets Thai and English at the same optical weight, which matters because almost every sentence
on this site mixes both. Red Hat Mono is narrow enough that an 80-column command fits the
column without wrapping. There is no display face: hierarchy comes from size and weight only.

### Hierarchy

- **Display** (600, 28px, 1.4): the lecture title. One per page, rendered by the layout, never
  written in MDX.
- **Headline** (600, 24px, 1.4, 48px space above): a part divider — `ส่วนที่ 1`, `ส่วนที่ 2`.
  Preceded by a horizontal rule.
- **Title** (600, 20px, 1.4): a section inside a part.
- **Body** (400, 16px, 1.75): prose. The reading column is capped at 900px, which lands near
  70 characters of Thai.
- **Label** (400, 14px, 1.43): block labels, meta line, table cells, sidebar entries.
- **Code** (400, 13px, 1.43): both fenced blocks and inline spans.

### Named Rules

**The One H1 Rule.** The layout owns the `h1`. MDX starts at `##`. A `#` in content produces
a second top-level heading and breaks the outline; the four levels available are enough.

**The Breathing Room Rule.** Body line-height never drops below 1.75 and headings never below
1.4. Thai marks stack above and below the baseline; a tighter setting collides them.

**The Wrapping Code Rule.** Inline code wraps at any point (`overflow-wrap: anywhere`). A long
URL or flag name in the middle of a sentence must not push the page sideways on a phone.

## Layout

Three columns on a wide screen, and the group fills the window: a 268px sidebar against the
left edge, the content, and a 268px table of contents against the right edge. The content
column is capped at 900px and centred inside whatever is left, so the reading measure stays
constant while the window grows. The table of contents disappears below 1280px and the sidebar
becomes a drawer below 768px.

The landing page is a single 768px column: heading, one-paragraph lead, one section per
course, then the disclaimer. No sidebar, no table of contents.

Vertical rhythm is a small fixed set: 24px between blocks and paragraphs, 48px above a part
divider, 16px of padding inside every block, 10px inside a table cell. Sections on the landing
page sit 56px apart.

### Named Rules

**The Full-Bleed Shell Rule.** The three columns fill the window; there is no outer gutter.
Left unchecked the docs grid reserves one past 97rem, and the sidebar's area spans it, so its
surface paints 445px at 1920 and 765px at 2560. The sidebar is 268px at every width or it is
broken.

## Elevation & Depth

**This system has no shadows.** Not one, in either theme. Depth is entirely tonal: a block is
one step lighter or darker than the page and carries a 1px hairline. That is the whole
vocabulary.

The reason is legibility rather than fashion. A page can carry twenty blocks in a row; twenty
shadows would read as noise, and a shadow that works on `#f5f5f5` does not survive on
`#121212`. A tint plus a hairline behaves identically in both themes.

### Named Rules

**The Flat-Forever Rule.** No `box-shadow`, no `filter: drop-shadow`, no `backdrop-filter`. If
something needs to separate from its background, give it the surface tint and a hairline. If
it needs to separate from another block, give it space.

## Shapes

One radius does almost all the work: **12px** on every block, figure, comparison panel, quiz,
and card. Controls that are not containers get **8px** (search field, sidebar entry, the
markdown-copy button), and the step-through tabs are full pills.

Borders are always 1px and always the hairline colour. Rules between table rows and above the
landing-page footer use the same hairline, so a divider and a border never disagree.

Diagrams are hand-written inline SVG on a 620-unit-wide viewBox, drawn with `currentColor`
plus opacity — never a hard-coded hex, so a figure re-themes with the page.

### Named Rules

**The One Radius Rule.** Containers are 12px, controls are 8px, tabs are pills. A fourth value
means a mistake.

**The currentColor Rule.** A diagram uses `currentColor` with `fillOpacity` / `strokeOpacity`
for every stroke and fill. A hard-coded colour disappears in one of the two themes.

## Components

### Blocks (KeyIdea, Why, Analogy, Example, Pitfall, Recap)

The signature component and the reason the system exists. Quiet and orderly: a plain surface
card that announces itself with one small coloured glyph.

- **Shape:** 12px radius, 1px hairline, no shadow.
- **Header:** 16px icon in the block's semantic colour, then the label in muted 14px
  semibold. An `<Example added>` also carries a hairline pill reading
  `เสริม — ไม่ได้อยู่ในสไลด์`.
- **Body:** normal prose at full contrast. The card never tints its own text.
- **Spacing:** 24px above and below, 16px inside.

### Callout

A side note in the same frame as a block: muted info circle for context, rose warning triangle
for a caution. Replaces the framework's own callout, which marked itself with a 2px colour bar
down its left edge and so disagreed with every other block on the page.

### Comparison (Compare / Wrong / Right)

The one place a block is allowed a tinted background, because the two panels have to be told
apart at a glance while sitting side by side.

- **Shape:** 12px radius, two columns above 768px, stacked below.
- **Wrong:** rose border at 40%, rose background at 5%, `✕` and title in Pitfall Rose.
- **Right:** emerald border at 40%, emerald background at 5%, `✓` and title in Example Emerald.
- **Note:** both panels carry `min-width: 0` so a wide code block scrolls inside its own
  column instead of stretching the grid past the viewport.

### Reading tools

The row under the meta line carries four controls on one hairline-ruled strip: `Copy Markdown`
and `Open` from the framework, then `ข้ามไปสรุป` and `เปิดกล่องที่พับไว้ทั้งหมด`. The last two
exist because the primary reader arrives to scan, not to read: one jumps to `#recap`, the other
opens every fold at once so find-in-page can reach folded text. The toggle hides itself on a
page with no folds, and never opens a `<Quiz>` — those are marked apart by `data-fold`.

Controls are 8px radius, hairline border, `bg-fd-secondary/50`, and focus as a 2px ink outline
at 2px offset.

### Legend

A single wrapping row of six icon-and-label pairs, directly under the tools strip, at 12px
muted with each icon in its own semantic colour. It is the key to the marks the page uses, and
it is the precondition for the Legend Rule: a reader cannot learn the five marks from a page
that never names them. It stays visible rather than folded, because a legend nobody opens
teaches nobody.

### Disclosure (Detail, Quiz)

A native `<details>` with no JavaScript. The summary is muted 14px with the default marker;
open content is indented behind a 2px neutral rule. Quiz summaries are prefixed
`ลองตอบดู:`. Used to fold long terminal transcripts and reference tables so a page stays
short without dropping a topic.

### Step-Through

A row of pill tabs above one visible step. The active tab is ink on `#171717` (inverted in
dark); the rest are muted on the secondary grey. Steps cross-fade with an 8px rise over 180ms,
wrapped in `MotionConfig reducedMotion="user"` so the movement drops out for anyone who asked
for less motion.

### Figure

A 12px card wrapping one inline SVG, with the caption centred beneath in muted 14px and
numbered `รูปที่ N:`. The SVG scrolls horizontally inside the card on a narrow screen; the
card itself never overflows.

### Code Block

Frameless inside a hairline container, `github-light` / `github-dark`, 13px Red Hat Mono, with
a copy button in the corner. Four token colours are overridden to clear 4.5:1 against the
surface — the theme's defaults do not.

### Sidebar

Course switcher, then one entry per page, each on one line. Entries are muted 14px at rest and
ink on a grey fill when active. Labels come from a page's `sidebarTitle`, not its full title:
`ภาพรวมวิชา`, `1 · Software-Defined Systems`, `5 · Kubernetes`.

### Named Rules

**The Same Card Rule.** Every block is the same card. If two blocks need to look different,
change the icon and its colour, not the frame.

**The Named Mark Rule.** A mark the reader has not been taught is decoration. Every lecture
page carries the legend, and no block ships a colour that the legend does not name.

## Do's and Don'ts

### Do:

- **Do** carry meaning with the icon colour and the label, and leave the card neutral.
- **Do** cap the reading column at 900px and let the window grow around it.
- **Do** use the surface tint plus a 1px hairline whenever something must separate from the page.
- **Do** draw diagrams with `currentColor` and opacity, sized to a 620-unit viewBox.
- **Do** fold long transcripts and reference tables into a `<Detail>` rather than cutting the topic.
- **Do** check every new colour at 4.5:1 for text and 3:1 for an icon, in both themes, against
  the surface (`#f1f1f1` / `#191919`) rather than the page.
- **Do** start MDX headings at `##` and stop at `####`.
- **Do** end every page with `<Recap>`; the table of contents pins a `สรุปท้ายคาบ` entry that
  points at its `#recap` anchor whether or not the block is there.

### Don't:

- **Don't** add a shadow, a gradient, a glass blur, or a coloured side stripe to any block.
- **Don't** introduce a third background grey, or nest a card inside a card.
- **Don't** give a block a tinted background — the comparison pair is the single exception.
- **Don't** use a hue that has no meaning in the legend, or reuse a legend hue for decoration.
- **Don't** add a second display typeface. Size and weight carry the hierarchy.
- **Don't** set body text below 1.75 line-height or a heading below 1.4; Thai marks collide.
- **Don't** let the sidebar surface spread past `--fd-sidebar-width`, and don't reintroduce
  an outer gutter for the three columns to sit inside.
