// the six components of an IaaS cloud and the seven numbered steps of one machine request
type B = { x: number; y: number; w: number; label: string[]; strong?: boolean };

const BOXES: Record<string, B> = {
  portal: { x: 20, y: 40, w: 130, label: ['Self-Service', 'Portal'] },
  manager: { x: 235, y: 110, w: 130, label: ['Cloud Resource', 'Manager'], strong: true },
  pool: { x: 450, y: 110, w: 130, label: ['Physical', 'Resource Pool'] },
  image: { x: 450, y: 15, w: 130, label: ['Image', 'Library'] },
  monitor: { x: 150, y: 225, w: 130, label: ['Cloud', 'Monitoring'] },
  billing: { x: 320, y: 225, w: 130, label: ['Cloud Billing /', 'Charging'] },
};
const H = 44;

function Box({ b }: { b: B }) {
  return (
    <g>
      <rect x={b.x} y={b.y} width={b.w} height={H} rx="6" fillOpacity={b.strong ? 0.2 : 0.08} stroke="currentColor" strokeOpacity="0.6" />
      {b.label.map((l, i) => (
        <text key={l} x={b.x + b.w / 2} y={b.y + 19 + i * 15} textAnchor="middle" fontSize="11" fontWeight={b.strong ? 600 : 400}>
          {l}
        </text>
      ))}
    </g>
  );
}

// a numbered arrow from (x1,y1) to (x2,y2) with its step number at (nx,ny)
function Step({ d, n, nx, ny }: { d: string; n: number; nx: number; ny: number }) {
  return (
    <g>
      <path d={d} fill="none" stroke="currentColor" strokeOpacity="0.75" strokeWidth="1.5" markerEnd="url(#iaas-arrow)" />
      <circle cx={nx} cy={ny} r="9" fill="var(--color-fd-background, white)" stroke="currentColor" strokeOpacity="0.75" />
      <text x={nx} y={ny + 4} textAnchor="middle" fontSize="11" fontWeight="700">
        {n}
      </text>
    </g>
  );
}

export function IaasArchitecture() {
  return (
    <svg
      viewBox="0 0 600 290"
      role="img"
      aria-label="ผู้ใช้ขอเครื่องผ่าน portal, cloud resource manager เลือกเครื่องจริงใน physical resource pool, hypervisor สร้าง VM จาก image library แล้วแจ้งกลับ, manager เปิด monitoring กับ billing แล้วส่งรายละเอียดเครื่องให้ผู้ใช้"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <defs>
        <marker id="iaas-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="currentColor" fillOpacity="0.75" />
        </marker>
      </defs>
      {Object.values(BOXES).map((b) => (
        <Box key={b.label.join()} b={b} />
      ))}
      {/* 1 request, 2-3 decide where, 4 build the VM, 5 report back, 6 start metering, 7 answer the user */}
      <Step d="M150 70 Q 215 80 238 112" n={1} nx={200} ny={78} />
      <circle cx="262" cy="94" r="9" fill="var(--color-fd-background, white)" stroke="currentColor" strokeOpacity="0.75" />
      <text x="262" y="98" textAnchor="middle" fontSize="11" fontWeight="700">
        2
      </text>
      <text x="276" y="98" fontSize="11" opacity="0.8">
        ตัดสินคำขอ
      </text>
      <Step d="M365 122 L 448 122" n={3} nx={406} ny={122} />
      <Step d="M515 59 L 515 108" n={4} nx={515} ny={84} />
      <Step d="M450 145 L 367 145" n={5} nx={408} ny={145} />
      <Step d="M280 154 L 230 223" n={6} nx={255} ny={190} />
      <path d="M320 154 L 370 223" fill="none" stroke="currentColor" strokeOpacity="0.75" strokeWidth="1.5" markerEnd="url(#iaas-arrow)" />
      <Step d="M235 140 Q 120 150 85 86" n={7} nx={140} ny={140} />
      <text x="515" y="172" textAnchor="middle" fontSize="11" opacity="0.8">
        hypervisor บนเครื่องจริง
      </text>
      <text x="515" y="187" textAnchor="middle" fontSize="11" opacity="0.8">
        สร้าง VM จาก image
      </text>
    </svg>
  );
}
