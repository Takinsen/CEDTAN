import assert from 'node:assert/strict';
import test from 'node:test';

let motionValues;
try {
  motionValues = await import('./motion-values.ts');
} catch {
  motionValues = undefined;
}

function requireMotionValues() {
  assert.ok(motionValues, 'motion-values.ts must expose the animation behavior');
  return motionValues;
}

test('a forward step enters from the right and exits to the left', () => {
  const { stepPanelVariants } = requireMotionValues();

  assert.deepEqual(stepPanelVariants.enter(1), { opacity: 0, x: 8 });
  assert.deepEqual(stepPanelVariants.exit(1), { opacity: 0, x: -8 });
});

test('a backward step enters from the left and exits to the right', () => {
  const { stepPanelVariants } = requireMotionValues();

  assert.deepEqual(stepPanelVariants.enter(-1), { opacity: 0, x: -8 });
  assert.deepEqual(stepPanelVariants.exit(-1), { opacity: 0, x: 8 });
});

test('reading progress converts percentages to a bounded scale', () => {
  const { progressScale } = requireMotionValues();

  assert.equal(progressScale(-5), 0);
  assert.equal(progressScale(45), 0.45);
  assert.equal(progressScale(120), 1);
});
