// hosted (type II) and bare-metal (type I) virtualization, told by what sits under the hypervisor
type L = { label: string; x: number; y: number; w: number; h: number; o: number };

function Layer({ l }: { l: L }) {
  return (
    <g>
      <rect x={l.x} y={l.y} width={l.w} height={l.h} rx="4" fillOpacity={l.o} stroke="currentColor" strokeOpacity="0.55" />
      <text x={l.x + l.w / 2} y={l.y + l.h / 2 + 4} textAnchor="middle" fontSize="11">
        {l.label}
      </text>
    </g>
  );
}

const HOSTED: L[] = [
  { label: 'App', x: 20, y: 60, w: 50, h: 70, o: 0.05 },
  { label: 'App', x: 76, y: 60, w: 50, h: 70, o: 0.05 },
  { label: 'App', x: 140, y: 40, w: 110, h: 24, o: 0.05 },
  { label: 'OS ของ VM', x: 140, y: 67, w: 110, h: 24, o: 0.12 },
  { label: 'Hypervisor', x: 140, y: 106, w: 110, h: 24, o: 0.3 },
  { label: 'OS ของเครื่อง (host OS)', x: 20, y: 133, w: 230, h: 24, o: 0.18 },
  { label: 'Hardware', x: 20, y: 160, w: 230, h: 24, o: 0.26 },
];

const BARE: L[] = [
  { label: 'App', x: 340, y: 60, w: 110, h: 24, o: 0.05 },
  { label: 'OS ของ VM', x: 340, y: 87, w: 110, h: 24, o: 0.12 },
  { label: 'App', x: 460, y: 60, w: 110, h: 24, o: 0.05 },
  { label: 'OS ของ VM', x: 460, y: 87, w: 110, h: 24, o: 0.12 },
  { label: 'Hypervisor', x: 340, y: 133, w: 230, h: 24, o: 0.3 },
  { label: 'Hardware', x: 340, y: 160, w: 230, h: 24, o: 0.26 },
];

export function HypervisorTypes() {
  return (
    <svg
      viewBox="0 0 590 250"
      role="img"
      aria-label="แบบ hosted หรือ Type II hypervisor เป็นโปรแกรมหนึ่งบน OS ของเครื่อง ข้าง ๆ แอปธรรมดา ส่วนแบบ bare-metal หรือ Type I hypervisor วางตรงบนฮาร์ดแวร์ และทุก VM อยู่บนมัน"
      className="mx-auto h-auto w-full min-w-[580px]"
      fill="currentColor"
    >
      <text x="135" y="20" textAnchor="middle" fontSize="13" fontWeight="700">
        Hosted (Type II)
      </text>
      <text x="455" y="20" textAnchor="middle" fontSize="13" fontWeight="700">
        Bare-metal (Type I)
      </text>
      {/* the VM box around the guest OS and its app */}
      <rect x="134" y="34" width="122" height="64" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeDasharray="4 3" />
      <rect x="334" y="54" width="122" height="64" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeDasharray="4 3" />
      <rect x="454" y="54" width="122" height="64" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeDasharray="4 3" />
      {[...HOSTED, ...BARE].map((l, i) => (
        <Layer key={i} l={l} />
      ))}
      <text x="135" y="208" textAnchor="middle" fontSize="11" opacity="0.85">
        ติดตั้งเหมือนโปรแกรมหนึ่ง
      </text>
      <text x="135" y="223" textAnchor="middle" fontSize="11" opacity="0.85">
        พึ่ง host OS คุมอุปกรณ์และทรัพยากร
      </text>
      <text x="455" y="208" textAnchor="middle" fontSize="11" opacity="0.85">
        hypervisor เป็น kernel บาง ๆ ของตัวเอง
      </text>
      <text x="455" y="223" textAnchor="middle" fontSize="11" opacity="0.85">
        ไม่มี OS อื่นคั่นระหว่างมันกับฮาร์ดแวร์
      </text>
    </svg>
  );
}
