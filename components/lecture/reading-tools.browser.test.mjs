// drives the reading tools on the built site in Chromium: run `pnpm build` first, then `pnpm test:browser`
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { after, before, test } from 'node:test';
import { chromium } from 'playwright-core';

const PORT = 3102;
const URL = `http://localhost:${PORT}/2110413-csy/lecture-3`;
const PHONE = { width: 390, height: 844 };
const DESKTOP = { width: 1440, height: 900 };

let server;
let browser;

before(async () => {
  assert.ok(existsSync('.next/BUILD_ID'), 'no production build: run `pnpm build` first');
  server = spawn('pnpm', ['exec', 'next', 'start', '-p', String(PORT)], { stdio: 'ignore', detached: true });
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(URL)).ok) break;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  browser = await chromium.launch();
});

after(async () => {
  await browser?.close();
  if (server) process.kill(-server.pid);
});

async function open(viewport) {
  const page = await browser.newPage({ viewport });
  await page.goto(URL, { waitUntil: 'networkidle' });
  return page;
}

// opens the phone toc popover and returns its trigger
async function openPopover(page) {
  const trigger = page.locator('[data-toc-popover-trigger]');
  await trigger.click();
  await assert.doesNotReject(() => page.locator('[data-toc-popover-content]').waitFor({ state: 'visible' }));
  return trigger;
}

async function settle(page) {
  await page.waitForFunction(
    () =>
      new Promise((done) => {
        let last = window.scrollY;
        setTimeout(() => done(window.scrollY === last), 250);
      }),
    undefined,
    { polling: 300 },
  );
}

for (const label of ['ข้ามไปสรุป', 'กลับขึ้นบนสุด', 'เปิดกล่องที่พับไว้ทั้งหมด']) {
  test(`phone: tapping ${label} in the toc popover closes the popover`, async () => {
    const page = await open(PHONE);
    if (label === 'กลับขึ้นบนสุด') await page.evaluate(() => window.scrollTo(0, 4000));
    const trigger = await openPopover(page);
    await page.locator('[data-toc-popover]').getByText(label).click();
    await page.waitForTimeout(400);
    assert.equal(await trigger.getAttribute('aria-expanded'), 'false');
    await page.close();
  });
}

test('phone: the fold toggle in the popover still opens every fold', async () => {
  const page = await open(PHONE);
  await openPopover(page);
  await page.locator('[data-toc-popover]').getByText('เปิดกล่องที่พับไว้ทั้งหมด').click();
  const shut = await page.locator('#nd-page details[data-fold]:not([open])').count();
  assert.equal(shut, 0);
  await page.close();
});

test('phone: after skipping to the recap, its label sits below the sticky bars', async () => {
  const page = await open(PHONE);
  await openPopover(page);
  await page.locator('[data-toc-popover]').getByText('ข้ามไปสรุป').click();
  await settle(page);
  const { recapTop, barsBottom } = await page.evaluate(() => ({
    recapTop: document.getElementById('recap').getBoundingClientRect().top,
    barsBottom: document.querySelector('[data-toc-popover]').getBoundingClientRect().bottom,
  }));
  assert.ok(recapTop >= barsBottom, `recap top ${recapTop}px is under the bars ending at ${barsBottom}px`);
  await page.close();
});

test('desktop: skipping to the recap from the rail lands it in view and opens no popover', async () => {
  const page = await open(DESKTOP);
  await page.locator('#nd-toc').getByText('ข้ามไปสรุป').click();
  await settle(page);
  const top = await page.evaluate(() => document.getElementById('recap').getBoundingClientRect().top);
  assert.ok(top >= 0 && top < 200, `recap top is ${top}px`);
  assert.equal(await page.locator('[data-toc-popover-trigger]').getAttribute('aria-expanded'), 'false');
  await page.close();
});
