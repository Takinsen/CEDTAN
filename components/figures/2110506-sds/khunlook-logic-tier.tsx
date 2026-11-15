type BoxProps = { x: number; y: number; w: number; h: number; label: string; opacity?: number; dashed?: boolean; bold?: boolean };

// a labelled block; dashed outline marks a container
function Box({ x, y, w, h, label, opacity = 0.1, dashed = false, bold = false }: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="4"
        fillOpacity={opacity}
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeDasharray={dashed ? '4 3' : undefined}
      />
      {label && (
        <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize="11.5" fontWeight={bold ? 600 : 400}>
          {label}
        </text>
      )}
    </g>
  );
}

// one EC2 machine: a coloured base with the OS on top of it
function Machine({ x, w }: { x: number; w: number }) {
  return (
    <g>
      <Box x={x} y={150} w={w} h={22} label="OS" opacity={0.28} />
      <Box x={x} y={174} w={w} h={22} label="EC2" opacity={0.12} />
    </g>
  );
}

// what the business-logic tier of KhunLook holds at each of the four stages of modernising it
export function KhunlookLogicTier() {
  const cols = [
    { x: 10, title: 'VM', note: ['แพ็กแบบเดิม', 'ทุกอย่างบน OS ตรง ๆ'] },
    { x: 167, title: 'Containerize', note: ['เปลี่ยนวิธีแพ็ก', 'Auth + App ใน container เดียว'] },
    { x: 324, title: 'Microservices', note: ['เปลี่ยนวิธีแบ่ง', 'หนึ่งบริการ หนึ่งเครื่อง'] },
    { x: 481, title: 'Serverless', note: ['เลิกดูแลเครื่อง', 'เหลือแค่ function'] },
  ];

  return (
    <svg
      viewBox="0 0 630 265"
      role="img"
      aria-label="ชั้น business logic ของ KhunLook สี่ขั้น ขั้น VM มี Auth กับ App บน OS ของ EC2 หนึ่งเครื่อง ขั้น containerize ห่อ Auth กับ App ไว้ใน container เดียวบน EC2 เดิม ขั้น microservices แยก Auth กับ Backup เป็นสอง container บน EC2 คนละเครื่อง ขั้น serverless เหลือ Auth function กับ Backup function โดยไม่มี EC2"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {cols.map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="8" width="140" height="200" rx="7" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.5" />
          <text x={col.x + 70} y="28" textAnchor="middle" fontSize="12.5" fontWeight="600">
            {col.title}
          </text>
          <text x={col.x + 70} y="230" textAnchor="middle" fontSize="11.5" fontWeight="600">
            {col.note[0]}
          </text>
          <text x={col.x + 70} y="247" textAnchor="middle" fontSize="11" opacity="0.8">
            {col.note[1]}
          </text>
        </g>
      ))}

      {/* VM: two programs straight on the OS of one machine */}
      <Box x={20} y={94} w={120} h={24} label="Auth" bold />
      <Box x={20} y={122} w={120} h={24} label="App" bold />
      <Machine x={20} w={120} />

      {/* containerize: the same two programs, wrapped in one container */}
      <Box x={175} y={82} w={124} h={66} label="" opacity={0.04} dashed />
      <text x={237} y={95} textAnchor="middle" fontSize="11" opacity="0.8">
        container
      </text>
      <Box x={183} y={99} w={108} h={20} label="Auth" bold />
      <Box x={183} y={123} w={108} h={20} label="App" bold />
      <Machine x={177} w={120} />

      {/* microservices: one service per container, one container per machine */}
      {[
        { x: 332, label: 'Auth' },
        { x: 400, label: 'Backup' },
      ].map((s) => (
        <g key={s.label}>
          <Box x={s.x} y={112} w={56} h={34} label={s.label} bold dashed />
          <Machine x={s.x} w={56} />
        </g>
      ))}

      {/* serverless: only functions remain, no machine to look after */}
      <Box x={491} y={60} w={120} h={30} label="Auth function" bold />
      <Box x={491} y={100} w={120} h={30} label="Backup function" bold />
      <text x={551} y={168} textAnchor="middle" fontSize="11" opacity="0.8">
        ไม่มี EC2 ให้ดูแล
      </text>
      <text x={551} y={184} textAnchor="middle" fontSize="11" opacity="0.8">
        คลาวด์หาเครื่องมารันเอง
      </text>
    </svg>
  );
}
