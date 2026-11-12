// reflected XSS as a sequence: link, request, echoed script, cookie sent to the attacker
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';
const COLS = [
  { x: 75, title: 'ผู้โจมตี', sub: '' },
  { x: 225, title: 'เบราว์เซอร์ของเหยื่อ', sub: 'ล็อกอินค้างไว้' },
  { x: 395, title: 'shop.example', sub: 'มีบั๊กสะท้อน name' },
  { x: 545, title: 'evil.example', sub: 'เครื่องของผู้โจมตี' },
];

export function WebXssSessionTheft() {
  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="ขั้นที่ 1 ผู้โจมตีส่งลิงก์ให้เหยื่อทางอีเมลหรือแชท ขั้นที่ 2 เบราว์เซอร์ของเหยื่อเปิดลิงก์ไปที่ shop.example ขั้นที่ 3 shop.example ตอบหน้าเว็บที่มีสคริปต์ของผู้โจมตีอยู่ข้างใน สคริปต์จึงรันในนามของ shop.example ขั้นที่ 4 สคริปต์ส่ง cookie ของเหยื่อไปที่ evil.example"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {COLS.map((c, i) => (
        <g key={c.title}>
          <rect
            x={c.x - 64}
            y="12"
            width="128"
            height="46"
            rx="7"
            stroke="currentColor"
            strokeOpacity="0.55"
            fillOpacity={i === 0 || i === 3 ? 0.28 : 0.08}
          />
          <text x={c.x} y={c.sub ? 31 : 40} textAnchor="middle" fontSize="12" fontWeight="600">
            {c.title}
          </text>
          {c.sub ? (
            <text x={c.x} y="48" textAnchor="middle" fontSize="11" opacity="0.85">
              {c.sub}
            </text>
          ) : null}
          <line x1={c.x} y1="60" x2={c.x} y2="240" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="3 4" />
        </g>
      ))}

      <rect x="217" y="178" width="16" height="56" rx="3" fillOpacity="0.35" stroke="currentColor" strokeOpacity="0.6" />

      <g stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.4" fill="none" markerEnd="url(#wxs-arrow)">
        <line x1="77" y1="96" x2="221" y2="96" />
        <line x1="227" y1="136" x2="391" y2="136" />
        <line x1="393" y1="176" x2="235" y2="176" />
        <line x1="235" y1="226" x2="541" y2="226" />
      </g>

      <text x="150" y="88" textAnchor="middle" fontSize="11">
        1 ส่งลิงก์ทางอีเมลหรือแชท
      </text>
      <text x="310" y="128" textAnchor="middle" fontSize="11" fontFamily={MONO}>
        2 GET ?name=&lt;script&gt;…
      </text>
      <text x="314" y="168" textAnchor="middle" fontSize="11" fontFamily={MONO}>
        3 Hello, &lt;script&gt;…
      </text>
      <text x="312" y="243" textAnchor="middle" fontSize="11" fontFamily={MONO}>
        4 GET /c?session=7f3a9c
      </text>
      <text x="243" y="200" fontSize="11" opacity="0.85">
        รันในนามของ shop.example
      </text>

      <text x="24" y="266" fontSize="11" opacity="0.85">
        เซิร์ฟเวอร์ไม่ได้ถูกเจาะ มันแค่สะท้อนข้อความกลับไปเป็นโค้ด คนที่ถูกยึดบัญชีคือเหยื่อที่คลิก
      </text>
      <text x="24" y="284" fontSize="11" opacity="0.85">
        ค่า session=7f3a9c มาจากการรันจริงใน Chromium บนเครื่องตัวเอง
      </text>

      <defs>
        <marker id="wxs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
