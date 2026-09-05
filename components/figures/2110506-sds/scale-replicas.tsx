// three replicas of one service share a single database, each getting its own host port
export function ScaleReplicas() {
  const replicas = [
    { x: 40, name: 'web-1', port: '53467' },
    { x: 215, name: 'web-2', port: '53468' },
    { x: 390, name: 'web-3', port: '53469' },
  ];

  return (
    <svg
      viewBox="0 0 620 265"
      role="img"
      aria-label="service web ถูกขยายเป็นสามสำเนา แต่ละสำเนาได้พอร์ตบนเครื่องคนละพอร์ต ทั้งสามต่อไปที่ mongo ตัวเดียวกัน"
      className="mx-auto h-auto w-full min-w-[580px]"
      fill="currentColor"
    >
      {replicas.map((r) => (
        <g key={r.name}>
          <rect x={r.x} y="28" width="150" height="70" rx="8" fillOpacity="0.11" stroke="currentColor" strokeOpacity="0.45" />
          <text x={r.x + 75} y="52" textAnchor="middle" fontSize="12" fontWeight="600">
            {r.name}
          </text>
          <text x={r.x + 75} y="72" textAnchor="middle" fontSize="10" opacity="0.72">
            ในคอนเทนเนอร์: 5000
          </text>
          <text x={r.x + 75} y="89" textAnchor="middle" fontSize="10" fontFamily="monospace" opacity="0.8">
            บนเครื่อง: {r.port}
          </text>
        </g>
      ))}

      <line x1="115" y1="98" x2="272" y2="143" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" markerEnd="url(#scale-arrow)" />
      <line x1="290" y1="98" x2="290" y2="143" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" markerEnd="url(#scale-arrow)" />
      <line x1="465" y1="98" x2="308" y2="143" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" markerEnd="url(#scale-arrow)" />

      <rect x="215" y="147" width="150" height="62" rx="8" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.5" />
      <text x="290" y="172" textAnchor="middle" fontSize="12" fontWeight="600">
        mongo
      </text>
      <text x="290" y="192" textAnchor="middle" fontSize="10" opacity="0.72">
        เก็บตัวนับไว้ที่เดียว
      </text>

      <text x="310" y="238" textAnchor="middle" fontSize="11.5" opacity="0.75">
        เข้าเว็บสำเนาไหนก็ได้ ตัวเลขเดินต่อจากกัน เพราะทั้งสามอ่านเขียนฐานข้อมูลตัวเดียวกัน
      </text>

      <defs>
        <marker id="scale-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.5" />
        </marker>
      </defs>
    </svg>
  );
}
