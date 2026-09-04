// the four layers the course is organised around, and what each one hands upward
export function SdsStack() {
  const layers = [
    { y: 20, name: 'Orchestration Layer', th: 'สั่งว่าจะรันอะไร กี่ชุด ที่ไหน' },
    { y: 110, name: 'Container Layer', th: 'ห่อโปรแกรมให้รันที่ไหนก็เหมือนกัน' },
    { y: 200, name: 'Resource Layer', th: 'เครื่อง หน่วยความจำ ดิสก์' },
    { y: 290, name: 'Connectivity Layer', th: 'สายและอุปกรณ์เครือข่ายที่ต่อทุกอย่างเข้าด้วยกัน' },
  ];
  const links = [
    { y: 96, label: 'Services' },
    { y: 186, label: 'Resources' },
    { y: 276, label: 'Connectivity' },
  ];

  return (
    <svg
      viewBox="0 0 620 370"
      role="img"
      aria-label="สี่ชั้นของ software-defined systems เรียงจากล่างขึ้นบน"
      className="mx-auto h-auto w-full min-w-[520px] max-w-[620px]"
      fill="currentColor"
    >
      {layers.map((layer) => (
        <g key={layer.name}>
          <rect
            x="60"
            y={layer.y}
            width="500"
            height="62"
            rx="10"
            fillOpacity="0.07"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
          <text x="310" y={layer.y + 26} textAnchor="middle" fontSize="15" fontWeight="600">
            {layer.name}
          </text>
          <text x="310" y={layer.y + 47} textAnchor="middle" fontSize="12.5" opacity="0.7">
            {layer.th}
          </text>
        </g>
      ))}

      {links.map((link) => (
        <g key={link.label}>
          <line
            x1="310"
            y1={link.y + 14}
            x2="310"
            y2={link.y - 2}
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            markerEnd="url(#sds-stack-arrow)"
          />
          <text x="330" y={link.y + 10} fontSize="12.5" opacity="0.7">
            ส่ง {link.label} ขึ้นไปให้ชั้นบน
          </text>
        </g>
      ))}

      <defs>
        <marker
          id="sds-stack-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.5" />
        </marker>
      </defs>
    </svg>
  );
}
