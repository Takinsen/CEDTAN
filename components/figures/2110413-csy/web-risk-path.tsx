// one attack path traced from the attacker to the business, with the missing control marked
const STEPS = [
  { x: 20, y: 20, title: 'Threat agent', lines: ['ลูกค้าที่ล็อกอินแล้ว', 'คนหนึ่ง'] },
  { x: 225, y: 20, title: 'Attack vector', lines: ['แก้เลข order ใน URL', 'จาก 1043 เป็น 1044'] },
  { x: 430, y: 20, title: 'Weakness', lines: ['ไม่ตรวจว่า order', 'เป็นของคนที่ขอ'] },
  { x: 20, y: 172, title: 'Security control', lines: ['มีแค่ด่าน login', 'ไม่มีการตรวจราย object'] },
  { x: 225, y: 172, title: 'Technical impact', lines: ['order ของลูกค้า', 'ทุกคนรั่วออกไป'] },
  { x: 430, y: 172, title: 'Business impact', lines: ['ค่าปรับตาม PDPA', 'ลูกค้าเลิกเชื่อใจ'] },
];

export function WebRiskPath() {
  return (
    <svg
      viewBox="0 0 620 290"
      role="img"
      aria-label="เส้นทางโจมตีหนึ่งเส้น หกขั้น ลูกค้าที่ล็อกอินแล้วแก้เลขคำสั่งซื้อใน URL ระบบไม่ตรวจว่าคำสั่งซื้อเป็นของใคร ด่านที่มีคือ login อย่างเดียว ผลทางเทคนิคคือคำสั่งซื้อของลูกค้าทุกคนรั่ว ผลทางธุรกิจคือค่าปรับตาม PDPA และลูกค้าเลิกเชื่อใจ"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {STEPS.map((s, i) => (
        <g key={s.title}>
          <rect
            x={s.x}
            y={s.y}
            width="170"
            height="84"
            rx="8"
            stroke="currentColor"
            strokeOpacity={i === 3 ? 0.75 : 0.55}
            strokeWidth={i === 3 ? 1.8 : 1}
            strokeDasharray={i === 3 ? '6 4' : undefined}
            fillOpacity={i === 0 ? 0.3 : i === 5 ? 0.18 : 0.06}
          />
          <text x={s.x + 12} y={s.y + 24} fontSize="12" fontWeight="600">
            {`${i + 1}. ${s.title}`}
          </text>
          {s.lines.map((line, j) => (
            <text key={line} x={s.x + 12} y={s.y + 47 + j * 15} fontSize="11" opacity="0.85">
              {line}
            </text>
          ))}
        </g>
      ))}

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" fill="none" markerEnd="url(#wrp-arrow)">
        <line x1="192" y1="62" x2="221" y2="62" />
        <line x1="397" y1="62" x2="426" y2="62" />
        <path d="M 515 106 L 515 138 L 105 138 L 105 168" />
        <line x1="192" y1="214" x2="221" y2="214" />
        <line x1="397" y1="214" x2="426" y2="214" />
      </g>

      <text x="24" y="276" fontSize="11" opacity="0.85">
        ↑ ด่านที่ขาดไปด่านเดียว พอให้ทั้งเส้นทางเดินถึงปลาย
      </text>

      <defs>
        <marker id="wrp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
