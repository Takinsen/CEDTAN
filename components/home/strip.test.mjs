import assert from 'node:assert/strict';
import test from 'node:test';

const { wrapOffset, nearestIndex, copiesFor } = await import('./strip.ts');

test('a strip offset stays within one copy-width in both directions', () => {
  assert.equal(wrapOffset(-120, 500), -120);
  assert.equal(wrapOffset(-620, 500), -120);
  assert.equal(wrapOffset(80, 500), -420);
  assert.equal(wrapOffset(0, 500), 0);
});

test('a strip with no measured width does not move', () => {
  assert.equal(wrapOffset(-300, 0), 0);
});

test('the item nearest the middle wins, and an empty strip has none', () => {
  assert.equal(nearestIndex([100, 480, 900], 500), 1);
  assert.equal(nearestIndex([], 500), -1);
});

test('fewer courses get more copies so the strip never runs dry', () => {
  assert.equal(copiesFor(2), 8);
  assert.equal(copiesFor(6), 4);
});
