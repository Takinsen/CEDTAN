// like CBC, but the plaintext and output of each block are added together before feeding the next block
export function PcbcMode() {
  const cx = [150, 254, 358, 462, 566];
  const plain = ['h', 'e', 'l', 'l', 'o'];
  const mixed = ['z', 'k', 's', 'j', 'a'];
  const out = ['Z', 'D', 'N', 'B', 'S'];

  return (
    <svg
      viewBox="0 0 620 318"
      role="img"
      aria-label="ต้นฉบับกับผลลัพธ์ของแต่ละก้อนถูกบวกกันก่อน แล้วส่งไปบวกกับต้นฉบับของก้อนถัดไปก่อนเข้า E ก้อนแรกบวก IV s แทน ต้นฉบับ hello ได้ผลบวก z k s j a และผลลัพธ์ Z D N B S"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        ต้นฉบับกับผลลัพธ์ของก้อนก่อนหน้า ถูกบวกเข้าไปทั้งคู่ก่อนเข้ารหัส
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
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#pcbc-arrow)">
            <line x1={x} y1="86" x2={x} y2="97" />
            <line x1={x} y1="122" x2={x} y2="139" />
            <line x1={x} y1="170" x2={x} y2="183" />
            <line x1={x} y1="214" x2={x} y2="227" />
            {i < 4 && (
              <>
                <path d={`M ${x + 28} 71 L ${x + 52} 71 L ${x + 52} 99`} />
                <path d={`M ${x + 28} 243 L ${x + 52} 243 L ${x + 52} 121`} />
                <line x1={x + 60} y1="110" x2={x + 91} y2="110" />
              </>
            )}
          </g>
          {i < 4 && (
            <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none">
              <circle cx={x + 52} cy="110" r="8" />
              <path d={`M ${x + 47} 110 L ${x + 57} 110 M ${x + 52} 105 L ${x + 52} 115`} />
            </g>
          )}
        </g>
      ))}

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#pcbc-arrow)">
        <line x1="126" y1="110" x2="137" y2="110" />
      </g>

      <text x="310" y="284" textAnchor="middle" fontSize="11" fontWeight="600">
        เส้นจากต้นฉบับกับเส้นจากผลลัพธ์ มาบวกกันก่อน แล้วค่อยส่งไปก้อนถัดไป
      </text>
      <text x="310" y="306" textAnchor="middle" fontSize="11" opacity="0.78">
        ต่างจาก CBC แค่เส้นจากต้นฉบับเส้นเดียว ก้อนแรกยังบวก IV เหมือนเดิม
      </text>

      <defs>
        <marker id="pcbc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
