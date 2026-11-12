// small requests carrying the victim's address go to many servers, whose real answers all land on the victim
const SERVERS = [40, 156, 272, 388, 504];

export function ReflectionDdos() {
  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="ผู้โจมตีส่งคำขอไปยังเซิร์ฟเวอร์ UDP หลายเครื่อง โดยเขียนที่อยู่ผู้ส่งเป็นที่อยู่ของเหยื่อ เซิร์ฟเวอร์ทุกเครื่องจึงส่งคำตอบจริงไปที่เหยื่อพร้อมกัน เหยื่อเห็นแต่ที่อยู่ของเซิร์ฟเวอร์ ไม่เห็นผู้โจมตี"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="250" y="14" width="120" height="38" rx="8" fillOpacity="0.3" stroke="currentColor" strokeOpacity="0.85" />
      <text x="310" y="37" textAnchor="middle" fontSize="11" fontWeight="600">
        ผู้โจมตี
      </text>

      <text x="604" y="80" textAnchor="end" fontSize="11" opacity="0.8">
        คำขอที่เขียน src = เหยื่อ
      </text>

      {SERVERS.map((x) => (
        <g key={x}>
          <line x1="310" y1="54" x2={x + 38} y2="122" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.1" strokeDasharray="4 3" markerEnd="url(#rf-arrow)" />
          <rect x={x} y="124" width="76" height="38" rx="7" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x + 38} y="147" textAnchor="middle" fontSize="11">
            UDP server
          </text>
          <line x1={x + 38} y1="164" x2="310" y2="226" stroke="currentColor" strokeOpacity="0.75" strokeWidth="2.6" markerEnd="url(#rf-arrow)" />
        </g>
      ))}

      <text x="604" y="196" textAnchor="end" fontSize="11" opacity="0.8">
        คำตอบจริง
      </text>

      <rect x="250" y="228" width="120" height="38" rx="8" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.7" />
      <text x="310" y="251" textAnchor="middle" fontSize="11" fontWeight="600">
        เหยื่อ
      </text>
      <text x="310" y="290" textAnchor="middle" fontSize="11" opacity="0.8">
        ทุกแพ็กเก็ตที่มาถึงเป็นคำตอบจริงจากเซิร์ฟเวอร์จริง ไม่มีแพ็กเก็ตไหนมีที่อยู่ของผู้โจมตี
      </text>

      <defs>
        <marker id="rf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.75" />
        </marker>
      </defs>
    </svg>
  );
}
