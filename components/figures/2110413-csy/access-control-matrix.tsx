// the same table read two ways: down a column is an ACL, across a row is a capability list
export function AccessControlMatrix() {
  const subjects = ['Alice', 'Bob', 'Carol'];
  const objects = ['file1', 'file2', 'prog'];
  const cells = [
    ['r w', 'r', 'x'],
    ['r', 'r w', '—'],
    ['—', 'r', 'r x'],
  ];
  const x0 = 150;
  const y0 = 70;
  const cw = 96;
  const ch = 34;
  return (
    <svg
      viewBox="0 0 620 254"
      role="img"
      aria-label="ตาราง access control matrix ที่มีผู้ใช้เป็นแถวและไฟล์เป็นคอลัมน์ อ่านลงตามคอลัมน์ได้เป็น access control list ของไฟล์นั้น อ่านตามแถวได้เป็นรายการสิทธิ์ของคนคนนั้น"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {objects.map((o, c) => (
        <text key={o} x={x0 + c * cw + cw / 2} y={y0 - 12} textAnchor="middle" fontSize="11" fontWeight="600">
          {o}
        </text>
      ))}

      {subjects.map((s, r) => (
        <g key={s}>
          <text x={x0 - 14} y={y0 + r * ch + 22} textAnchor="end" fontSize="11" fontWeight="600">
            {s}
          </text>
          {objects.map((o, c) => (
            <g key={o}>
              <rect
                x={x0 + c * cw}
                y={y0 + r * ch}
                width={cw}
                height={ch}
                fillOpacity={c === 1 ? 0.16 : 0.05}
                stroke="currentColor"
                strokeOpacity="0.5"
              />
              <text x={x0 + c * cw + cw / 2} y={y0 + r * ch + 22} textAnchor="middle" fontSize="11">
                {cells[r][c]}
              </text>
            </g>
          ))}
        </g>
      ))}

      <rect x={x0 + cw - 3} y={y0 - 3} width={cw + 6} height={ch * 3 + 6} rx="5" fill="none" stroke="currentColor" strokeOpacity="0.75" strokeWidth="1.6" />
      <text x={x0 + cw + cw / 2} y={y0 + ch * 3 + 26} textAnchor="middle" fontSize="11" fontWeight="600">
        อ่านลงคอลัมน์
      </text>
      <text x={x0 + cw + cw / 2} y={y0 + ch * 3 + 46} textAnchor="middle" fontSize="11" opacity="0.8">
        = ACL ของ file2
      </text>

      <rect x={x0 - 3} y={y0 + ch - 3} width={cw * 3 + 6} height={ch + 6} rx="5" fill="none" stroke="currentColor" strokeOpacity="0.75" strokeWidth="1.6" strokeDasharray="5 3" />
      <text x="60" y={y0 + ch + 16} textAnchor="middle" fontSize="11" fontWeight="600">
        อ่านตามแถว
      </text>
      <text x="60" y={y0 + ch + 36} textAnchor="middle" fontSize="11" opacity="0.8">
        = Capability
      </text>
      <text x="60" y={y0 + ch + 56} textAnchor="middle" fontSize="11" opacity="0.8">
        ของ Bob
      </text>

      <text x="310" y="26" textAnchor="middle" fontSize="11" opacity="0.8">
        แถวคือผู้ใช้ คอลัมน์คือทรัพยากร ในช่องคือสิ่งที่ทำได้
      </text>
      <text x="310" y="238" textAnchor="middle" fontSize="11" opacity="0.78">
        ตารางเดียวกัน เก็บได้สองแบบ และสองแบบนี้ตอบคำถามคนละข้อ
      </text>
    </svg>
  );
}
