// incremental snapshots: the first copies every chunk, later ones copy only the chunks that changed
const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';

const columns = [
  { name: 'snapshot 1', x: 150, cells: ['A', 'B', 'C', 'D'], fresh: [0, 1, 2, 3], sent: 'ส่ง 4 chunk' },
  { name: 'snapshot 2', x: 320, cells: ['A', 'B', 'C2', 'D'], fresh: [2], sent: 'ส่ง 1 chunk' },
  { name: 'snapshot 3', x: 490, cells: ['A2', 'B', 'C2', 'D'], fresh: [0], sent: 'ส่ง 1 chunk' },
];

export function SnapshotChunks() {
  return (
    <svg
      viewBox="0 0 640 330"
      role="img"
      aria-label="snapshot แรกคัดลอกทั้งสี่ chunk ไปเก็บใน S3 snapshot ที่สองคัดลอกแค่ chunk 3 ที่เปลี่ยนเป็น C2 snapshot ที่สามคัดลอกแค่ chunk 1 ที่เปลี่ยนเป็น A2 ส่วน chunk อื่นชี้ไปของที่เก็บไว้แล้ว"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {/* time axis */}
      <line x1="110" y1="28" x2="610" y2="28" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" markerEnd="url(#snc-arrow)" />
      <text x="600" y="20" textAnchor="end" fontSize="11" opacity="0.75">
        เวลา
      </text>

      {[0, 1, 2, 3].map((row) => (
        <text key={row} x="20" y={88 + row * 46} fontSize="11.5" opacity="0.8">
          chunk {row + 1}
        </text>
      ))}

      {columns.map((col) => (
        <g key={col.name}>
          <circle cx={col.x + 50} cy="28" r="4" fillOpacity="0.7" />
          <text x={col.x + 50} y="54" textAnchor="middle" fontSize="12" fontWeight="600">
            {col.name}
          </text>
          {col.cells.map((cell, row) => {
            const fresh = col.fresh.includes(row);
            return (
              <g key={row}>
                <rect
                  x={col.x}
                  y={68 + row * 46}
                  width="100"
                  height="32"
                  rx="4"
                  fillOpacity={fresh ? 0.3 : 0.03}
                  stroke="currentColor"
                  strokeOpacity={fresh ? 0.7 : 0.5}
                  strokeDasharray={fresh ? undefined : '4 3'}
                />
                <text x={col.x + 50} y={89 + row * 46} textAnchor="middle" fontSize="12" fontFamily={mono} opacity={fresh ? 1 : 0.7}>
                  {cell}
                </text>
              </g>
            );
          })}
          <text x={col.x + 50} y="268" textAnchor="middle" fontSize="11.5">
            {col.sent}
          </text>
        </g>
      ))}

      {/* legend */}
      <rect x="110" y="292" width="26" height="16" rx="3" fillOpacity="0.3" stroke="currentColor" strokeOpacity="0.7" />
      <text x="144" y="305" fontSize="11" opacity="0.85">
        คัดลอกไปเก็บใน S3 รอบนี้
      </text>
      <rect x="350" y="292" width="26" height="16" rx="3" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 3" />
      <text x="384" y="305" fontSize="11" opacity="0.85">
        ชี้ไปที่ chunk ที่เก็บไว้แล้ว
      </text>

      <defs>
        <marker id="snc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
