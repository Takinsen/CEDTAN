// three containers on one network, each doing one job in the chain
export function MonitoringStack() {
  const parts = [
    { x: 20, name: 'Node Exporter', port: 'Port 9100', job: 'อ่านตัวเลขจากเครื่อง' },
    { x: 225, name: 'Prometheus', port: 'Port 9090', job: 'ดึงมาเก็บทุก 15 วินาที' },
    { x: 430, name: 'Grafana', port: 'Port 3000', job: 'วาดเป็นกราฟ' },
  ];

  return (
    <svg
      viewBox="0 0 620 215"
      role="img"
      aria-label="node-exporter ส่งตัวเลขให้ prometheus แล้ว grafana ดึงจาก prometheus มาวาดกราฟ ทั้งสามอยู่บนเครือข่าย mynet"
      className="mx-auto h-auto w-full min-w-[580px]"
      fill="currentColor"
    >
      {parts.map((p) => (
        <g key={p.name}>
          <rect x={p.x} y="30" width="170" height="86" rx="9" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.45" />
          <text x={p.x + 85} y="58" textAnchor="middle" fontSize="13.5" fontWeight="600">
            {p.name}
          </text>
          <text x={p.x + 85} y="80" textAnchor="middle" fontSize="11.5" opacity="0.8">
            {p.port}
          </text>
          <text x={p.x + 85} y="102" textAnchor="middle" fontSize="11" opacity="0.7">
            {p.job}
          </text>
          <line x1={p.x + 85} y1="116" x2={p.x + 85} y2="152" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 3" />
        </g>
      ))}

      <line x1="192" y1="73" x2="220" y2="73" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" markerEnd="url(#monitor-arrow)" />
      <text x="206" y="64" textAnchor="middle" fontSize="10.5" opacity="0.75">
        scrape
      </text>
      <line x1="397" y1="73" x2="425" y2="73" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" markerEnd="url(#monitor-arrow)" />
      <text x="411" y="64" textAnchor="middle" fontSize="10.5" opacity="0.75">
        query
      </text>

      <rect x="20" y="152" width="580" height="34" rx="7" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.5" />
      <text x="310" y="174" textAnchor="middle" fontSize="12.5" fontWeight="600">
        mynet — user-defined bridge
      </text>

      <text x="310" y="206" textAnchor="middle" fontSize="12" opacity="0.75">
        เรียกกันด้วยชื่อได้ เพราะอยู่บนเครือข่ายที่สร้างเอง
      </text>

      <defs>
        <marker id="monitor-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
