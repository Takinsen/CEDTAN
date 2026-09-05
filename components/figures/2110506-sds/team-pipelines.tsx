// each team owns one repo, one pipeline, and one service, so releases do not queue behind each other
export function TeamPipelines() {
  const rows = [
    { y: 25, team: 'Mobile UI Team', service: 'Mobile UI Frontend' },
    { y: 90, team: 'Queue Team', service: 'Queue Service' },
    { y: 155, team: 'Ads Team', service: 'Ads Service' },
  ];
  return (
    <svg
      viewBox="0 0 620 250"
      role="img"
      aria-label="สามทีมแยกกัน แต่ละทีมมี repository ของตัวเอง มี deployment pipeline ของตัวเอง และปล่อยบริการของตัวเอง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="8" y="16" width="112" height="230" rx="9" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="4 3" />

      {rows.map((r) => (
        <g key={r.y}>
          <rect x="16" y={r.y} width="96" height="46" rx="7" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.5" />
          <text x="64" y={r.y + 21} textAnchor="middle" fontSize="10.5">
            {r.team.split(' ').slice(0, -1).join(' ')}
          </text>
          <text x="64" y={r.y + 35} textAnchor="middle" fontSize="10.5">
            Team
          </text>

          <rect x="140" y={r.y} width="96" height="46" rx="7" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.4" />
          <text x="188" y={r.y + 21} textAnchor="middle" fontSize="10">
            Source code
          </text>
          <text x="188" y={r.y + 35} textAnchor="middle" fontSize="10">
            repository
          </text>

          <rect x="264" y={r.y} width="190" height="46" rx="7" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.4" />
          <text x="359" y={r.y + 28} textAnchor="middle" fontSize="10.5">
            Automated Deployment Pipeline
          </text>

          <rect x="482" y={r.y} width="122" height="46" rx="7" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
          <text x="543" y={r.y + 28} textAnchor="middle" fontSize="10.5">
            {r.service}
          </text>

          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3" markerEnd="url(#tp-arrow)">
            <line x1="114" y1={r.y + 23} x2="138" y2={r.y + 23} />
            <line x1="238" y1={r.y + 23} x2="262" y2={r.y + 23} />
            <line x1="456" y1={r.y + 23} x2="480" y2={r.y + 23} />
          </g>
        </g>
      ))}

      <text x="64" y={244} textAnchor="middle" fontSize="9.5" opacity="0.75">
        ทำงานแยกกัน
      </text>

      <defs>
        <marker id="tp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
