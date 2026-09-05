# 1. A page's order is its own, not the deck's

Date: 2026-09-06

## Status

Accepted

## Context

Lecture pages were written by reading the deck front to back and writing a section per slide.
That produced pages whose parts were the deck's agenda slide and whose sections were its page
titles. The prose matched: sentences took the deck as their subject and described what each
slide held.

An earlier pass removed slide page citations and most sentences containing `สไลด์`. It did not
fix this, because the defect is structural. `เปิดคาบมาด้วยรายชื่อภัยเก้าอย่าง` contains no
`สไลด์` and still reads as somebody narrating a PDF.

Two concrete failures in `content/2110413-csy/lecture-1.mdx` showed the cost:

- Phishing sat in part 1 and social engineering in part 2, although phishing is social
  engineering. They were apart because the deck had them on different slides. The part they
  were split across closed with `user is the first line of defense`, a line that summarised
  nothing, because botnet and man-in-the-middle were in the same part.
- `Pharming` and `Spam` appeared exactly once each, in a list. The deck names nine threats and
  gives later slides to seven of them. Walking the deck reproduced that gap instead of filling
  it, against the `Assume no background` bar.

The competing pull was PRODUCT.md Design Principle 3, `Say where it came from`. Attribution
was read as a licence to describe the deck. But PRODUCT.md also lists slide-dump sites as an
anti-reference, and defines success as answering the exam question without opening the PDF —
a reader who cannot open the deck cannot use a description of it.

## Decision

A page's section grouping and order are chosen for teaching, not inherited from the deck.
Matching the deck's order is allowed where that order is already the best one, as a decision
rather than a default.

Attribution stays at the level of the page: the source callout at the top and the `credit`
field. It does not descend into individual sentences, except for the four boundary-marker
cases already recorded in AGENTS.md.

Facts are never dropped in the course of a reorganisation. A rewrite is checked by extracting
every number, code span, quotation, English token and URL from the file before and after, and
accounting for every difference.

## Consequences

Coverage can no longer be checked by walking the deck and the page side by side, since the two
no longer share an order. Replaced by the extraction diff above, plus an explicit check that
every name in a list appears somewhere other than that list.

Reorganising is more expensive than transcribing, and the cost lands on whoever writes the
page. It also finds gaps, as it did with `Pharming` and `Spam`.

Pages already written slide-first stay as they are until revisited. `2110413-csy/lecture-1`
is the first page rewritten under this decision. The two course `index.mdx` pages are out of
scope: their subject genuinely is the documents, since they merge a syllabus and a schedule
that disagree.
