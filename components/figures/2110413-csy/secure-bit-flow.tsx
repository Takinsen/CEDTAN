// the secure bit travels with each word: input arrives marked 1, an overflow copies the 1 onto the return address, and RET refuses it
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

const BEFORE = [
  { name: 'Parameters', bit: '0' },
  { name: 'Return Address', bit: '0' },
  { name: 'Function Pointers', bit: '0' },
  { name: 'Buffer', bit: '1' },
  { name: 'Buffer', bit: '1' },
];

const AFTER = [
  { name: 'Parameters', bit: '0' },
  { name: 'Return Address', bit: '1' },
  { name: 'Function Pointers', bit: '1' },
  { name: 'Buffer', bit: '1' },
  { name: 'Buffer', bit: '1' },
];

function Column({ x, title, rows }: { x: number; title: string; rows: { name: string; bit: string }[] }) {
  return (
    <g>
      <text x={x + 95} y="62" textAnchor="middle" fontSize="12" fontWeight="600">
        {title}
      </text>
      {rows.map((r, i) => (
        <g key={`${r.name}-${i}`}>
          <rect x={x} y={74 + i * 34} width="36" height="34" fillOpacity={r.bit === '1' ? 0.4 : 0.06} stroke="currentColor" strokeOpacity="0.6" />
          <text x={x + 18} y={96 + i * 34} textAnchor="middle" fontSize="13" fontFamily={MONO} fontWeight="700">
            {r.bit}
          </text>
          <rect x={x + 36} y={74 + i * 34} width="154" height="34" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.6" />
          <text x={x + 113} y={96 + i * 34} textAnchor="middle" fontSize="11">
            {r.name}
          </text>
        </g>
      ))}
    </g>
  );
}

export function SecureBitFlow() {
  return (
    <svg
      viewBox="0 0 620 334"
      role="img"
      aria-label="หน่วยความจำของ process ที่ทุก word มี Secure Bit ติดอยู่ ภาพซ้ายคือก่อนล้น input ที่ kernel คัดลอกมาให้อยู่ใน buffer และมีบิตเป็น 1 ส่วน parameters, return address และ function pointers มีบิตเป็น 0 ภาพขวาคือหลังล้น บิต 1 ถูกคัดลอกไปพร้อมข้อมูลจน function pointers และ return address มีบิตเป็น 1 เมื่อคำสั่ง RET อ่านค่านี้ CPU เห็นบิต 1 จึงปฏิเสธและยกเลิกการกระโดด"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="20" y="28" fontSize="11" opacity="0.8">
        บิตซ้ายของแต่ละ word: 0 = มาจากใน process เอง · 1 = ข้ามขอบเขตเข้ามา (input)
      </text>

      <Column x={20} title="ก่อนล้น" rows={BEFORE} />
      <Column x={300} title="หลัง strcpy ล้น buffer" rows={AFTER} />

      <line x1="222" y1="157" x2="290" y2="157" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.6" markerEnd="url(#sbf-arrow)" />
      <text x="256" y="145" textAnchor="middle" fontSize="11" opacity="0.8">
        บิตติดไป
      </text>
      <text x="256" y="177" textAnchor="middle" fontSize="11" opacity="0.8">
        กับข้อมูล
      </text>

      <line x1="500" y1="125" x2="540" y2="125" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.6" markerEnd="url(#sbf-arrow)" />
      <rect x="544" y="104" width="62" height="42" rx="6" fillOpacity="0.26" stroke="currentColor" strokeOpacity="0.7" />
      <text x="575" y="122" textAnchor="middle" fontSize="11" fontFamily={MONO} fontWeight="700">
        RET
      </text>
      <text x="575" y="138" textAnchor="middle" fontSize="11">
        ปฏิเสธ
      </text>

      <text x="20" y="266" fontSize="11" opacity="0.8">
        kernel คัดลอก input เข้ามาในโหมด sbit_write บิตของทุก word ปลายทางจึงเป็น 1 ตั้งแต่แรก
      </text>
      <text x="20" y="288" fontSize="11" opacity="0.8">
        การคัดลอกใน process ยกบิตไปพร้อมค่า ผู้โจมตีจึงเขียนค่าใหม่ลงช่องได้ แต่ล้างบิต 1 ไม่ได้
      </text>
      <text x="20" y="310" fontSize="11" opacity="0.8">
        CALL, JMP และ RET ตรวจบิตของเป้าหมายก่อนกระโดด เห็น 1 เมื่อไหร่ก็ไม่ยอมกระโดด
      </text>

      <defs>
        <marker id="sbf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.8" />
        </marker>
      </defs>
    </svg>
  );
}
