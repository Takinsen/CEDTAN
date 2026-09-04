// the build stage carries the whole toolchain, the final stage keeps only the one file it produced
export function MultiStageBuild() {
  const buildItems = ['Go compiler + SDK', 'source /src/main.go', 'ผลลัพธ์ /bin/hello'];

  return (
    <svg
      viewBox="0 0 640 250"
      role="img"
      aria-label="stage แรกมี compiler และ source code ครบ stage สุดท้ายเริ่มจาก scratch แล้ว copy เฉพาะไฟล์ที่ compile เสร็จมาชั้นเดียว"
      className="mx-auto h-auto w-full min-w-[600px] max-w-[640px]"
      fill="currentColor"
    >
      <rect x="20" y="38" width="255" height="150" rx="9" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.45" />
      <text x="147" y="30" textAnchor="middle" fontSize="12" fontWeight="600">
        stage “build” — FROM golang:1.23
      </text>
      {buildItems.map((t, i) => (
        <g key={t}>
          <rect x="36" y={54 + i * 42} width="223" height="32" rx="6" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.35" />
          <text x="147" y={75 + i * 42} textAnchor="middle" fontSize="11" opacity="0.85">
            {t}
          </text>
        </g>
      ))}
      <text x="147" y="205" textAnchor="middle" fontSize="11" opacity="0.7">
        ประมาณ 800 MB
      </text>

      <line x1="283" y1="138" x2="358" y2="138" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.6" markerEnd="url(#msb-arrow)" />
      <text x="320" y="128" textAnchor="middle" fontSize="10" fontFamily="monospace" opacity="0.78">
        COPY
      </text>
      <text x="320" y="155" textAnchor="middle" fontSize="10" fontFamily="monospace" opacity="0.78">
        --from=build
      </text>

      <rect x="366" y="96" width="254" height="92" rx="9" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.45" />
      <text x="493" y="30" textAnchor="middle" fontSize="12" fontWeight="600">
        stage สุดท้าย — FROM scratch
      </text>
      <rect x="382" y="112" width="222" height="32" rx="6" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.35" />
      <text x="493" y="133" textAnchor="middle" fontSize="11" opacity="0.85">
        /bin/hello
      </text>
      <text x="493" y="167" textAnchor="middle" fontSize="11" opacity="0.7">
        ประมาณ 2 MB
      </text>

      <text x="320" y="228" textAnchor="middle" fontSize="11.5" opacity="0.75">
        ของที่ใช้ตอน build ไม่ได้ตามไปด้วย image สุดท้ายจึงเล็กและมีช่องโหว่น้อยลง
      </text>

      <defs>
        <marker id="msb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
