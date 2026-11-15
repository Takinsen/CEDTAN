// service function chaining: the logical order on top, the scattered VMs and the path SDN steers below
const chain: [number, number, string][] = [
  [10, 80, 'Client'],
  [130, 100, 'Firewall'],
  [270, 80, 'DPI'],
  [390, 120, 'Load balancer'],
  [560, 100, 'Server'],
];
const routers: Record<string, [number, number]> = {
  r1: [120, 215],
  r2: [220, 185],
  r3: [220, 285],
  r4: [330, 235],
  r5: [440, 185],
  r6: [440, 285],
  r7: [550, 235],
};
const links = ['r1-r2', 'r1-r3', 'r2-r3', 'r2-r4', 'r3-r4', 'r2-r5', 'r4-r5', 'r4-r6', 'r3-r6', 'r5-r6', 'r5-r7', 'r6-r7'];
const path = ['r1-r2', 'r2-r3', 'r3-r6', 'r6-r7'];
const vms: [string, number, number, string][] = [
  ['r2', 175, 132, 'Firewall VM'],
  ['r3', 175, 318, 'DPI VM'],
  ['r5', 395, 132, 'DPI VM'],
  ['r6', 380, 318, 'Load balancer VM'],
];

export function ServiceChain() {
  return (
    <svg
      viewBox="0 0 680 370"
      role="img"
      aria-label="ด้านบนคือลำดับที่ traffic ต้องผ่าน client, firewall, DPI, load balancer แล้วถึง server ด้านล่างคือเครือข่ายจริงที่มี switch เจ็ดตัว firewall VM, DPI VM สองตัว และ load balancer VM กระจายอยู่คนละมุม แอป SFC บน SDN controller สั่งผ่าน OpenFlow ให้ traffic วิ่งผ่าน firewall VM แล้ว DPI VM แล้ว load balancer VM ตามลำดับก่อนถึง server"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="10" y="18" fontSize="11.5" fontWeight="600">
        ลำดับที่ traffic ต้องผ่าน (service function chain)
      </text>
      {chain.map(([x, w, label], i) => (
        <g key={label}>
          <rect x={x} y="30" width={w} height="30" rx="6" fillOpacity={i === 0 || i === 4 ? 0.06 : 0.2} stroke="currentColor" strokeOpacity="0.55" />
          <text x={x + w / 2} y="49" textAnchor="middle" fontSize="11" fontWeight={i === 0 || i === 4 ? 400 : 600}>
            {label}
          </text>
        </g>
      ))}
      <g stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" markerEnd="url(#sc-arrow)">
        <line x1="92" y1="45" x2="127" y2="45" />
        <line x1="232" y1="45" x2="267" y2="45" />
        <line x1="352" y1="45" x2="387" y2="45" />
        <line x1="512" y1="45" x2="557" y2="45" />
      </g>

      <line x1="10" y1="80" x2="670" y2="80" stroke="currentColor" strokeOpacity="0.3" />
      <text x="10" y="102" fontSize="11.5" fontWeight="600">
        เครือข่ายจริง: VM กระจายคนละมุม
      </text>

      <rect x="530" y="92" width="140" height="44" rx="6" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.6" />
      <text x="600" y="110" textAnchor="middle" fontSize="11">
        SFC app (northbound)
      </text>
      <text x="600" y="127" textAnchor="middle" fontSize="11" fontWeight="600">
        SDN Controller
      </text>
      <line x1="600" y1="136" x2="562" y2="222" stroke="currentColor" strokeOpacity="0.6" strokeDasharray="5 4" />
      <text x="590" y="178" fontSize="11" opacity="0.85">
        OpenFlow
      </text>

      <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2">
        {links.map((l) => {
          const [a, b] = l.split('-');
          return <line key={l} x1={routers[a][0]} y1={routers[a][1]} x2={routers[b][0]} y2={routers[b][1]} />;
        })}
      </g>
      <g stroke="currentColor" strokeOpacity="0.9" strokeWidth="3.2">
        {path.map((l) => {
          const [a, b] = l.split('-');
          return <line key={l} x1={routers[a][0]} y1={routers[a][1]} x2={routers[b][0]} y2={routers[b][1]} />;
        })}
        <line x1="80" y1="215" x2="108" y2="215" />
        <line x1="562" y1="235" x2="590" y2="235" />
      </g>
      {Object.entries(routers).map(([id, [x, y]]) => (
        <circle key={id} cx={x} cy={y} r="12" fill="var(--color-fd-background, white)" stroke="currentColor" strokeOpacity="0.75" strokeWidth="1.4" />
      ))}

      <rect x="10" y="200" width="70" height="30" rx="6" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="45" y="219" textAnchor="middle" fontSize="11">
        Client
      </text>
      <rect x="590" y="220" width="80" height="30" rx="6" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="630" y="239" textAnchor="middle" fontSize="11">
        Server
      </text>

      {vms.map(([r, x, y, label]) => {
        const w = label.length > 12 ? 120 : 90;
        const [rx, ry] = routers[r];
        const top = y < ry;
        return (
          <g key={`${r}-${label}`}>
            <line x1={rx} y1={top ? ry - 12 : ry + 12} x2={rx} y2={top ? y + 24 : y} stroke="currentColor" strokeOpacity="0.55" />
            <rect x={x} y={y} width={w} height="24" rx="5" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
            <text x={x + w / 2} y={y + 16} textAnchor="middle" fontSize="11">
              {label}
            </text>
          </g>
        );
      })}

      <text x="10" y="362" fontSize="11" opacity="0.85">
        เส้นหนาคือทางที่ controller บังคับ: firewall → DPI → load balancer · DPI VM ตัวขวาบนไม่ได้อยู่บนทางนี้
      </text>

      <defs>
        <marker id="sc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.75" />
        </marker>
      </defs>
    </svg>
  );
}
