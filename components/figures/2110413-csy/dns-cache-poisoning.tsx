// the attacker triggers a lookup, then races the real server with forged answers that guess the query ID
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

const ATT = 90;
const RES = 310;
const MAS = 530;

const FORGED = [
  { id: '1136', y: 150 },
  { id: '486', y: 168 },
  { id: '777', y: 186, hit: true },
  { id: '288', y: 204 },
];

function Head({ x, label, sub }: { x: number; label: string; sub: string }) {
  return (
    <g>
      <rect x={x - 70} y="14" width="140" height="44" rx="8" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.6" />
      <text x={x} y="32" textAnchor="middle" fontSize="11" fontWeight="600">
        {label}
      </text>
      <text x={x} y="49" textAnchor="middle" fontSize="11" opacity="0.8">
        {sub}
      </text>
      <line x1={x} y1="58" x2={x} y2="282" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="3 4" />
    </g>
  );
}

export function DnsCachePoisoning() {
  return (
    <svg
      viewBox="0 0 620 340"
      role="img"
      aria-label="ผู้โจมตีถาม local DNS server ว่า NiceBank.com อยู่ที่ไหน local DNS server ไม่มีคำตอบใน cache จึงถาม master DNS server ด้วย ID 777 ระหว่างรอ ผู้โจมตีส่งคำตอบปลอมว่า NiceBank.com อยู่ที่ 5.5.5.5 หลายใบ แต่ละใบเดา ID ต่างกัน ใบที่เดา 777 ถูกจึงถูกรับไปเก็บใน cache คำตอบจริงที่บอกว่า 1.1.1.1 มาถึงทีหลังและถูกทิ้ง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <Head x={ATT} label="ผู้โจมตี" sub="อยู่นอกเครือข่ายก็ได้" />
      <Head x={RES} label="Local DNS server" sub="มี cache" />
      <Head x={MAS} label="Master DNS server" sub="รู้คำตอบจริง" />

      <line x1={ATT} y1="86" x2={RES - 4} y2="86" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.4" markerEnd="url(#dp-arrow)" />
      <text x={(ATT + RES) / 2} y="80" textAnchor="middle" fontSize="11">
        1 · ถาม NiceBank.com ?
      </text>

      <line x1={RES} y1="120" x2={MAS - 4} y2="120" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.4" markerEnd="url(#dp-arrow)" />
      <text x={(RES + MAS) / 2} y="99" textAnchor="middle" fontSize="11">
        2 · ไม่มีใน cache ถามต่อ
      </text>
      <text x={(RES + MAS) / 2} y="115" textAnchor="middle" fontSize="11" fontFamily={MONO}>
        id 777
      </text>

      <text x={(ATT + RES) / 2} y="136" textAnchor="middle" fontSize="11">
        3 · คำตอบปลอม อ้างว่ามาจาก Master
      </text>
      {FORGED.map((f) => (
        <g key={f.id}>
          <line
            x1={ATT}
            y1={f.y}
            x2={RES - 4}
            y2={f.y}
            stroke="currentColor"
            strokeOpacity={f.hit ? 0.95 : 0.5}
            strokeWidth={f.hit ? 2 : 1.1}
            markerEnd="url(#dp-arrow)"
          />
          <text x={RES + 8} y={f.y + 4} fontSize="11" fontFamily={MONO} fontWeight={f.hit ? 700 : 400} opacity={f.hit ? 1 : 0.75}>
            id {f.id} : 5.5.5.5{f.hit ? '  ตรง รับไว้' : '  ไม่ตรง ทิ้ง'}
          </text>
        </g>
      ))}

      <line x1={MAS} y1="236" x2={RES + 4} y2="236" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" strokeDasharray="5 4" markerEnd="url(#dp-arrow)" />
      <text x={(RES + MAS) / 2} y="230" textAnchor="middle" fontSize="11" fontFamily={MONO}>
        4 · id 777 : 1.1.1.1
      </text>
      <text x={(RES + MAS) / 2} y="254" textAnchor="middle" fontSize="11" opacity="0.8">
        คำตอบจริงมาช้าไป ถูกทิ้ง
      </text>

      <rect x={RES - 150} y="270" width="300" height="40" rx="8" fillOpacity="0.3" stroke="currentColor" strokeOpacity="0.85" />
      <text x={RES} y="294" textAnchor="middle" fontSize="11" fontFamily={MONO} fontWeight="600">
        5 · cache: NiceBank.com = 5.5.5.5
      </text>
      <text x={RES} y="330" textAnchor="middle" fontSize="11" opacity="0.8">
        ทุกคนที่ใช้ local DNS server นี้ถูกส่งไปเว็บปลอมที่ 5.5.5.5 จนกว่าคำตอบใน cache จะหมดอายุ
      </text>

      <defs>
        <marker id="dp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.75" />
        </marker>
      </defs>
    </svg>
  );
}
