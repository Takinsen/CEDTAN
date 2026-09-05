const LEVELS = ['สูง', 'กลาง', 'ต่ำ'];

// one model: three levels, an arrow for each direction it allows, and the two rules it forbids
function ModelColumn({
  x,
  title,
  sub,
  readDown,
  writeDown,
  readLabel,
  writeLabel,
  rule,
}: {
  x: number;
  title: string;
  sub: string;
  readDown: boolean;
  writeDown: boolean;
  readLabel: string;
  writeLabel: string;
  rule: string;
}) {
  const top = 92;
  const bottom = 208;
  return (
    <g>
      <text x={x + 110} y="48" textAnchor="middle" fontSize="11" fontWeight="600">
        {title}
      </text>
      <text x={x + 110} y="68" textAnchor="middle" fontSize="11" opacity="0.8">
        {sub}
      </text>

      {LEVELS.map((l, i) => (
        <g key={l}>
          <rect
            x={x + 58}
            y={86 + i * 46}
            width="104"
            height="38"
            rx="7"
            fillOpacity={0.2 - i * 0.06}
            stroke="currentColor"
            strokeOpacity="0.5"
          />
          <text x={x + 110} y={110 + i * 46} textAnchor="middle" fontSize="11">
            {l}
          </text>
        </g>
      ))}

      <line
        x1={x + 40}
        y1={readDown ? top : bottom}
        x2={x + 40}
        y2={readDown ? bottom : top}
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.6"
        markerEnd="url(#blb-arrow)"
      />
      <line
        x1={x + 180}
        y1={writeDown ? top : bottom}
        x2={x + 180}
        y2={writeDown ? bottom : top}
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.6"
        markerEnd="url(#blb-arrow)"
      />

      <text x={x + 40} y="234" textAnchor="middle" fontSize="11" opacity="0.85">
        {readLabel}
      </text>
      <text x={x + 180} y="234" textAnchor="middle" fontSize="11" opacity="0.85">
        {writeLabel}
      </text>
      <text x={x + 110} y="258" textAnchor="middle" fontSize="11" fontWeight="600">
        {rule}
      </text>
    </g>
  );
}

// two models with the same three levels, pointing their arrows in opposite directions
export function BellLapadulaBiba() {
  return (
    <svg
      viewBox="0 0 620 292"
      role="img"
      aria-label="Bell-LaPadula ยอมให้อ่านลงและเขียนขึ้น จึงห้ามอ่านขึ้นและห้ามเขียนลง เพื่อกันความลับรั่ว ส่วน Biba กลับด้าน คือยอมให้อ่านขึ้นและเขียนลง จึงห้ามอ่านลงและห้ามเขียนขึ้น เพื่อกันของเสียไหลขึ้นไปปนของดี"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        ระดับชั้นเดียวกัน แต่ลูกศรวิ่งคนละทาง — ลูกศรคือทิศที่ยอมให้ทำ
      </text>

      <ModelColumn
        x={10}
        title="Bell-LaPadula"
        sub="กันความลับรั่ว"
        readDown
        writeDown={false}
        readLabel="อ่านลงได้"
        writeLabel="เขียนขึ้นได้"
        rule="ห้ามอ่านขึ้น · ห้ามเขียนลง"
      />

      <line x1="310" y1="40" x2="310" y2="266" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 4" />

      <ModelColumn
        x={330}
        title="Biba"
        sub="กันของเสียไหลขึ้น"
        readDown={false}
        writeDown
        readLabel="อ่านขึ้นได้"
        writeLabel="เขียนลงได้"
        rule="ห้ามอ่านลง · ห้ามเขียนขึ้น"
      />

      <text x="310" y="286" textAnchor="middle" fontSize="11" opacity="0.78">
        Biba คือ Bell-LaPadula กลับหัว — ข้อหนึ่งดูความลับ อีกข้อดูความถูกต้อง
      </text>

      <defs>
        <marker id="blb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}
