// the three words the lecturer's own definition of security turns on
const PARTS = [
  { x: 40, th: 'ใคร', en: 'Who', note: 'คนที่ขอเข้าถึง' },
  { x: 230, th: 'ทำอะไรได้', en: 'can do what', note: 'สิ่งที่เขาทำได้' },
  { x: 420, th: 'ตอนไหน', en: 'when', note: 'ช่วงเวลาที่อนุญาต' },
];

export function WhoWhatWhen() {
  return (
    <svg
      viewBox="0 0 620 218"
      role="img"
      aria-label="นิยามของ security แยกเป็นสามคำถามคือใคร ทำอะไรได้ และตอนไหน สามคำนี้รวมกันเป็นการปกป้องทรัพยากรจากคนที่ไม่มีสิทธิ์ ณ เวลาหนึ่ง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="26" textAnchor="middle" fontSize="11" opacity="0.8">
        นิยามที่วิชานี้ใช้ — Who can do what when?
      </text>

      {PARTS.map((p) => (
        <g key={p.en}>
          <rect x={p.x} y="48" width="160" height="70" rx="9" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
          <text x={p.x + 80} y="74" textAnchor="middle" fontSize="12" fontWeight="600">
            {p.th}
          </text>
          <text x={p.x + 80} y="96" textAnchor="middle" fontSize="11" opacity="0.75">
            {p.en}
          </text>
          <text x={p.x + 80} y="136" textAnchor="middle" fontSize="11" opacity="0.78">
            {p.note}
          </text>
          <line x1={p.x + 80} y1="146" x2={p.x + 80} y2="162" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" markerEnd="url(#ww-arrow)" />
        </g>
      ))}

      <rect x="40" y="166" width="540" height="42" rx="9" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
      <text x="310" y="192" textAnchor="middle" fontSize="11">
        การปกป้องทรัพยากรจากคนที่ไม่มีสิทธิ์ ณ เวลาหนึ่ง ๆ
      </text>

      <defs>
        <marker id="ww-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
