import assert from 'node:assert/strict';
import test from 'node:test';
import { coinedTerms, mainPathText, proseWarnings, readingMinutes, thaiChars } from './prose.mjs';

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
