// the same three zones, built either from one firewall with three legs or from two in a row
export function FirewallDmz() {
  return (
    <svg
      viewBox="0 0 620 268"
      role="img"
      aria-label="DMZ คือโซนที่สามที่คนนอกเข้าถึงได้ สร้างได้สองแบบ คือใช้ไฟร์วอลล์ตัวเดียวที่มีสามขา หรือใช้ไฟร์วอลล์สองตัวเรียงกันโดยวาง DMZ ไว้ตรงกลาง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        สามโซนเหมือนกัน ต่างกันที่จำนวนไฟร์วอลล์
      </text>

      <text x="150" y="50" textAnchor="middle" fontSize="11" fontWeight="600">
        3-arms firewall
      </text>
      <rect x="16" y="62" width="90" height="40" rx="7" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      <text x="61" y="86" textAnchor="middle" fontSize="11">
        ข้างนอก
      </text>
      <rect x="124" y="62" width="56" height="94" rx="7" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="152" y="114" textAnchor="middle" fontSize="11" fontWeight="600">
        FW
      </text>
      <rect x="198" y="62" width="90" height="40" rx="7" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      <text x="243" y="86" textAnchor="middle" fontSize="11">
        ข้างใน
      </text>
      <rect x="106" y="170" width="94" height="40" rx="7" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
      <text x="153" y="194" textAnchor="middle" fontSize="11" fontWeight="600">
        DMZ
      </text>
      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none">
        <line x1="106" y1="82" x2="124" y2="82" />
        <line x1="180" y1="82" x2="198" y2="82" />
        <line x1="152" y1="156" x2="152" y2="170" />
      </g>

      <line x1="310" y1="42" x2="310" y2="222" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 4" />

      <text x="466" y="50" textAnchor="middle" fontSize="11" fontWeight="600">
        2 × 2-arms firewall
      </text>
      <rect x="332" y="62" width="72" height="40" rx="7" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      <text x="368" y="86" textAnchor="middle" fontSize="11">
        ข้างนอก
      </text>
      <rect x="416" y="62" width="34" height="40" rx="6" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="433" y="86" textAnchor="middle" fontSize="11" fontWeight="600">
        FW
      </text>
      <rect x="462" y="62" width="74" height="40" rx="7" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
      <text x="499" y="86" textAnchor="middle" fontSize="11" fontWeight="600">
        DMZ
      </text>
      <rect x="548" y="62" width="34" height="40" rx="6" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="565" y="86" textAnchor="middle" fontSize="11" fontWeight="600">
        FW
      </text>
      <rect x="416" y="170" width="166" height="40" rx="7" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      <text x="499" y="194" textAnchor="middle" fontSize="11">
        ข้างใน
      </text>
      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none">
        <line x1="404" y1="82" x2="416" y2="82" />
        <line x1="450" y1="82" x2="462" y2="82" />
        <line x1="536" y1="82" x2="548" y2="82" />
        <line x1="565" y1="102" x2="565" y2="170" />
      </g>
      <text x="466" y="140" textAnchor="middle" fontSize="11" opacity="0.8">
        คนนอกไปได้ไกลสุดแค่ DMZ
      </text>

      <text x="310" y="244" textAnchor="middle" fontSize="11" opacity="0.78">
        เครื่องที่คนนอกต้องเข้าถึงได้ อยู่ใน DMZ ไม่ใช่ในเครือข่ายภายใน
      </text>
      <text x="310" y="262" textAnchor="middle" fontSize="11" opacity="0.78">
        Let&apos;s fight in the field, not in our room
      </text>
    </svg>
  );
}
