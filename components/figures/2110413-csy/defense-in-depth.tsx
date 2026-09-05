// one broken layer is not a broken system, as long as the next layer still stands
const WALLS = [
  { x: 150, name: 'firewall', state: 'ถูกเจาะแล้ว', broken: true },
  { x: 280, name: 'แยกเครือข่าย', state: 'หยุดไว้ตรงนี้', broken: false },
  { x: 400, name: 'สิทธิ์ขั้นต่ำ', state: 'ยังไม่ถึง', broken: false },
];

export function DefenseInDepth() {
  return (
    <svg
      viewBox="0 0 620 230"
      role="img"
      aria-label="ผู้โจมตีเจาะชั้นแรกผ่านไปได้ แต่ถูกชั้นที่สองหยุดไว้ ยังเหลือชั้นที่สามที่ยังไม่ถูกแตะ ข้อมูลจึงยังปลอดภัย"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="18" y="80" width="92" height="44" rx="7" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.6" />
      <text x="64" y="107" textAnchor="middle" fontSize="11" fontWeight="600">
        ผู้โจมตี
      </text>

      {WALLS.map((w) => (
        <g key={w.name}>
          <text x={w.x + 12} y="32" textAnchor="middle" fontSize="11" opacity="0.8">
            {w.name}
          </text>
          <rect
            x={w.x}
            y="44"
            width="24"
            height="116"
            rx="4"
            fillOpacity={w.broken ? 0.05 : 0.28}
            stroke="currentColor"
            strokeOpacity={w.broken ? 0.5 : 0.65}
            strokeDasharray={w.broken ? '4 3' : undefined}
          />
          <text x={w.x + 12} y="182" textAnchor="middle" fontSize="11" opacity="0.75">
            {w.state}
          </text>
        </g>
      ))}

      <line x1="112" y1="102" x2="272" y2="102" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" markerEnd="url(#dd-arrow)" />
      <path
        d="M286 90l16 24M302 90l-16 24"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.75"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <rect x="460" y="80" width="140" height="44" rx="7" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
      <text x="530" y="107" textAnchor="middle" fontSize="11" fontWeight="600">
        ข้อมูลของเรา
      </text>

      <text x="310" y="216" textAnchor="middle" fontSize="11" opacity="0.78">
        ชั้นเดียวพังไม่ได้แปลว่าระบบพัง ตราบใดที่ยังมีชั้นถัดไปรออยู่
      </text>

      <defs>
        <marker id="dd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
