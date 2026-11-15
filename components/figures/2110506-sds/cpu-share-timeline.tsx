// a small instance gets the CPU in turns, so its packets leave in bursts and a ping can wait a whole turn
const TURNS = [
  [0, 60],
  [120, 175],
  [245, 305],
  [370, 430],
];
const X0 = 110;
const END = 560 - X0;

export function CpuShareTimeline() {
  return (
    <svg
      viewBox="0 0 600 230"
      role="img"
      aria-label="hypervisor สลับให้ VM เล็กได้ CPU เป็นช่วง ๆ ราวครึ่งหนึ่งของเวลา ช่วงที่ได้ CPU มันส่งข้อมูลเต็มที่ ช่วงที่ไม่ได้ ปริมาณข้อมูลตกเป็นศูนย์ และ ping ที่มาถึงตอนนั้นต้องรอจนถึงตาของมัน"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="10" y="44" fontSize="11" fontWeight="600">
        ใครได้ CPU
      </text>
      <rect x={X0} y="30" width={END} height="22" rx="3" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      {TURNS.map(([a, b]) => (
        <g key={a}>
          <rect x={X0 + a} y="30" width={b - a} height="22" fillOpacity="0.3" />
          <text x={X0 + (a + b) / 2} y="45" textAnchor="middle" fontSize="11" fontWeight="600">
            VM เรา
          </text>
        </g>
      ))}
      {TURNS.slice(0, 3).map(([, b], i) => (
        <text key={b} x={X0 + (b + TURNS[i + 1][0]) / 2} y="45" textAnchor="middle" fontSize="11" opacity="0.7">
          VM อื่น
        </text>
      ))}

      <text x="10" y="98" fontSize="11" fontWeight="600">
        ข้อมูลที่ส่งออก
      </text>
      <line x1={X0} y1="112" x2={X0 + END} y2="112" stroke="currentColor" strokeOpacity="0.55" />
      <polyline
        points={TURNS.map(([a, b]) => `${X0 + a},112 ${X0 + a},74 ${X0 + b},74 ${X0 + b},112`).join(' ')}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <text x={X0 + 90} y="128" textAnchor="middle" fontSize="11" opacity="0.8">
        ตกเป็นศูนย์
      </text>

      <text x="10" y="168" fontSize="11" fontWeight="600">
        ping มาถึง
      </text>
      {/* one ping lands during our turn, one lands just after it ends */}
      <line x1={X0 + 30} y1="150" x2={X0 + 30} y2="172" stroke="currentColor" strokeWidth="2" />
      <text x={X0 + 30} y="188" textAnchor="middle" fontSize="11">
        ตอบทันที
      </text>
      <line x1={X0 + 185} y1="150" x2={X0 + 185} y2="172" stroke="currentColor" strokeWidth="2" />
      <path d={`M${X0 + 185} 161 L${X0 + 241} 161`} stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#cpu-arrow)" />
      <text x={X0 + 213} y="188" textAnchor="middle" fontSize="11">
        รอจนถึงตาเรา RTT พุ่ง
      </text>
      <defs>
        <marker id="cpu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="currentColor" />
        </marker>
      </defs>
      <line x1={X0} y1="212" x2={X0 + END} y2="212" stroke="currentColor" strokeOpacity="0.55" markerEnd="url(#cpu-arrow)" />
      <text x={X0 + END} y="226" textAnchor="end" fontSize="11" opacity="0.75">
        เวลา (หน่วยเศษเสี้ยววินาที)
      </text>
    </svg>
  );
}
