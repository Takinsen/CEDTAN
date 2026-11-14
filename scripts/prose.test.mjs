import assert from 'node:assert/strict';
import test from 'node:test';
import { coinedTerms, englishWords, mainPathText, partMinutes, proseWarnings, readingMinutes, thaiChars } from './prose.mjs';

test('main path drops a Detail body but keeps the text around it', () => {
  const mdx = 'ก่อน\n\n<Detail label="ป้าย">\nซ่อน\n</Detail>\n\nหลัง';
  const main = mainPathText(mdx);
  assert.match(main, /ก่อน/);
  assert.match(main, /หลัง/);
  assert.match(main, /ป้าย/);
  assert.doesNotMatch(main, /ซ่อน/);
});

test('main path drops a nested Detail whole', () => {
  const mdx = '<Detail label="a">\nนอก\n<Detail label="b">\nใน\n</Detail>\nท้ายนอก\n</Detail>\nเห็น';
  const main = mainPathText(mdx);
  assert.doesNotMatch(main, /นอก|ใน/);
  assert.match(main, /เห็น/);
});

test('main path keeps a Quiz question and drops its answer', () => {
  const mdx = '<Quiz question="ถามอะไร">\nเฉลยยาว\n</Quiz>\nต่อ';
  const main = mainPathText(mdx);
  assert.match(main, /ถามอะไร/);
  assert.doesNotMatch(main, /เฉลย/);
  assert.match(main, /ต่อ/);
});

test('main path keeps an added example but drops the Detail inside it', () => {
  const mdx = '<Example added title="หัว">\nเห็นได้\n<Detail label="x">\nพับ\n</Detail>\n</Example>';
  const main = mainPathText(mdx);
  assert.match(main, /เห็นได้/);
  assert.doesNotMatch(main, /พับ/);
});

test('main path leaves out the frontmatter', () => {
  const mdx = '---\ndescription: "คำอธิบาย"\n---\nเนื้อหา';
  assert.doesNotMatch(mainPathText(mdx), /คำอธิบาย/);
});

test('thaiChars counts only Thai code points', () => {
  assert.equal(thaiChars('กข abc ค'), 3);
});

test('readingMinutes is main-path Thai characters at 450 per minute, rounded', () => {
  const body = 'ก'.repeat(4500);
  assert.equal(readingMinutes(`${body}\n<Detail label="">\n${'ข'.repeat(9000)}\n</Detail>`), 10);
  assert.equal(readingMinutes('ก'.repeat(700)), 2);
});

test('coinedTerms finds a made-up Thai term and names the English one to use', () => {
  assert.deepEqual(coinedTerms('ข้อมูลถูกล้างป้ายแล้ว'), [{ found: 'ล้างป้าย', use: 'untaint' }]);
  assert.deepEqual(coinedTerms('ส่งเป็นแพ็กเก็ต'), [{ found: 'แพ็กเก็ต', use: 'packet' }]);
});

test('coinedTerms leaves an ordinary Thai word that starts the same way', () => {
  assert.deepEqual(coinedTerms('ตัวชี้วัดของระบบ'), []);
});

test('coinedTerms leaves everyday Thai words that double as terms', () => {
  assert.deepEqual(coinedTerms('กล่องที่ติดป้าย "เสริม"'), []);
  assert.deepEqual(coinedTerms('ไฟร์วอลล์บล็อกการต่อ'), []);
  assert.deepEqual(coinedTerms('เลื่อนสวิตช์บนการ์ด'), []);
});

test('coinedTerms tells framework apart from frame', () => {
  assert.deepEqual(coinedTerms('เฟรมเวิร์กบางตัว'), [{ found: 'เฟรมเวิร์ก', use: 'framework' }]);
});

test('coinedTerms reports each term once per text', () => {
  assert.equal(coinedTerms('แพ็กเก็ต ต่อ แพ็กเก็ต').length, 1);
});

const term = (en) => `<Term en="${en}" th="ความหมาย" />`;

test('proseWarnings flags a prose paragraph over 300 Thai characters, by its line', () => {
  const mdx = `## หัวข้อ\n\n${'ก'.repeat(301)}\n\nสั้น`;
  assert.deepEqual(proseWarnings(mdx), [{ line: 3, kind: 'long', detail: '301 Thai chars' }]);
});

test('proseWarnings flags a paragraph carrying three or more glosses', () => {
  const mdx = `ข้อความ ${term('A')} และ ${term('B')} กับ (คำอธิบาย) ต่อ`;
  assert.deepEqual(proseWarnings(mdx), [{ line: 1, kind: 'glosses', detail: '3 glosses' }]);
});

test('proseWarnings leaves two glosses, tables, lists and code alone', () => {
  const mdx = [`ข้อความ ${term('A')} และ (ไทย)`, '', `| ${'ก'.repeat(400)} |`, '', `- ${'ก'.repeat(400)}`, '', '```', 'ก'.repeat(400), '```'].join('\n');
  assert.deepEqual(proseWarnings(mdx), []);
});

test('proseWarnings flags a page whose main path runs over 40 minutes', () => {
  const mdx = 'ก'.repeat(450 * 41);
  assert.deepEqual(proseWarnings(mdx).filter((w) => w.kind === 'length'), [{ line: 1, kind: 'length', detail: 'main path 41 min, over 40' }]);
});

test('englishWords counts the English words a reader reads', () => {
  assert.equal(englishWords('ใช้ stack และ return address'), 3);
});

test('englishWords skips code blocks, import lines and link targets', () => {
  const mdx = ['import { A } from "@/components/a";', '```', 'gcc -o smash smash.c', '```', '[ดูต่อ](https://example.com/some/path)'].join('\n');
  assert.equal(englishWords(mdx), 0);
});

test('englishWords skips tag and attribute names but counts attribute text a reader sees', () => {
  assert.equal(englishWords('<Figure number={1} caption="stack frame">\n</Figure>'), 2);
  assert.equal(englishWords('<Term en="Canary" th="ค่าเฝ้ายาม" />'), 1);
  assert.equal(englishWords('<Callout type="info" title="หัวข้อ">'), 0);
  assert.equal(englishWords('<Example added title="smash demo">'), 2);
  assert.equal(englishWords('<Quiz question="รัน yes >/dev/null ไหม">'), 3);
});

test('readingMinutes adds English words at 238 a minute to Thai at 450', () => {
  assert.equal(readingMinutes('word '.repeat(476)), 2);
  assert.equal(readingMinutes(`${'ก'.repeat(225)}${' word'.repeat(119)}`), 1);
});

test('readingMinutes leaves out English inside a Detail', () => {
  assert.equal(readingMinutes(`<Detail label="">\n${'word '.repeat(2380)}\n</Detail>`), 0);
});

test('partMinutes splits the main path at each part heading', () => {
  const mdx = `${'ก'.repeat(450)}\n\n## ส่วนที่ 1 — แรก\n\n${'ก'.repeat(900)}\n\n## ส่วนที่ 2 — สอง\n\n${'word '.repeat(238)}`;
  assert.deepEqual(partMinutes(mdx), [
    { part: '(opening)', minutes: 1 },
    { part: 'ส่วนที่ 1 — แรก', minutes: 2 },
    { part: 'ส่วนที่ 2 — สอง', minutes: 1 },
  ]);
});

test('partMinutes ignores a part heading inside a code block', () => {
  const mdx = `ก\n\n\`\`\`\n## not a part\n\`\`\`\n`;
  assert.equal(partMinutes(mdx).length, 1);
});
