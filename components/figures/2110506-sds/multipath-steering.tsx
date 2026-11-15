// a line from (x1, y1) to (x2, y2), cut short by a at the start and b at the end so it stops at a circle's edge
function trim(x1: number, y1: number, x2: number, y2: number, a: number, b: number) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  const ux = (x2 - x1) / len;
  const uy = (y2 - y1) / len;
  return { x1: x1 + ux * a, y1: y1 + uy * a, x2: x2 - ux * b, y2: y2 - uy * b };
}

// two subflows of one MPTCP connection: sharing the shortest link, versus steered apart by the controller
export function MultipathSteering() {
  const node = (x: number, y: number, label: string) => (
    <g>
      <circle cx={x} cy={y} r="18" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.75" strokeWidth="1.5" />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="12" fontWeight="600">
        {label}
      </text>
    </g>
  );
  const tunnels = (dx: number) => (
    <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1">
      <line {...trim(60 + dx, 220, 260 + dx, 220, 18, 18)} />
      <line {...trim(60 + dx, 220, 160 + dx, 140, 18, 18)} />
      <line {...trim(160 + dx, 140, 260 + dx, 220, 18, 18)} />
    </g>
  );
  const ends = (dx: number) => (
    <g fontSize="11" opacity="0.8">
      <text x={60 + dx} y="256" textAnchor="middle">
        ต้นทาง (region 1)
      </text>
      <text x={260 + dx} y="256" textAnchor="middle">
        ปลายทาง (region 2)
      </text>
      <text x={160 + dx} y="112" textAnchor="middle">
        region 3
      </text>
    </g>
  );

  return (
    <svg
      viewBox="0 0 640 340"
      role="img"
      aria-label="ซ้าย: สอง subflow วิ่งบนลิงก์ S1 ถึง S2 เส้นเดียวกัน ขวา: controller ส่ง subflow ที่สองอ้อมผ่าน S3 จึงได้สองเส้นทางที่ไม่ซ้ำกัน"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {/* left: no one sees that the two subflows belong together */}
      <text x="160" y="24" textAnchor="middle" fontSize="12.5" fontWeight="600">
        แบบเดิม: ทุก subflow ไปทางที่สั้นที่สุด
      </text>
      {tunnels(0)}
      <line x1="78" y1="214" x2="242" y2="214" stroke="currentColor" strokeOpacity="0.9" strokeWidth="3" />
      <line x1="78" y1="226" x2="242" y2="226" stroke="currentColor" strokeOpacity="0.9" strokeWidth="3" strokeDasharray="7 5" />
      {node(60, 220, 'S1')}
      {node(260, 220, 'S2')}
      {node(160, 140, 'S3')}
      {ends(0)}
      <text x="160" y="284" textAnchor="middle" fontSize="12">
        สอง subflow แย่งลิงก์ S1–S2 เส้นเดียว
      </text>

      <line x1="320" y1="10" x2="320" y2="296" stroke="currentColor" strokeOpacity="0.25" />

      {/* right: the controller sees the whole graph and puts subflow 2 on another path */}
      <rect x="410" y="30" width="140" height="32" rx="8" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.7" />
      <text x="480" y="51" textAnchor="middle" fontSize="12.5" fontWeight="600">
        controller
      </text>
      <g stroke="currentColor" strokeOpacity="0.5" strokeDasharray="2 4">
        <line x1="440" y1="62" x2="384" y2="202" />
        <line x1="480" y1="62" x2="480" y2="96" />
        <line x1="520" y1="62" x2="576" y2="202" />
      </g>
      {tunnels(320)}
      <line x1="398" y1="214" x2="562" y2="214" stroke="currentColor" strokeOpacity="0.9" strokeWidth="3" />
      <g stroke="currentColor" strokeOpacity="0.9" strokeWidth="3" strokeDasharray="7 5">
        <line {...trim(394, 231, 480, 140, 0, 21)} />
        <line {...trim(480, 140, 566, 231, 21, 0)} />
      </g>
      {node(380, 220, 'S1')}
      {node(580, 220, 'S2')}
      {node(480, 140, 'S3')}
      {ends(320)}
      <text x="480" y="284" textAnchor="middle" fontSize="12">
        controller ส่ง subflow 2 อ้อมผ่าน S3
      </text>

      {/* legend */}
      <g fontSize="11.5">
        <line x1="40" y1="320" x2="80" y2="320" stroke="currentColor" strokeOpacity="0.9" strokeWidth="3" />
        <text x="88" y="324">subflow 1</text>
        <line x1="190" y1="320" x2="230" y2="320" stroke="currentColor" strokeOpacity="0.9" strokeWidth="3" strokeDasharray="7 5" />
        <text x="238" y="324">subflow 2</text>
        <line x1="340" y1="320" x2="380" y2="320" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
        <text x="388" y="324">VXLAN tunnel ระหว่าง Open vSwitch</text>
      </g>
    </svg>
  );
}
