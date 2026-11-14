import assert from 'node:assert/strict';
import test from 'node:test';

const { lectureNumber, compareLectures, countClasses } = await import('./lecture-order.ts');
const { stripNumber } = await import('../components/home/strip.ts');

test('a lecture split into parts shows its part after a dot', () => {
  assert.equal(lectureNumber({ lecture: 8 }), '8');
  assert.equal(lectureNumber({ lecture: 8, part: 2 }), '8.2');
  assert.equal(lectureNumber({}), '');
});

test('lectures sort by number, then by part', () => {
  const pages = [{ lecture: 9 }, { lecture: 8, part: 2 }, { lecture: 10 }, { lecture: 8, part: 1 }];
  assert.deepEqual(pages.sort(compareLectures).map(lectureNumber), ['8.1', '8.2', '9', '10']);
});

test('the parts of one lecture count as one class', () => {
  assert.equal(countClasses([{ lecture: 8, part: 1 }, { lecture: 8, part: 2 }, { lecture: 9 }]), 2);
});

test('the sidebar number comes off a label, parts included', () => {
  assert.equal(stripNumber('8 · Buffer Overflow'), 'Buffer Overflow');
  assert.equal(stripNumber('8.2 · Secure Bit'), 'Secure Bit');
});
