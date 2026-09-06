export type StepDirection = 1 | -1;

export const stepPanelVariants = {
  enter: (direction: StepDirection) => ({
    opacity: 0,
    x: direction > 0 ? 8 : -8,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: StepDirection) => ({
    opacity: 0,
    x: direction > 0 ? -8 : 8,
  }),
};

export function progressScale(percent: number): number {
  return Math.min(1, Math.max(0, percent / 100));
}
