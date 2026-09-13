// each output letter is added to the next input letter before E, and the IV stands in for block 0
export function CbcMode() {
  const cx = [150, 254, 358, 462, 566];
  const plain = ['h', 'e', 'l', 'l', 'o'];
  const mixed = ['z', 'd', 'f', 't', 'c'];
  const out = ['Z', 'U', 'I', 'O', 'C'];

  return (
    <svg
      viewBox="0 0 620 318"
      role="img"
      aria-label="ต้นฉบับแต่ละก้อนถูกบวกกับผลลัพธ์ของก้อนก่อนหน้าก่อนเข้า E ก้อนแรกบวก IV s แทน ต้นฉบับ hello ได้ผลบวก z d f t c และผลลัพธ์ Z U I O C ซึ่ง l สองตัวไม่ได้ออกมาเหมือนกันอีก"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        ผลลัพธ์ของก้อนก่อนหน้าถูกบวกเข้าไปก่อนเข้ารหัส
      </text>

      <text x="16" y="76" fontSize="11" opacity="0.8">
        ต้นฉบับ
      </text>
      <text x="16" y="114" fontSize="11" opacity="0.8">
        บวก
      </text>
      <text x="16" y="160" fontSize="11" opacity="0.8">
        เข้า E
      </text>
      <text x="16" y="204" fontSize="11" opacity="0.8">
        เข้ารหัส
      </text>
      <text x="16" y="248" fontSize="11" opacity="0.8">
        ผลลัพธ์
      </text>

      <text x="111" y="92" textAnchor="middle" fontSize="11" fontWeight="600">
        IV
      </text>
      <rect x="98" y="97" width="26" height="26" rx="5" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="111" y="115" textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        s
      </text>

      {cx.map((x, i) => (
        <g key={x}>
          <text x={x} y={48} textAnchor="middle" fontSize="11" opacity="0.8">
            ก้อน {i + 1}
          </text>
          <rect x={x - 28} y={58} width="56" height="26" rx="5" fillOpacity={plain[i] === 'l' ? 0.2 : 0.06} stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={76} textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {plain[i]}
          </text>
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none">
            <circle cx={x} cy="110" r="10" />
            <path d={`M ${x - 6} 110 L ${x + 6} 110 M ${x} 104 L ${x} 116`} />
          </g>
          <rect x={x - 28} y={142} width="56" height="26" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={160} textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {mixed[i]}
          </text>
          <rect x={x - 28} y={186} width="56" height="26" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={204} textAnchor="middle" fontSize="11" fontWeight="600">
            E
          </text>
          <rect x={x - 28} y={230} width="56" height="26" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={248} textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {out[i]}
          </text>
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#cbc-arrow)">
            <line x1={x} y1="86" x2={x} y2="97" />
            <line x1={x} y1="122" x2={x} y2="139" />
            <line x1={x} y1="170" x2={x} y2="183" />
            <line x1={x} y1="214" x2={x} y2="227" />
            {i < 4 && <path d={`M ${x + 28} 243 L ${x + 42} 243 L ${x + 42} 110 L ${x + 91} 110`} />}
          </g>
        </g>
      ))}

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#cbc-arrow)">
        <line x1="126" y1="110" x2="137" y2="110" />
      </g>

      <text x="310" y="284" textAnchor="middle" fontSize="11" fontWeight="600">
        ก้อน 3 กับ 4 ต้นฉบับเหมือนกัน แต่ผลบวกที่เข้า E ต่างกัน ผลลัพธ์จึงไม่ซ้ำ
      </text>
      <text x="310" y="306" textAnchor="middle" fontSize="11" opacity="0.78">
        ก้อนแรกไม่มีก้อนก่อนหน้า จึงบวก IV แทน
      </text>

      <defs>
        <marker id="cbc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
