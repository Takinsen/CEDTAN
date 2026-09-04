// an image is the read-only stack; a container is that stack plus one writable layer of its own
export function ImageLayers() {
  const shared = [
    { y: 88, name: 'Application code' },
    { y: 130, name: 'Dependencies' },
    { y: 172, name: 'Libraries and Tools' },
    { y: 214, name: 'Base Layer' },
  ];

  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="image มีแต่เลเยอร์อ่านอย่างเดียว ส่วน container คือเลเยอร์เดิมบวกเลเยอร์เขียนได้อีกหนึ่งชั้น"
      className="mx-auto h-auto w-full min-w-[580px] max-w-[620px]"
      fill="currentColor"
    >
      <text x="125" y="28" textAnchor="middle" fontSize="15" fontWeight="600">
        Image
      </text>
      <text x="385" y="28" textAnchor="middle" fontSize="15" fontWeight="600">
        Container
      </text>

      {/* the only layer that belongs to one container alone */}
      <rect x="300" y="40" width="170" height="42" rx="6" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.55" />
      <text x="385" y="66" textAnchor="middle" fontSize="12.5" fontWeight="600">
        Container Layer
      </text>

      {shared.map((layer) => (
        <g key={layer.name}>
          <rect
            x="40"
            y={layer.y}
            width="170"
            height="42"
            rx="6"
            fillOpacity="0.07"
            stroke="currentColor"
            strokeOpacity="0.4"
          />
          <text x="125" y={layer.y + 26} textAnchor="middle" fontSize="12.5">
            {layer.name}
          </text>
          <rect
            x="300"
            y={layer.y}
            width="170"
            height="42"
            rx="6"
            fillOpacity="0.07"
            stroke="currentColor"
            strokeOpacity="0.4"
          />
          <text x="385" y={layer.y + 26} textAnchor="middle" fontSize="12.5">
            {layer.name}
          </text>
        </g>
      ))}

      <line
        x1="212"
        y1="193"
        x2="294"
        y2="193"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1.6"
        markerEnd="url(#image-layers-arrow)"
      />
      <text x="253" y="184" textAnchor="middle" fontSize="11" opacity="0.75">
        แชร์เลเยอร์เดิม
      </text>

      <line x1="470" y1="61" x2="488" y2="61" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
      <text x="493" y="58" fontSize="11" opacity="0.75">
        เขียนได้
      </text>
      <text x="493" y="74" fontSize="11" opacity="0.75">
        ของตัวเอง
      </text>

      <line x1="470" y1="172" x2="488" y2="172" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
      <text x="493" y="169" fontSize="11" opacity="0.75">
        อ่านอย่างเดียว
      </text>
      <text x="493" y="185" fontSize="11" opacity="0.75">
        ใช้ร่วมกัน
      </text>

      <text x="310" y="288" textAnchor="middle" fontSize="12" opacity="0.75">
        image คือแม่พิมพ์ · container คือของที่รันออกมาจากแม่พิมพ์
      </text>

      <defs>
        <marker id="image-layers-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
