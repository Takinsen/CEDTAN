// the ATM from the slide, with each of its steps named as one of the three components
const ROWS = [
  { y: 48, does: 'สอดบัตร แล้วกด PIN', part: 'Authentication' },
  { y: 110, does: 'ตู้เช็กยอดเงินและวงเงินต่อวัน', part: 'Authorization' },
  { y: 172, does: 'พิมพ์สลิป และลงรายการเดินบัญชี', part: 'Accounting' },
];

export function AtmThroughAaa() {
  return (
    <svg
      viewBox="0 0 620 250"
      role="img"
      aria-label="ขั้นตอนการใช้ตู้ ATM จับคู่กับสามองค์ประกอบ สอดบัตรและกด PIN คือ authentication ตู้เช็กยอดและวงเงินคือ authorization และการพิมพ์สลิปกับลงรายการเดินบัญชีคือ accounting"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="26" textAnchor="middle" fontSize="11" opacity="0.8">
        ตู้ ATM เป็นระบบที่ปลอดภัย เพราะมีองค์ประกอบครบทั้งสาม
      </text>

      {ROWS.map((r) => (
        <g key={r.part}>
          <rect x="20" y={r.y} width="250" height="44" rx="8" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
          <text x="145" y={r.y + 27} textAnchor="middle" fontSize="11">
            {r.does}
          </text>
          <line x1="274" y1={r.y + 22} x2="346" y2={r.y + 22} stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" markerEnd="url(#atm-arrow)" />
          <rect x="350" y={r.y} width="250" height="44" rx="8" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
          <text x="475" y={r.y + 27} textAnchor="middle" fontSize="12" fontWeight="600">
            {r.part}
          </text>
        </g>
      ))}

      <text x="310" y="238" textAnchor="middle" fontSize="11" opacity="0.78">
        ตู้เซฟธนาคารก็ครบสามอย่างเหมือนกัน — เซ็นชื่อ ตรวจสิทธิ์ และจดบันทึกการเข้าใช้
      </text>

      <defs>
        <marker id="atm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
