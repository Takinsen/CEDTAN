# Courses

How to add a course to CEDTAN. Read this when `data/` holds a course folder that has no entry
in `lib/courses.ts`.

A course reaches the site in two stages. First it is listed: an entry and a cover, so the
landing page shows it. Its pages come later, one lecture at a time, through `AGENTS.md`. Listing
never waits for the pages.

## Names

- The deck folder is `data/<CODE>-<ABBR>/`, uppercase: `data/2110471-CN/`.
- The slug is the same pair in lowercase: `2110471-cn`. It names the entry, the content folder
  `content/<slug>/`, the page URLs `/<slug>/lecture-<n>`, and the cover file.

## Steps

1. Read `data/<CODE>-<ABBR>/Syllabus.pdf` with `pdfjs-dist`. Take the course code, the English
   name, the Thai name, and the course content paragraph. Done when all four are found or known
   to be missing.
2. Add an entry to `courses` in `lib/courses.ts`. Order in that array is the order the landing
   strip shows.
   - `name` and `nameTh` exactly as the syllabus prints them. Repair only damage from text
     extraction, such as a dropped Thai vowel (`ระบบฝงตัว` is `ระบบฝังตัว`).
   - A name the syllabus does not print comes from the owner. Leave `nameTh` out until then; the
     landing page renders without it.
   - `description` is one line built from the course content paragraph: Thai prose, English terms.
3. Set `cover: '/images/courses/<slug>-cover-4k.webp'`. The owner supplies that file: 3840×2160
   WebP with a dark ground, because the landing hero is dark in both themes. When the owner hands
   over a PNG, convert it with `sharp` and move the PNG into `data/covers/`, which git ignores.
   A course with no cover still renders, with its code set faint on black.
4. Run `pnpm check`, then open `/` on a production build. Done when the course appears in the
   strip and the directory marked `กำลังเรียบเรียง`, with no link to a page that does not exist.

## When the pages start

1. Create `content/<slug>/meta.json` with `"root": true`, `"title": "<CODE> <ABBR>"`,
   `"description"` set to the English name, and `"pages"` listing each lecture.
2. Add lectures with the steps in `AGENTS.md`.

Do not write a course overview page. Schedules, grading and exam rules change from term to term,
so a copy of the syllabus goes stale; see `docs/adr/0003-no-course-overview-page.md`. The URL
`/<slug>` redirects to lecture 1. The landing page folds the course open once a lecture exists.
