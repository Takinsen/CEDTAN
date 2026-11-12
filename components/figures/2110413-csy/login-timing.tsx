// what each login program does for a real name and a made-up name, and what the attacker can observe
type Box = { label: string; wide?: boolean; dashed?: boolean };
type Lane = { who: string; boxes: Box[]; exits?: boolean; seen: string };
type Group = { title: string; lanes: Lane[] };

const COMPARE: Box = { label: 'เทียบรหัส ~90 ms', wide: true };

const GROUPS: Group[] = [
  {
    title: 'Prog 1 — ค้นชื่อก่อน แล้วค่อยถามรหัส',
    lanes: [
      { who: 'alice', boxes: [{ label: 'รับชื่อ' }, { label: 'ค้นรหัส' }, { label: 'ถามรหัส' }, COMPARE], seen: 'ถูกถามรหัสผ่าน' },
      { who: 'nobody', boxes: [{ label: 'รับชื่อ' }, { label: 'ค้นรหัส' }], exits: true, seen: 'ไม่ถูกถามรหัสผ่านเลย' },
    ],
  },
  {
    title: 'Prog 2 — ถามครบทั้งสองช่องก่อนค้น',
    lanes: [
      { who: 'alice', boxes: [{ label: 'รับชื่อ' }, { label: 'รับรหัส' }, { label: 'ค้นรหัส' }, COMPARE], seen: 'ตอบช้า ~90 ms' },
      { who: 'nobody', boxes: [{ label: 'รับชื่อ' }, { label: 'รับรหัส' }, { label: 'ค้นรหัส' }], exits: true, seen: 'ตอบทันที ~0 ms' },
    ],
  },
  {
    title: 'Prog 3 — ไม่มีชื่อก็เทียบกับค่าสุ่ม',
    lanes: [
      { who: 'alice', boxes: [{ label: 'รับชื่อ' }, { label: 'รับรหัส' }, { label: 'ค้นรหัส' }, COMPARE], seen: 'ตอบช้า ~90 ms' },
      { who: 'nobody', boxes: [{ label: 'รับชื่อ' }, { label: 'รับรหัส' }, { label: 'ค้นรหัส' }, { label: 'ค่าสุ่ม', dashed: true }, COMPARE], seen: 'ตอบช้า ~90 ms' },
    ],
  },
];

const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';
const X0 = 96;
const SMALL = 54;
const WIDE = 124;
const GAP = 3;

export function LoginTiming() {
  return (
    <svg
      viewBox="0 0 640 330"
      role="img"
      aria-label="Prog 1 ถามรหัสผ่านเฉพาะชื่อที่มีอยู่จริง Prog 2 ถามทั้งสองช่องแต่ตอบเร็วผิดปกติเมื่อชื่อไม่มีอยู่ Prog 3 ค้นแล้วไม่เจอชื่อก็ใช้ค่าสุ่มแทนรหัสที่เก็บไว้ แล้วเทียบต่อ จึงใช้เวลาเท่ากันทั้งสองกรณี"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="478" y="20" fontSize="11" fontWeight="600" opacity="0.8">
        ผู้โจมตีเห็นอะไร
      </text>
      {GROUPS.map((g, gi) => {
        const top = 34 + gi * 98;
        return (
          <g key={g.title}>
            <text x="12" y={top + 12} fontSize="11" fontWeight="600">
              {g.title}
            </text>
            {g.lanes.map((lane, li) => {
              const y = top + 22 + li * 34;
              let x = X0;
              return (
                <g key={lane.who}>
                  <text x="14" y={y + 17} fontSize="11" fontFamily={MONO} opacity="0.85">
                    {lane.who}
                  </text>
                  {lane.boxes.map((b, bi) => {
                    const w = b.wide ? WIDE : SMALL;
                    const bx = x;
                    x += w + GAP;
                    return (
                      <g key={bi}>
                        <rect
                          x={bx}
                          y={y}
                          width={w}
                          height="26"
                          rx="5"
                          fillOpacity={b.wide ? 0.26 : 0.1}
                          stroke="currentColor"
                          strokeOpacity="0.55"
                          strokeDasharray={b.dashed ? '4 3' : undefined}
                        />
                        <text x={bx + w / 2} y={y + 17} textAnchor="middle" fontSize="11">
                          {b.label}
                        </text>
                      </g>
                    );
                  })}
                  {lane.exits && (
                    <text x={x + 6} y={y + 17} fontSize="11" opacity="0.8">
                      ✕ ออก
                    </text>
                  )}
                  <text x="478" y={y + 17} fontSize="11" fontWeight={lane.exits ? 600 : 400}>
                    {lane.seen}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
      <line x1="466" y1="30" x2="466" y2="320" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="3 3" />
    </svg>
  );
}
