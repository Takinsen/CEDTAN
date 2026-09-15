import { readFileSync } from 'node:fs';

// words that usually end a sentence about the deck rather than the material
const WORDS = [
  'สไลด์', 'กำกับไว้', 'เขียนกำกับ', 'เปิดคาบมาด้วย', 'เรียงแบบนี้', 'อยู่ใต้หัวเรื่อง', 'ใต้รายการ',
  'ให้มาแค่', 'ยกมาไว้', 'ระบุไว้ว่า', 'เขียนไว้เท่านั้น', 'ตัวพิมพ์ใหญ่', 'บรรทัดล่าง', 'ทิ้งคำถามไว้',
];

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('usage: pnpm narration content/<course>/lecture-<n>.mdx');
  process.exit(1);
}

let hits = 0;
for (const file of files) {
  let inSourceCallout = false;
  readFileSync(file, 'utf8').split('\n').forEach((line, index) => {
    // skip the credit field and the source callout, which name the deck by design
    if (line.startsWith('credit:')) return;
    if (line.includes('title="ข้อมูลในหน้านี้มาจากไหน"')) inSourceCallout = true;
    if (inSourceCallout) {
      if (line.includes('</Callout>')) inSourceCallout = false;
      return;
    }
    const found = WORDS.filter((word) => line.includes(word));
    if (found.length === 0) return;
    hits += 1;
    console.log(`${file}:${index + 1} [${found.join(', ')}] ${line.trim()}`);
  });
}
console.log(`${hits} line(s) to justify as a boundary marker or rewrite`);
