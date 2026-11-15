// three tiers of edge-cloud cooperation: which tasks go to the edge and which to the cloud
export function OffloadTiers() {
  return (
    <svg
      viewBox="0 0 680 285"
      role="img"
      aria-label="สามชั้น อุปกรณ์อยู่ล่างสุด ชั้นกลางคือ cloudlet, fog และ mobile-edge computing ที่กระจายอยู่ ชั้นบนคือศูนย์ข้อมูลคลาวด์ที่รวมศูนย์ งานที่รอไม่ได้ส่งผ่าน LAN ไปชั้นกลาง งานที่รอได้ส่งผ่าน WAN ไปคลาวด์"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="200" y="20" width="460" height="60" rx="9" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="430" y="45" textAnchor="middle" fontSize="12" fontWeight="600">
        Cloud Datacenter
      </text>
      <text x="430" y="66" textAnchor="middle" fontSize="11" opacity="0.78">
        รวมศูนย์ (centralized)
      </text>

      <rect x="200" y="110" width="460" height="72" rx="9" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.55" />
      {[
        [212, 'Cloudlet'],
        [362, 'Fog Computing'],
        [512, 'Mobile-Edge Computing'],
      ].map(([x, label]) => (
        <g key={label as string}>
          <rect x={x as number} y="118" width="138" height="30" rx="6" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
          <text x={(x as number) + 69} y="137" textAnchor="middle" fontSize="11">
            {label}
          </text>
        </g>
      ))}
      <text x="430" y="170" textAnchor="middle" fontSize="11" opacity="0.78">
        กระจาย (distributed) · เช่น หาใบหน้าในภาพ
      </text>

      <rect x="200" y="210" width="460" height="60" rx="9" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="430" y="236" textAnchor="middle" fontSize="11.5" fontWeight="600">
        แว่น · มือถือ · นาฬิกา · รถ · laptop · เทอร์โมมิเตอร์
      </text>
      <text x="430" y="256" textAnchor="middle" fontSize="11" opacity="0.78">
        อุปกรณ์ของผู้ใช้
      </text>

      <g fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" markerEnd="url(#ot-arrow)">
        <path d="M 200 255 L 60 255 L 60 40 L 196 40" strokeDasharray="6 4" />
        <path d="M 200 232 L 150 232 L 150 145 L 196 145" />
      </g>

      <text x="68" y="88" fontSize="11" fontWeight="600">
        งานที่รอได้
      </text>
      <text x="68" y="103" fontSize="11">
        delay-tolerant
      </text>
      <text x="68" y="118" fontSize="11" opacity="0.78">
        ผ่าน WAN
      </text>

      <text x="144" y="178" textAnchor="end" fontSize="11" fontWeight="600">
        งานที่รอไม่ได้
      </text>
      <text x="144" y="193" textAnchor="end" fontSize="11">
        delay-sensitive
      </text>
      <text x="144" y="208" textAnchor="end" fontSize="11" opacity="0.78">
        ผ่าน LAN
      </text>

      <defs>
        <marker id="ot-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}
