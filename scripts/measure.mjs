// prints main-path minutes per part of a page; given an edited copy too, prints before, after and the change
// pnpm measure content/2110413-csy/lecture-8.mdx [/tmp/edited/lecture-8.mdx]
import { readFileSync } from 'node:fs';
import { partMinutes, readingMinutes } from './prose.mjs';

const [before, after] = process.argv.slice(2);
if (!before) {
  console.error('usage: pnpm measure <page.mdx> [<edited copy.mdx>]');
  process.exit(1);
}

const read = (path) => readFileSync(path, 'utf8');
const total = (parts) => Math.round(parts.reduce((sum, p) => sum + p.minutes, 0) * 10) / 10;
const pad = (value, width) => String(value).padStart(width);

const a = partMinutes(read(before));
if (!after) {
  for (const p of a) console.log(`${pad(p.minutes.toFixed(1), 5)}  ${p.part}`);
  console.log(`${pad(total(a).toFixed(1), 5)}  main path (readingMinutes ${readingMinutes(read(before))})`);
  process.exit(0);
}

// parts are matched by heading; a part only one side has shows a blank on the other
const b = partMinutes(read(after));
const names = [...new Set([...a.map((p) => p.part), ...b.map((p) => p.part)])];
const find = (parts, name) => parts.find((p) => p.part === name)?.minutes;
console.log(' before  after  change  part');
for (const name of names) {
  const x = find(a, name);
  const y = find(b, name);
  const change = (y ?? 0) - (x ?? 0);
  console.log(`${pad(x?.toFixed(1) ?? '', 7)}${pad(y?.toFixed(1) ?? '', 7)}${pad(change.toFixed(1), 8)}  ${name}`);
}
console.log(`${pad(total(a).toFixed(1), 7)}${pad(total(b).toFixed(1), 7)}${pad((total(b) - total(a)).toFixed(1), 8)}  main path`);
