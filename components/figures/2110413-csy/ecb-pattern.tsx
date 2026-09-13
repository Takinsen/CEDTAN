// each letter goes through E on its own, so repeated input letters come out as repeated output letters
export function EcbPattern() {
  const cx = [150, 254, 358, 462, 566];
  const plain = ['h', 'e', 'l', 'l', 'o'];
  const out = ['Y', 'R', 'F', 'F', 'J'];

  return (
    <svg
      viewBox="0 0 620 248"
      role="img"
      aria-label="ต้นฉบับ hello ห้าก้อน ก้อนละตัวอักษร แต่ละก้อนเข้า E แยกกัน ได้ YRFFJ ตัว l สองตัวจึงออกมาเป็น F สองตัว"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        ก้อนเดิมกับกุญแจเดิม ออกมาเป็นค่าเดิมทุกครั้ง
      </text>

      <text x="16" y="76" fontSize="11" opacity="0.8">
        ต้นฉบับ
      </text>
      <text x="16" y="126" fontSize="11" opacity="0.8">
        เข้ารหัส
      </text>
      <text x="16" y="176" fontSize="11" opacity="0.8">
        ผลลัพธ์
      </text>

      {cx.map((x, i) => (
        <g key={x}>
          <text x={x} y={48} textAnchor="middle" fontSize="11" opacity="0.8">
            ก้อน {i + 1}
          </text>
          <rect
            x={x - 28}
            y={58}
            width="56"
            height="26"
            rx="5"
            fillOpacity={plain[i] === 'l' ? 0.2 : 0.06}
            stroke="currentColor"
            strokeOpacity="0.55"
          />
          <text x={x} y={76} textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {plain[i]}
          </text>
          <rect x={x - 28} y={108} width="56" height="26" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={126} textAnchor="middle" fontSize="11" fontWeight="600">
            E
          </text>
          <rect
            x={x - 28}
            y={158}
            width="56"
            height="26"
            rx="5"
            fillOpacity={out[i] === 'F' ? 0.2 : 0.06}
            stroke="currentColor"
            strokeOpacity="0.55"
          />
          <text x={x} y={176} textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {out[i]}
          </text>
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)">
            <line x1={x} y1="86" x2={x} y2="105" />
            <line x1={x} y1="136" x2={x} y2="155" />
          </g>
        </g>
      ))}

      <text x="310" y="214" textAnchor="middle" fontSize="11" fontWeight="600">
        ก้อน 3 กับ 4 เข้า E ด้วยตัวอักษรเดียวกัน จึงออกมาเป็นตัวเดียวกัน
      </text>
      <text x="310" y="236" textAnchor="middle" fontSize="11" opacity="0.78">
        ไม่มีอะไรเปลี่ยนระหว่างก้อน ลายของต้นฉบับจึงหลุดออกมาครบ
      </text>

      <defs>
        <marker id="ep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
