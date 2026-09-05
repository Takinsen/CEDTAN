// the three families of proof a system can ask for, and the weakness each family carries
const FACTORS = [
  {
    x: 20,
    en: 'What do you know?',
    th: 'สิ่งที่คุณรู้',
    items: ['รหัสผ่าน / passphrase', 'คำถามที่นัดกันไว้', 'one-time pad', 'challenge-response'],
    weak: 'จุดอ่อน: ถูกเดาได้',
  },
  {
    x: 220,
    en: 'What do you have?',
    th: 'สิ่งที่คุณถือ',
    items: ['บัตร ตรา (token)', 'smart token', 'ลายนิ้วมือ ม่านตา', 'เสียง จังหวะพิมพ์'],
    weak: 'จุดอ่อน: ทำหาย ถูกปลอม',
  },
  {
    x: 420,
    en: 'Who do you trust?',
    th: 'คนที่คุณเชื่อ',
    items: ['Facebook / Google Login', 'ChulaSSO', 'อยู่ในเขตที่ไว้ใจ', 'แต่งตัวเหมือนนิสิต'],
    weak: 'จุดอ่อน: เชื่อคนกลาง',
  },
];

export function ThreeFactors() {
  return (
    <svg
      viewBox="0 0 620 258"
      role="img"
      aria-label="วิธีพิสูจน์ตัวตนสามกลุ่ม คือสิ่งที่คุณรู้ สิ่งที่คุณถือ และคนที่คุณเชื่อ แต่ละกลุ่มมีจุดอ่อนของตัวเอง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="24" textAnchor="middle" fontSize="11" opacity="0.8">
        ไม่มีวิธีไหนสมบูรณ์แบบ ทุกวิธีมีทั้งจุดแข็งและจุดอ่อน
      </text>

      {FACTORS.map((f) => (
        <g key={f.en}>
          <rect x={f.x} y="48" width="180" height="164" rx="10" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
          <text x={f.x + 16} y="74" fontSize="12" fontWeight="600">
            {f.en}
          </text>
          <text x={f.x + 16} y="96" fontSize="11" opacity="0.78">
            {f.th}
          </text>
          {f.items.map((item, i) => (
            <text key={item} x={f.x + 16} y={126 + i * 22} fontSize="11" opacity="0.85">
              {item}
            </text>
          ))}
          <text x={f.x + 16} y="238" fontSize="11" opacity="0.75">
            {f.weak}
          </text>
        </g>
      ))}
    </svg>
  );
}
