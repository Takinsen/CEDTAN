import assert from 'node:assert/strict';
import test from 'node:test';

const { lectureNumber, compareLectures, countClasses, stripNumber } = await import('./lecture-order.ts');

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

const { groupParts } = await import('./lecture-order.ts');

test('the parts of a lecture group under one entry, in place, named from part 1', () => {
  const entries = [
    { node: 'a', lecture: 7, label: '7 · PKI' },
    { node: 'b', lecture: 8, part: 1, label: '8.1 · Defenses', lectureTitle: 'Buffer Overflow' },
    { node: 'c', lecture: 8, part: 2, label: '8.2 · Secure Bit' },
    { node: 'd', lecture: 10, label: '10 · Physical Security' },
  ];
  assert.deepEqual(groupParts(entries), [
    { kind: 'page', node: 'a' },
    { kind: 'lecture', name: '8 · Buffer Overflow', parts: [{ node: 'b', name: 'ตอน 1 · Defenses' }, { node: 'c', name: 'ตอน 2 · Secure Bit' }] },
    { kind: 'page', node: 'd' },
  ]);
});

test('a lecture without parts, or a page without a lecture number, stays as it is', () => {
  assert.deepEqual(groupParts([{ node: 'x' }, { node: 'y', lecture: 1, label: '1 · Intro' }]), [
    { kind: 'page', node: 'x' },
    { kind: 'page', node: 'y' },
  ]);
});

const { neighboursOf } = await import('./lecture-order.ts');

test('previous and next skip a page listed twice, as part 1 is under its lecture entry', () => {
  const list = [{ url: '/7' }, { url: '/8', name: 'lecture' }, { url: '/8', name: 'part 1' }, { url: '/8-2' }, { url: '/9' }];
  assert.deepEqual(neighboursOf(list, '/8'), { previous: { url: '/7' }, next: { url: '/8-2' } });
  assert.deepEqual(neighboursOf(list, '/8-2'), { previous: { url: '/8', name: 'lecture' }, next: { url: '/9' } });
  assert.deepEqual(neighboursOf(list, '/x'), {});
});
