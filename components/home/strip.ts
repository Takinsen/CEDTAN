// keep a looping strip's offset inside one copy-width, so identical copies make the wrap invisible
export function wrapOffset(x: number, unit: number): number {
  if (unit <= 0) return 0;
  const r = x % unit;
  return r > 0 ? r - unit : r;
}

// index of the item whose centre sits closest to the strip's middle
export function nearestIndex(centers: number[], middle: number): number {
  let best = -1;
  let bestDistance = Infinity;
  centers.forEach((center, i) => {
    const distance = Math.abs(center - middle);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = i;
    }
  });
  return best;
}

// sidebar labels start with the lecture number, which the landing page shows in its own column
export function stripNumber(label: string): string {
  return label.replace(/^\d+\s*·\s*/, '');
}

// ease-in-out cubic for the glide down to the directory
export function easeInOutCubic(t: number): number {
  const k = Math.min(1, Math.max(0, t));
  return k < 0.5 ? 4 * k ** 3 : 1 - (-2 * k + 2) ** 3 / 2;
}

// how far the page has scrolled past the hero, from 0 at the top to 1 once it is gone
export function exitProgress(scrolled: number, heroHeight: number): number {
  if (heroHeight <= 0) return 0;
  return Math.min(1, Math.max(0, scrolled / heroHeight));
}

// how many copies of the course row fill the widest screen with one to spare
export function copiesFor(courseCount: number): number {
  return courseCount < 4 ? 8 : 4;
}
