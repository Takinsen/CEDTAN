// the DevOps loop: four development stages hand over to four operations stages and back
export function DevopsLifecycle() {
  const stages = [
    { label: '1 PLAN', x: 262, y: 150, ops: false },
    { label: '2 CODE', x: 175, y: 65, ops: false },
    { label: '3 BUILD', x: 80, y: 150, ops: false },
    { label: '4 TEST', x: 175, y: 235, ops: false },
    { label: '5 RELEASE', x: 358, y: 150, ops: true },
    { label: '6 DEPLOY', x: 445, y: 65, ops: true },
    { label: '7 OPERATE', x: 540, y: 150, ops: true },
    { label: '8 MONITOR', x: 445, y: 235, ops: true },
  ];

  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="วงจร DevOps แปดขั้นเป็นรูปเลขแปด ฝั่ง DEV มี plan, code, build และ test ฝั่ง OPS มี release, deploy, operate และ monitor แล้ววนกลับไป plan ขั้น code และ build อยู่ใน development environment ขั้น test อยู่ใน test environment และฝั่ง OPS อยู่ใน production environment"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="175" y="30" textAnchor="middle" fontSize="11" opacity="0.78">
        Development Environment
      </text>
      <text x="445" y="30" textAnchor="middle" fontSize="11" opacity="0.78">
        Production Environment
      </text>
      <text x="175" y="282" textAnchor="middle" fontSize="11" opacity="0.78">
        Test Environment
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" fill="none">
        <path d="M 262 137 Q 262 65 220 65" markerEnd="url(#dl-arrow)" />
        <path d="M 132 65 Q 80 65 80 135" markerEnd="url(#dl-arrow)" />
        <path d="M 80 163 Q 80 235 130 235" markerEnd="url(#dl-arrow)" />
        <path d="M 218 235 L 328 165" markerEnd="url(#dl-arrow)" />
        <path d="M 358 137 Q 358 65 400 65" markerEnd="url(#dl-arrow)" />
        <path d="M 488 65 Q 540 65 540 135" markerEnd="url(#dl-arrow)" />
        <path d="M 540 163 Q 540 235 490 235" markerEnd="url(#dl-arrow)" />
        <path d="M 402 235 L 292 165" markerEnd="url(#dl-arrow)" />
      </g>

      {stages.map((stage) => (
        <g key={stage.label}>
          <rect
            x={stage.x - 43}
            y={stage.y - 13}
            width="86"
            height="26"
            rx="13"
            fillOpacity={stage.ops ? 0.26 : 0.12}
            stroke="currentColor"
            strokeOpacity="0.55"
          />
          <text x={stage.x} y={stage.y + 4} textAnchor="middle" fontSize="11" fontWeight="600">
            {stage.label}
          </text>
        </g>
      ))}

      <text x="175" y="155" textAnchor="middle" fontSize="13" fontWeight="700" opacity="0.7">
        DEV
      </text>
      <text x="445" y="155" textAnchor="middle" fontSize="13" fontWeight="700" opacity="0.7">
        OPS
      </text>

      <defs>
        <marker id="dl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
