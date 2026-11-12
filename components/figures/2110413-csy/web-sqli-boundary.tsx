// where the attacker's quote ends the data and starts new SQL, against the parameterised form
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';
const X0 = 24;
const CW = 7.2;
const QUERY = "SELECT has_shipped FROM shipment WHERE id='1001' OR 2>1 --'";

// x where character i of QUERY starts
const at = (i: number) => X0 + i * CW;

const BRACKETS = [
  { from: 0, to: 43, label: 'SQL ที่โปรแกรมเมอร์เขียน', ly: 96, lx: at(21.5), anchor: 'middle' as const },
  { from: 43, to: 47, label: 'ข้อมูล', ly: 96, lx: at(45), anchor: 'middle' as const },
  { from: 47, to: 48, label: "' ตัวนี้ปิดสตริงก่อนกำหนด", ly: 140, lx: at(47.5), anchor: 'middle' as const },
  { from: 48, to: 56, label: 'SQL ใหม่ของผู้โจมตี', ly: 118, lx: at(52) - 8, anchor: 'start' as const },
  { from: 56, to: 59, label: "comment กลืน ' ตัวท้าย", ly: 96, lx: at(56), anchor: 'start' as const },
];

export function WebSqliBoundary() {
  return (
    <svg
      viewBox="0 0 620 270"
      role="img"
      aria-label="เมื่อต่อสตริงด้วยค่า 1001' OR 2>1 -- เครื่องหมาย ' ของผู้โจมตีปิดสตริงก่อนกำหนด คำว่า OR 2>1 กลายเป็น SQL ใหม่ และ -- ทำให้ ' ตัวท้ายกลายเป็น comment ผลคือได้ทุกแถว ส่วนแบบ parameterised คำสั่งมีแค่เครื่องหมาย ? และทั้งก้อนถูกส่งไปเป็นค่าหนึ่งค่า จึงไม่พบแถวใดเลย"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x={X0} y="24" fontSize="11" opacity="0.85">
        ต่อสตริง เมื่อ id คือ 1001&apos; OR 2&gt;1 --
      </text>
      <text x={X0} y="54" fontSize="12" fontFamily={MONO} textLength={QUERY.length * CW} lengthAdjust="spacing">
        {QUERY}
      </text>
      <text x={at(59) + 14} y="54" fontSize="11" fontWeight="600">
        → ได้ทุกแถว
      </text>

      <g stroke="currentColor" strokeOpacity="0.6" fill="none" strokeWidth="1.2">
        {BRACKETS.map((b) => {
          const x1 = at(b.from) + 1;
          const x2 = at(b.to) - 1;
          const mid = (at(b.from) + at(b.to)) / 2;
          return (
            <g key={b.label}>
              <path d={`M ${x1} 62 L ${x1} 68 L ${x2} 68 L ${x2} 62`} />
              {b.ly > 96 ? <line x1={mid} y1="68" x2={mid} y2={b.ly - 12} strokeDasharray="2 2" /> : null}
            </g>
          );
        })}
      </g>
      {BRACKETS.map((b) => (
        <text key={b.label} x={b.lx} y={b.ly} textAnchor={b.anchor} fontSize="11">
          {b.label}
        </text>
      ))}

      <line x1={X0} y1="166" x2="596" y2="166" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 4" />

      <text x={X0} y="192" fontSize="11" opacity="0.85">
        parameterised: คำสั่งกับข้อมูลเดินไปคนละช่อง
      </text>
      <rect x={X0} y="202" width="340" height="28" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x={X0 + 10} y="221" fontSize="12" fontFamily={MONO}>
        ... WHERE id = ?
      </text>
      <text x={X0 + 180} y="221" fontSize="11" opacity="0.85">
        คำสั่ง — ไม่มีข้อมูลปน
      </text>
      <rect x={X0} y="236" width="340" height="28" rx="5" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
      <text x={X0 + 10} y="255" fontSize="12" fontFamily={MONO}>
        1001&apos; OR 2&gt;1 --
      </text>
      <text x={X0 + 180} y="255" fontSize="11" opacity="0.85">
        ค่าของ ? — ทั้งก้อนคือ id ตัวเดียว
      </text>
      <text x="384" y="238" fontSize="11" fontWeight="600">
        → ไม่พบแถว เพราะไม่มี id
      </text>
      <text x="384" y="253" fontSize="11" fontWeight="600">
        ที่สะกดแบบนี้
      </text>
    </svg>
  );
}
