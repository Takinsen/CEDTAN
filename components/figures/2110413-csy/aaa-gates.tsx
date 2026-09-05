// the three gates every secure system puts in front of a resource, and what breaks without each
const GATES = [
  { x: 108, en: 'Authentication', th: 'พิสูจน์ตัวตน', ask: 'คุณเป็นใคร', gone: 'ใครก็เข้าได้' },
  { x: 278, en: 'Authorization', th: 'ตรวจสิทธิ์', ask: 'คุณมีสิทธิ์ทำไหม', gone: 'ใครก็ทำได้ทุกอย่าง' },
  { x: 448, en: 'Accounting', th: 'บันทึก (Auditing)', ask: 'คุณทำอะไรไปบ้าง', gone: 'เกิดอะไรขึ้นก็ไม่รู้' },
];

export function AaaGates() {
  return (
    <svg
      viewBox="0 0 620 222"
      role="img"
      aria-label="ผู้ใช้ต้องผ่านสามด่านเรียงกัน คือ authentication ที่ถามว่าคุณเป็นใคร authorization ที่ถามว่าคุณมีสิทธิ์ทำไหม และ accounting ที่บันทึกว่าคุณทำอะไรไปบ้าง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="24" textAnchor="middle" fontSize="11" opacity="0.8">
        the AAA of Security — สามด่านที่ระบบปลอดภัยต้องมีครบ
      </text>

      <rect x="18" y="86" width="70" height="44" rx="7" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="53" y="113" textAnchor="middle" fontSize="11" fontWeight="600">
        ผู้ใช้
      </text>

      {GATES.map((g) => (
        <g key={g.en}>
          <rect x={g.x} y="64" width="150" height="88" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
          <text x={g.x + 75} y="86" textAnchor="middle" fontSize="12" fontWeight="600">
            {g.en}
          </text>
          <text x={g.x + 75} y="110" textAnchor="middle" fontSize="11">
            {g.th}
          </text>
          <text x={g.x + 75} y="134" textAnchor="middle" fontSize="11" opacity="0.78">
            {g.ask}
          </text>
          <text x={g.x + 75} y="174" textAnchor="middle" fontSize="11" opacity="0.72">
            {g.gone}
          </text>
        </g>
      ))}

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#aaa-arrow)">
        <line x1="90" y1="108" x2="106" y2="108" />
        <line x1="260" y1="108" x2="276" y2="108" />
        <line x1="430" y1="108" x2="446" y2="108" />
      </g>

      <text x="310" y="204" textAnchor="middle" fontSize="11" opacity="0.78">
        บรรทัดล่างของแต่ละด่านคือสิ่งที่เกิดขึ้น ถ้าระบบขาดด่านนั้นไป
      </text>

      <defs>
        <marker id="aaa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
