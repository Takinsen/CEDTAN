# CEDTAN

A website that turns lecture slides into summaries you can actually learn from.

One page per lecture. Complete coverage of the slides. Written for a reader with no
background: the reason first, then the concept, then a concrete example, then a picture.

Explanations are in Thai. Technical terms stay in English.

## Run it

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000

## Check it

```bash
pnpm check
```

Runs `next typegen`, `tsc --noEmit`, `eslint .`, the focused interaction unit tests, and
`next build`. This is the complete automated test suite for the repo.

## Structure

```
data/          source PDFs, git-ignored, one folder per course
content/       the summaries, one folder per course
components/
  lecture/     blocks used inside MDX (KeyIdea, Example, Figure, ...)
  figures/     hand-drawn SVG diagrams, one file each
lib/
  source.ts    content collections, frontmatter schema, loader
  courses.ts   course registry for the landing page
app/
  (home)/      landing page
  (lecture)/   course and lecture pages
docs/superpowers/   design spec and this project's plans
```

## URLs

```
/                        list of courses
/2110506-sds             course overview
/2110506-sds/lecture-1   lecture summary
```

The URL comes from the folder name under `content/`.

## Source PDFs

Put slides at `data/<COURSE-CODE>/Lecture-N.pdf`.

`data/` is git-ignored. The slides are large and belong to the lecturer, so they are never
committed and never published.

## Where the content comes from

The summaries are written from lecture slides taught at the Department of Computer
Engineering, Chulalongkorn University. Each lecture page names the lecturer it is based on.

This is a student's study site. It is not an official course page, and the lecturers have
not reviewed it. Read the real slides for anything that matters.

## License

- `LICENSE` — MIT, for the site code (`app/`, `lib/`, `components/lecture/`, config)
- `LICENSE-CONTENT` — CC BY-NC 4.0, for the summaries (`content/`) and the diagrams
  (`components/figures/`)

## Adding a lecture

See [AGENTS.md](./AGENTS.md).

## Deploy

Vercel, Next.js preset, `pnpm build`. No environment variables.
