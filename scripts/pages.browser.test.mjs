// checks lecture pages on the built site in Chromium and saves every figure in both themes for a human look
// run `pnpm build` first; PAGES="2110413-csy/lecture-8 2110413-csy/lecture-9" pnpm test:pages limits the run
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { after, before, test } from 'node:test';
import { chromium } from 'playwright-core';

const PORT = 3103;
const BASE = `http://localhost:${PORT}`;
const SHOTS = `${tmpdir()}/cedtan-shots`;

const pages = process.env.PAGES
  ? process.env.PAGES.split(/\s+/).filter(Boolean)
  : readdirSync('content', { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .flatMap((entry) => readdirSync(`content/${entry.name}`)
        .filter((file) => /^lecture-\d+\.mdx$/.test(file))
        .map((file) => `${entry.name}/${file.replace(/\.mdx$/, '')}`));

let server;
let browser;

before(async () => {
  assert.ok(existsSync('.next/BUILD_ID'), 'no production build: run `pnpm build` first');
  server = spawn('pnpm', ['exec', 'next', 'start', '-p', String(PORT)], { stdio: 'ignore', detached: true });
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(BASE)).ok) break;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  browser = await chromium.launch();
});

after(async () => {
  await browser?.close();
  if (server) process.kill(-server.pid);
  console.log(`figure screenshots: ${SHOTS}`);
});

for (const slug of pages) {
  for (const theme of ['light', 'dark']) {
    test(`${slug} loads in ${theme} with no errors, and its Recap holds 2-3 quizzes`, async () => {
      const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: theme });
      await context.addInitScript((t) => localStorage.setItem('theme', t), theme);
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
      const response = await page.goto(`${BASE}/${slug}`, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200);
      assert.equal(await page.evaluate(() => document.documentElement.classList.contains('dark')), theme === 'dark');
      const dir = `${SHOTS}/${slug}`;
      mkdirSync(dir, { recursive: true });
      for (const [i, figure] of (await page.locator('figure[data-diagram]').all()).entries()) {
        await figure.screenshot({ path: `${dir}/figure-${i + 1}-${theme}.png` });
      }
      const quizzes = await page.locator('#recap details').count();
      await context.close();
      assert.ok(quizzes >= 2 && quizzes <= 3, `Recap shows ${quizzes} quizzes`);
      assert.deepEqual(errors, []);
    });
  }

  test(`${slug} has no sideways scroll at 400px, folds open`, async () => {
    const context = await browser.newContext({ viewport: { width: 400, height: 800 } });
    const page = await context.newPage();
    await page.goto(`${BASE}/${slug}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelectorAll('details').forEach((d) => { d.open = true; }));
    const [scrollWidth, innerWidth] = await page.evaluate(() => [document.documentElement.scrollWidth, window.innerWidth]);
    assert.ok(scrollWidth <= innerWidth, `page is ${scrollWidth}px wide in a ${innerWidth}px window`);
    await context.close();
  });
}
