// a Service picks pods by label, so its address stays put while pods come and go
export function ServiceSelector() {
  const pods = [
    { y: 48, ip: '10.10.10.1' },
    { y: 108, ip: '10.10.10.2' },
    { y: 168, ip: '10.10.10.3' },
  ];
  return (
    <svg
      viewBox="0 0 620 275"
      role="img"
      aria-label="Service ที่มี selector app เท่ากับ A จับเฉพาะ pod ที่ติดป้าย app A ส่วน pod ที่ติดป้าย app B ไม่ถูกเลือก"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="20" y="95" width="150" height="66" rx="9" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.6" />
      <text x="95" y="120" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Service
      </text>
      <text x="95" y="139" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.82">
        1.1.1.1
      </text>
      <text x="95" y="153" textAnchor="middle" fontSize="11" opacity="0.72">
        Cluster-IP คงที่
      </text>

      <rect x="30" y="176" width="130" height="26" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="95" y="194" textAnchor="middle" fontSize="11" fontFamily="monospace">
        selector app=A
      </text>

      <rect x="300" y="28" width="300" height="200" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="5 3" />
      <text x="590" y="222" textAnchor="end" fontSize="11" fontWeight="600" opacity="0.7">
        Deployment
      </text>

      {pods.map((p) => (
        <g key={p.ip}>
          <rect x={320} y={p.y} width="150" height="46" rx="7" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
          <text x={395} y={p.y + 20} textAnchor="middle" fontSize="11">
            pod
          </text>
          <text x={395} y={p.y + 36} textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.78">
            {p.ip}
          </text>
          <rect x={488} y={p.y + 12} width="70" height="22" rx="4" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.5" />
          <text x={523} y={p.y + 27} textAnchor="middle" fontSize="11" fontFamily="monospace">
            app: A
          </text>
          <line x1="172" y1="128" x2="318" y2={p.y + 23} stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3" markerEnd="url(#ss-arrow)" />
        </g>
      ))}

      <rect x={30} y={28} width="150" height="46" rx="7" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 3" />
      <text x={105} y={48} textAnchor="middle" fontSize="11" opacity="0.8">
        pod
      </text>
      <text x={105} y={64} textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.7">
        10.10.10.4
      </text>
      <rect x={196} y={40} width="70" height="22" rx="4" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="3 3" />
      <text x={231} y={55} textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.7">
        app: B
      </text>
      <text x={148} y={88} textAnchor="middle" fontSize="11" opacity="0.7">
        ป้ายไม่ตรง ไม่ถูกเลือก
      </text>

      <text x="310" y="252" textAnchor="middle" fontSize="11" opacity="0.78">
        IP ของ pod เป็นของภายในคลัสเตอร์และเปลี่ยนได้เสมอ แต่ Cluster-IP ของ Service ไม่เปลี่ยน
      </text>
      <text x="310" y="268" textAnchor="middle" fontSize="11" opacity="0.78">
        การจับคู่ใช้ป้าย ไม่ใช่รายชื่อ pod จึงเพิ่มลด pod ได้โดยไม่ต้องแก้ Service
      </text>

      <defs>
        <marker id="ss-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
