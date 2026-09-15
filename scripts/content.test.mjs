import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';

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
