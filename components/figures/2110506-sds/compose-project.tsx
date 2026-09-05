// a compose project wraps services, one network and one volume, and stamps its name on all of them
export function ComposeProject() {
  const services = [
    { x: 40, name: 'node-exporter' },
    { x: 220, name: 'prometheus' },
    { x: 400, name: 'grafana' },
  ];

  return (
    <svg
      viewBox="0 0 620 270"
      role="img"
      aria-label="project ชื่อ monitoring ครอบ service สามตัว หนึ่ง network และหนึ่ง volume ชื่อของทุกอย่างขึ้นต้นด้วยชื่อ project"
      className="mx-auto h-auto w-full min-w-[580px]"
      fill="currentColor"
    >
      <rect x="20" y="28" width="580" height="190" rx="10" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="6 4" />
      <text x="34" y="21" fontSize="12" fontWeight="600">
        project “monitoring” — ชื่อมาจากชื่อโฟลเดอร์
      </text>

      {services.map((s) => (
        <g key={s.name}>
          <rect x={s.x} y="46" width="160" height="58" rx="7" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.45" />
          <text x={s.x + 80} y="70" textAnchor="middle" fontSize="11.5" fontWeight="600">
            {s.name}
          </text>
          <text x={s.x + 80} y="90" textAnchor="middle" fontSize="10" opacity="0.7">
            service
          </text>
          <line x1={s.x + 80} y1="104" x2={s.x + 80} y2="124" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="3 3" />
        </g>
      ))}

      <rect x="40" y="124" width="520" height="30" rx="6" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.45" />
      <text x="300" y="144" textAnchor="middle" fontSize="11.5" fontFamily="monospace">
        monitoring_monitoring — network
      </text>

      <rect x="40" y="166" width="250" height="30" rx="6" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.4" />
      <text x="165" y="186" textAnchor="middle" fontSize="10.5" fontFamily="monospace">
        monitoring_grafana-vol
      </text>
      <rect x="310" y="166" width="250" height="30" rx="6" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.4" />
      <text x="435" y="186" textAnchor="middle" fontSize="10.5" fontFamily="monospace">
        monitoring-grafana-1
      </text>

      <text x="300" y="243" textAnchor="middle" fontSize="11.5" opacity="0.75">
        ชื่อทุกอย่างขึ้นต้นด้วยชื่อ project คนละ project จึงใช้ compose file เดียวกันได้โดยไม่ชนกัน
      </text>
    </svg>
  );
}
