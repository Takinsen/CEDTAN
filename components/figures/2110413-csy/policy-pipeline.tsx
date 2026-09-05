// the four steps the chapter ends with, laid out in the order you would actually do them
export function PolicyPipeline() {
  const steps = [
    { x: 10, en: 'Security Model', th: 'เลือกแบบร่าง', ex: 'Bell-LaPadula, Biba' },
    { x: 166, en: 'Access Control Model', th: 'ใครเขียนนโยบาย', ex: 'MAC, DAC, RBAC' },
    { x: 322, en: 'Access Control Matrix', th: 'แปลงเป็นตาราง', ex: 'ใคร × ของ' },
    { x: 478, en: 'Type Enforcement', th: 'บังคับใช้จริง', ex: 'ACL, Capability' },
  ];
  return (
    <svg
      viewBox="0 0 620 190"
      role="img"
      aria-label="สี่ขั้นของการทำนโยบายความปลอดภัย เริ่มจากเลือก security model แล้วแปลงเป็น access control model จากนั้นเขียนเป็น access control matrix และปิดท้ายด้วยการบังคับใช้ด้วย type enforcement"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="26" textAnchor="middle" fontSize="11" opacity="0.8">
        นามธรรมที่สุดอยู่ซ้าย ของที่รันจริงบนเครื่องอยู่ขวา
      </text>

      {steps.map((s, i) => (
        <g key={s.en}>
          <rect
            x={s.x}
            y="52"
            width="132"
            height="80"
            rx="9"
            fillOpacity={0.06 + i * 0.04}
            stroke="currentColor"
            strokeOpacity="0.55"
          />
          <text x={s.x + 66} y="76" textAnchor="middle" fontSize="11" fontWeight="600">
            {s.en}
          </text>
          <text x={s.x + 66} y="98" textAnchor="middle" fontSize="11" opacity="0.82">
            {s.th}
          </text>
          <text x={s.x + 66} y="120" textAnchor="middle" fontSize="11" opacity="0.7">
            {s.ex}
          </text>
        </g>
      ))}

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#pp-arrow)">
        <line x1="144" y1="92" x2="163" y2="92" />
        <line x1="300" y1="92" x2="319" y2="92" />
        <line x1="456" y1="92" x2="475" y2="92" />
      </g>

      <text x="310" y="166" textAnchor="middle" fontSize="11" opacity="0.78">
        คาบนี้สอนจากขวาไปซ้าย แต่ตอนทำงานจริงเดินจากซ้ายไปขวา
      </text>

      <defs>
        <marker id="pp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
