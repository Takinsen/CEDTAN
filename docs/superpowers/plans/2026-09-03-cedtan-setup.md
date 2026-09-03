# CEDTAN Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up the CEDTAN site — a Next.js + Fumadocs project that serves one Thai-language summary page per lecture — plus the README and AGENTS contract that let future agents add lectures.

**Architecture:** Fumadocs supplies the sidebar tree, table of contents, static search, and MDX pipeline. Course folders under `content/` become URL segments. A hand-written component kit (`components/lecture/`) gives the author blocks for reasons, examples, diagrams, and self-checks. Source PDFs stay out of git.

**Tech Stack:** Next.js 16 (App Router), React 19, Fumadocs 16 (`fumadocs-ui`, `fumadocs-mdx`, `fumadocs-core`), Tailwind CSS v4, `motion`, Zod 4, pnpm, TypeScript.

**Spec:** `docs/superpowers/specs/2026-09-03-cedtan-design.md`

## Global Constraints

- Package manager is **pnpm**. Never run `npm install` or `yarn`.
- Node 24, pnpm 11. Next.js `16.3.4` or newer. `fumadocs-core` and `fumadocs-ui` `16.15.5`
  or newer. `fumadocs-mdx` `15.4.0` (a separate version line — 15.4.0 IS its latest).
- `data/` is git-ignored. Never commit a PDF. Never copy slide images into the repo.
- Explanations in content are **Thai**. Technical terms stay in **English**.
- Code, comments, commit messages, README, and AGENTS.md are in **plain English (A1–B2)**.
- Comments in code: one line, naming what the block does. No history, no story.
- `next lint` does not exist in Next.js 16. Lint with the ESLint CLI.
- Every commit message ends with:
  ```
  Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01VJVzAQ8HGxUs82xd4yEqkB
  ```

## Verification Strategy (read this before Task 1)

This project has no unit tests, and that is deliberate. It holds content and presentation,
not logic. The spec says so.

The test cycle for every task is therefore:

```bash
pnpm check
```

which runs `next typegen && tsc --noEmit && eslint . && next build`.

That command is a real gate, not a formality. It fails on bad frontmatter (Zod validates it),
a missing component, a broken MDX import, a type error in a route, or an unused variable.

Tasks that change what a page looks like add a second gate: open the page in a browser with
the Playwright MCP tools and look at it. Each such task lists the exact URL and what you
must see.

**Never write "it works" without pasting the command output.**

---

## Task 1: Scaffold the Fumadocs app into the repo

**Files:**
- Create: everything from the `create-fumadocs-app` template at the repo root
- Modify: `.gitignore`
- Verify: `pnpm check`

**Interfaces:**
- Consumes: nothing
- Produces: `@/lib/source` exporting `source`, `getPageImageUrl`, `getPageMarkdownUrl`, `getLLMText`; `@/lib/shared` exporting `appName`, `docsRoute`, `docsImageRoute`, `docsContentRoute`, `gitConfig`; `@/components/mdx` exporting `getMDXComponents`; `@/lib/layout.shared` exporting `baseOptions`

- [ ] **Step 1: Scaffold into a temp directory**

The CLI is interactive by default. `CI=1` plus explicit flags makes it fully non-interactive.

```bash
cd /tmp
rm -rf cedtan-scaffold
CI=1 pnpm create fumadocs-app@latest cedtan-scaffold \
  --template +next+fuma-docs-mdx \
  --pm pnpm \
  --linter eslint \
  --search orama \
  --og-image next-og \
  --no-git
ls -a /tmp/cedtan-scaffold
```

Expected: a directory containing `app/`, `lib/`, `components/`, `content/`, `package.json`,
`next.config.mjs`, `postcss.config.mjs`, `tsconfig.json`, and an ESLint config file.

- [ ] **Step 2: Move the scaffold into the repo**

The repo already holds `.git/`, `data/`, `docs/`, and `.gitignore`. Copy everything except
those.

```bash
cd /home/tanakrit/projects/CEDTAN
rsync -a --exclude '.git' --exclude 'node_modules' /tmp/cedtan-scaffold/ ./
ls -a
```

If the scaffold wrote its own `.gitignore`, it has overwritten ours. Restore ours and add
the scaffold's entries:

```bash
cd /home/tanakrit/projects/CEDTAN
git checkout .gitignore
cat >> .gitignore <<'EOF'

# next / fumadocs
/coverage
*.pem
/.pnp
.pnp.js
npm-debug.log*
EOF
git diff --stat .gitignore
```

- [ ] **Step 3: Set the project name and add the two extra dependencies**

Edit `package.json`. Set `"name": "cedtan"`. Keep `"private": true`.

`zod` is a peer dependency of `fumadocs-core`, not a direct one, and Task 3 imports it
directly. `motion` is used by `<StepThrough>` in Task 5.

```bash
pnpm add zod motion
pnpm add -D @types/node
```

- [ ] **Step 4: Add the `check` script**

In `package.json`, replace the `types:check` script with:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "check": "next typegen && tsc --noEmit && eslint . && next build"
  }
}
```

- [ ] **Step 5: Install and verify the untouched scaffold builds**

```bash
cd /home/tanakrit/projects/CEDTAN
pnpm install
pnpm check
```

Expected: PASS. `next build` prints a route table that includes `/docs/[[...slug]]`.

If the build fails here, stop. The scaffold is broken and nothing later will work. Read the
error and fix it before continuing.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
chore: scaffold Next.js and Fumadocs app

Generated with create-fumadocs-app using the +next+fuma-docs-mdx
template, with ESLint, Orama search, and OG image generation.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01VJVzAQ8HGxUs82xd4yEqkB
EOF
)"
```

---

## Task 2: Move pages to the site root and switch to Thai fonts

Body font is **Bai Jamjuree** (static, needs an explicit weight list). Code font is
**Red Hat Mono** (variable 300-700, so it needs no weight list).

No monospace font on Google Fonts covers the `thai` subset. Thai text inside a code block
falls back to Bai Jamjuree, which is expected.

**Files:**
- Modify: `lib/shared.ts`
- Move: `app/docs/[[...slug]]/page.tsx` → `app/(lecture)/[...slug]/page.tsx`
- Move: `app/docs/layout.tsx` → `app/(lecture)/layout.tsx`
- Move: `app/og/docs/[...slug]/route.tsx` → `app/og/[...slug]/route.tsx`
- Move: `app/llms.mdx/docs/[[...slug]]/route.ts` → `app/llms.mdx/[...slug]/route.ts`
- Delete: `proxy.ts`
- Modify: `app/layout.tsx`, `app/global.css`
- Verify: `pnpm check`, then browser

**Interfaces:**
- Consumes: `@/lib/source`, `@/lib/shared`, `@/lib/layout.shared` from Task 1
- Produces: URL shape `/<course>` and `/<course>/<page>`; `docsRoute === '/'`

The spec wants `/2110506-sds/lecture-1`, not `/docs/2110506-sds/lecture-1`.

An optional catch-all `[[...slug]]` at the root would also match `/` and collide with the
landing page. So the lecture route uses a **required** catch-all `[...slug]`, which never
matches `/`. The landing page keeps `app/(home)/page.tsx`.

- [ ] **Step 1: Point the shared route constants at the root**

Replace `lib/shared.ts` with:

```ts
export const appName = 'CEDTAN';

// lecture pages live at the site root, e.g. /2110506-sds/lecture-1
export const docsRoute = '/';
export const docsImageRoute = '/og';
export const docsContentRoute = '/llms.mdx';

export const gitConfig = {
  user: 'Takinsen',
  repo: 'CEDTAN',
  branch: 'main',
};
```

- [ ] **Step 2: Move the route files**

```bash
cd /home/tanakrit/projects/CEDTAN
mkdir -p "app/(lecture)"
git mv "app/docs/[[...slug]]" "app/(lecture)/[...slug]"
git mv "app/docs/layout.tsx" "app/(lecture)/layout.tsx"
rmdir app/docs
git mv "app/og/docs/[...slug]" "app/og/[...slug]"
rmdir app/og/docs
git mv "app/llms.mdx/docs/[[...slug]]" "app/llms.mdx/[...slug]"
rmdir app/llms.mdx/docs
git rm -f proxy.ts
find app -type d | sort
```

`proxy.ts` rewrote `/docs/**` for clients that ask for markdown. With pages at the root its
pattern would swallow every request, and the copy-as-markdown button works without it
because it links to an explicit `/llms.mdx/...` URL.

- [ ] **Step 3: Fix the typed route generics**

In `app/(lecture)/[...slug]/page.tsx`, change both occurrences of
`PageProps<'/docs/[[...slug]]'>` to `PageProps<'/[...slug]'>`. Leave the body alone except
for the GitHub link, which now points at `content/` instead of `content/docs/`:

```tsx
githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/${page.path}`}
```

In `app/(lecture)/layout.tsx`, change `LayoutProps<'/docs'>` to `LayoutProps<'/'>`.

In `app/og/[...slug]/route.tsx` and `app/llms.mdx/[...slug]/route.ts`, update any
`'/og/docs/...'` or `'/llms.mdx/docs/...'` route generic the same way — drop the `docs`
segment. Run `pnpm exec tsc --noEmit` after editing to find any you missed.

- [ ] **Step 4: Load Thai fonts**

Replace the font block in `app/layout.tsx`:

```tsx
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Bai_Jamjuree, Red_Hat_Mono } from 'next/font/google';

const sans = Bai_Jamjuree({
  subsets: ['latin', 'thai'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans-thai',
});

const mono = Red_Hat_Mono({
  subsets: ['latin'],
  variable: '--font-mono-code',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="th" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
```

`lang="th"` matters: it tells the browser to pick Thai line-breaking rules.

- [ ] **Step 5: Wire the fonts into Tailwind and open up the line height**

Append to `app/global.css`:

```css
@theme {
  --font-sans: var(--font-sans-thai), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-mono-code), ui-monospace, monospace;
}

/* Thai vowels and tone marks stack above and below the line */
.prose {
  line-height: 1.85;
}

.prose :is(h1, h2, h3, h4) {
  line-height: 1.4;
}
```

- [ ] **Step 6: Raise the content root one level**

`lib/source.ts` still has `dir: 'content/docs'`. With `baseUrl` now `/`, the sample
`content/docs/index.mdx` would want to live at `/` — which the landing page already owns, and
which the required catch-all cannot match. Change the collection directory so the folder name
becomes a URL segment instead.

In `lib/source.ts`, inside the `defineDocs` call, change:

```ts
  dir: 'content/docs',
```

to:

```ts
  dir: 'content',
```

The sample pages now resolve to `/docs` and `/docs/test`.

```bash
pnpm check
```

Expected: PASS. The route table shows `/[...slug]`, not `/docs/[[...slug]]`.

- [ ] **Step 7: Look at it**

```bash
pnpm dev
```

Open `http://localhost:3000/docs` with `browser_navigate`, then take a snapshot.

Expected: the sample page renders, the sidebar is on the left, the table of contents is on
the right, and Thai text uses Bai Jamjuree rather than a fallback. Bai Jamjuree is loopless,
so the Thai letters have no small circles at their corners — that is how you tell it loaded. The URL is `/docs`
because `docs` is still the folder name under `content/`; Task 3 replaces it with a real
course folder.

Also open `http://localhost:3000/` and confirm the scaffold home page still renders. If it
404s, the catch-all is swallowing the root and the route group is wrong.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
feat: serve lecture pages from the site root and load the project fonts

Course pages move from /docs/<course> to /<course>. The catch-all is
required, not optional, so it never collides with the landing page.

Drops proxy.ts: its rewrite pattern would match every request once
pages live at the root, and the copy-as-markdown button links to an
explicit URL anyway.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01VJVzAQ8HGxUs82xd4yEqkB
EOF
)"
```

---

## Task 3: Content model — course folders and extended frontmatter

**Files:**
- Modify: `lib/source.ts`
- Create: `content/2110506-sds/meta.json`, `content/2110506-sds/index.mdx`
- Delete: `content/docs/`
- Verify: `pnpm check`, then browser

**Interfaces:**
- Consumes: `source` from Task 1
- Produces: frontmatter fields `lecture?: number`, `source?: string`, `readingMinutes?: number` on `page.data`; content root at `content/`

- [ ] **Step 1: Extend the frontmatter schema**

Edit `lib/source.ts`. Change only the `defineDocs` call; `dir` and `baseUrl` are already
correct from Task 2, and the `getPageImageUrl` / `getPageMarkdownUrl` / `getLLMText` helpers
stay as generated.

```ts
import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import * as z from 'zod';

const docs = defineDocs({
  dir: 'content',
  docs: {
    schema: pageSchema.extend({
      lecture: z.number().int().positive().optional(),
      source: z.string().optional(),
      readingMinutes: z.number().int().positive().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});
```

`pageSchema` and `metaSchema` are Zod 4 objects, so `.extend()` is available.

- [ ] **Step 2: Create the first course folder**

```bash
cd /home/tanakrit/projects/CEDTAN
rm -rf content/docs
mkdir -p content/2110506-sds
```

`content/2110506-sds/meta.json`:

```json
{
  "title": "2110506 SDS",
  "description": "Software Design and Specification",
  "root": true,
  "pages": ["index"]
}
```

`"root": true` makes the course its own sidebar root, so a student browsing SDS does not see
every other course's lectures in the sidebar. Fumadocs renders a switcher between roots.

`"pages"` fixes the order. Without it the sidebar sorts alphabetically and puts `lecture-10`
before `lecture-2`.

List a page in `"pages"` only once its `.mdx` file exists — a missing file is silently
dropped, which hides typos. So the list starts at `["index"]` and grows one entry per lecture:
`["index", "lecture-1", "lecture-2"]`, and so on.

- [ ] **Step 3: Write a placeholder course index so the route has something to render**

`content/2110506-sds/index.mdx`:

```mdx
---
title: 2110506 Software Design and Specification
description: ภาพรวมของวิชา และสารบัญเนื้อหาแต่ละคาบ
---

หน้านี้เป็นภาพรวมของวิชา จะเติมเนื้อหาจริงใน Task 8
```

- [ ] **Step 4: Verify**

```bash
pnpm check
```

Expected: PASS. The build output lists `/2110506-sds` as a generated static page.

Then:

```bash
pnpm dev
```

Open `http://localhost:3000/2110506-sds`.

Expected: the page renders with its Thai title and the sidebar shows the course as a root.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
feat: content model with course folders and lecture frontmatter

Content root moves to content/, one folder per course. Frontmatter
gains lecture, source, and readingMinutes. meta.json marks each course
as a sidebar root and fixes page order.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01VJVzAQ8HGxUs82xd4yEqkB
EOF
)"
```

---

## Task 4: Text component kit

**Files:**
- Create: `components/lecture/box.tsx`, `components/lecture/blocks.tsx`, `components/lecture/term.tsx`, `components/lecture/index.ts`
- Modify: `components/mdx.tsx`
- Verify: `pnpm check`, then browser

**Interfaces:**
- Consumes: `cn` from `@/lib/cn`
- Produces, all as named exports from `@/components/lecture`:
  - `KeyIdea({ title?: string; children: ReactNode })`
  - `Why({ title?: string; children: ReactNode })`
  - `Analogy({ title?: string; children: ReactNode })`
  - `Pitfall({ title?: string; children: ReactNode })`
  - `Example({ title?: string; children: ReactNode })`
  - `Recap({ children: ReactNode })`
  - `Term({ en: string; th: string })`

All of these are server components. None needs client JavaScript.

- [ ] **Step 1: Confirm the theme variable names before using them**

```bash
cd /home/tanakrit/projects/CEDTAN
grep -rohE '\-\-color-fd-[a-z-]+' node_modules/fumadocs-ui/css | sort -u
```

Expected to include: `--color-fd-background`, `--color-fd-border`, `--color-fd-card`,
`--color-fd-foreground`, `--color-fd-muted`, `--color-fd-muted-foreground`,
`--color-fd-primary`, `--color-fd-secondary`.

Use only variables that appear in this list. They flip with the theme, so light and dark
mode both work with no extra code.

- [ ] **Step 2: Write the shared box primitive**

`components/lecture/box.tsx`:

```tsx
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

// shared frame for every callout-style lecture block
export function LectureBox({
  icon: Icon,
  label,
  title,
  accent,
  children,
}: {
  icon: LucideIcon;
  label: string;
  title?: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'my-6 rounded-xl border border-fd-border bg-fd-card overflow-hidden',
        'border-l-4',
        accent,
      )}
    >
      <div className="flex items-center gap-2 px-4 pt-3 text-sm font-semibold text-fd-muted-foreground">
        <Icon className="size-4 shrink-0" />
        <span>{title ?? label}</span>
      </div>
      <div className="px-4 pb-1 [&>:first-child]:mt-2 [&>:last-child]:mb-3">{children}</div>
    </div>
  );
}
```

- [ ] **Step 3: Write the blocks**

`components/lecture/blocks.tsx`:

```tsx
import { Lightbulb, HelpCircle, Repeat, AlertTriangle, FlaskConical, ListChecks } from 'lucide-react';
import type { ReactNode } from 'react';
import { LectureBox } from './box';

type BlockProps = { title?: string; children: ReactNode };

// the one sentence a reader must remember
export function KeyIdea({ title, children }: BlockProps) {
  return (
    <LectureBox icon={Lightbulb} label="แนวคิดหลัก" title={title} accent="border-l-amber-500">
      {children}
    </LectureBox>
  );
}

// the problem this concept exists to solve
export function Why({ title, children }: BlockProps) {
  return (
    <LectureBox icon={HelpCircle} label="ทำไมต้องมีสิ่งนี้" title={title} accent="border-l-sky-500">
      {children}
    </LectureBox>
  );
}

// everyday comparison for a reader with no background
export function Analogy({ title, children }: BlockProps) {
  return (
    <LectureBox icon={Repeat} label="เทียบให้เห็นภาพ" title={title} accent="border-l-violet-500">
      {children}
    </LectureBox>
  );
}

// a mistake people make here
export function Pitfall({ title, children }: BlockProps) {
  return (
    <LectureBox icon={AlertTriangle} label="จุดที่คนพลาดบ่อย" title={title} accent="border-l-rose-500">
      {children}
    </LectureBox>
  );
}

// concrete case with clear input and output
export function Example({ title, children }: BlockProps) {
  return (
    <LectureBox icon={FlaskConical} label="ตัวอย่าง" title={title} accent="border-l-emerald-500">
      {children}
    </LectureBox>
  );
}

// bullet summary at the end of a lecture
export function Recap({ children }: { children: ReactNode }) {
  return (
    <LectureBox icon={ListChecks} label="สรุปท้ายคาบ" accent="border-l-fd-primary">
      {children}
    </LectureBox>
  );
}
```

- [ ] **Step 4: Write the term component**

`components/lecture/term.tsx`:

```tsx
// English technical term with a Thai gloss on hover
export function Term({ en, th }: { en: string; th: string }) {
  return (
    <span
      title={th}
      className="underline decoration-dotted decoration-fd-muted-foreground underline-offset-4 cursor-help"
    >
      {en}
      <span className="text-fd-muted-foreground"> ({th})</span>
    </span>
  );
}
```

The Thai gloss is printed inline, not only in the tooltip. A tooltip is invisible on a phone,
and half the readers are on a phone.

- [ ] **Step 5: Write the barrel file**

`components/lecture/index.ts`:

```ts
export { KeyIdea, Why, Analogy, Pitfall, Example, Recap } from './blocks';
export { Term } from './term';
```

- [ ] **Step 6: Register the components globally**

Replace `components/mdx.tsx`:

```tsx
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as lecture from '@/components/lecture';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...lecture,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
```

Registering globally means an MDX file uses `<KeyIdea>` with no import line.

- [ ] **Step 7: Exercise every component from a real page**

Replace the body of `content/2110506-sds/index.mdx` (keep its frontmatter) with a block that
uses each one, so the build and the browser both cover them:

```mdx
<KeyIdea>ทุก block ในหน้านี้คือของจริงที่ใช้เขียนสรุป</KeyIdea>

<Why>ถ้าไม่ลองใช้ทุกตัวในหน้าจริง จะไม่รู้ว่าตัวไหนพัง</Why>

<Analogy>เหมือนลองเปิดไฟทุกดวงในบ้านก่อนย้ายเข้า</Analogy>

<Example title="ตัวอย่างการใช้ Term">
  <Term en="Coupling" th="ระดับที่โมดูลผูกกันแน่น" /> คือสิ่งที่เราอยากให้ต่ำ
</Example>

<Pitfall>เขียนสรุปโดยข้ามสไลด์ที่ดูไม่สำคัญ</Pitfall>

<Recap>
- block ทุกตัวเรนเดอร์ได้
- theme สลับ light/dark ได้
</Recap>
```

- [ ] **Step 8: Verify**

```bash
pnpm check
```

Expected: PASS.

```bash
pnpm dev
```

Open `http://localhost:3000/2110506-sds` and take a screenshot. Then toggle to dark mode
using the theme switch in the navbar and screenshot again.

Expected: six distinct coloured blocks, each with an icon and a Thai label. Text stays
readable in both themes — no dark text on a dark card.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
feat: text component kit for lecture pages

Adds KeyIdea, Why, Analogy, Pitfall, Example, Recap, and Term, all
server components registered globally so MDX files need no imports.
Colors come from Fumadocs theme variables, so dark mode works with no
extra code.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01VJVzAQ8HGxUs82xd4yEqkB
EOF
)"
```

---

## Task 5: Visual and interactive component kit

**Files:**
- Create: `components/lecture/figure.tsx`, `components/lecture/compare.tsx`, `components/lecture/quiz.tsx`, `components/lecture/step-through.tsx`
- Modify: `components/lecture/index.ts`, `content/2110506-sds/index.mdx`
- Verify: `pnpm check`, then browser

**Interfaces:**
- Consumes: `LectureBox` from `./box`, `cn` from `@/lib/cn`, `motion/react`
- Produces, all as named exports from `@/components/lecture`:
  - `Figure({ number?: number; caption: string; children: ReactNode })`
  - `Compare({ children: ReactNode })`, `Wrong({ title?: string; children: ReactNode })`, `Right({ title?: string; children: ReactNode })`
  - `Quiz({ question: string; children: ReactNode })`
  - `StepThrough({ children: ReactNode })`, `Step({ title: string; children: ReactNode })`

- [ ] **Step 1: Write Figure**

`components/lecture/figure.tsx`:

```tsx
import type { ReactNode } from 'react';

// wraps a diagram with a caption and an optional figure number
export function Figure({
  number,
  caption,
  children,
}: {
  number?: number;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-6 rounded-xl border border-fd-border bg-fd-card p-4">
      <div className="overflow-x-auto">{children}</div>
      <figcaption className="mt-3 text-sm text-fd-muted-foreground text-center">
        {number !== undefined && <span className="font-semibold">รูปที่ {number}: </span>}
        {caption}
      </figcaption>
    </figure>
  );
}
```

- [ ] **Step 2: Write Compare**

`components/lecture/compare.tsx`:

```tsx
import { X, Check } from 'lucide-react';
import type { ReactNode } from 'react';

// two-column "wrong way vs right way"
export function Compare({ children }: { children: ReactNode }) {
  return <div className="my-6 grid gap-4 md:grid-cols-2">{children}</div>;
}

export function Wrong({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-rose-500/40 bg-rose-500/5 p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400">
        <X className="size-4 shrink-0" />
        <span>{title ?? 'แบบที่มีปัญหา'}</span>
      </div>
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
    </div>
  );
}

export function Right({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
        <Check className="size-4 shrink-0" />
        <span>{title ?? 'แบบที่ดีกว่า'}</span>
      </div>
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
    </div>
  );
}
```

- [ ] **Step 3: Write Quiz**

`components/lecture/quiz.tsx`:

```tsx
import type { ReactNode } from 'react';

// self-check question with the answer hidden behind a native disclosure
export function Quiz({ question, children }: { question: string; children: ReactNode }) {
  return (
    <details className="my-6 rounded-xl border border-fd-border bg-fd-card px-4 py-3 [&[open]>summary]:mb-2">
      <summary className="cursor-pointer font-semibold marker:text-fd-muted-foreground">
        ลองตอบดู: {question}
      </summary>
      <div className="border-t border-fd-border pt-2 [&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </details>
  );
}
```

`<details>` needs no JavaScript, works before hydration, and is keyboard accessible for free.

- [ ] **Step 4: Write StepThrough**

`components/lecture/step-through.tsx`:

```tsx
'use client';

import { AnimatePresence, motion } from 'motion/react';
import { Children, isValidElement, useState, type ReactElement, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Step({ children }: { title: string; children: ReactNode }) {
  return <>{children}</>;
}

// click through a process one step at a time
export function StepThrough({ children }: { children: ReactNode }) {
  const steps = Children.toArray(children).filter(
    (child): child is ReactElement<{ title: string; children: ReactNode }> =>
      isValidElement(child),
  );
  const [index, setIndex] = useState(0);
  const current = steps[index];

  if (!current) return null;

  return (
    <div className="my-6 rounded-xl border border-fd-border bg-fd-card p-4">
      <div className="mb-3 flex flex-wrap gap-2">
        {steps.map((step, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              'rounded-full px-3 py-1 text-sm transition-colors',
              i === index
                ? 'bg-fd-primary text-fd-primary-foreground'
                : 'bg-fd-muted text-fd-muted-foreground hover:bg-fd-accent',
            )}
          >
            {i + 1}. {step.props.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="[&>:first-child]:mt-0 [&>:last-child]:mb-0"
        >
          {current}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
```

`Step` renders only its children. Its `title` is read by the parent to label the buttons.

- [ ] **Step 5: Export everything**

Replace `components/lecture/index.ts`:

```ts
export { KeyIdea, Why, Analogy, Pitfall, Example, Recap } from './blocks';
export { Term } from './term';
export { Figure } from './figure';
export { Compare, Wrong, Right } from './compare';
export { Quiz } from './quiz';
export { StepThrough, Step } from './step-through';
```

`components/mdx.tsx` already spreads this module, so nothing there changes.

- [ ] **Step 6: Exercise the new components**

Append to `content/2110506-sds/index.mdx`:

```mdx
<Figure number={1} caption="ตัวอย่างรูปประกอบ วาดเป็น SVG ใช้สีจาก theme">
  <svg viewBox="0 0 240 60" className="w-full max-w-sm mx-auto">
    <rect x="4" y="14" width="90" height="32" rx="6" fill="none" stroke="currentColor" />
    <rect x="146" y="14" width="90" height="32" rx="6" fill="none" stroke="currentColor" />
    <line x1="94" y1="30" x2="146" y2="30" stroke="currentColor" />
    <text x="49" y="34" textAnchor="middle" fontSize="12" fill="currentColor">Module A</text>
    <text x="191" y="34" textAnchor="middle" fontSize="12" fill="currentColor">Module B</text>
  </svg>
</Figure>

<Compare>
  <Wrong>เรียก database ตรงจาก UI</Wrong>
  <Right>ให้ UI คุยกับ service layer แล้ว service คุยกับ database</Right>
</Compare>

<StepThrough>
  <Step title="รับ request">ผู้ใช้กดปุ่ม ระบบรับ request เข้ามา</Step>
  <Step title="ตรวจสิทธิ์">ระบบเช็คว่าผู้ใช้มีสิทธิ์ทำสิ่งนี้ไหม</Step>
  <Step title="ตอบกลับ">ระบบส่งผลลัพธ์กลับไป</Step>
</StepThrough>

<Quiz question="ทำไม coupling ต่ำถึงดีกว่า">
แก้โมดูลหนึ่งแล้วไม่ต้องตามไปแก้โมดูลอื่น
</Quiz>
```

`currentColor` in the SVG inherits the text color, so the diagram flips with the theme
without a second asset.

- [ ] **Step 7: Verify**

```bash
pnpm check
```

Expected: PASS.

```bash
pnpm dev
```

Open `http://localhost:3000/2110506-sds`. With the Playwright tools:
1. Screenshot the page.
2. Click the `2. ตรวจสิทธิ์` button and screenshot again — the panel content must change.
3. Click the Quiz summary and screenshot — the answer must appear.
4. Switch to dark mode and screenshot — the SVG strokes must still be visible.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
feat: visual and interactive lecture components

Adds Figure, Compare, Quiz, and StepThrough. Quiz uses a native
details element so it needs no JavaScript. StepThrough is the only
client component, animated with motion.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01VJVzAQ8HGxUs82xd4yEqkB
EOF
)"
```

---

## Task 6: Landing page listing the courses

**Files:**
- Create: `lib/courses.ts`
- Modify: `app/(home)/page.tsx`
- Verify: `pnpm check`, then browser

**Interfaces:**
- Consumes: `source` from `@/lib/source`
- Produces: `courses: Course[]` and `countLectures(slug: string): number` from `@/lib/courses`

A landing page needs copy and ordering that the content tree does not carry, so the course
list is a small hand-written registry rather than something derived from the page tree.
Lecture counts still come from `source`, so they cannot drift.

- [ ] **Step 1: Write the registry**

`lib/courses.ts`:

```ts
import { source } from '@/lib/source';

export type Course = {
  slug: string;
  code: string;
  name: string;
  nameTh: string;
  description: string;
};

export const courses: Course[] = [
  {
    slug: '2110506-sds',
    code: '2110506',
    name: 'Software Design and Specification',
    nameTh: 'การออกแบบและระบุรายละเอียดซอฟต์แวร์',
    description: 'ออกแบบซอฟต์แวร์ให้แก้ง่าย ทดสอบได้ และอธิบายให้คนอื่นเข้าใจ',
  },
];

// number of lecture pages in a course, not counting its index page
export function countLectures(slug: string): number {
  return source.getPages().filter((page) => page.slugs[0] === slug && page.slugs.length > 1).length;
}
```

- [ ] **Step 2: Write the landing page**

Replace `app/(home)/page.tsx`:

```tsx
import Link from 'next/link';
import { courses, countLectures } from '@/lib/courses';

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">CEDTAN</h1>
      <p className="mt-2 text-fd-muted-foreground">
        สรุปเนื้อหา lecture แต่ละคาบ อ่านแล้วเข้าใจ ไม่ต้องมีพื้นฐานมาก่อน
      </p>

      <div className="mt-10 grid gap-4">
        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/${course.slug}`}
            className="rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:bg-fd-accent"
          >
            <div className="text-sm text-fd-muted-foreground">{course.code}</div>
            <div className="mt-1 text-lg font-semibold">{course.name}</div>
            <div className="text-sm text-fd-muted-foreground">{course.nameTh}</div>
            <p className="mt-2 text-sm">{course.description}</p>
            <div className="mt-3 text-sm text-fd-muted-foreground">
              {countLectures(course.slug)} คาบ
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Verify**

```bash
pnpm check
```

Expected: PASS.

```bash
pnpm dev
```

Open `http://localhost:3000/` and screenshot.

Expected: one course card. The lecture count reads `0 คาบ` right now, because only
`index.mdx` exists. Click the card and land on `/2110506-sds`.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
feat: landing page listing courses

Course copy lives in a small registry so the landing page can say more
than the content tree knows. Lecture counts are read from the content
source, so they cannot drift.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01VJVzAQ8HGxUs82xd4yEqkB
EOF
)"
```

---

## Task 7: README.md and AGENTS.md

**Files:**
- Create: `README.md` (overwrite the scaffold's), `AGENTS.md`
- Verify: read both back and check every command in them actually runs

**Interfaces:**
- Consumes: nothing
- Produces: nothing importable

AGENTS.md is the contract a future agent reads before writing a lecture. It is the most
load-bearing file in the repo: everything else can be re-derived from the code, but the
quality bar cannot.

- [ ] **Step 1: Write README.md**

Overwrite `README.md`:

````markdown
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

Runs `next typegen`, `tsc --noEmit`, `eslint .`, and `next build`. This is the only test
suite. There are no unit tests: the repo holds content and presentation, not logic.

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

## Adding a lecture

See [AGENTS.md](./AGENTS.md).

## Deploy

Vercel, Next.js preset, `pnpm build`. No environment variables.
````

- [ ] **Step 2: Write AGENTS.md**

Create `AGENTS.md`:

````markdown
# AGENTS.md

How to add a lecture summary to CEDTAN.

## The job

Turn one PDF of lecture slides into one MDX page that a student can read instead of the
slides — and understand better than the slides.

Not a shorter version of the slides. A better explanation of the same material.

## Steps

1. Confirm the PDF is at `data/<COURSE-CODE>/Lecture-N.pdf`.
2. Read every page of the PDF. The Read tool takes at most 20 pages per call, so a 60-page
   deck is three calls. Do not skim, and do not stop at the first call.
3. Write a coverage list before writing any prose: every topic on the slides that the page
   must contain. Keep it visible while you write and tick items off.
4. Write `content/<course>/lecture-<n>.mdx`.
5. Draw any diagram you need into `components/figures/<course>/<name>.tsx` and use it inside
   `<Figure>`.
6. Add the page to `"pages"` in `content/<course>/meta.json`.
7. Run `pnpm check`. It must pass.
8. Open the page in a browser and read it end to end in both light and dark mode.

## Quality bar

Every one of these is a blocker, not a preference.

- **Cover everything.** Every topic on the slides appears on the page. Do not skip a slide
  because it looks minor. Do not compress until the meaning is gone.
- **Reason before definition.** Open each concept with the problem it solves (`<Why>`), then
  say what it is. A definition with no motivation is the thing the slides already do badly.
- **One concrete example per abstract idea.** At least one `<Example>` with real input and
  real output. No example means the idea is not explained yet.
- **Assume no background.** If a term needs earlier knowledge, explain that first or link to
  the lecture that covers it.
- **Thai prose, English terms.** Explain in Thai. Keep standard technical terms in English.
  Wrap the first use of each term in `<Term en="..." th="..." />`.
- **End with `<Recap>`.** Bullets a student can read the night before an exam.

## Frontmatter

```yaml
---
title: "Lecture 1 — Introduction to Software Design"
description: "หนึ่งประโยคว่าคาบนี้ตอบคำถามอะไร"
lecture: 1
source: "data/2110506-SDS/Lecture-1.pdf"
readingMinutes: 25
---
```

`title` and `description` are required. The rest are optional. A wrong type fails the build.

## Components

Registered globally. Use them in MDX with no import line.

| Component | Use it for |
| --- | --- |
| `<KeyIdea>` | The one sentence to remember. |
| `<Why>` | The problem the concept solves. Comes before the definition. |
| `<Analogy>` | Everyday comparison. |
| `<Example title="...">` | Concrete case with input and output. |
| `<Pitfall>` | A mistake people make here. |
| `<Term en="Coupling" th="..." />` | First use of an English term. |
| `<Figure number={1} caption="...">` | Wraps a diagram. |
| `<Compare><Wrong>…</Wrong><Right>…</Right></Compare>` | Wrong way vs right way. |
| `<StepThrough><Step title="...">…</Step></StepThrough>` | A process, one step at a time. |
| `<Quiz question="...">` | Self-check, answer hidden. |
| `<Recap>` | Bullet summary at the end. |

From Fumadocs, also available: `<Callout>`, `<Tabs>`, `<Steps>`, `<Accordion>`, `<Files>`,
and fenced code blocks with syntax highlighting.

## Diagrams

Hand-written inline SVG in `components/figures/<course>/`. One file per diagram.

Use `stroke="currentColor"` and `fill="currentColor"`, or a Fumadocs theme variable. Never a
hard-coded hex. A hard-coded color disappears in one of the two themes.

Never extract an image from the slides. It cannot be re-themed and it is the lecturer's work.

## Rules that are easy to break by accident

- Never commit anything under `data/`.
- Never add a page to `meta.json` before its `.mdx` file exists — a missing file is dropped
  silently, so the typo is invisible.
- `next lint` does not exist in Next.js 16. Lint with `eslint .`.
- Comments in code: one line, saying what the block does.
````

- [ ] **Step 3: Verify every command in the docs actually runs**

```bash
cd /home/tanakrit/projects/CEDTAN
pnpm check
```

Expected: PASS. If `pnpm check` fails, the README is lying and must be fixed before commit.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
docs: add README and AGENTS contract

README covers how to run, check, and deploy the site. AGENTS.md is the
contract for writing a lecture summary: the steps, the quality bar, the
component list, and the mistakes that are easy to make by accident.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01VJVzAQ8HGxUs82xd4yEqkB
EOF
)"
```

---

## Task 8: First real content — the SDS course overview

**Files:**
- Modify: `content/2110506-sds/index.mdx`
- Read: `data/2110506-SDS/Syllabus.pdf`, `data/2110506-SDS/Administrivia.pdf`
- Verify: `pnpm check`, then browser

**Interfaces:**
- Consumes: every component from Tasks 4 and 5
- Produces: nothing importable

This replaces the component test page with real content, and is the first end-to-end run of
the workflow in AGENTS.md.

- [ ] **Step 1: Read the source PDFs**

```bash
ls -la data/2110506-SDS/
```

Read `Syllabus.pdf` and `Administrivia.pdf` in full with the Read tool. They are small —
165 KB and 1.5 MB.

- [ ] **Step 2: Write the coverage list**

Write down every item the overview must carry, taken from the two PDFs. At minimum:
course goals, topic list by week, grading breakdown, assignments and their weights, exam
dates, textbook, and any policy the lecturer called out (late work, attendance, group size).

- [ ] **Step 3: Write the page**

Rewrite `content/2110506-sds/index.mdx` against the coverage list. Frontmatter:

```yaml
---
title: 2110506 Software Design and Specification
description: ภาพรวมวิชา วิธีวัดผล และสารบัญเนื้อหาแต่ละคาบ
source: "data/2110506-SDS/Syllabus.pdf"
---
```

Open with `<KeyIdea>` saying what the course is for in one sentence. Put the grading
breakdown in a table. Close with `<Recap>`.

Do not invent a fact that is not in the PDFs. If the syllabus does not state something,
leave it out.

- [ ] **Step 4: Verify**

```bash
pnpm check
```

Expected: PASS.

```bash
pnpm dev
```

Open `http://localhost:3000/2110506-sds` and read the whole page. Check it against the
coverage list from Step 2: every item present, nothing invented.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
content: 2110506 SDS course overview

Course goals, weekly topics, grading, and policies, taken from the
syllabus and administrivia slides.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01VJVzAQ8HGxUs82xd4yEqkB
EOF
)"
```

---

## Task 9: Deploy to Vercel

**Files:**
- Modify: `lib/shared.ts` if the GitHub repo name differs from the assumption in Task 2
- Verify: the deployed URL loads

**Interfaces:**
- Consumes: a working `pnpm build`
- Produces: a public URL

- [ ] **Step 1: Confirm the build output one more time**

```bash
cd /home/tanakrit/projects/CEDTAN
pnpm check
```

Expected: PASS.

- [ ] **Step 2: Ask the user before anything leaves the machine**

Deploying publishes the content. Ask the user to confirm:
- the GitHub repository to push to (or that they want Vercel CLI deploy with no repo),
- whether the site should be public.

Do not push and do not deploy until they answer.

- [ ] **Step 3: Deploy**

After the user confirms, either connect the GitHub repo in the Vercel dashboard (framework
preset: Next.js, install command: `pnpm install`, build command: `pnpm build`), or run:

```bash
pnpm dlx vercel@latest
```

and follow the prompts. No environment variables are needed.

- [ ] **Step 4: Verify the deployment**

Open the deployment URL. Check:
- `/` lists the course,
- `/2110506-sds` renders,
- the search dialog opens with `Ctrl+K` and finds a word from the overview page,
- dark mode toggles.

- [ ] **Step 5: Commit any config change**

```bash
git add -A
git commit -m "$(cat <<'EOF'
chore: deployment config for Vercel

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01VJVzAQ8HGxUs82xd4yEqkB
EOF
)"
```

---

## Out of scope for this plan

Writing the summaries for Lecture 1 through Lecture 5. Each lecture is its own unit of work
and follows AGENTS.md. Start them once this plan is done and the pipeline is proven by the
course overview page.

The second course `2110413-CSY` has no PDFs yet. When it does, add a folder under `content/`
and an entry in `lib/courses.ts`. No code change is needed.
