// every block builds its own E input from nonce and counter, so no wire crosses between blocks
export function CounterMode() {
  const cx = [150, 254, 358, 462, 566];
  const oy = 64;
  const plain = ['h', 'e', 'l', 'l', 'o'];
  const input = ['c+0=c', 'c+1=d', 'c+2=e', 'c+3=f', 'c+4=g'];
  const keystream = ['C', 'U', 'R', 'I', 'T'];
  const out = ['J', 'Y', 'C', 'T', 'H'];

  return (
    <svg
      viewBox="0 0 620 314"
      role="img"
      aria-label="แต่ละก้อนเอา nonce c บวกเลขนับ 0 ถึง 4 ได้ c d e f g แล้วเข้า E ได้ keystream C U R I T จากนั้นบวกกับต้นฉบับ hello ได้ผลลัพธ์ JYCTH ไม่มีเส้นใดข้ามจากก้อนหนึ่งไปอีกก้อน"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        เข้ารหัสเลขนับแทนต้นฉบับ แต่ละก้อนไม่ต้องรอก้อนไหนเลย
      </text>

      <text x="16" y={oy + 18} fontSize="11" opacity="0.8">
        nonce + ตัวนับ
      </text>
      <text x="16" y={oy + 60} fontSize="11" opacity="0.8">
        เข้ารหัส
      </text>
      <text x="16" y={oy + 102} fontSize="11" opacity="0.8">
        keystream
      </text>
      <text x="16" y={oy + 140} fontSize="11" opacity="0.8">
        บวก
      </text>
      <text x="16" y={oy + 180} fontSize="11" opacity="0.8">
        ผลลัพธ์
      </text>

      {cx.map((x, i) => (
        <g key={x}>
          <text x={x} y={48} textAnchor="middle" fontSize="11" opacity="0.8">
            ก้อน {i + 1}
          </text>
          <rect x={x - 28} y={oy} width="56" height="26" rx="5" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={oy + 18} textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {input[i]}
          </text>
          <rect x={x - 28} y={oy + 42} width="56" height="26" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={oy + 60} textAnchor="middle" fontSize="11" fontWeight="600">
            E
          </text>
          <rect x={x - 28} y={oy + 84} width="56" height="26" rx="5" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={oy + 102} textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {keystream[i]}
          </text>
          <rect x={x - 54} y={oy + 123} width="26" height="26" rx="5" fillOpacity={plain[i] === 'l' ? 0.2 : 0.06} stroke="currentColor" strokeOpacity="0.55" />
          <text x={x - 41} y={oy + 141} textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {plain[i]}
          </text>
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none">
            <circle cx={x} cy={oy + 136} r="10" />
            <path d={`M ${x - 6} ${oy + 136} L ${x + 6} ${oy + 136} M ${x} ${oy + 130} L ${x} ${oy + 142}`} />
          </g>
          <rect x={x - 28} y={oy + 162} width="56" height="26" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={oy + 180} textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {out[i]}
          </text>
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#ctr-arrow)">
            <line x1={x} y1={oy + 28} x2={x} y2={oy + 39} />
            <line x1={x} y1={oy + 70} x2={x} y2={oy + 81} />
            <line x1={x} y1={oy + 112} x2={x} y2={oy + 123} />
            <line x1={x - 26} y1={oy + 136} x2={x - 13} y2={oy + 136} />
            <line x1={x} y1={oy + 148} x2={x} y2={oy + 159} />
          </g>
        </g>
      ))}

      <text x="310" y="280" textAnchor="middle" fontSize="11" fontWeight="600">
        ไม่มีเส้นข้ามก้อน จะคำนวณก้อน 5 ก่อนก้อน 1 ก็ได้ ทุกก้อนจึงทำพร้อมกันได้
      </text>
      <text x="310" y="302" textAnchor="middle" fontSize="11" opacity="0.78">
        ก้อน 3 กับ 4 ต้นฉบับเหมือนกัน แต่ตัวนับต่างกัน keystream จึงต่างกัน
      </text>

      <defs>
        <marker id="ctr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
