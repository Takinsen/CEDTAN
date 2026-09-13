// CFB and OFB share every wire except the one that loops back into the next E
const cx = [145, 275, 405, 535];
const plain = ['1010', '1010', '0011', '1010'];

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
        XOR
      </text>
      <text x="16" y={oy + 180} fontSize="11" opacity="0.8">
        ผลลัพธ์
      </text>

      {cx.map((x, i) => (
        <g key={x}>
          <rect x={x - 36} y={oy} width="72" height="26" rx="5" fillOpacity={i === 0 ? 0.2 : 0.06} stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={oy + 18} textAnchor="middle" fontSize="11">
            {i === 0 ? `IV ${input[i]}` : input[i]}
          </text>
          <rect x={x - 36} y={oy + 42} width="72" height="26" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={oy + 60} textAnchor="middle" fontSize="11" fontWeight="600">
            E
          </text>
          <rect x={x - 36} y={oy + 84} width="72" height="26" rx="5" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={oy + 102} textAnchor="middle" fontSize="11">
            {keystream[i]}
          </text>
          <rect x={x - 66} y={oy + 123} width="40" height="26" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x - 46} y={oy + 141} textAnchor="middle" fontSize="11">
            {plain[i]}
          </text>
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none">
            <circle cx={x} cy={oy + 136} r="10" />
            <path d={`M ${x - 6} ${oy + 136} L ${x + 6} ${oy + 136} M ${x} ${oy + 130} L ${x} ${oy + 142}`} />
          </g>
          <rect x={x - 36} y={oy + 162} width="72" height="26" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x} y={oy + 180} textAnchor="middle" fontSize="11">
            {out[i]}
          </text>
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#fbm-arrow)">
            <line x1={x} y1={oy + 28} x2={x} y2={oy + 39} />
            <line x1={x} y1={oy + 70} x2={x} y2={oy + 81} />
            <line x1={x} y1={oy + 112} x2={x} y2={oy + 123} />
            <line x1={x - 24} y1={oy + 136} x2={x - 13} y2={oy + 136} />
            <line x1={x} y1={oy + 148} x2={x} y2={oy + 159} />
            {i < 3 && <path d={`M ${x + 36} ${loopY} L ${x + 56} ${loopY} L ${x + 56} ${oy + 13} L ${x + 91} ${oy + 13}`} />}
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
      aria-label="CFB และ OFB เอาค่าหนึ่งเข้า E ได้ keystream แล้ว XOR กับต้นฉบับได้ผลลัพธ์ ก้อนแรกใช้ IV 0110 ทั้งคู่ CFB ส่งผลลัพธ์ของก้อนก่อนหน้าไปเข้า E ของก้อนถัดไป ได้ 0111 1111 0001 0100 ส่วน OFB ส่ง keystream ของก้อนก่อนหน้าไปแทน ได้ 0111 1001 1000 1100"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        ต้นฉบับไม่เข้า E เลย E แค่ผลิต keystream มา XOR
      </text>

      {cx.map((x, i) => (
        <text key={x} x={x} y={48} textAnchor="middle" fontSize="11" opacity="0.8">
          ก้อน {i + 1}
        </text>
      ))}

      <Panel
        oy={90}
        title="CFB — ส่งผลลัพธ์กลับไปเข้า E"
        input={['0110', '0111', '1111', '0001']}
        keystream={['1101', '0101', '0010', '1110']}
        out={['0111', '1111', '0001', '0100']}
        loop="output"
      />
      <Panel
        oy={326}
        title="OFB — ส่ง keystream กลับไปเข้า E"
        input={['0110', '1101', '0011', '1011']}
        keystream={['1101', '0011', '1011', '0110']}
        out={['0111', '1001', '1000', '1100']}
        loop="keystream"
      />

      <text x="310" y="540" textAnchor="middle" fontSize="11" fontWeight="600">
        ก้อนแรกเหมือนกันเพราะเริ่มจาก IV ตัวเดียวกัน หลังจากนั้นแยกทางกัน
      </text>
      <text x="310" y="562" textAnchor="middle" fontSize="11" opacity="0.78">
        ผู้รับสร้าง keystream ชุดเดิมด้วย E ตัวเดิม แล้ว XOR ซ้ำก็ได้ต้นฉบับคืน
      </text>

      <defs>
        <marker id="fbm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
