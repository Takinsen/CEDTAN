// how far each practice automates along the seven stages from code to operate
export function DeliverySpans() {
  const stages = ['Code', 'Build', 'Integrate', 'Test', 'Release', 'Deploy', 'Operate'];
  const spans = [
    { name: 'Agile Development', note: 'Rapid + Interactive', end: 184, y: 124 },
    { name: 'Continuous Integration', note: 'Commit Frequently + Test Frequently', end: 348, y: 164 },
    { name: 'Continuous Delivery', note: 'Deliver to testing environment for UAT', end: 430, y: 204 },
    { name: 'Continuous Deployment', note: 'All the way toward production environment', end: 512, y: 244 },
    { name: 'DevOps', note: 'รวมการดูแลระบบที่รันจริงด้วย', end: 594, y: 284 },
  ];

  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="เจ็ดขั้นจาก code ถึง operate แบ่งเป็น development, testing และ production environment Agile development อัตโนมัติถึง build, continuous integration ถึง test, continuous delivery ถึง release, continuous deployment ถึง deploy และ DevOps ครอบถึง operate"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="20" y="20" width="164" height="26" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.5" />
      <rect x="184" y="20" width="246" height="26" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <rect x="430" y="20" width="164" height="26" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.5" />
      <text x="102" y="37" textAnchor="middle" fontSize="11" fontWeight="600">
        Dev Environment
      </text>
      <text x="307" y="37" textAnchor="middle" fontSize="11" fontWeight="600">
        Testing Environment
      </text>
      <text x="512" y="37" textAnchor="middle" fontSize="11" fontWeight="600">
        Production Environment
      </text>

      {stages.map((stage, i) => (
        <g key={stage}>
          <rect x={23 + i * 82} y="56" width="76" height="28" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
          <text x={61 + i * 82} y="74" textAnchor="middle" fontSize="11">
            {stage}
          </text>
        </g>
      ))}

      {spans.map((span) => (
        <g key={span.name}>
          <text x="24" y={span.y - 9} fontSize="11">
            <tspan fontWeight="600">{span.name}</tspan>
            <tspan opacity="0.76"> · {span.note}</tspan>
          </text>
          <line
            x1="20"
            y1={span.y}
            x2={span.end - 2}
            y2={span.y}
            stroke="currentColor"
            strokeOpacity="0.6"
            strokeWidth="2"
            markerEnd="url(#ds-arrow)"
          />
          <line x1={span.end} y1={span.y - 6} x2={span.end} y2={span.y + 6} stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" />
        </g>
      ))}

      <defs>
        <marker id="ds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}
