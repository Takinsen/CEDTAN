// multi-tier edge: cloudlet, metro cloud and cloud datacenter, with one SDN controller over all switches
const tiers = [
  { y: 20, label: 'Tier-3: Cloud datacenter' },
  { y: 145, label: 'Tier-2: Metro cloud' },
  { y: 270, label: 'Tier-1: User & cloudlet' },
];

export function MultiTierEdge() {
  return (
    <svg
      viewBox="0 0 680 375"
      role="img"
      aria-label="OpenFlow switch สามตัวเรียงจากล่างขึ้นบน ตัวล่างต่อกับ cloudlet และผู้ใช้ ผ่าน MAN ไปตัวกลางที่ต่อกับ metro cloud แล้วผ่าน WAN ไปตัวบนที่ต่อกับศูนย์ข้อมูลคลาวด์ SDN controller และ service orchestrator ต่อกับ switch ทั้งสามตัว ยิ่งขึ้นบนพลังคำนวณยิ่งมาก service delay ก็ยิ่งมาก"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5">
        <line x1="20" y1="345" x2="20" y2="25" markerEnd="url(#mt-arrow)" />
        <line x1="70" y1="25" x2="70" y2="345" markerEnd="url(#mt-arrow)" />
      </g>
      <text transform="translate(42 185) rotate(-90)" textAnchor="middle" fontSize="11">
        พลังคำนวณเพิ่มขึ้นเมื่อขึ้นไปข้างบน
      </text>
      <text transform="translate(92 185) rotate(-90)" textAnchor="middle" fontSize="11">
        service delay ลดลงเมื่อลงมาข้างล่าง
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3">
        <line x1="400" y1="46" x2="400" y2="145" />
        <line x1="400" y1="171" x2="400" y2="270" />
        <line x1="460" y1="33" x2="490" y2="33" />
        <line x1="460" y1="158" x2="490" y2="158" />
        <line x1="460" y1="283" x2="490" y2="283" />
        <line x1="400" y1="296" x2="400" y2="322" />
      </g>
      <ellipse cx="400" cy="95" rx="70" ry="20" fill="var(--color-fd-background, white)" stroke="currentColor" strokeOpacity="0.55" />
      <text x="400" y="99" textAnchor="middle" fontSize="11">
        WAN
      </text>
      <ellipse cx="400" cy="220" rx="70" ry="20" fill="var(--color-fd-background, white)" stroke="currentColor" strokeOpacity="0.55" />
      <text x="400" y="224" textAnchor="middle" fontSize="11">
        MAN
      </text>

      {tiers.map(({ y, label }) => (
        <g key={label}>
          <rect x="340" y={y} width="120" height="26" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
          <text x="400" y={y + 17} textAnchor="middle" fontSize="11">
            OpenFlow switch
          </text>
          <rect x="490" y={y - 5} width="180" height="36" rx="7" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
          <text x="580" y={y + 17} textAnchor="middle" fontSize="11" fontWeight="600">
            {label}
          </text>
        </g>
      ))}

      <rect x="290" y="322" width="220" height="30" rx="6" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" />
      <text x="400" y="341" textAnchor="middle" fontSize="11">
        แว่น · นาฬิกา · มือถือ ผ่าน access point
      </text>

      <rect x="130" y="100" width="130" height="30" rx="6" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.55" />
      <text x="195" y="119" textAnchor="middle" fontSize="11">
        Service Orchestrator
      </text>
      <line x1="195" y1="130" x2="195" y2="145" stroke="currentColor" strokeOpacity="0.55" />
      <rect x="130" y="145" width="130" height="30" rx="6" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.6" />
      <text x="195" y="164" textAnchor="middle" fontSize="11" fontWeight="600">
        SDN Controller
      </text>
      <g fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.2" strokeDasharray="5 4">
        <path d="M 260 152 Q 300 60 340 33" />
        <line x1="260" y1="160" x2="340" y2="158" />
        <path d="M 260 168 Q 300 260 340 283" />
      </g>

      <defs>
        <marker id="mt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}
