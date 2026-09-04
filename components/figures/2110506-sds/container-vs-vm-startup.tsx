// startup time of N containers vs N VMs, redrawn on a log scale from the paper's chart
const DATA = [
  { n: 2, docker: 2.7, vm: 2.7 },
  { n: 4, docker: 5, vm: 5 },
  { n: 8, docker: 11, vm: 13 },
  { n: 16, docker: 28, vm: 45 },
  { n: 32, docker: 55, vm: 140 },
  { n: 64, docker: 110, vm: 830 },
  { n: 128, docker: 220, vm: 5000 },
  { n: 256, docker: 440, vm: 25000 },
  { n: 512, docker: 880, vm: null },
];

const BASE = 200;
const y = (v: number) => BASE - 40 * Math.log10(v);

export function ContainerVsVmStartup() {
  return (
    <svg
      viewBox="0 0 620 265"
      role="img"
      aria-label="กราฟแท่งเปรียบเทียบเวลาเริ่มระบบของ container กับ VM ตั้งแต่ 2 ถึง 512 ตัว แกนตั้งเป็นสเกลลอการิทึม VM รันครบ 512 ตัวไม่ได้"
      className="mx-auto h-auto w-full min-w-[590px] max-w-[620px]"
      fill="currentColor"
    >
      {[1, 10, 100, 1000, 10000].map((v) => (
        <g key={v}>
          <line x1="58" y1={y(v)} x2="592" y2={y(v)} stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
          <text x="52" y={y(v) + 3.5} textAnchor="end" fontSize="9" opacity="0.7">
            {v.toLocaleString('en-US')}
          </text>
        </g>
      ))}

      <line x1="58" y1="20" x2="58" y2={BASE} stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />
      <line x1="58" y1={BASE} x2="592" y2={BASE} stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />

      {DATA.map((d, i) => {
        const x0 = 58 + 59 * i;
        return (
          <g key={d.n}>
            <rect x={x0 + 10} y={y(d.docker)} width="18" height={BASE - y(d.docker)} fillOpacity="0.55" />
            {d.vm === null ? (
              <text x={x0 + 40} y="193" textAnchor="middle" fontSize="13" opacity="0.8">
                ✕
              </text>
            ) : (
              <rect x={x0 + 31} y={y(d.vm)} width="18" height={BASE - y(d.vm)} fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
            )}
            <text x={x0 + 29.5} y="215" textAnchor="middle" fontSize="9.5" opacity="0.8">
              {d.n}
            </text>
          </g>
        );
      })}

      <rect x="70" y="28" width="14" height="12" fillOpacity="0.55" />
      <text x="90" y="38" fontSize="10" opacity="0.85">
        Docker
      </text>
      <rect x="150" y="28" width="14" height="12" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
      <text x="170" y="38" fontSize="10" opacity="0.85">
        VM
      </text>

      <text x="325" y="238" textAnchor="middle" fontSize="10.5" opacity="0.8">
        จำนวน container หรือ VM ที่สั่งขึ้นพร้อมกัน
      </text>
      <text x="18" y="110" textAnchor="middle" fontSize="10.5" opacity="0.8" transform="rotate(-90 18 110)">
        เวลา (วินาที)
      </text>
      <text x="325" y="258" textAnchor="middle" fontSize="9.5" opacity="0.7">
        แกนตั้งเป็นสเกลลอการิทึม — ขึ้นหนึ่งเส้นคือช้าลงสิบเท่า
      </text>
    </svg>
  );
}
