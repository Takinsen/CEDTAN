# Context

Shared vocabulary for CEDTAN. Glossary only — no decisions, no implementation notes.

## Deck

The lecturer's PDF of slides for one lecture, under `data/<COURSE-CODE>/`. Copyrighted, never
committed. A **page** is the MDX file this repo publishes about a deck. A deck has slides; a
page has sections. The two are different documents and are allowed to be shaped differently.

## Slide order

The sequence of topics as the deck presents them. Available to the writer as one candidate
ordering. It is not the page's order unless it is also the best teaching order.

## Teaching order

The sequence a page uses: sections grouped by idea, and ordered so each section is
understandable from the ones before it. This is the page's own property. It may coincide with
[slide order](#slide-order) — when it does, that is a decision, not a default.

Related: **Owning the order** is the act of choosing teaching order deliberately, including
choosing to match the deck.

## Narration

Prose whose subject is the deck rather than the material. `เปิดคาบมาด้วยรายชื่อภัยเก้าอย่าง`
narrates; `ภัยที่เจอบ่อยที่สุดมีเก้าอย่าง` does not. Narration is not defined by the word
`สไลด์` — a sentence can narrate without containing it.

Test: could someone who has never seen the deck have written this sentence? If it only carries
meaning because a document exists, it narrates.

## Boundary marker

A sentence that is legitimately about the deck, because the fact being reported *is* a fact
about the document. Four kinds: the deck contradicting itself, a question the deck leaves
unanswered, a property of the document (its revision year, its lecturer), and a statement that
the deck does not cover something, placed right before added material.

A boundary marker is not [narration](#narration). It is the one case where the deck is
correctly the subject.

## Added material

Explanation, examples, or figures written for the page because the deck has none. Carries a
visible marker — the `<Example added>` badge, or a `<Callout>` naming what the deck left out.
Distinguished from material carried over from the deck, which needs no marker beyond the
page's source callout and its `credit` field.

## Inherited gap

A topic the deck names but never explains, which the page also names but never explains,
because the page was written by walking the deck. A defect, not a faithful reproduction.
