// each output block is XORed into the next input block before E, and the IV stands in for block 0
export function CbcMode() {
  const cx = [145, 275, 405, 535];
  const plain = ['1010', '1010', '0011', '1010'];
  const mixed = ['1100', '1011', '0101', '0110'];
  const out = ['0001', '0110', '1100', '1101'];

  return (
    <svg
      viewBox="0 0 620 318"
      role="img"
      aria-label="ต้นฉบับแต่ละก้อน XOR กับผลลัพธ์ของก้อนก่อนหน้าก่อนเข้า E ก้อนแรกใช้ IV 0110 แทน ต้นฉบับ 1010 1010 0011 1010 ได้ค่าที่เข้า E เป็น 1100 1011 0101 0110 และผลลัพธ์ 0001 0110 1100 1101 ซึ่งไม่ซ้ำกัน"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        ผลลัพธ์ของก้อนก่อนหน้าถูก XOR เข้าไปก่อนเข้ารหัส
      </text>

      <text x="16" y="76" fontSize="11" opacity="0.8">
        ต้นฉบับ
      </text>
      <text x="16" y="114" fontSize="11" opacity="0.8">
        XOR
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

      <text x="96" y="92" textAnchor="middle" fontSize="11" fontWeight="600">
        IV
      </text>
      <rect x="74" y="97" width="44" height="26" rx="5" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="96" y="115" textAnchor="middle" fontSize="11">
        0110
      </text>

      {cx.map((x, i) => (
        <g key={x}>
          <text x={x} y={48} textAnchor="middle" fontSize="11" opacity="0.8">
            ก้อน {i + 1}
          </text>
          <rect x={x - 36} y={58} width="72" height="26" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={76} textAnchor="middle" fontSize="11">
            {plain[i]}
          </text>
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none">
            <circle cx={x} cy="110" r="10" />
            <path d={`M ${x - 6} 110 L ${x + 6} 110 M ${x} 104 L ${x} 116`} />
          </g>
          <rect x={x - 36} y={142} width="72" height="26" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={160} textAnchor="middle" fontSize="11">
            {mixed[i]}
          </text>
          <rect x={x - 36} y={186} width="72" height="26" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={204} textAnchor="middle" fontSize="11" fontWeight="600">
            E
          </text>
          <rect x={x - 36} y={230} width="72" height="26" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={248} textAnchor="middle" fontSize="11">
            {out[i]}
          </text>
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#cbc-arrow)">
            <line x1={x} y1="86" x2={x} y2="97" />
            <line x1={x} y1="122" x2={x} y2="139" />
            <line x1={x} y1="170" x2={x} y2="183" />
            <line x1={x} y1="214" x2={x} y2="227" />
            {i < 3 && <path d={`M ${x + 36} 243 L ${x + 56} 243 L ${x + 56} 110 L ${x + 117} 110`} />}
          </g>
        </g>
      ))}

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#cbc-arrow)">
        <line x1="120" y1="110" x2="132" y2="110" />
      </g>

      <text x="310" y="284" textAnchor="middle" fontSize="11" fontWeight="600">
        ก้อน 1, 2 และ 4 เข้า 1010 เหมือนกัน แต่ค่าที่เข้า E ไม่ซ้ำกันเลย ผลลัพธ์จึงไม่ซ้ำ
      </text>
      <text x="310" y="306" textAnchor="middle" fontSize="11" opacity="0.78">
        ก้อนแรกไม่มีก้อนก่อนหน้า จึงใช้ IV แทน
      </text>

      <defs>
        <marker id="cbc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
