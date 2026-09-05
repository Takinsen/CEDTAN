// each Dockerfile instruction turns into one layer, and some layers hold no files at all
export function DockerfileToLayers() {
  const rows = [
    { code: 'FROM python:3.13-slim', size: '125MB' },
    { code: 'WORKDIR /app', size: '0B' },
    { code: 'COPY . .', size: '4.6kB' },
    { code: 'RUN pip install -r req.txt', size: '31.5MB' },
    { code: 'CMD ["python", "app.py"]', size: '0B' },
  ];

  return (
    <svg
      viewBox="0 0 640 265"
      role="img"
      aria-label="แต่ละบรรทัดใน Dockerfile กลายเป็นหนึ่ง layer ใน image บรรทัดที่เป็นแค่ metadata มีขนาด 0 ไบต์"
      className="mx-auto h-auto w-full min-w-[600px]"
      fill="currentColor"
    >
      <text x="20" y="22" fontSize="12" fontWeight="600" opacity="0.85">
        Dockerfile
      </text>
      <rect x="20" y="32" width="250" height="185" rx="8" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.4" />
      {rows.map((r, i) => (
        <text key={r.code} x="34" y={60 + i * 34} fontSize="11" fontFamily="monospace" opacity="0.85">
          {r.code}
        </text>
      ))}

      <line x1="278" y1="120" x2="358" y2="120" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" markerEnd="url(#dtl-arrow)" />
      <text x="318" y="110" textAnchor="middle" fontSize="10.5" opacity="0.78">
        docker build
      </text>
      <text x="318" y="137" textAnchor="middle" fontSize="10.5" opacity="0.78">
        -t my-app:1.0 .
      </text>

      <text x="366" y="22" fontSize="12" fontWeight="600" opacity="0.85">
        Image — เรียงเป็นชั้น
      </text>
      <rect x="366" y="32" width="254" height="185" rx="8" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.4" />
      {rows.map((r, i) => (
        <g key={`layer-${r.code}`}>
          <rect
            x="380"
            y={44 + i * 34}
            width="226"
            height="26"
            rx="5"
            fillOpacity={r.size === '0B' ? 0.05 : 0.15}
            stroke="currentColor"
            strokeOpacity="0.4"
          />
          <text x="390" y={61 + i * 34} fontSize="10" fontFamily="monospace" opacity="0.8">
            layer {i + 1}
          </text>
          <text x="596" y={61 + i * 34} textAnchor="end" fontSize="10" fontFamily="monospace" opacity="0.8">
            {r.size}
          </text>
        </g>
      ))}

      <text x="320" y="243" textAnchor="middle" fontSize="11.5" opacity="0.75">
        ชั้นที่ขึ้นว่า 0B ไม่ได้เพิ่มไฟล์ มันเพิ่มแค่ข้อมูลกำกับ image
      </text>

      <defs>
        <marker id="dtl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
