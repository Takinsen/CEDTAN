# 4. One running example, varied by contrast and by quiz

Date: 2026-09-15

## Status

Accepted

## Context

`AGENTS.md` asks for one concrete example per abstract idea, one running example across the
page, and an added example only when it shows behaviour the prose cannot. Those rules keep pages
short enough to finish: lecture pages already run 25–55 minutes, and PRODUCT.md's reader came for
one lecture, often the night before an exam.

Learning research pulls the other way. A single example lets the reader bind the idea to surface
features of that example: the reader who learnt ECB only on `hello` may not see the leak in an
image. Variation across cases, and more than one analogy for a hard concept, is what lets an idea
transfer.

## Decision

A page keeps one running example per idea. The second case, the one that varies the surface, comes
from the blocks that already exist for another job, not from a second worked example:

- a `<Compare>` pair, which shows the same idea succeeding and failing
- a `<Quiz>`, whose question must give a case the section has not shown ("Teaching blocks" in
  `AGENTS.md`)
- an `<Analogy>`, whose stated edge marks where the everyday case stops matching

A second worked example is still allowed where the prose cannot carry the difference, under the
existing `<Example added>` limits.

## Consequences

Quizzes carry more weight than before: a quiz that only asks the reader to find a sentence above
it now leaves the idea with no varied case. `page-editor` reports that as a `quiz` finding.

Reading time stays close to what it was, because the variation lives inside blocks the reader can
skip or leave folded.

A reader who never opens a quiz sees only one case. That is accepted: the scanning reader in
DESIGN.md is after `<Recap>`, not transfer.
