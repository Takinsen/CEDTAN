// the command you type is a client call; the daemon is what actually owns the objects
export function DockerEngine() {
  const objects = [
    { x: 20, name: 'container' },
    { x: 170, name: 'image' },
    { x: 320, name: 'network' },
    { x: 470, name: 'data volume' },
  ];

  return (
    <svg
      viewBox="0 0 620 250"
      role="img"
      aria-label="docker CLI ส่งคำสั่งผ่าน REST API ไปให้ docker daemon ซึ่งเป็นตัวจัดการ container image network และ volume"
      className="mx-auto h-auto w-full min-w-[580px] max-w-[620px]"
      fill="currentColor"
    >
      <rect x="40" y="40" width="150" height="52" rx="8" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.45" />
      <text x="115" y="63" textAnchor="middle" fontSize="13.5" fontWeight="600">
        docker CLI
      </text>
      <text x="115" y="81" textAnchor="middle" fontSize="11.5" opacity="0.7">
        client
      </text>

      <rect x="235" y="40" width="110" height="52" rx="8" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.45" />
      <text x="290" y="72" textAnchor="middle" fontSize="13.5" fontWeight="600">
        REST API
      </text>

      <rect x="390" y="40" width="170" height="52" rx="8" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="475" y="63" textAnchor="middle" fontSize="13.5" fontWeight="600">
        docker daemon
      </text>
      <text x="475" y="81" textAnchor="middle" fontSize="11.5" opacity="0.7">
        server
      </text>

      <line x1="192" y1="66" x2="230" y2="66" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" markerEnd="url(#engine-arrow)" />
      <line x1="347" y1="66" x2="385" y2="66" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" markerEnd="url(#engine-arrow)" />

      <text x="497" y="132" fontSize="11.5" opacity="0.75">
        manages
      </text>

      {objects.map((obj) => (
        <g key={obj.name}>
          <line
            x1="475"
            y1="94"
            x2={obj.x + 65}
            y2="172"
            stroke="currentColor"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />
          <rect x={obj.x} y="175" width="130" height="46" rx="7" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.45" />
          <text x={obj.x + 65} y="204" textAnchor="middle" fontSize="12.5">
            {obj.name}
          </text>
        </g>
      ))}

      <text x="310" y="243" textAnchor="middle" fontSize="12" opacity="0.75">
        ปิด daemon แล้ว docker ทุกคำสั่งจะพัง แม้จะติดตั้ง CLI ไว้ครบ
      </text>

      <defs>
        <marker id="engine-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
