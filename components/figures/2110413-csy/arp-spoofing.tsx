// forged ARP replies rewrite both the user's and the gateway's caches, so frames both ways pass the attacker
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

function Node({ x, y, w, label, strong }: { x: number; y: number; w: number; label: string; strong?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="38" rx="7" fillOpacity={strong ? 0.3 : 0.14} stroke="currentColor" strokeOpacity={strong ? 0.85 : 0.55} />
      <text x={x + w / 2} y={y + 23} textAnchor="middle" fontSize="11" fontWeight="600">
        {label}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.5" markerStart="url(#arp-arrow)" markerEnd="url(#arp-arrow)" />
  );
}

function Cache({ y, mac }: { y: number; mac: string }) {
  return (
    <g>
      <text x="20" y={y} fontSize="11" opacity="0.8">
        ARP cache ของเครื่องผู้ใช้
      </text>
      <text x="20" y={y + 16} fontSize="11" fontFamily={MONO}>
        192.168.1.1 → {mac}
      </text>
    </g>
  );
}

export function ArpSpoofing() {
  return (
    <svg
      viewBox="0 0 620 306"
      role="img"
      aria-label="ภาพบน: ปกติเฟรมระหว่างเครื่องผู้ใช้กับ gateway วิ่งผ่านสวิตช์ตรงถึงกันทั้งขาไปและขากลับ เพราะ ARP cache จับคู่ 192.168.1.1 กับ MAC ของ gateway ภาพล่าง: หลังผู้โจมตีส่ง ARP reply ปลอมให้ทั้งสองฝั่ง cache ของผู้ใช้จับคู่ 192.168.1.1 กับ MAC ของผู้โจมตี และ cache ของ gateway จับคู่ 192.168.1.10 กับ MAC ของผู้โจมตี เฟรมทั้งขาไปและขากลับจึงวิ่งจากสวิตช์ไปหาผู้โจมตีก่อน แล้วผู้โจมตีส่งกลับผ่านสวิตช์ไปยังปลายทางจริง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="20" y="22" fontSize="11" fontWeight="600">
        ปกติ
      </text>
      <Node x={20} y={34} w={110} label="ผู้ใช้" />
      <Node x={190} y={34} w={100} label="สวิตช์" />
      <Node x={350} y={34} w={120} label="gateway" />
      <Node x={520} y={34} w={84} label="อินเทอร์เน็ต" />
      <Arrow x1={132} y1={53} x2={188} y2={53} />
      <Arrow x1={292} y1={53} x2={348} y2={53} />
      <Arrow x1={472} y1={53} x2={518} y2={53} />
      <Cache y={96} mac="02:00:00:00:00:01" />

      <line x1="16" y1="134" x2="604" y2="134" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 4" />

      <text x="20" y="158" fontSize="11" fontWeight="600">
        หลังได้รับ ARP reply ปลอม
      </text>
      <Node x={20} y={170} w={110} label="ผู้ใช้" />
      <Node x={190} y={170} w={100} label="สวิตช์" />
      <Node x={350} y={170} w={120} label="gateway" />
      <Node x={520} y={170} w={84} label="อินเทอร์เน็ต" />
      <Node x={290} y={244} w={120} label="ผู้โจมตี" strong />
      <text x="350" y="296" textAnchor="middle" fontSize="11" fontFamily={MONO}>
        02:00:00:00:00:66
      </text>
      <Arrow x1={132} y1={189} x2={188} y2={189} />
      <Arrow x1={240} y1={210} x2={300} y2={242} />
      <Arrow x1={330} y1={242} x2={270} y2={210} />
      <Arrow x1={292} y1={189} x2={348} y2={189} />
      <Arrow x1={472} y1={189} x2={518} y2={189} />
      <text x="420" y="266" fontSize="11" opacity="0.8">
        ทุกเฟรมทั้งไปและกลับผ่านที่นี่
      </text>
      <text x="420" y="282" fontSize="11" opacity="0.8">
        อ่านหรือแก้ได้ก่อนส่งต่อ
      </text>
      <text x="440" y="226" fontSize="11" opacity="0.8">
        ARP cache ของ gateway
      </text>
      <text x="440" y="242" fontSize="11" fontFamily={MONO}>
        192.168.1.10 → 02:..:66
      </text>
      <Cache y={232} mac="02:00:00:00:00:66" />

      <defs>
        <marker id="arp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}
