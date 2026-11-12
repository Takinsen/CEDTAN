// what sat inside the battery-shaped box: a 3G/4G router, six OrangePi boards, modified SIM-less 2.5G phones
export function GsmBoxWiring() {
  return (
    <svg
      viewBox="0 0 620 236"
      role="img"
      aria-label="กล่องที่หน้าตาเหมือนแบตเตอรี่ วงจรข้างในหุ้ม epoxy ข้างในมี router หรือ switch ที่ต่อเน็ต 3G หรือ 4G ต่อกับบอร์ด OrangePi หกบอร์ด แต่ละบอร์ดมี microSD บอร์ดต่อสายไปยังโทรศัพท์ 2.5G ที่ถูกดัดแปลงและไม่มีซิมการ์ด โทรศัพท์เชื่อมกับเครือข่าย GSM"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="112" y="38" width="372" height="158" rx="12" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeDasharray="6 4" />
      <text x="298" y="28" textAnchor="middle" fontSize="11" opacity="0.85">
        กล่องที่ดูเหมือนแบตเตอรี่ก้อนใหญ่ วงจรทั้งหมดหุ้ม epoxy กันเครื่อง x-ray
      </text>

      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="128" y="92" width="96" height="50" rx="7" fillOpacity="0.1" />
        <rect x="266" y="72" width="96" height="58" rx="7" fillOpacity="0.06" />
        <rect x="260" y="78" width="96" height="58" rx="7" fillOpacity="0.08" />
        <rect x="254" y="84" width="96" height="58" rx="7" fillOpacity="0.14" />
        <rect x="380" y="84" width="92" height="58" rx="7" fillOpacity="0.14" />
      </g>

      <g fontSize="11" textAnchor="middle">
        <text x="176" y="113" fontWeight="600">router/switch</text>
        <text x="176" y="130" opacity="0.85">+ 3G/4G</text>
        <text x="302" y="107" fontWeight="600">OrangePi</text>
        <text x="302" y="125" opacity="0.85">มี microSD</text>
        <text x="426" y="107" fontWeight="600">โทรศัพท์ 2.5G</text>
        <text x="426" y="125" opacity="0.85">ดัดแปลง ไม่มีซิม</text>
        <text x="302" y="160" opacity="0.85">× 6 บอร์ด</text>
      </g>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none">
        <line x1="225" y1="117" x2="251" y2="117" />
        <line x1="351" y1="113" x2="377" y2="113" />
        <line x1="40" y1="117" x2="126" y2="117" strokeDasharray="3 3" />
        <path d="M 492 100 Q 500 113 492 126" />
        <path d="M 502 92 Q 514 113 502 134" />
        <path d="M 512 84 Q 528 113 512 142" />
      </g>

      <g fontSize="11" textAnchor="middle">
        <text x="56" y="100" opacity="0.85">อินเทอร์เน็ต</text>
        <text x="566" y="104" fontWeight="600">เครือข่าย</text>
        <text x="566" y="122" fontWeight="600">GSM (2.5G)</text>
      </g>

      <text x="310" y="222" textAnchor="middle" fontSize="11" opacity="0.78">
        ของที่ถูกเก็บกลับมาเป็นหลักฐานมีชิ้นเดียว คือ microSD จากบอร์ด OrangePi
      </text>
    </svg>
  );
}
