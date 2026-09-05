// running an image, changing it, and freezing the change back into a new image
export function ImageEvolves() {
  const box = (x: number, y: number, title: string, rows: string[]) => {
    const bottom = y + 150 - 8;
    return (
      <g key={title}>
        <rect x={x} y={y} width="170" height="150" rx="8" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.45" />
        <text x={x + 85} y={y + 20} textAnchor="middle" fontSize="13.5" fontWeight="600">
          {title}
        </text>
        {rows.map((row, i) => {
          const ry = bottom - 26 * (rows.length - i);
          return (
            <g key={row}>
              <rect
                x={x + 12}
                y={ry}
                width="146"
                height="24"
                rx="4"
                fillOpacity={row === 'writable' ? 0.18 : 0.08}
                stroke="currentColor"
                strokeOpacity="0.4"
              />
              <text x={x + 85} y={ry + 16} textAnchor="middle" fontSize="11.5">
                {row}
              </text>
            </g>
          );
        })}
      </g>
    );
  };

  return (
    <svg
      viewBox="0 0 620 400"
      role="img"
      aria-label="Image A รันเป็น Container A1 แล้ว commit กลายเป็น Image B ที่มีเลเยอร์เพิ่มมาหนึ่งชั้น"
      className="mx-auto h-auto w-full min-w-[580px]"
      fill="currentColor"
    >
      {box(20, 36, 'Image A', ['Base: Ubuntu', 'Python'])}
      {box(225, 36, 'Container A1', ['Base: Ubuntu', 'Python', 'writable'])}

      <line x1="192" y1="111" x2="220" y2="111" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" markerEnd="url(#evolve-arrow)" />
      <text x="206" y="103" textAnchor="middle" fontSize="11" opacity="0.75">
        run
      </text>

      <text x="415" y="62" fontSize="11.5" opacity="0.75">
        แต่ละเลเยอร์ชี้ไปเลเยอร์ล่าง
      </text>
      <text x="415" y="86" fontSize="11.5" opacity="0.75">
        เลเยอร์ล่างแชร์กันหลาย image
      </text>
      <text x="415" y="110" fontSize="11.5" opacity="0.75">
        ดึง image ทีเดียวได้ครบทุกชั้น
      </text>

      {/* commit freezes the writable layer into a new read-only layer */}
      <path
        d="M 310 186 L 310 206 L 105 206 L 105 221"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1.6"
        markerEnd="url(#evolve-arrow)"
      />
      <text x="320" y="201" fontSize="11" opacity="0.75">
        commit — แช่แข็งชั้นที่เขียนไว้ให้เป็นเลเยอร์อ่านอย่างเดียว
      </text>

      {box(20, 225, 'Image B', ['Base: Ubuntu', 'Python', '/usr/app'])}
      {box(225, 225, 'Container B1', ['Base: Ubuntu', 'Python', '/usr/app', 'writable'])}

      <line x1="192" y1="300" x2="220" y2="300" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" markerEnd="url(#evolve-arrow)" />
      <text x="206" y="292" textAnchor="middle" fontSize="11" opacity="0.75">
        run
      </text>

      <text x="415" y="270" fontSize="11.5" opacity="0.75">
        Image B ไม่ได้ก๊อป Ubuntu ใหม่
      </text>
      <text x="415" y="294" fontSize="11.5" opacity="0.75">
        มันชี้ไปเลเยอร์เดิมของ Image A
      </text>

      <defs>
        <marker id="evolve-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
