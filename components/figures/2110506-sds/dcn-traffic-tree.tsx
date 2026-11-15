// the traditional data center tree, with one rack-to-rack path that has to climb to the core
export function DcnTrafficTree() {
  const routers = [150, 350];
  const cores = [150, 350];
  const aggs = [77, 188, 312, 423];
  const tors = [50, 105, 160, 215, 285, 340, 395, 450];
  const wire = { stroke: 'currentColor', strokeOpacity: 0.5 };
  const path = 'M 105 248 L 77 200 L 77 170 L 150 130 L 423 170 L 423 200 L 395 248';

  return (
    <svg
      viewBox="0 0 500 345"
      role="img"
      aria-label="เครือข่าย data center แบบต้นไม้ router core aggregation และ TOR ทางจาก rack ใน cluster ซ้ายไป cluster ขวาต้องขึ้นถึง core"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {/* wires: router to core, core to every aggregation, aggregation to the TORs of its cluster */}
      {routers.map((rx) =>
        cores.map((cx) => <line key={`r${rx}c${cx}`} x1={rx} y1="56" x2={cx} y2="100" {...wire} />),
      )}
      {cores.map((cx) =>
        aggs.map((ax) => <line key={`c${cx}a${ax}`} x1={cx} y1="130" x2={ax} y2="170" {...wire} />),
      )}
      {aggs.map((ax, i) =>
        tors
          .slice(i < 2 ? 0 : 4, i < 2 ? 4 : 8)
          .map((tx) => <line key={`a${ax}t${tx}`} x1={ax} y1="200" x2={tx} y2="248" {...wire} />),
      )}

      {/* one path from a left rack to a right rack has to cross the core */}
      <path d={path} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />

      {routers.map((x) => (
        <g key={`router-${x}`}>
          <ellipse cx={x} cy="40" rx="48" ry="16" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.6" />
          <text x={x} y="44" textAnchor="middle" fontSize="12" fontWeight="600">
            router
          </text>
        </g>
      ))}
      <line x1="20" y1="76" x2="480" y2="76" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="3 4" />
      <text x="478" y="70" textAnchor="end" fontSize="11" opacity="0.75">
        L3 · network layer
      </text>
      <text x="478" y="92" textAnchor="end" fontSize="11" opacity="0.75">
        L2 · link layer
      </text>

      {cores.map((x) => (
        <g key={`core-${x}`}>
          <rect x={x - 55} y="100" width="110" height="30" rx="5" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.6" />
          <text x={x} y="119" textAnchor="middle" fontSize="12" fontWeight="600">
            core switch
          </text>
        </g>
      ))}

      <rect x="22" y="160" width="222" height="150" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="6 5" />
      <rect x="256" y="160" width="222" height="150" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="6 5" />
      <text x="133" y="328" textAnchor="middle" fontSize="11.5" opacity="0.75">
        cluster ซ้าย
      </text>
      <text x="367" y="328" textAnchor="middle" fontSize="11.5" opacity="0.75">
        cluster ขวา
      </text>

      {aggs.map((x) => (
        <g key={`agg-${x}`}>
          <rect x={x - 46} y="170" width="92" height="30" rx="5" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.6" />
          <text x={x} y="189" textAnchor="middle" fontSize="11">
            aggregation
          </text>
        </g>
      ))}

      {tors.map((x) => (
        <g key={`tor-${x}`}>
          <rect x={x - 22} y="248" width="44" height="20" rx="3" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.6" />
          <text x={x} y="262" textAnchor="middle" fontSize="11" fontWeight="600">
            TOR
          </text>
          <rect x={x - 22} y="268" width="44" height="34" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.5" />
          {[276, 284, 292].map((y) => (
            <line key={y} x1={x - 15} y1={y} x2={x + 15} y2={y} stroke="currentColor" strokeOpacity="0.5" />
          ))}
        </g>
      ))}
    </svg>
  );
}
