# Domain Docs

How engineering skills consume this repository’s domain documentation.

## Before exploring, read these

- `CONTEXT.md` at the repository root
- Relevant ADRs under `docs/adr/`

If either location does not exist, proceed silently. Domain-modeling skills create documentation only when terminology or decisions are actually resolved.

## Layout

This is a single-context repository:

/
├── CONTEXT.md
├── docs/adr/
├── app/
├── components/
├── content/
└── lib/

## Use the glossary’s vocabulary

Use terms as defined in `CONTEXT.md` when naming issues, proposals, hypotheses, and tests. If a needed concept is absent, reconsider whether it belongs to the project or note the gap for domain modeling.

## Flag ADR conflicts

Explicitly identify output that contradicts an existing ADR rather than silently overriding it.
