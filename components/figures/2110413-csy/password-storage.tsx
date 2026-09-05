// four eras of storing a password, each one an answer to how the era before it got broken
const ERAS = [
  { x: 18, when: '1960s', how: 'Plaintext', a: 'ไฟล์หลุดเมื่อไหร่', b: 'เห็นรหัสผ่านเลย' },
  { x: 166, when: '1970s', how: 'Hash', a: 'ทางเดียว ถอดไม่ได้', b: 'แต่ค่าเดิมได้ผลเดิม' },
  { x: 314, when: '1980s+', how: 'Salted hash', a: 'เติมค่าสุ่มต่อคน', b: 'ตารางสำเร็จรูปพัง' },
  { x: 462, when: '2000s+', how: 'Slow hash', a: 'ช้าและกินหน่วยความจำ', b: 'เดาแล้วไม่คุ้ม' },
];

export function PasswordStorage() {
  return (
    <svg
      viewBox="0 0 620 246"
      role="img"
      aria-label="วิธีเก็บรหัสผ่านสี่ยุค คือเก็บเป็นข้อความธรรมดา เก็บเป็นค่าแฮช เก็บเป็นค่าแฮชที่เติมเกลือ และเก็บด้วยฟังก์ชันแฮชที่ตั้งใจให้ช้า"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {ERAS.map((e) => (
        <g key={e.when}>
          <rect x={e.x} y="30" width="140" height="126" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
          <text x={e.x + 70} y="54" textAnchor="middle" fontSize="11" opacity="0.78">
            {e.when}
          </text>
          <text x={e.x + 70} y="78" textAnchor="middle" fontSize="12" fontWeight="600">
            {e.how}
          </text>
          <text x={e.x + 70} y="112" textAnchor="middle" fontSize="11" opacity="0.8">
            {e.a}
          </text>
          <text x={e.x + 70} y="134" textAnchor="middle" fontSize="11" opacity="0.8">
            {e.b}
          </text>
        </g>
      ))}

      <line x1="18" y1="176" x2="600" y2="176" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" markerEnd="url(#ps-arrow)" />

      <text x="310" y="206" textAnchor="middle" fontSize="11" opacity="0.78">
        แต่ละยุคเกิดขึ้นเพราะยุคก่อนหน้าถูกเจาะจนใช้ไม่ได้
      </text>
      <text x="310" y="230" textAnchor="middle" fontSize="11" opacity="0.78">
        ยุคปัจจุบันคือ bcrypt, scrypt และ Argon2 ที่ตั้งใจออกแบบให้ช้า
      </text>

      <defs>
        <marker id="ps-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
