import assert from 'node:assert/strict';
import test from 'node:test';

const { wrapOffset, nearestIndex, copiesFor, easeInOutCubic, exitProgress } = await import('./strip.ts');

test('the glide starts still, passes the midpoint at half, and lands exactly', () => {
  assert.equal(easeInOutCubic(0), 0);
  assert.equal(easeInOutCubic(0.5), 0.5);
  assert.equal(easeInOutCubic(1), 1);
  assert.ok(easeInOutCubic(0.1) < 0.1);
  assert.equal(easeInOutCubic(1.4), 1);
});

test('exit progress runs from 0 to 1 across the hero height and stays clamped', () => {
  assert.equal(exitProgress(0, 800), 0);
  assert.equal(exitProgress(200, 800), 0.25);
  assert.equal(exitProgress(1600, 800), 1);
  assert.equal(exitProgress(-40, 800), 0);
  assert.equal(exitProgress(300, 0), 0);
});

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
