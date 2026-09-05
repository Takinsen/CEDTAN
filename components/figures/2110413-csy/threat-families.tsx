// the nine threats the slide lists, grouped by how each one reaches us
const GROUPS = [
  {
    x: 20,
    th: 'โปรแกรมมุ่งร้าย',
    how: 'เข้ามารันในเครื่องเรา',
    items: ['Computer Worms', 'Computer Viruses', 'Trojan Horses', 'Spyware / Ransomware'],
  },
  {
    x: 220,
    th: 'การหลอกลวง',
    how: 'หลอกให้เรากดเอง',
    items: ['Phishing', 'Pharming', 'Spam'],
  },
  {
    x: 420,
    th: 'ยึดเครื่อง ยึดตัวตน',
    how: 'เอาของเราไปใช้ต่อ',
    items: ['BotNet', 'Identity Theft'],
  },
];

export function ThreatFamilies() {
  return (
    <svg
      viewBox="0 0 620 254"
      role="img"
      aria-label="ภัยเก้าอย่างที่ต้องรู้จัก แบ่งเป็นสามกลุ่ม คือโปรแกรมมุ่งร้ายที่เข้ามารันในเครื่อง การหลอกลวงที่ให้เรากดเอง และการยึดเครื่องกับยึดตัวตน"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="24" textAnchor="middle" fontSize="11" opacity="0.8">
        เก้าอย่างนี้จัดกลุ่มตามวิธีที่มันเข้าถึงเรา
      </text>

      {GROUPS.map((g) => (
        <g key={g.th}>
          <rect x={g.x} y="48" width="180" height="164" rx="10" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
          <text x={g.x + 16} y="74" fontSize="12" fontWeight="600">
            {g.th}
          </text>
          <text x={g.x + 16} y="96" fontSize="11" opacity="0.78">
            {g.how}
          </text>
          {g.items.map((item, i) => (
            <text key={item} x={g.x + 16} y={126 + i * 22} fontSize="11" opacity="0.85">
              {item}
            </text>
          ))}
        </g>
      ))}

      <text x="310" y="240" textAnchor="middle" fontSize="11" opacity="0.78">
        คนส่วนใหญ่ไม่รู้จักพวกนี้เลย
      </text>
    </svg>
  );
}
