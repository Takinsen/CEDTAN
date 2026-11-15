// twelve 8-port switches wired as a three-stage Clos network: 32 outside ports, four paths between any pair
export function ClosTwelveSwitches() {
  const columns = [130, 320, 510];
  const rows = [40, 112, 184, 256];
  const w = 60;
  const h = 52;
  const portY = (row: number, i: number) => row + 8 + i * 12;
  const wire = { stroke: 'currentColor', strokeOpacity: 0.5 };
  const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';

  // left switch li port j goes to middle switch j; middle switch m port k goes to right switch k
  const leftToMiddle = rows.flatMap((lr, li) =>
    rows.map((mr, j) => ({ key: `lm${li}${j}`, x1: columns[0] + w / 2, y1: portY(lr, j), x2: columns[1] - w / 2, y2: portY(mr, li), hot: li === 0 })),
  );
  const middleToRight = rows.flatMap((mr, mi) =>
    rows.map((rr, k) => ({ key: `mr${mi}${k}`, x1: columns[1] + w / 2, y1: portY(mr, k), x2: columns[2] - w / 2, y2: portY(rr, mi), hot: k === 2 })),
  );

  return (
    <svg
      viewBox="0 0 640 340"
      role="img"
      aria-label="switch 8 พอร์ต 12 ตัว ต่อเป็นสามชั้น ได้พอร์ตภายนอก 32 พอร์ต และจาก A ไป B มีสี่ทาง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x={columns[0]} y="24" textAnchor="middle" fontSize="12" fontWeight="600">
        ชั้นขาเข้า
      </text>
      <text x={columns[1]} y="24" textAnchor="middle" fontSize="12" fontWeight="600">
        ชั้นกลาง
      </text>
      <text x={columns[2]} y="24" textAnchor="middle" fontSize="12" fontWeight="600">
        ชั้นขาออก
      </text>

      {[...leftToMiddle, ...middleToRight]
        .filter((l) => !l.hot)
        .map((l) => (
          <line key={l.key} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} {...wire} />
        ))}
      {/* the four paths from A to B, one through each middle switch */}
      {[...leftToMiddle, ...middleToRight]
        .filter((l) => l.hot)
        .map((l) => (
          <line key={l.key} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="currentColor" strokeWidth="2.6" />
        ))}

      {columns.map((cx, c) =>
        rows.map((ry) => (
          <g key={`s${c}${ry}`}>
            <rect x={cx - w / 2} y={ry} width={w} height={h} rx="6" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.65" />
            <text x={cx} y={ry + h / 2 + 4} textAnchor="middle" fontSize="11" opacity="0.8">
              8-port
            </text>
          </g>
        )),
      )}

      {/* four outside ports on the left of every ingress switch, four on the right of every egress switch */}
      {rows.map((ry) =>
        [0, 1, 2, 3].map((i) => (
          <g key={`ext${ry}${i}`}>
            <line x1={columns[0] - w / 2 - 22} y1={portY(ry, i)} x2={columns[0] - w / 2} y2={portY(ry, i)} {...wire} />
            <line x1={columns[2] + w / 2} y1={portY(ry, i)} x2={columns[2] + w / 2 + 22} y2={portY(ry, i)} {...wire} />
          </g>
        )),
      )}
      <line x1={columns[0] - w / 2 - 22} y1={portY(rows[0], 0)} x2={columns[0] - w / 2} y2={portY(rows[0], 0)} stroke="currentColor" strokeWidth="2.6" />
      <line x1={columns[2] + w / 2} y1={portY(rows[2], 1)} x2={columns[2] + w / 2 + 22} y2={portY(rows[2], 1)} stroke="currentColor" strokeWidth="2.6" />
      <text x={columns[0] - w / 2 - 28} y={portY(rows[0], 0) + 4} textAnchor="end" fontSize="13" fontWeight="700" fontFamily={mono}>
        A
      </text>
      <text x={columns[2] + w / 2 + 28} y={portY(rows[2], 1) + 4} fontSize="13" fontWeight="700" fontFamily={mono}>
        B
      </text>

      <text x={columns[0] - w / 2 - 11} y="326" textAnchor="middle" fontSize="11" opacity="0.75">
        16 พอร์ต
      </text>
      <text x={columns[2] + w / 2 + 11} y="326" textAnchor="middle" fontSize="11" opacity="0.75">
        16 พอร์ต
      </text>
    </svg>
  );
}
