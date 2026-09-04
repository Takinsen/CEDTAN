// the one thing a user-defined bridge adds that the default bridge never had
export function BridgeDns() {
  const panels = [
    {
      x: 20,
      title: 'default bridge',
      subnet: '172.17.0.0/16',
      note: 'ไม่มี DNS ในตัว',
      lines: ['curl 172.17.0.2 → ได้หน้าเว็บ', 'curl nginx → ไม่ได้', 'Could not resolve host: nginx'],
      ips: ['172.17.0.2', '172.17.0.3'],
    },
    {
      x: 330,
      title: 'user-defined bridge',
      subnet: '172.18.0.0/16',
      note: 'มี DNS ในตัว',
      lines: ['curl 172.18.0.2 → ได้หน้าเว็บ', 'curl nginx → ได้หน้าเว็บ', 'ใช้ชื่อ container ได้เลย'],
      ips: ['172.18.0.2', '172.18.0.3'],
    },
  ];

  return (
    <svg
      viewBox="0 0 620 275"
      role="img"
      aria-label="เครือข่าย bridge เริ่มต้นเรียกกันได้ด้วย IP เท่านั้น ส่วน bridge ที่สร้างเองเรียกด้วยชื่อ container ได้"
      className="mx-auto h-auto w-full min-w-[580px] max-w-[620px]"
      fill="currentColor"
    >
      {panels.map((p) => (
        <g key={p.title}>
          <text x={p.x + 135} y="24" textAnchor="middle" fontSize="13.5" fontWeight="600">
            {p.title}
          </text>
          <text x={p.x + 135} y="42" textAnchor="middle" fontSize="11.5" opacity="0.7">
            {p.subnet} · {p.note}
          </text>

          <rect x={p.x} y="54" width="270" height="200" rx="10" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.35" />

          <rect x={p.x + 20} y="76" width="95" height="52" rx="7" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
          <text x={p.x + 67} y="98" textAnchor="middle" fontSize="12" fontWeight="600">
            nginx
          </text>
          <text x={p.x + 67} y="117" textAnchor="middle" fontSize="10.5" opacity="0.75">
            {p.ips[0]}
          </text>

          <rect x={p.x + 155} y="76" width="95" height="52" rx="7" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
          <text x={p.x + 202} y="98" textAnchor="middle" fontSize="12" fontWeight="600">
            ubuntu_tools
          </text>
          <text x={p.x + 202} y="117" textAnchor="middle" fontSize="10.5" opacity="0.75">
            {p.ips[1]}
          </text>

          <line
            x1={p.x + 152}
            y1="102"
            x2={p.x + 120}
            y2="102"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            markerEnd="url(#bridge-arrow)"
          />

          {p.lines.map((line, i) => (
            <text key={line} x={p.x + 135} y={165 + i * 26} textAnchor="middle" fontSize="11.5" opacity="0.8">
              {line}
            </text>
          ))}
        </g>
      ))}

      <defs>
        <marker id="bridge-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.55" />
        </marker>
      </defs>
    </svg>
  );
}
