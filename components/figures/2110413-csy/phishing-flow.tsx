// the four steps a phishing attack walks through, with the victim doing step three
const STEPS = [
  { x: 20, a: 'อีเมลปลอม', b: 'อ้างเป็นธนาคาร' },
  { x: 168, a: 'หน้าเว็บปลอม', b: 'หน้าตาเหมือนจริง' },
  { x: 316, a: 'เรากรอกรหัส', b: 'ด้วยมือเราเอง' },
  { x: 464, a: 'คนร้ายเข้าบัญชี', b: 'ใช้รหัสของเราเอง' },
];

export function PhishingFlow() {
  return (
    <svg
      viewBox="0 0 620 244"
      role="img"
      aria-label="ขั้นตอนของ phishing สี่ขั้น เริ่มจากอีเมลปลอม ไปหน้าเว็บปลอม เรากรอกรหัสด้วยมือตัวเอง แล้วคนร้ายเอารหัสนั้นไปเข้าบัญชีจริง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="26" textAnchor="middle" fontSize="11" opacity="0.8">
        สไลด์หน้า 7 ถามว่า ถ้าคุณพิมพ์ username กับ password ลงไป จะเกิดอะไรขึ้น
      </text>

      {STEPS.map((s, i) => (
        <g key={s.a}>
          <rect x={s.x} y="70" width="136" height="76" rx="9" fillOpacity={i === 2 ? 0.22 : 0.11} stroke="currentColor" strokeOpacity={i === 2 ? 0.6 : 0.5} />
          <text x={s.x + 68} y="100" textAnchor="middle" fontSize="11" fontWeight="600">
            {s.a}
          </text>
          <text x={s.x + 68} y="124" textAnchor="middle" fontSize="11" opacity="0.78">
            {s.b}
          </text>
          {i < 3 && (
            <line x1={s.x + 138} y1="108" x2={s.x + 146} y2="108" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" markerEnd="url(#pf-arrow)" />
          )}
        </g>
      ))}

      <text x="310" y="176" textAnchor="middle" fontSize="11" opacity="0.78">
        ช่องทางที่สไลด์ระบุไว้: อีเมล โทรศัพท์ เว็บ และแชท
      </text>
      <text x="310" y="204" textAnchor="middle" fontSize="11" opacity="0.78">
        FBI รายงานปี 2004 ว่าใน 12 เดือนมีอีเมลหลอกลวงถูกแจ้ง 57 ล้านฉบับ
      </text>
      <text x="310" y="228" textAnchor="middle" fontSize="11" opacity="0.78">
        มูลค่าสินค้าและบริการที่เสียไป 1.2 พันล้านดอลลาร์ ความเสียหายรวมประเมินไว้ 5 หมื่นล้าน
      </text>

      <defs>
        <marker id="pf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
