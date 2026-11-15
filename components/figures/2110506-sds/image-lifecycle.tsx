// an image becomes an instance, an instance runs as a VM, and the arrows back save state
const NODES = [
  { x: 20, title: 'Image', lines: ['อยู่ใน image library', 'ใช้ร่วมกันได้หลายคน'] },
  { x: 225, title: 'Instance', lines: ['สำเนาของผู้ใช้คนหนึ่ง', 'ใส่ ssh key กับ IP แล้ว'] },
  { x: 430, title: 'VM ที่กำลังรัน', lines: ['ได้ virtual hardware', 'บน hypervisor'] },
];

export function ImageLifecycle() {
  return (
    <svg
      viewBox="0 0 600 175"
      role="img"
      aria-label="image ถูก instantiate เป็น instance, instance ถูก start หรือ resume เป็น VM ที่รันอยู่ ทางกลับคือ stop หรือ snapshot และ capture instance กลับเป็น image ใหม่"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <defs>
        <marker id="img-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="currentColor" />
        </marker>
      </defs>
      {NODES.map((n, i) => (
        <g key={n.title}>
          <rect x={n.x} y="55" width="150" height="80" rx="7" fillOpacity={0.06 + i * 0.08} stroke="currentColor" strokeOpacity="0.6" />
          <text x={n.x + 75} y="80" textAnchor="middle" fontSize="13" fontWeight="700">
            {n.title}
          </text>
          {n.lines.map((l, li) => (
            <text key={l} x={n.x + 75} y={102 + li * 15} textAnchor="middle" fontSize="11" opacity="0.85">
              {l}
            </text>
          ))}
        </g>
      ))}
      {[
        { x1: 172, x2: 223, top: 'instantiate', bottom: 'capture' },
        { x1: 377, x2: 428, top: 'start / resume', bottom: 'stop / snapshot' },
      ].map((a) => (
        <g key={a.top}>
          <line x1={a.x1} y1="78" x2={a.x2} y2="78" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#img-arrow)" />
          <line x1={a.x2} y1="112" x2={a.x1} y2="112" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#img-arrow)" />
          <text x={(a.x1 + a.x2) / 2} y="40" textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {a.top}
          </text>
          <text x={(a.x1 + a.x2) / 2} y="160" textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {a.bottom}
          </text>
        </g>
      ))}
    </svg>
  );
}
