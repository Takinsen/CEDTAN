// two ways to find a moving endpoint: the client asks the registry, or a load balancer asks for it
export function ServiceDiscovery() {
  const instances = ['instance A', 'instance B', 'instance C'];
  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="ซ้าย client ถาม service registry เองแล้วเรียกบริการตรง ขวา client ยิงเข้า load balancer แล้ว load balancer เป็นฝ่ายถาม registry"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="155" y="22" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        Client-Side Discovery
      </text>
      <text x="465" y="22" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        Server-Side Discovery
      </text>

      <rect x="10" y="30" width="290" height="230" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.3" />
      <rect x="320" y="30" width="290" height="230" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.3" />

      <rect x="30" y="60" width="110" height="44" rx="7" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="85" y="79" textAnchor="middle" fontSize="10.5">
        client
      </text>
      <text x="85" y="93" textAnchor="middle" fontSize="9" opacity="0.75">
        ที่รู้จัก registry
      </text>

      <rect x="30" y="180" width="110" height="40" rx="7" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="85" y="198" textAnchor="middle" fontSize="10">
        Service
      </text>
      <text x="85" y="212" textAnchor="middle" fontSize="10">
        Registry
      </text>

      <rect x="195" y="50" width="95" height="170" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="4 3" />
      {instances.map((s, i) => (
        <g key={s}>
          <rect x="203" y={60 + i * 50} width="79" height="40" rx="6" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.45" />
          <text x="242" y={78 + i * 50} textAnchor="middle" fontSize="9" opacity="0.8">
            service
          </text>
          <text x="242" y={91 + i * 50} textAnchor="middle" fontSize="9" opacity="0.8">
            {s}
          </text>
        </g>
      ))}

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3" markerEnd="url(#sd-arrow)">
        <line x1="85" y1="106" x2="85" y2="178" />
        <line x1="142" y1="82" x2="193" y2="82" />
        <line x1="193" y1="205" x2="142" y2="202" />
      </g>
      <text x="92" y="146" fontSize="9" opacity="0.78">
        ถาม
      </text>
      <text x="167" y="74" textAnchor="middle" fontSize="9" opacity="0.78">
        เรียกตรง
      </text>
      <text x="167" y="192" textAnchor="middle" fontSize="9" opacity="0.78">
        ลงทะเบียน
      </text>

      <rect x="340" y="45" width="105" height="38" rx="7" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="392" y="69" textAnchor="middle" fontSize="10.5">
        client
      </text>

      <rect x="340" y="105" width="105" height="40" rx="7" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="392" y="123" textAnchor="middle" fontSize="10">
        Load
      </text>
      <text x="392" y="137" textAnchor="middle" fontSize="10">
        Balancer
      </text>

      <rect x="340" y="180" width="105" height="40" rx="7" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="392" y="198" textAnchor="middle" fontSize="10">
        Service
      </text>
      <text x="392" y="212" textAnchor="middle" fontSize="10">
        Registry
      </text>

      <rect x="500" y="50" width="95" height="170" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="4 3" />
      {instances.map((s, i) => (
        <g key={`r-${s}`}>
          <rect x="508" y={60 + i * 50} width="79" height="40" rx="6" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.45" />
          <text x="547" y={78 + i * 50} textAnchor="middle" fontSize="9" opacity="0.8">
            service
          </text>
          <text x="547" y={91 + i * 50} textAnchor="middle" fontSize="9" opacity="0.8">
            {s}
          </text>
        </g>
      ))}

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3" markerEnd="url(#sd-arrow)">
        <line x1="392" y1="85" x2="392" y2="103" />
        <line x1="392" y1="147" x2="392" y2="178" />
        <line x1="447" y1="125" x2="498" y2="125" />
        <line x1="498" y1="205" x2="447" y2="202" />
      </g>
      <text x="399" y="166" fontSize="9" opacity="0.78">
        ถาม
      </text>
      <text x="472" y="117" textAnchor="middle" fontSize="9" opacity="0.78">
        กระจายโหลด
      </text>
      <text x="472" y="192" textAnchor="middle" fontSize="9" opacity="0.78">
        ลงทะเบียน
      </text>

      <text x="310" y="278" textAnchor="middle" fontSize="10.5" opacity="0.78">
        ซ้าย client ต้องฉลาดเอง — ขวา client ยิงที่เดียวจบ ตัวอย่างจริงคือ consul + consul-template + nginx
      </text>

      <defs>
        <marker id="sd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
