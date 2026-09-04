# Product

## Register

product

## Users

Undergraduate and graduate students at the Department of Computer Engineering,
Chulalongkorn University, reading in Thai.

They open a lecture page in one of three states:

- **Before class**, to know what is coming.
- **After class**, because the slides made sense in the room and stopped making sense at home.
- **The night before an exam**, jumping straight to `<Recap>` and the folded transcripts.

They read on a laptop most of the time and on a phone in the last case. They are not
browsing. They came for one lecture and they want to finish it.

## Product Purpose

Turn a deck of lecture slides into one page a student can read instead of the slides, and
understand better than the slides.

Success is a student who reads the page once and can answer the exam question without
opening the PDF. Failure is a page that looks nice and skips a topic.

## Brand Personality

Plain, patient, honest.

- **Plain** — no marketing voice. The page states what a thing is and what problem it solves.
- **Patient** — assumes no background. Reason first, then the definition, then a real example.
- **Honest** — says where every fact came from, marks anything the writer added, and never
  hides that this is a student's summary rather than official course material.

## Anti-references

- **Marketing docs sites.** No hero, no gradient, no "get started in 30 seconds". Nobody
  is being sold anything here.
- **Slide-dump sites.** A wall of bullet points with no connective prose is the thing this
  site exists to replace.
- **Cram-sheet sites.** Stripping a topic down to a keyword list loses the reason, which is
  the part students actually miss.

## Design Principles

1. **The content is the interface.** Chrome earns its space or it goes. A sidebar entry, a
   button, a badge — each one has to help someone find or read a lecture.
2. **Scannable at a glance, complete on a read.** A student jumping to one section must find
   it in seconds; a student reading straight through must not hit a gap.
3. **Say where it came from.** Every page names its source deck and its lecturer, and marks
   added examples. Attribution is a feature, not fine print.
4. **Thai prose, English terms.** Explain in Thai. Keep the standard technical term in
   English so the student recognises it in the exam and in real docs.
5. **Both themes are first-class.** Nothing is drawn in a colour that only works in one of
   them. Students read at night.

## Accessibility & Inclusion

- WCAG 2.1 AA. Body text at 4.5:1 or better in both themes.
- Thai text needs room: vowels and tone marks stack above and below the line, so line-height
  stays generous and never drops below 1.6 for prose.
- Long pages must work with keyboard alone: visible focus rings, logical tab order, and
  no keyboard traps in the folds or the step-through.
- Diagrams carry a Thai `aria-label` describing what they show, so the page still works
  without the picture.
- `prefers-reduced-motion` is honoured everywhere something moves.
