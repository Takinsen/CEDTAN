# Domain Docs

How engineering skills consume this repository's domain documentation.

## Before exploring, read these

- `CONTEXT.md` at the repository root
- ADRs under `docs/adr/` that touch the area you are about to work in

If either location does not exist, proceed silently. Do not flag the absence and do not offer to create it. Domain-modeling skills create documentation only when terminology or decisions are actually resolved.

## Layout

This is a single-context repository.

```
/
├── CONTEXT.md
├── docs/adr/
│   └── 0001-page-order-is-not-slide-order.md
├── app/
├── components/
├── content/
└── lib/
```

## Use the glossary's vocabulary

Use terms as defined in `CONTEXT.md` when naming issues, proposals, hypotheses, and tests. Do not drift to synonyms the glossary avoids.

If a needed concept is absent, that is a signal. Either the language is invented and should be reconsidered, or there is a real gap to note for `/domain-modeling`.

## Flag ADR conflicts

Name output that contradicts an existing ADR. Do not silently override it.

> _Contradicts ADR-0001 (page order is not slide order), but worth reopening because…_
