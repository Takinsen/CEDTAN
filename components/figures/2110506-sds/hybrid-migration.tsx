// a router with the access control list that guards the link above it
function Router({ x, y, name, acl }: { x: number; y: number; name: string; acl: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="13" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.7" />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="600">
        {name}
      </text>
      <rect x={x + 18} y={y - 30} width="44" height="18" rx="3" fillOpacity="0.32" stroke="currentColor" strokeOpacity="0.7" />
      <text x={x + 40} y={y - 17} textAnchor="middle" fontSize="11" fontWeight="600">
        {acl}
      </text>
    </g>
  );
}

// a dashed group of servers
function Group({ x, y, w, label, count }: { x: number; y: number; w: number; label: string; count: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="38" rx="4" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.6" strokeDasharray="4 3" />
      {Array.from({ length: count }, (_, i) => (
        <rect key={i} x={x + 6 + i * 13} y={y + 9} width="9" height="20" rx="1.5" fillOpacity="0.45" />
      ))}
      <text x={x + 12 + count * 13} y={y + 24} fontSize="11">
        {label}
      </text>
    </g>
  );
}

// hybrid migration: part of a three-part app moves to the cloud, part stays, and the ACLs are rebuilt on both sides of the link
export function HybridMigration() {
  const line = { stroke: 'currentColor', strokeOpacity: 0.6, strokeWidth: 1.5 };

  return (
    <svg
      viewBox="0 0 640 352"
      role="img"
      aria-label="ก่อนย้าย data center ขององค์กรมี back-end อยู่หลัง R2 และ ACL2 มี front-end สามเครื่องและ other service อยู่ที่ R1 หลัง ACL1 หลังย้ายแบบ hybrid back-end, other service และ front-end สองเครื่องย้ายขึ้นคลาวด์อยู่หลัง R4 และ ACL4 ส่วน front-end หนึ่งเครื่องยังอยู่ใน data center ที่ R3 และ ACL3 สองฝั่งเชื่อมกันด้วยเส้นระหว่าง R3 กับ R4"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {/* before */}
      <text x="140" y="18" textAnchor="middle" fontSize="12.5" fontWeight="600">
        ก่อนย้าย
      </text>
      <rect x="10" y="28" width="260" height="314" rx="16" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.6" />
      <text x="140" y="332" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Enterprise Data Center
      </text>
      <Group x={40} y={45} w={140} label="back-end" count={4} />
      <line x1="110" y1="83" x2="110" y2="137" {...line} />
      <Router x={110} y={150} name="R2" acl="ACL2" />
      <line x1="110" y1="163" x2="110" y2="207" {...line} />
      <Router x={110} y={220} name="R1" acl="ACL1" />
      <line x1="123" y1="220" x2="180" y2="220" {...line} />
      <Group x={180} y={201} w={82} label="other" count={1} />
      <line x1="110" y1="233" x2="110" y2="245" {...line} />
      <Group x={30} y={245} w={150} label="front-end" count={3} />

      {/* arrow */}
      <line x1="282" y1="165" x2="330" y2="165" stroke="currentColor" strokeOpacity="0.7" strokeWidth="3" markerEnd="url(#hm-arrow)" />

      {/* after */}
      <text x="490" y="18" textAnchor="middle" fontSize="12.5" fontWeight="600">
        หลังย้ายแบบ hybrid
      </text>
      <rect x="345" y="28" width="285" height="178" rx="16" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.6" />
      <text x="600" y="48" textAnchor="end" fontSize="11.5" fontWeight="600">
        Cloud
      </text>
      <Group x={365} y={45} w={140} label="back-end" count={4} />
      <line x1="430" y1="83" x2="430" y2="117" {...line} />
      <Router x={430} y={130} name="R4" acl="ACL4" />
      <line x1="443" y1="130" x2="520" y2="130" {...line} />
      <Group x={520} y={111} w={100} label="other" count={1} />
      <line x1="440" y1="139" x2="470" y2="158" {...line} />
      <Group x={470} y={158} w={130} label="front-end" count={2} />

      <line x1="430" y1="143" x2="430" y2="259" {...line} strokeDasharray="6 3" />
      <text x="422" y="225" textAnchor="end" fontSize="11" opacity="0.85">
        เส้นเชื่อมสองฝั่ง
      </text>

      <rect x="345" y="236" width="285" height="106" rx="16" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.6" />
      <Router x={430} y={272} name="R3" acl="ACL3" />
      <line x1="443" y1="277" x2="480" y2="288" {...line} />
      <Group x={480} y={278} w={130} label="front-end" count={1} />
      <text x="420" y="332" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Enterprise Data Center
      </text>

      <defs>
        <marker id="hm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.75" />
        </marker>
      </defs>
    </svg>
  );
}
