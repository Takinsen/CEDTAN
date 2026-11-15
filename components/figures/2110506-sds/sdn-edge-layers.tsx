// three layers of SDN-assisted edge computing: northbound apps, SDN infrastructure, edge layer
const apps = ['Service Orch.', 'Load Balancer', 'Resource Mgmt.', 'Mobility Mgmt.', 'Firewall'];
const services = ['Health service', 'Entertainment', 'Face recognition'];
const switches = [80, 220, 360, 500];
const edge = ['Cloudlet เขต 1', 'มือถือ', 'นาฬิกา', 'Host machine', 'แว่น', 'Cloudlet เขต 2'];

export function SdnEdgeLayers() {
  return (
    <svg
      viewBox="0 0 680 360"
      role="img"
      aria-label="สามชั้น ชั้นบนคือแอป northbound เช่น service orchestration, load balancer, firewall และบริการบน edge ต่อกับ SDN controller ผ่าน northbound API ชั้นกลางคือ controller คุม OpenFlow switch สี่ตัวผ่าน southbound API ชั้นล่างคือ cloudlet และอุปกรณ์ของผู้ใช้ที่ส่งคำขอผ่าน switch"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="10" y="8" width="660" height="102" rx="9" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.55" />
      <text x="20" y="28" fontSize="11.5" fontWeight="600">
        Northbound Applications
      </text>
      {apps.map((label, i) => (
        <g key={label}>
          <rect x={20 + i * 128} y="38" width="118" height="26" rx="5" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
          <text x={79 + i * 128} y="55" textAnchor="middle" fontSize="11">
            {label}
          </text>
        </g>
      ))}
      <text x="20" y="91" fontSize="11" opacity="0.8">
        บริการบน edge
      </text>
      {services.map((label, i) => (
        <g key={label}>
          <rect x={148 + i * 128} y="74" width="118" height="26" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 3" />
          <text x={207 + i * 128} y="91" textAnchor="middle" fontSize="11">
            {label}
          </text>
        </g>
      ))}

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" markerStart="url(#sel-arrow)" markerEnd="url(#sel-arrow)">
        <line x1="340" y1="113" x2="340" y2="137" />
        <line x1="340" y1="243" x2="340" y2="267" />
      </g>
      <text x="352" y="129" fontSize="11" opacity="0.85">
        Northbound API
      </text>
      <text x="352" y="259" fontSize="11" opacity="0.85">
        service requests / replies
      </text>

      <rect x="10" y="140" width="660" height="100" rx="9" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.55" />
      <text x="20" y="160" fontSize="11.5" fontWeight="600">
        SDN Infrastructure
      </text>
      <rect x="260" y="148" width="160" height="28" rx="6" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.6" />
      <text x="340" y="167" textAnchor="middle" fontSize="11.5" fontWeight="600">
        SDN Controller
      </text>
      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.2">
        {switches.map((x) => (
          <line key={x} x1="340" y1="176" x2={x + 50} y2="205" />
        ))}
      </g>
      {switches.map((x) => (
        <g key={x}>
          <rect x={x} y="205" width="100" height="24" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
          <text x={x + 50} y="221" textAnchor="middle" fontSize="11">
            OpenFlow switch
          </text>
        </g>
      ))}
      <text x="660" y="168" textAnchor="end" fontSize="11" opacity="0.85">
        Southbound API (OpenFlow)
      </text>

      <rect x="10" y="270" width="660" height="80" rx="9" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.55" />
      <text x="20" y="290" fontSize="11.5" fontWeight="600">
        Edge Layer
      </text>
      {edge.map((label, i) => (
        <g key={label}>
          <rect x={20 + i * 108} y="302" width="100" height="30" rx="5" fillOpacity={label.startsWith('Cloudlet') || label === 'Host machine' ? 0.2 : 0.06} stroke="currentColor" strokeOpacity="0.5" />
          <text x={70 + i * 108} y="321" textAnchor="middle" fontSize="11">
            {label}
          </text>
        </g>
      ))}

      <defs>
        <marker id="sel-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}
