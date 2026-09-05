// a rolling update replaces pods a few at a time, so the Service never runs out of endpoints
const STAGES = [
  { title: 'เริ่ม', pods: ['old', 'old', 'old'] },
  { title: 'ระหว่างทาง', pods: ['new', 'old', 'old'] },
  { title: 'เกือบเสร็จ', pods: ['new', 'new', 'old'] },
  { title: 'เสร็จ', pods: ['new', 'new', 'new'] },
];

export function RollingUpdate() {
  return (
    <svg
      viewBox="0 0 620 230"
      role="img"
      aria-label="การอัปเดตแบบทยอยเปลี่ยน pod ทีละตัวจากรุ่นเก่าไปรุ่นใหม่ โดย Service ยังมี pod ให้ส่งงานตลอดเวลา"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {STAGES.map((s, si) => {
        const x0 = 18 + si * 152;
        return (
          <g key={s.title}>
            <text x={x0 + 62} y="22" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.85">
              {s.title}
            </text>
            <rect x={x0} y="32" width="124" height="30" rx="6" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
            <text x={x0 + 62} y="51" textAnchor="middle" fontSize="11" fontWeight="600">
              Service
            </text>

            {s.pods.map((p, pi) => (
              <g key={pi}>
                <line
                  x1={x0 + 62}
                  y1="62"
                  x2={x0 + 30 + pi * 32}
                  y2="84"
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeWidth="1.1"
                />
                <rect
                  x={x0 + 16 + pi * 32}
                  y="84"
                  width="28"
                  height="48"
                  rx="5"
                  fillOpacity={p === 'new' ? 0.32 : 0.1}
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeDasharray={p === 'new' ? undefined : '3 2'}
                />
                <text x={x0 + 30 + pi * 32} y="113" textAnchor="middle" fontSize="11">
                  {p === 'new' ? 'ใหม่' : 'เก่า'}
                </text>
              </g>
            ))}

            {si < 3 && (
              <line
                x1={x0 + 130}
                y1="108"
                x2={x0 + 146}
                y2="108"
                stroke="currentColor"
                strokeOpacity="0.55"
                strokeWidth="1.4"
                markerEnd="url(#ru-arrow)"
              />
            )}
          </g>
        );
      })}

      <text x="310" y="168" textAnchor="middle" fontSize="11" opacity="0.8">
        ทุกช่วงเวลามี pod พร้อมรับงานเสมอ ผู้ใช้จึงไม่เห็นระบบล่ม
      </text>
      <text x="310" y="192" textAnchor="middle" fontSize="11" opacity="0.78">
        ค่าปริยาย 25% max unavailable กับ 25% max surge คือตัวคุมว่าจะเปลี่ยนทีละกี่ตัว
      </text>
      <text x="310" y="214" textAnchor="middle" fontSize="11" opacity="0.78">
        pod ใหม่ได้ IP ใหม่ทุกครั้ง แต่ที่อยู่ของ Service ไม่เปลี่ยน
      </text>

      <defs>
        <marker id="ru-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
