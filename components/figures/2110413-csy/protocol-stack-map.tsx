// the OSI and TCP/IP layers, the protocols on each, and where this lecture's four attacks land
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

const OSI = ['Application', 'Presentation', 'Session', 'Transport', 'Network', 'Data link', 'Physical'];
const ROW = 32;
const TOP = 52;
const rowY = (i: number) => TOP + i * ROW;

type Box = { x: number; w: number; label: string; row: number; rows?: number; mark?: number };

const SUITE: Box[] = [
  { x: 240, w: 56, label: 'Telnet', row: 2 },
  { x: 302, w: 56, label: 'FTP', row: 2 },
  { x: 364, w: 56, label: 'SMTP', row: 2 },
  { x: 426, w: 56, label: 'DNS', row: 2, mark: 1 },
  { x: 488, w: 56, label: 'RIP', row: 2 },
  { x: 550, w: 56, label: 'SNMP', row: 2 },
  { x: 240, w: 180, label: 'TCP', row: 3 },
  { x: 426, w: 180, label: 'UDP', row: 3, mark: 2 },
  { x: 240, w: 52, label: 'ARP', row: 4, mark: 4 },
  { x: 298, w: 196, label: 'IP', row: 4, mark: 3 },
  { x: 500, w: 50, label: 'IGMP', row: 4 },
  { x: 556, w: 50, label: 'ICMP', row: 4 },
  { x: 240, w: 86, label: 'Ethernet', row: 5, rows: 2 },
  { x: 333, w: 86, label: 'Token Ring', row: 5, rows: 2 },
  { x: 426, w: 86, label: 'Frame Relay', row: 5, rows: 2 },
  { x: 519, w: 87, label: 'ATM', row: 5, rows: 2 },
];

const TCPIP: Box[] = [
  { x: 128, w: 96, label: 'Application', row: 0, rows: 3 },
  { x: 128, w: 96, label: 'Transport', row: 3 },
  { x: 128, w: 96, label: 'Network', row: 4 },
  { x: 128, w: 96, label: 'Data link', row: 5 },
  { x: 128, w: 96, label: 'Physical', row: 6 },
];

const LEGEND = [
  { n: 1, text: 'DNS cache poisoning — ส่วนที่ 4' },
  { n: 2, text: 'DDoS ด้วยคำขอที่ปลอมต้นทาง — ส่วนที่ 3' },
  { n: 3, text: 'IP spoofing — ส่วนที่ 3' },
  { n: 4, text: 'ARP spoofing — ส่วนที่ 3' },
];

function Badge({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="8.5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.85" strokeWidth="1.3" />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="700">
        {n}
      </text>
    </g>
  );
}

function Cell({ box, strong }: { box: Box; strong?: boolean }) {
  const h = (box.rows ?? 1) * ROW - 4;
  const y = rowY(box.row);
  const marked = box.mark !== undefined;
  return (
    <g>
      <rect
        x={box.x}
        y={y}
        width={box.w}
        height={h}
        rx="5"
        fillOpacity={marked ? 0.3 : strong ? 0.16 : 0.08}
        stroke="currentColor"
        strokeOpacity={marked ? 0.9 : 0.5}
        strokeWidth={marked ? 1.8 : 1}
      />
      <text
        x={box.x + box.w / 2 - (marked ? 8 : 0)}
        y={y + h / 2 + 4}
        textAnchor="middle"
        fontSize="11"
        fontWeight={marked ? 700 : 400}
      >
        {box.label}
      </text>
      {marked ? <Badge x={box.x + box.w - 11} y={y + h / 2} n={box.mark!} /> : null}
    </g>
  );
}

export function ProtocolStackMap() {
  return (
    <svg
      viewBox="0 0 620 352"
      role="img"
      aria-label="แบบจำลอง OSI เจ็ดชั้นวางคู่กับแบบจำลอง TCP/IP ห้าชั้น และโปรโตคอลในแต่ละชั้น ได้แก่ Telnet FTP SMTP บน TCP, DNS RIP SNMP บน UDP, ARP IP IGMP ICMP ในชั้น Network และ Ethernet Token Ring Frame Relay ATM ในชั้นล่าง โดยทำเครื่องหมายไว้ที่ DNS, UDP, IP และ ARP ซึ่งเป็นจุดที่การโจมตีสี่แบบในบทนี้เกิดขึ้น"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="66" y="38" textAnchor="middle" fontSize="11" fontWeight="600">
        OSI Model
      </text>
      <text x="176" y="38" textAnchor="middle" fontSize="11" fontWeight="600">
        TCP/IP Model
      </text>
      <text x="423" y="38" textAnchor="middle" fontSize="11" fontWeight="600">
        TCP/IP Protocol Suite
      </text>

      {OSI.map((label, i) => (
        <Cell key={label} box={{ x: 16, w: 100, label, row: i }} strong />
      ))}
      {TCPIP.map((box) => (
        <Cell key={box.label} box={box} strong />
      ))}
      {SUITE.map((box) => (
        <Cell key={box.label} box={box} />
      ))}

      <text x="423" y={rowY(0) + 20} textAnchor="middle" fontSize="11" opacity="0.8">
        โปรโตคอลระดับแอป
      </text>
      <text x="423" y={rowY(1) + 18} textAnchor="middle" fontSize="11" opacity="0.8" fontFamily={MONO}>
        ↓ ใช้บริการชั้นล่าง ↓
      </text>

      {LEGEND.map((item, i) => {
        const x = i % 2 === 0 ? 30 : 330;
        const y = 300 + Math.floor(i / 2) * 26;
        return (
          <g key={item.n}>
            <Badge x={x} y={y - 4} n={item.n} />
            <text x={x + 16} y={y} fontSize="11">
              {item.text}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
