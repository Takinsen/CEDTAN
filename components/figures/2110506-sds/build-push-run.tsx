// one Dockerfile becomes an image on the build host, travels through a registry, and runs on another host
export function BuildPushRun() {
  const steps = [
    { x: 15, title: 'Dockerfile', sub: 'ข้อความล้วน' },
    { x: 145, title: 'Image', sub: 'my-app:1.0' },
    { x: 275, title: 'Registry', sub: 'Docker Hub' },
    { x: 405, title: 'Image', sub: 'my-app:1.0' },
    { x: 535, title: 'Container', sub: 'กำลังรัน' },
  ];
  const arrows = [
    { x: 115, label: '1. build' },
    { x: 245, label: '2. push' },
    { x: 375, label: '3. pull' },
    { x: 505, label: '4. run' },
  ];

  return (
    <svg
      viewBox="0 0 640 235"
      role="img"
      aria-label="Dockerfile ถูก build เป็น image บนเครื่องพัฒนา แล้ว push ขึ้น registry อีกเครื่องหนึ่ง pull ลงมาแล้ว run เป็น container"
      className="mx-auto h-auto w-full min-w-[600px] max-w-[640px]"
      fill="currentColor"
    >
      {steps.map((s) => (
        <g key={s.title + s.x}>
          <rect x={s.x} y="70" width="100" height="64" rx="8" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.45" />
          <text x={s.x + 50} y="97" textAnchor="middle" fontSize="12.5" fontWeight="600">
            {s.title}
          </text>
          <text x={s.x + 50} y="117" textAnchor="middle" fontSize="10.5" opacity="0.72">
            {s.sub}
          </text>
        </g>
      ))}

      {arrows.map((a) => (
        <g key={a.label}>
          <line x1={a.x} y1="102" x2={a.x + 28} y2="102" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" markerEnd="url(#bpr-arrow)" />
          <text x={a.x + 14} y="58" textAnchor="middle" fontSize="10" opacity="0.75">
            {a.label}
          </text>
        </g>
      ))}

      <rect x="15" y="155" width="230" height="30" rx="6" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.4" />
      <text x="130" y="175" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Host 1 — เครื่องที่พัฒนา
      </text>
      <rect x="405" y="155" width="230" height="30" rx="6" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.4" />
      <text x="520" y="175" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Host 2 — เครื่องที่ให้บริการ
      </text>

      <text x="320" y="212" textAnchor="middle" fontSize="11.5" opacity="0.75">
        เครื่องปลายทางไม่ต้องมี source code ไม่ต้องมี compiler มีแค่ Docker ก็รันได้
      </text>

      <defs>
        <marker id="bpr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
