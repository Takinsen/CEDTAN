import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';
import { coinedTerms, readingMinutes } from './prose.mjs';

const MAX_ADDED_CODE_LINES = 15;

const courses = readdirSync('content', { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const lectures = courses.flatMap((course) =>
  readdirSync(`content/${course}`)
    .filter((file) => /^lecture-\d+\.mdx$/.test(file))
    .map((file) => ({
      course,
      slug: file.replace(/\.mdx$/, ''),
      path: `content/${course}/${file}`,
      text: readFileSync(`content/${course}/${file}`, 'utf8'),
    })),
);

// count lines inside fenced code blocks, ignoring the fences
function codeLines(mdx) {
  let inside = false;
  let count = 0;
  for (const line of mdx.split('\n')) {
    if (/^\s*```/.test(line)) inside = !inside;
    else if (inside) count += 1;
  }
  return count;
}

test('every page in meta.json has a file, and every lecture file is in meta.json', () => {
  for (const course of courses) {
    const { pages } = JSON.parse(readFileSync(`content/${course}/meta.json`, 'utf8'));
    const named = pages.filter((page) => !page.startsWith('---') && !page.includes('...'));
    for (const page of named) {
      assert.ok(existsSync(`content/${course}/${page}.mdx`), `${course}/meta.json lists "${page}" but ${page}.mdx does not exist`);
    }
    for (const lecture of lectures.filter((l) => l.course === course)) {
      assert.ok(named.includes(lecture.slug), `${lecture.path} is missing from ${course}/meta.json "pages"`);
    }
  }
});

test('every lecture page ends with a Recap', () => {
  for (const lecture of lectures) {
    assert.match(lecture.text, /<Recap>/, `${lecture.path} has no <Recap>, so the สรุปท้ายคาบ link is dead`);
  }
});

test('every added example keeps its visible code and output within the limit', () => {
  for (const lecture of lectures) {
    for (const [block] of lecture.text.matchAll(/<Example added[\s\S]*?<\/Example>/g)) {
      const visible = block.replace(/<Detail[\s\S]*?<\/Detail>/g, '');
      const lines = codeLines(visible);
      const title = block.match(/title="([^"]*)"/)?.[1] ?? '(untitled)';
      assert.ok(lines <= MAX_ADDED_CODE_LINES, `${lecture.path} "${title}" shows ${lines} code lines, limit ${MAX_ADDED_CODE_LINES}`);
    }
  }
});

// a sentence like "ย่อหน้านี้เป็นข้อมูลเสริม" talks to the reviewer, not the student; the <Example added> badge marks added material
test('no prose sentence labels itself as added material', () => {
  const offenders = [];
  for (const lecture of lectures) {
    lecture.text.split('\n').forEach((line, i) => {
      const prose = line.replace(/\w+="[^"]*"/g, '');
      if (/(ข้อมูล|คำอธิบาย)เสริม/.test(prose)) offenders.push(`${lecture.path}:${i + 1}`);
    });
  }
  assert.deepEqual(offenders, [], `delete these marker sentences, or move the added case into <Example added>:\n${offenders.join('\n')}`);
});

// pages written before the Recap-quiz rule; remove a page once its Recap holds its quizzes
const RECAP_QUIZ_PENDING = new Set([
]);

test('every Recap holds two or three quizzes, and the pending list only shrinks', () => {
  for (const lecture of lectures) {
    const recap = lecture.text.match(/<Recap>[\s\S]*?<\/Recap>/)?.[0] ?? '';
    const quizzes = (recap.match(/<Quiz\b/g) ?? []).length;
    const id = `${lecture.course}/${lecture.slug}`;
    if (RECAP_QUIZ_PENDING.has(id)) {
      assert.equal(quizzes, 0, `${id} now has Recap quizzes; remove it from RECAP_QUIZ_PENDING`);
    } else {
      assert.ok(quizzes >= 2 && quizzes <= 3, `${lecture.path} Recap holds ${quizzes} <Quiz>, needs 2 or 3`);
    }
  }
});

// readingMinutes is the main path at one rate, so pages compare; scripts/prose.mjs holds the rate
test('every readingMinutes is within 10% of the main path measured', () => {
  const off = [];
  for (const lecture of lectures) {
    const stated = Number(lecture.text.match(/^readingMinutes: (\d+)/m)?.[1]);
    const measured = readingMinutes(lecture.text);
    if (Math.abs(stated - measured) > Math.max(1, measured * 0.1)) off.push(`${lecture.path}: ${stated}, measured ${measured}`);
  }
  assert.deepEqual(off, [], `set readingMinutes to the measured value:\n${off.join('\n')}`);
});

// students say these terms in English; a Thai coinage or spelling reads as odd (owner's review, 2026-11-12)
test('no page or figure uses a coined Thai name for an English term', () => {
  const files = [];
  const walk = (dir, ext) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = `${dir}/${entry.name}`;
      if (entry.isDirectory()) walk(path, ext);
      else if (path.endsWith(ext)) files.push(path);
    }
  };
  walk('content', '.mdx');
  walk('components/figures', '.tsx');
  const found = files.flatMap((path) =>
    coinedTerms(readFileSync(path, 'utf8')).map(({ found, use }) => `${path}: ${found} -> ${use}`));
  assert.deepEqual(found, [], `write the English term instead:\n${found.join('\n')}`);
});
