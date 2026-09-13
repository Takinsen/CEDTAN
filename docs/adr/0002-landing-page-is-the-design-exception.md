# 2. The landing page is the one place the design system bends

Date: 2026-09-13

## Status

Accepted

## Context

`PRODUCT.md` lists marketing docs sites as an anti-reference ("no hero, no gradient") and
`DESIGN.md` builds everything on the Flat-Forever Rule: no shadows, no gradients, no
illustrations that are not diagrams, and a landing page that is one 768px column of text.

Those rules exist for lecture pages. A reader there came for one lecture and is often reading
the night before an exam; nothing on the page may compete with the text.

The landing page does a different job. It is the first thing a new student sees, and it has
to say what the site covers before it lists anything. A plain column of course names did that
poorly, and the owner wanted a page with presence and motion. More courses are coming, so the
page must also show a changing set of courses without a reader pressing anything.

Alternatives considered, in the order they were prototyped:

- A 3D ring of course cards. Dropped: with two courses the ring is mostly empty, and the owner
  judged the ring itself unnecessary.
- A boxed spotlight with story-style tabs, a sentence with a rolling course name, and an
  endless strip. The strip won.
- Four ways to place the cover (full bleed, top and bottom fades, vignette, inset frame) and
  five ways to lift the type off it. Fades and bold type with a shadow and a dark pool won.

## Decision

The landing page opens with a full-screen hero that is dark in both themes. A strip of course
chips runs across its foot, and a second strip of lecture titles runs the other way; whichever
chip crosses the middle becomes the course shown, with its cover behind it. Below the hero, the
lecture directory lists every course folded, and reopens the course this browser opened last.

On the landing hero only, these are allowed:

- a course cover image, the one picture on the site that is not a diagram
- gradients over the cover, and a text shadow on the type set over it
- hard-coded dark colours, because the covers are dark whatever the reader's theme
- continuous motion, which stops on keyboard focus, with the pause button, and for
  `prefers-reduced-motion`. It first stopped on hover too; the owner dropped that, so a
  pointer resting on the hero no longer freezes it
- an exit tied to scroll position: the copy and strips fade and the cover dims as the page
  leaves the hero, and a chip or `ดูทุกคาบ` glides the window down instead of jumping

Every lecture page, and the directory and footer under the hero, keep every rule in
`DESIGN.md` unchanged.

## Consequences

Each new course needs a cover to look right. A course without one still works: the hero shows
its code set large and faint on black.

Anyone auditing the landing page against `DESIGN.md` will find gradients, a shadow and a photo.
`DESIGN.md` points here so that is read as a decision, not a defect to remove.

The hero depends on JavaScript for motion. Without it the page still renders the first course,
every chip is a link to its place in the directory, and every lecture is reachable.
