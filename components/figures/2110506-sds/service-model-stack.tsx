// who manages each layer under IaaS, PaaS and SaaS, by the NIST definitions
const LAYERS = ['แอปของคุณ', 'runtime · middleware · database', 'OS · storage', 'VM · server · network'];

// how many layers from the top the cloud user controls
const COLS = [
  { name: 'SaaS', ex: 'เช่น Adobe Creative Cloud', user: 0 },
  { name: 'PaaS', ex: 'เช่น Google App Engine', user: 1 },
  { name: 'IaaS', ex: 'เช่น Amazon EC2', user: 3 },
];

export function ServiceModelStack() {
  return (
    <svg
      viewBox="0 0 600 255"
      role="img"
      aria-label="สามชั้นของบริการ SaaS ผู้ให้บริการคุมทุกชั้น PaaS ให้ผู้ใช้คุมแค่แอป IaaS ให้ผู้ใช้คุมตั้งแต่ OS และ storage ขึ้นไป"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {COLS.map((c, ci) => {
        const x = 20 + ci * 195;
        return (
          <g key={c.name}>
            <text x={x + 85} y="20" textAnchor="middle" fontSize="13" fontWeight="700">
              {c.name}
            </text>
            <text x={x + 85} y="36" textAnchor="middle" fontSize="11" opacity="0.75">
              {c.ex}
            </text>
            {LAYERS.map((l, li) => {
              const mine = li < c.user;
              return (
                <g key={l}>
                  <rect
                    x={x}
                    y={48 + li * 40}
                    width="170"
                    height="34"
                    rx="5"
                    fillOpacity={mine ? 0.04 : 0.24}
                    stroke="currentColor"
                    strokeOpacity="0.6"
                    strokeDasharray={mine ? '4 3' : undefined}
                  />
                  <text x={x + 85} y={69 + li * 40} textAnchor="middle" fontSize="11">
                    {l}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
      <g transform="translate(120 228)">
        <rect x="0" y="-11" width="22" height="14" rx="3" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.6" strokeDasharray="4 3" />
        <text x="30" y="0" fontSize="11">ผู้ใช้ cloud ดูแลเอง</text>
        <rect x="190" y="-11" width="22" height="14" rx="3" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.6" />
        <text x="220" y="0" fontSize="11">ผู้ให้บริการดูแลให้</text>
      </g>
      <text x="300" y="250" textAnchor="middle" fontSize="11" opacity="0.75">
        ไปทางขวา ผู้ใช้คุมได้มากขึ้น แต่ต้องดูแลเองมากขึ้น
      </text>
    </svg>
  );
}
