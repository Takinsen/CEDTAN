// one stack frame of func(): strcpy fills b[128] from the low end, and anything past 128 bytes lands on the slots above it
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

const SLOTS = [
  { x: 20, w: 155, name: 'char b[128]', role: 'buffer', control: false },
  { x: 175, w: 125, name: 'fp, foo', role: 'ชี้ไปหาโค้ด', control: true },
  { x: 300, w: 50, name: 'j', role: 'int', control: false },
  { x: 350, w: 85, name: 'saved EBP', role: 'frame pointer', control: false },
  { x: 435, w: 95, name: 'return addr', role: 'ที่อยู่ขากลับ', control: true },
  { x: 530, w: 70, name: 'p, i', role: 'อาร์กิวเมนต์', control: false },
];

export function StackFrameOverflow() {
  return (
    <svg
      viewBox="0 0 620 250"
      role="img"
      aria-label="stack frame ของฟังก์ชัน func เรียงจากที่อยู่ต่ำไปสูง คือ buffer b ขนาด 128 ไบต์ ตัวชี้ฟังก์ชัน fp และวัตถุ foo ซึ่งมีตัวชี้ไปหาโค้ด ตัวแปร j ชนิด int saved EBP ที่อยู่ขากลับ และอาร์กิวเมนต์ ช่องที่แรเงาเป็นข้อมูลควบคุมคือ fp, foo และที่อยู่ขากลับ ส่วน j, saved EBP และอาร์กิวเมนต์ไม่แรเงา strcpy เขียนจาก b ไปทางที่อยู่สูง ถ้าข้อมูลยาวเกิน 128 ไบต์ก็ทับช่องที่อยู่ถัดไปทั้งหมด"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="20" y="28" fontSize="11" opacity="0.78">ที่อยู่ต่ำ</text>
      <text x="600" y="28" fontSize="11" opacity="0.78" textAnchor="end">ที่อยู่สูง</text>

      {SLOTS.map((s) => (
        <g key={s.name}>
          <rect
            x={s.x}
            y="44"
            width={s.w}
            height="56"
            fillOpacity={s.control ? 0.26 : 0.08}
            stroke="currentColor"
            strokeOpacity="0.6"
          />
          <text x={s.x + s.w / 2} y="68" textAnchor="middle" fontSize="12" fontFamily={MONO} fontWeight="600">
            {s.name}
          </text>
          <text x={s.x + s.w / 2} y="88" textAnchor="middle" fontSize="11" opacity="0.8">
            {s.role}
          </text>
        </g>
      ))}

      <rect x="20" y="118" width="16" height="12" fillOpacity="0.26" stroke="currentColor" strokeOpacity="0.6" />
      <text x="44" y="128" fontSize="11" fontWeight="600">
        ช่องแรเงา = ข้อมูลควบคุม ค่าที่ตัดสินว่าโปรแกรมจะกระโดดไปไหนต่อ
      </text>
      <rect x="20" y="138" width="16" height="12" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.6" />
      <text x="44" y="148" fontSize="11" opacity="0.8">
        ช่องจาง = ไม่ใช่ที่อยู่ของโค้ด แต่ถูกทับได้เหมือนกัน
      </text>

      <line x1="24" y1="176" x2="520" y2="176" stroke="currentColor" strokeOpacity="0.7" strokeWidth="2" markerEnd="url(#sfo-arrow)" />
      <text x="24" y="198" fontSize="11" fontFamily={MONO}>strcpy(b, p)</text>
      <text x="24" y="218" fontSize="11" opacity="0.8">
        เขียนไปทางที่อยู่สูงทีละไบต์ จนเจอ \0 ตัวแรกใน p โดยไม่รู้ว่า b ยาวแค่ 128
      </text>
      <text x="24" y="238" fontSize="11" opacity="0.8">
        ไบต์ที่ 129 เป็นต้นไปจึงทับ fp, foo และ j ทับ saved EBP แล้วทับที่อยู่ขากลับ
      </text>

      <defs>
        <marker id="sfo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.8" />
        </marker>
      </defs>
    </svg>
  );
}
