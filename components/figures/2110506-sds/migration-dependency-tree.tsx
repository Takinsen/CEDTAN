type Node = { id: string; x: number; y: number };

const NODES: Node[] = [
  { id: 'Dashboard', x: 300, y: 30 },
  { id: 'Web', x: 110, y: 95 },
  { id: 'CRM', x: 250, y: 95 },
  { id: 'Auth', x: 420, y: 95 },
  { id: 'DB', x: 60, y: 165 },
  { id: 'Search', x: 180, y: 165 },
  { id: 'LDAP', x: 360, y: 165 },
  { id: 'Service', x: 500, y: 165 },
  { id: 'OLAP', x: 290, y: 235 },
  { id: 'Engine', x: 420, y: 235 },
  { id: 'logs', x: 520, y: 235 },
  { id: 'ERP', x: 250, y: 300 },
  { id: 'Report', x: 400, y: 300 },
];

// parent depends on child; the LDAP chain is drawn heavier
const EDGES: [string, string, 'up' | 'down' | 'plain' | 'dotted'][] = [
  ['Dashboard', 'Web', 'plain'],
  ['Dashboard', 'CRM', 'plain'],
  ['Dashboard', 'Auth', 'up'],
  ['CRM', 'DB', 'plain'],
  ['CRM', 'Search', 'plain'],
  ['Auth', 'LDAP', 'up'],
  ['Auth', 'Service', 'plain'],
  ['LDAP', 'OLAP', 'down'],
  ['LDAP', 'Engine', 'down'],
  ['Service', 'logs', 'plain'],
  ['OLAP', 'ERP', 'plain'],
  ['Engine', 'Report', 'plain'],
  ['ERP', 'Report', 'plain'],
  ['Web', 'Engine', 'dotted'],
];

const at = (id: string) => NODES.find((n) => n.id === id)!;

// a dependency tree of IT assets, read from LDAP: who depends on it (upward) and what it depends on (downward)
export function MigrationDependencyTree() {
  return (
    <svg
      viewBox="0 0 620 330"
      role="img"
      aria-label="dependency tree ของ IT asset Dashboard พึ่ง Web, CRM และ Auth CRM พึ่ง DB และ Search Auth พึ่ง LDAP และ Service LDAP พึ่ง OLAP และ Engine ถ้ามองจาก LDAP upward dependency คือ Auth และ Dashboard ซึ่งพึ่ง LDAP ส่วน downward dependency คือ OLAP และ Engine ซึ่ง LDAP พึ่ง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {EDGES.map(([a, b, kind]) => {
        const p = at(a);
        const q = at(b);
        const heavy = kind === 'up' || kind === 'down';
        return (
          <line
            key={`${a}-${b}`}
            x1={p.x}
            y1={p.y}
            x2={q.x}
            y2={q.y}
            stroke="currentColor"
            strokeOpacity={heavy ? 0.85 : 0.5}
            strokeWidth={heavy ? 3 : 1.3}
            strokeDasharray={kind === 'dotted' ? '3 4' : undefined}
          />
        );
      })}

      {NODES.map((n) => {
        const focus = n.id === 'LDAP';
        const near = ['Dashboard', 'Auth', 'OLAP', 'Engine'].includes(n.id);
        return (
          <g key={n.id}>
            <rect
              x={n.x - 40}
              y={n.y - 14}
              width="80"
              height="28"
              rx="14"
              fill="var(--color-fd-background, white)"
              stroke="currentColor"
              strokeOpacity={focus ? 0.95 : 0.6}
              strokeWidth={focus ? 2.5 : 1.2}
            />
            <rect x={n.x - 40} y={n.y - 14} width="80" height="28" rx="14" fillOpacity={focus ? 0.3 : near ? 0.14 : 0.04} />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="11.5" fontWeight={focus || near ? 600 : 400}>
              {n.id}
            </text>
          </g>
        );
      })}

      <text x="520" y="40" fontSize="11.5" fontWeight="600">
        ↑ upward
      </text>
      <text x="520" y="56" fontSize="11" opacity="0.85">
        Auth, Dashboard
      </text>
      <text x="520" y="72" fontSize="11" opacity="0.85">
        พึ่ง LDAP อยู่
      </text>

      <text x="18" y="232" fontSize="11.5" fontWeight="600">
        ↓ downward
      </text>
      <text x="18" y="248" fontSize="11" opacity="0.85">
        LDAP พึ่ง
      </text>
      <text x="18" y="264" fontSize="11" opacity="0.85">
        OLAP, Engine
      </text>

      <text x="530" y="300" textAnchor="middle" fontSize="11" opacity="0.8">
        เส้นประ = พึ่งกันข้ามกิ่ง
      </text>
    </svg>
  );
}
