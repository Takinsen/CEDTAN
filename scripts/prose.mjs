// Measures and checks on lecture prose, shared by content.test.mjs and pnpm narration.

export const THAI_CHARS_PER_MINUTE = 450;

const FOLDING = /<(Detail|Quiz)((?:\s+[\w-]+(?:="[^"]*")?)*)\s*>|<\/(Detail|Quiz)>/g;

// the text a reader meets without opening anything: frontmatter, Detail bodies and Quiz answers removed
export function mainPathText(mdx) {
  const body = mdx.replace(/^---\n[\s\S]*?\n---\n/, '');
  let out = '';
  let depth = 0;
  let last = 0;
  for (const match of body.matchAll(FOLDING)) {
    if (depth === 0) out += body.slice(last, match.index);
    if (match[1]) {
      if (depth === 0) out += match[0];
      depth += 1;
    } else {
      depth = Math.max(0, depth - 1);
    }
    last = match.index + match[0].length;
  }
  if (depth === 0) out += body.slice(last);
  return out;
}

export function thaiChars(text) {
  return (text.match(/[฀-๿]/g) ?? []).length;
}

export function readingMinutes(mdx) {
  return Math.round(thaiChars(mainPathText(mdx)) / THAI_CHARS_PER_MINUTE);
}

// Thai words made up for, or spelled out from, terms Thai CS students say in English
// left out on purpose: ติดป้าย, บล็อก and สวิตช์ are also everyday Thai; page-editor judges those
const COINED = [
  [/ล้างป้าย/, 'untaint'],
  [/รูปย่อ/, 'thumbnail'],
  [/ไอพี/, 'IP'],
  [/ประตูหลัง/, 'backdoor'],
  [/เครื่องหมายหลีก/, 'escape'],
  [/เส้นความเชื่อ/, 'trust boundary'],
  [/ที่อยู่ขากลับ/, 'return address'],
  [/ตัวชี้(?!วัด)/, 'pointer'],
  [/วงแลน/, 'LAN'],
  [/เฟรมเวิร์ก/, 'framework'],
  [/เฟรม(?!เวิร์ก)/, 'frame'],
  [/แพ็กเก็ต|แพ็คเก็ต/, 'packet'],
  [/พาร์ทิชัน|พาร์ติชัน/, 'partition'],
  [/เซกเตอร์|เซ็กเตอร์/, 'sector'],
  [/ไดเรกทอรี่?/, 'directory'],
];

export function coinedTerms(text) {
  return COINED.flatMap(([pattern, use]) => {
    const match = text.match(pattern);
    return match ? [{ found: match[0], use }] : [];
  });
}

export const MAX_PARAGRAPH_THAI_CHARS = 300;
export const MAX_GLOSSES_PER_PARAGRAPH = 2;
export const MAX_MAIN_PATH_MINUTES = 40;

// a paragraph a reader reads as running prose: not a heading, table, list, quote, code or block tag
function isProse(firstLine) {
  if (/^(#|\||[-*] |>|\d+\. |```)/.test(firstLine)) return false;
  return !firstLine.startsWith('<') || firstLine.startsWith('<Term');
}

// advice for pnpm narration: long paragraphs, paragraphs crowded with glosses, pages past the length budget
export function proseWarnings(mdx) {
  const warnings = [];
  const minutes = readingMinutes(mdx);
  if (minutes > MAX_MAIN_PATH_MINUTES) {
    warnings.push({ line: 1, kind: 'length', detail: `main path ${minutes} min, over ${MAX_MAIN_PATH_MINUTES}` });
  }
  const lines = mdx.split('\n');
  let start = 0;
  if (lines[0] === '---') start = lines.indexOf('---', 1) + 1;
  let inCode = false;
  let para = [];
  const flush = () => {
    if (para.length && isProse(para[0].text)) {
      const text = para.map((p) => p.text).join(' ');
      const chars = thaiChars(text);
      const glosses = (text.match(/<Term\b/g) ?? []).length + (text.match(/\([^)]*[฀-๿][^)]*\)/g) ?? []).length;
      if (chars > MAX_PARAGRAPH_THAI_CHARS) warnings.push({ line: para[0].line, kind: 'long', detail: `${chars} Thai chars` });
      if (glosses > MAX_GLOSSES_PER_PARAGRAPH) warnings.push({ line: para[0].line, kind: 'glosses', detail: `${glosses} glosses` });
    }
    para = [];
  };
  for (let i = start; i < lines.length; i += 1) {
    const text = lines[i];
    if (text.trim().startsWith('```')) {
      flush();
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    if (text.trim() === '') flush();
    else para.push({ line: i + 1, text: text.trim() });
  }
  flush();
  return warnings;
}
