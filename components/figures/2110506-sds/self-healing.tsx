// what happens between a pod dying and the cluster being whole again
const FRAMES = [
  { title: 'ปกติ', pods: ['ok', 'ok', 'ok'], note: 'ต้องการ 3 มี 3' },
  { title: 'pod ตาย', pods: ['ok', 'dead', 'ok'], note: 'ต้องการ 3 มี 2' },
  { title: 'สร้างใหม่', pods: ['ok', 'new', 'ok'], note: 'ต้องการ 3 มี 3' },
];

export function SelfHealing() {
  return (
    <svg
      viewBox="0 0 580 205"
      role="img"
      aria-label="เมื่อ pod หนึ่งตาย จำนวนจริงเหลือสอง Kubernetes เห็นว่าไม่ตรงกับสามที่ต้องการ จึงสร้าง pod ใหม่ขึ้นมาทดแทนเอง"
      className="mx-auto h-auto w-full min-w-[550px] max-w-[580px]"
      fill="currentColor"
    >
      {FRAMES.map((f, fi) => {
        const x0 = 25 + fi * 186;
        return (
          <g key={f.title}>
            <text x={x0 + 68} y="22" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.85">
              {f.title}
            </text>
            <rect x={x0} y="34" width="136" height="76" rx="8" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.4" />
            {f.pods.map((p, pi) => (
              <g key={pi}>
                <rect
                  x={x0 + 12 + pi * 42}
                  y="48"
                  width="32"
                  height="48"
                  rx="5"
                  fillOpacity={p === 'dead' ? 0.04 : p === 'new' ? 0.32 : 0.16}
                  stroke="currentColor"
                  strokeOpacity={p === 'dead' ? 0.3 : 0.5}
                  strokeDasharray={p === 'dead' ? '3 2' : undefined}
                />
                <text
                  x={x0 + 28 + pi * 42}
                  y="77"
                  textAnchor="middle"
                  fontSize="9"
                  opacity={p === 'dead' ? 0.45 : 1}
                >
                  {p === 'dead' ? '✕' : 'pod'}
                </text>
              </g>
            ))}
            <text x={x0 + 68} y="128" textAnchor="middle" fontSize="9.5" opacity="0.78">
              {f.note}
            </text>
            {fi < 2 && (
              <line
                x1={x0 + 144}
                y1="72"
                x2={x0 + 172}
                y2="72"
                stroke="currentColor"
                strokeOpacity="0.55"
                strokeWidth="1.4"
                markerEnd="url(#sh-arrow)"
              />
            )}
          </g>
        );
      })}

      <text x="290" y="164" textAnchor="middle" fontSize="10.5" opacity="0.78">
        ไม่มีใครสั่งให้สร้างใหม่ — Kubernetes เห็นว่าจำนวนจริงไม่ตรงกับที่ประกาศไว้ แล้วแก้เอง
      </text>
      <text x="290" y="186" textAnchor="middle" fontSize="10.5" opacity="0.78">
        pod ใหม่ได้ IP ใหม่ ผู้เรียกจึงต้องเรียกผ่าน Service ไม่ใช่ IP ของ pod
      </text>

      <defs>
        <marker id="sh-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
