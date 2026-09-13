// CFB and OFB share every wire except the one that loops back into the next E
const cx = [150, 254, 358, 462, 566];
const plain = ['h', 'e', 'l', 'l', 'o'];

function Panel({
  oy,
  title,
  input,
  keystream,
  out,
  loop,
}: {
  oy: number;
  title: string;
  input: string[];
  keystream: string[];
  out: string[];
  loop: 'output' | 'keystream';
}) {
  const loopY = loop === 'output' ? oy + 175 : oy + 97;

  return (
    <g>
      <text x="16" y={oy - 18} fontSize="11" fontWeight="600">
        {title}
      </text>

      <text x="16" y={oy + 18} fontSize="11" opacity="0.8">
        เข้า E
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
          <rect x={x - 28} y={oy} width="56" height="26" rx="5" fillOpacity={i === 0 ? 0.2 : 0.06} stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={oy + 18} textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {i === 0 ? `IV ${input[i]}` : input[i]}
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
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#fbm-arrow)">
            <line x1={x} y1={oy + 28} x2={x} y2={oy + 39} />
            <line x1={x} y1={oy + 70} x2={x} y2={oy + 81} />
            <line x1={x} y1={oy + 112} x2={x} y2={oy + 123} />
            <line x1={x - 26} y1={oy + 136} x2={x - 13} y2={oy + 136} />
            <line x1={x} y1={oy + 148} x2={x} y2={oy + 159} />
            {i < 4 && <path d={`M ${x + 28} ${loopY} L ${x + 42} ${loopY} L ${x + 42} ${oy + 13} L ${x + 73} ${oy + 13}`} />}
          </g>
        </g>
      ))}
    </g>
  );
}

export function FeedbackModes() {
  return (
    <svg
      viewBox="0 0 620 574"
      role="img"
      aria-label="CFB และ OFB ส่งตัวอักษรหนึ่งตัวเข้า E ได้ keystream แล้วบวกกับต้นฉบับได้ผลลัพธ์ ก้อนแรกใช้ IV s ทั้งคู่ CFB วนผลลัพธ์ของก้อนก่อนหน้ากลับไปเข้า E ได้ UTZKR ส่วน OFB วน keystream กลับไปแทน ได้ ULJIK"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        ต้นฉบับไม่เข้า E เลย E แค่ผลิต keystream มาบวก
      </text>

      {cx.map((x, i) => (
        <text key={x} x={x} y={48} textAnchor="middle" fontSize="11" opacity="0.8">
          ก้อน {i + 1}
        </text>
      ))}

      <Panel
        oy={90}
        title="CFB — วนผลลัพธ์กลับไปเข้า E"
        input={['s', 'U', 'T', 'Z', 'K']}
        keystream={['N', 'P', 'O', 'Z', 'D']}
        out={['U', 'T', 'Z', 'K', 'R']}
        loop="output"
      />
      <Panel
        oy={326}
        title="OFB — วน keystream กลับไปเข้า E"
        input={['s', 'N', 'H', 'Y', 'X']}
        keystream={['N', 'H', 'Y', 'X', 'W']}
        out={['U', 'L', 'J', 'I', 'K']}
        loop="keystream"
      />

      <text x="310" y="540" textAnchor="middle" fontSize="11" fontWeight="600">
        ก้อนแรกเหมือนกันเพราะเริ่มจาก IV ตัวเดียวกัน หลังจากนั้นแยกทางกัน
      </text>
      <text x="310" y="562" textAnchor="middle" fontSize="11" opacity="0.78">
        ผู้รับผลิต keystream ชุดเดิมด้วย E ตัวเดิม แล้วลบออกก็ได้ต้นฉบับคืน
      </text>

      <defs>
        <marker id="fbm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
