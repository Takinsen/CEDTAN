// threat tree for logging in as alice: four Or branches, one And branch that Prog 3 cuts
type Node = { x: number; y: number; w: number; lines: string[]; cut?: boolean; gone?: boolean };

const H = 40;
const ROOT: Node = { x: 245, y: 8, w: 150, lines: ['เข้าระบบเป็น alice'] };
const BRANCHES: Node[] = [
  { x: 10, y: 86, w: 146, lines: ['รู้ว่า alice มีบัญชี', 'ผ่าน Prog 2'], gone: true },
  { x: 168, y: 86, w: 146, lines: ['เดารหัสผ่าน'] },
  { x: 326, y: 86, w: 146, lines: ['ขโมยไฟล์ hash'] },
  { x: 484, y: 86, w: 146, lines: ['ดักรหัสระหว่างทาง'] },
];
const CONDITIONS: Node[] = [
  { x: 8, y: 178, w: 146, lines: ['Prog 2 ออกเร็ว', 'เมื่อไม่มีชื่อนี้'], cut: true },
  { x: 168, y: 178, w: 146, lines: ['ผู้โจมตีจับเวลาได้'] },
];

const cx = (n: Node) => n.x + n.w / 2;

function Box({ n, strong }: { n: Node; strong?: boolean }) {
  const top = n.y + H / 2 - (n.lines.length - 1) * 7.5 + 4;
  return (
    <g opacity={n.gone || n.cut ? 0.6 : 1}>
      <rect
        x={n.x}
        y={n.y}
        width={n.w}
        height={H}
        rx="6"
        fillOpacity={strong ? 0.22 : 0.08}
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeDasharray={n.gone || n.cut ? '5 4' : undefined}
      />
      {n.lines.map((line, i) => (
        <text key={line} x={cx(n)} y={top + i * 15} fontSize="12" textAnchor="middle" fontWeight={strong ? 600 : 400}>
          {line}
        </text>
      ))}
    </g>
  );
}

export function ThreatTree() {
  const parent = BRANCHES[0];
  const px = cx(parent);
  const py = parent.y + H;
  // the And arc crosses both lines 20 units below the parent
  const angle = (n: Node) => Math.atan2(n.y - py, cx(n) - px);
  const at = (n: Node) => [px + 20 * Math.cos(angle(n)), py + 20 * Math.sin(angle(n))];
  const [ax, ay] = at(CONDITIONS[0]);
  const [bx, by] = at(CONDITIONS[1]);

  return (
    <svg
      viewBox="0 0 640 250"
      role="img"
      aria-label="ต้นไม้ของภัย เข้าระบบเป็น alice แตกเป็นสี่กิ่งแบบ Or คือรู้ว่า alice มีบัญชีผ่าน Prog 2 เดารหัสผ่าน ขโมยไฟล์ hash และดักรหัสระหว่างทาง กิ่งแรกเป็น And ของสองเงื่อนไข คือ Prog 2 ออกเร็วเมื่อไม่มีชื่อนี้ และผู้โจมตีจับเวลาได้ Prog 3 ตัดเงื่อนไขแรก กิ่งนั้นจึงหายทั้งกิ่ง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.2">
        {BRANCHES.map((n) => (
          <line key={n.x} x1={cx(ROOT)} y1={ROOT.y + H} x2={cx(n)} y2={n.y} strokeDasharray={n.gone ? '5 4' : undefined} />
        ))}
        {CONDITIONS.map((n) => (
          <line key={n.x} x1={px} y1={py} x2={cx(n)} y2={n.y} strokeDasharray="5 4" />
        ))}
        <path d={`M ${ax} ${ay} A 20 20 0 0 0 ${bx} ${by}`} fill="none" strokeWidth="2.5" strokeOpacity="0.9" />
        {/* the cut Prog 3 makes on the first condition's edge */}
        <g strokeWidth="2.5" strokeOpacity="0.9">
          <line x1="70" y1="166" x2="94" y2="157" />
          <line x1="70" y1="173" x2="94" y2="164" />
        </g>
      </g>

      <Box n={ROOT} strong />
      {BRANCHES.map((n) => (
        <Box key={n.x} n={n} />
      ))}
      {CONDITIONS.map((n) => (
        <Box key={n.x} n={n} />
      ))}

      <text x="478" y="56" fontSize="11" fontWeight="600">
        Or — ข้อเดียวก็พอ
      </text>
      <text x="174" y="140" fontSize="11" fontWeight="600">
        And — ต้องจริงทุกข้อ
      </text>
      <text x="81" y="240" fontSize="11" textAnchor="middle" opacity="0.85">
        Prog 3 ตัดข้อนี้
      </text>
      <text x="338" y="194" fontSize="11" opacity="0.85">
        ตัดลูกข้อเดียว กิ่ง And ก็หายทั้งกิ่ง
      </text>
      <text x="338" y="212" fontSize="11" opacity="0.85">
        กิ่ง Or อีกสามกิ่งต้องปิดให้ครบทุกกิ่ง
      </text>
    </svg>
  );
}
