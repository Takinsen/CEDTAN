// the same traffic, three devices, and the one question that separates them
export function IdsIpsFirewall() {
  const rows = [
    { name: 'Firewall', pos: 'คั่นกลางทาง', act: 'บล็อกตามกฎที่ตั้งไว้', when: 'ก่อนเข้า' },
    { name: 'IDS', pos: 'ดูสำเนา ไม่คั่นทาง', act: 'เตือนอย่างเดียว', when: 'ระหว่างหรือหลัง' },
    { name: 'IPS', pos: 'คั่นกลางทาง', act: 'ตัดการเชื่อมต่อเอง', when: 'ระหว่าง' },
  ];
  const x = [16, 150, 330, 486];
  const w = [130, 176, 152, 118];
  return (
    <svg
      viewBox="0 0 620 218"
      role="img"
      aria-label="ตารางเทียบ firewall IDS และ IPS ว่าแต่ละตัวอยู่ตรงไหนของเส้นทางข้อมูล ทำอะไรได้ และลงมือตอนไหน โดย IDS เป็นตัวเดียวที่ไม่ได้คั่นกลางทาง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="24" textAnchor="middle" fontSize="11" opacity="0.8">
        ต่างกันที่ &quot;อยู่ตรงไหนของทาง&quot; และ &quot;ลงมือเองได้ไหม&quot;
      </text>

      {['อุปกรณ์', 'อยู่ตรงไหน', 'ทำอะไรได้', 'ตอนไหน'].map((h, c) => (
        <text key={h} x={x[c] + w[c] / 2} y="56" textAnchor="middle" fontSize="11" fontWeight="600">
          {h}
        </text>
      ))}

      {rows.map((r, i) => (
        <g key={r.name}>
          <rect x="16" y={68 + i * 38} width="588" height="34" rx="6" fillOpacity={i === 1 ? 0.16 : 0.05} stroke="currentColor" strokeOpacity="0.5" />
          <text x={x[0] + w[0] / 2} y={90 + i * 38} textAnchor="middle" fontSize="11" fontWeight="600">
            {r.name}
          </text>
          <text x={x[1] + w[1] / 2} y={90 + i * 38} textAnchor="middle" fontSize="11">
            {r.pos}
          </text>
          <text x={x[2] + w[2] / 2} y={90 + i * 38} textAnchor="middle" fontSize="11">
            {r.act}
          </text>
          <text x={x[3] + w[3] / 2} y={90 + i * 38} textAnchor="middle" fontSize="11">
            {r.when}
          </text>
        </g>
      ))}

      <text x="310" y="204" textAnchor="middle" fontSize="11" opacity="0.78">
        IDS + firewall ที่สั่งงานกันได้ = IPS และนั่นคือที่มาของ false alarm ที่แพงขึ้น
      </text>
    </svg>
  );
}
