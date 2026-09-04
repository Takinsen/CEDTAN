// the same program meets a different library and OS version on every machine it lands on
export function DependencyProblem() {
  const machines = [
    { x: 15, name: 'Computer 1', lib: 'libssl 1.1', os: 'Ubuntu 22', note: 'เครื่องที่เขียนโปรแกรม' },
    { x: 160, name: 'Computer 2', lib: 'libssl 3.0', os: 'Ubuntu 20', note: '?' },
    { x: 305, name: 'Computer 3', lib: 'libssl 1.1', os: 'Debian 12', note: '?' },
    { x: 450, name: 'Computer 4', lib: 'libssl 3.2', os: 'Ubuntu 24', note: '?' },
  ];

  return (
    <svg
      viewBox="0 0 600 265"
      role="img"
      aria-label="โปรแกรมเดียวกันถูกย้ายไปสี่เครื่องที่มีเวอร์ชันไลบรารีและระบบปฏิบัติการต่างกัน"
      className="mx-auto h-auto w-full min-w-[560px] max-w-[600px]"
      fill="currentColor"
    >
      {/* the one program everybody wants to run */}
      <rect
        x="225"
        y="10"
        width="150"
        height="36"
        rx="8"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeOpacity="0.5"
      />
      <text x="300" y="33" textAnchor="middle" fontSize="14" fontWeight="600">
        App
      </text>

      {machines.map((m) => (
        <g key={m.name}>
          <line
            x1="300"
            y1="48"
            x2={m.x + 65}
            y2="76"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="1.3"
            strokeDasharray="4 3"
          />
          <rect
            x={m.x}
            y="80"
            width="130"
            height="36"
            rx="6"
            fillOpacity="0.09"
            stroke="currentColor"
            strokeOpacity="0.4"
          />
          <text x={m.x + 65} y="103" textAnchor="middle" fontSize="12.5">
            {m.lib}
          </text>
          <rect
            x={m.x}
            y="120"
            width="130"
            height="36"
            rx="6"
            fillOpacity="0.06"
            stroke="currentColor"
            strokeOpacity="0.4"
          />
          <text x={m.x + 65} y="143" textAnchor="middle" fontSize="12.5">
            {m.os}
          </text>
          <rect
            x={m.x}
            y="160"
            width="130"
            height="36"
            rx="6"
            fillOpacity="0.03"
            stroke="currentColor"
            strokeOpacity="0.4"
          />
          <text x={m.x + 65} y="183" textAnchor="middle" fontSize="12.5">
            Hardware
          </text>
          <text x={m.x + 65} y="215" textAnchor="middle" fontSize="12" fontWeight="600">
            {m.name}
          </text>
          <text x={m.x + 65} y="234" textAnchor="middle" fontSize="11.5" opacity="0.7">
            {m.note}
          </text>
        </g>
      ))}

      <text x="300" y="258" textAnchor="middle" fontSize="12" opacity="0.75">
        เขียนครั้งเดียวแล้วรันได้ทุกที่ ต้องทำยังไง?
      </text>
    </svg>
  );
}
