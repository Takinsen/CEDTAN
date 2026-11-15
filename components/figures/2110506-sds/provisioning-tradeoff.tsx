// three ways a fixed capacity meets a demand that rises and falls (after Above the Clouds, figure 2)
const PANELS = [
  { title: '(ก) ซื้อไว้เท่าจุดสูงสุด', cap: 36, shrink: false, note: ['ช่วงที่คนน้อย', 'เครื่องว่างทิ้งไว้'] },
  { title: '(ข) ซื้อน้อยกว่าจุดสูงสุด', cap: 66, shrink: false, note: ['ช่วงที่คนเยอะ', 'ผู้ใช้ส่วนเกินไม่ได้รับบริการ'] },
  { title: '(ค) ผลระยะยาวของ (ข)', cap: 66, shrink: true, note: ['ผู้ใช้ที่เจอบริการช้า', 'หนีไปไม่กลับมา'] },
];

const W = 180;
const TOP = 36;
const BASE = 126;

// demand as a sine wave; in panel (c) each peak is lower than the last
function demand(shrink: boolean) {
  const pts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const t = i / 60;
    const amp = shrink ? 1 - 0.55 * t : 1;
    const y = BASE - 8 - (0.5 - 0.5 * Math.cos(t * 6 * Math.PI)) * 82 * amp;
    pts.push(`${(t * (W - 20)).toFixed(1)},${y.toFixed(1)}`);
  }
  return pts;
}

export function ProvisioningTradeoff() {
  return (
    <svg
      viewBox="0 0 600 205"
      role="img"
      aria-label="สามกรณีของความจุคงที่ที่เจอความต้องการขึ้นลง ซื้อเท่าจุดสูงสุดก็เหลือทิ้ง ซื้อน้อยกว่าก็เสียผู้ใช้ และผู้ใช้ที่เสียไปทำให้ความต้องการลดลงถาวร"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {PANELS.map((p, i) => {
        const x0 = 15 + i * 198;
        const pts = demand(p.shrink);
        const capY = p.cap;
        return (
          <g key={p.title} transform={`translate(${x0} 0)`}>
            <text x={W / 2} y="18" textAnchor="middle" fontSize="12" fontWeight="600">
              {p.title}
            </text>
            {/* the gap between capacity and demand: idle in (a), unserved in (b) and (c) */}
            <clipPath id={`cap-${i}`}>
              {i === 0 ? (
                <rect x="10" y={capY} width={W - 20} height={BASE - capY} />
              ) : (
                <rect x="10" y={TOP - 10} width={W - 20} height={capY - TOP + 10} />
              )}
            </clipPath>
            <g transform="translate(10 0)">
              {i === 0 ? (
                <polygon
                  points={`0,${capY} ${pts.join(' ')} ${W - 20},${capY}`}
                  fillOpacity="0.22"
                  clipPath={`url(#cap-${i})`}
                />
              ) : (
                <polygon
                  points={`0,${BASE} ${pts.join(' ')} ${W - 20},${BASE}`}
                  fillOpacity="0.22"
                  clipPath={`url(#cap-${i})`}
                />
              )}
              <polyline points={pts.join(' ')} fill="none" stroke="currentColor" strokeWidth="1.6" />
              <line x1="0" y1={capY} x2={W - 20} y2={capY} stroke="currentColor" strokeWidth="2.4" strokeDasharray="6 3" />
            </g>
            <line x1="10" y1={BASE} x2={W - 10} y2={BASE} stroke="currentColor" strokeOpacity="0.6" />
            <line x1="10" y1={TOP - 10} x2="10" y2={BASE} stroke="currentColor" strokeOpacity="0.6" />
            <text x={W - 10} y={BASE + 14} textAnchor="end" fontSize="11" opacity="0.75">
              เวลา
            </text>
            {p.note.map((line, li) => (
              <text key={line} x={W / 2} y={BASE + 34 + li * 15} textAnchor="middle" fontSize="11" opacity="0.85">
                {line}
              </text>
            ))}
          </g>
        );
      })}
      {/* legend */}
      <g transform="translate(150 196)">
        <line x1="0" y1="-4" x2="22" y2="-4" stroke="currentColor" strokeWidth="2.4" strokeDasharray="6 3" />
        <text x="28" y="0" fontSize="11">ความจุที่ซื้อไว้</text>
        <line x1="120" y1="-4" x2="142" y2="-4" stroke="currentColor" strokeWidth="1.6" />
        <text x="148" y="0" fontSize="11">ความต้องการจริง</text>
        <rect x="250" y="-11" width="14" height="10" fillOpacity="0.22" />
        <text x="270" y="0" fontSize="11">ส่วนที่เสียไป</text>
      </g>
    </svg>
  );
}
