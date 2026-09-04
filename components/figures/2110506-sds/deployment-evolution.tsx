// three ways to put apps on hardware, and what each layer removes
const COLUMNS = [
  {
    title: 'Traditional',
    note: 'แอปแย่งเครื่องกันเอง',
    layers: [['App', 'App', 'App'], ['Operating System'], ['Hardware']],
  },
  {
    title: 'Virtualized',
    note: 'แยกได้ แต่แบก OS ทุกชั้น',
    layers: [['App+Lib', 'App+Lib'], ['Guest OS', 'Guest OS'], ['Hypervisor'], ['Operating System'], ['Hardware']],
  },
  {
    title: 'Container',
    note: 'แยกได้ ใช้ OS เดียวร่วมกัน',
    layers: [['App+Lib', 'App+Lib', 'App+Lib'], ['Container Runtime'], ['Operating System'], ['Hardware']],
  },
];

export function DeploymentEvolution() {
  return (
    <svg
      viewBox="0 0 620 250"
      role="img"
      aria-label="เทียบสามยุคของการวางแอปลงเครื่อง แบบดั้งเดิม แบบใช้ VM และแบบใช้ container"
      className="mx-auto h-auto w-full min-w-[590px] max-w-[620px]"
      fill="currentColor"
    >
      {COLUMNS.map((col, ci) => {
        const x0 = 15 + ci * 203;
        const w = 188;
        const bottom = 205;
        let y = bottom;
        const rows = [];
        for (const layer of [...col.layers].reverse()) {
          y -= 30;
          const cw = (w - 6 * (layer.length - 1)) / layer.length;
          rows.push(
            <g key={`${ci}-${y}`}>
              {layer.map((label, li) => (
                <g key={label + li}>
                  <rect
                    x={x0 + li * (cw + 6)}
                    y={y}
                    width={cw}
                    height="26"
                    rx="4"
                    fillOpacity={label === 'Hardware' ? 0.2 : 0.12}
                    stroke="currentColor"
                    strokeOpacity="0.45"
                  />
                  <text x={x0 + li * (cw + 6) + cw / 2} y={y + 17} textAnchor="middle" fontSize="9.5">
                    {label}
                  </text>
                </g>
              ))}
            </g>,
          );
          y -= 4;
        }
        return (
          <g key={col.title}>
            <text x={x0 + w / 2} y="22" textAnchor="middle" fontSize="11.5" fontWeight="600">
              {col.title}
            </text>
            {rows}
            <text x={x0 + w / 2} y="228" textAnchor="middle" fontSize="9.5" opacity="0.75">
              {col.note}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
