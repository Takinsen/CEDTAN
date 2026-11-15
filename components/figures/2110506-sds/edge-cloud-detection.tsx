// edge-cloud object detection: the edge cuts known objects away and sends only the unknown rest to the cloud
function Box({ x, y, w, lines, strong = 0.16 }: { x: number; y: number; w: number; lines: string[]; strong?: number }) {
  const h = lines.length > 1 ? 40 : 32;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fillOpacity={strong} stroke="currentColor" strokeOpacity="0.55" />
      {lines.map((line, i) => (
        <text key={line} x={x + w / 2} y={y + (lines.length > 1 ? 16 + i * 15 : 20)} textAnchor="middle" fontSize="11" fontWeight={i === 0 ? 600 : 400}>
          {line}
        </text>
      ))}
    </g>
  );
}

export function EdgeCloudDetection() {
  return (
    <svg
      viewBox="0 0 680 300"
      role="img"
      aria-label="กล้องส่งภาพให้ edge device ซึ่งทำ object detection และ image matting คู่กัน แล้ว image cutting ตัดส่วนที่รู้จักออก ส่วนสีขาวที่เหลือคือวัตถุที่ไม่รู้จัก ซึ่งถูกส่งขึ้นคลาวด์ edge คำนวณ residual area (ra) ผู้ดูแลติดป้ายชื่อวัตถุ เมื่อ ra ถึง α ครบ β ครั้ง คลาวด์ฝึกโมเดลใหม่ แล้วส่งโมเดลใหม่กลับลงไปที่ object detection บน edge"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <Box x={10} y={110} w={80} lines={['กล้อง', 'end device']} strong={0.06} />

      <rect x="110" y="20" width="335" height="265" rx="10" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.55" strokeDasharray="6 4" />
      <text x="122" y="40" fontSize="11.5" fontWeight="600">
        Edge device
      </text>
      <Box x={122} y={112} w={64} lines={['frame']} strong={0.08} />
      <Box x={210} y={65} w={105} lines={['Object detection']} />
      <Box x={210} y={165} w={105} lines={['Image matting']} />
      <Box x={335} y={108} w={100} lines={['Image cutting', 'ตัดส่วนที่รู้จักออก']} />
      <Box x={285} y={225} w={150} lines={['Residual area (ra)', 'วัดพื้นที่ที่ไม่รู้จัก']} strong={0.24} />

      <rect x="470" y="20" width="200" height="265" rx="10" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.55" />
      <text x="482" y="40" fontSize="11.5" fontWeight="600">
        Cloud
      </text>
      <Box x={485} y={80} w={170} lines={['AI retraining', 'เมื่อ ra ≥ α ครบ β ครั้ง']} strong={0.24} />
      <Box x={485} y={150} w={170} lines={['Administrator', 'ติดป้ายชื่อให้วัตถุ']} />
      <Box x={485} y={225} w={170} lines={['ภาพวัตถุที่ไม่รู้จัก', 'ส่งขึ้นมาจาก edge']} strong={0.08} />

      <g fill="none" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" markerEnd="url(#ecd-arrow)">
        <line x1="90" y1="130" x2="119" y2="128" />
        <path d="M 186 122 L 198 122 L 198 81 L 207 81" />
        <path d="M 186 134 L 198 134 L 198 181 L 207 181" />
        <path d="M 315 81 L 325 81 L 325 120 L 332 120" />
        <path d="M 315 181 L 325 181 L 325 136 L 332 136" />
        <line x1="385" y1="148" x2="385" y2="222" />
        <line x1="435" y1="245" x2="482" y2="245" />
        <line x1="570" y1="225" x2="570" y2="193" />
        <line x1="570" y1="150" x2="570" y2="123" />
        <path d="M 485 92 L 458 92 L 458 52 L 262 52 L 262 62" strokeDasharray="6 4" />
      </g>
      <text x="350" y="41" textAnchor="middle" fontSize="11" fontWeight="600">
        AI updating: ส่งโมเดลใหม่ลงมา
      </text>

      <defs>
        <marker id="ecd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.75" />
        </marker>
      </defs>
    </svg>
  );
}
