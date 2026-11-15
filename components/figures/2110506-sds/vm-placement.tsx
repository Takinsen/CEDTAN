// the same six requests on two 4-core hosts: spread by largest free space vs pack by smallest free space
type Vm = { n: string; cores: number };

const ROWS: { title: string; hosts: Vm[][]; vm6: string }[] = [
  {
    title: 'Largest remaining capacity: วางเครื่องที่ว่างมากที่สุด',
    hosts: [
      [{ n: 'VM1', cores: 1 }, { n: 'VM3', cores: 1 }, { n: 'VM5', cores: 1 }],
      [{ n: 'VM2', cores: 1 }, { n: 'VM4', cores: 2 }],
    ],
    vm6: 'VM6 (2 core) ลงไม่ได้ ว่างเครื่องละ 1 core',
  },
  {
    title: 'Smallest remaining capacity: วางเครื่องที่ว่างน้อยที่สุดที่ยังพอ',
    hosts: [
      [{ n: 'VM1', cores: 1 }, { n: 'VM2', cores: 1 }, { n: 'VM3', cores: 1 }, { n: 'VM5', cores: 1 }],
      [{ n: 'VM4', cores: 2 }, { n: 'VM6', cores: 2 }],
    ],
    vm6: 'VM6 ลงเครื่อง 2 ได้ ใช้ครบทั้ง 8 core',
  },
];

const CORE = 56;

export function VmPlacement() {
  return (
    <svg
      viewBox="0 0 600 300"
      role="img"
      aria-label="คำขอหกตัวชุดเดียวกัน ถ้าใช้ largest remaining capacity กระจายไปเครื่องที่ว่างมากที่สุด ที่ว่างจะแตกเป็นเครื่องละหนึ่ง core จน VM ใหญ่ตัวสุดท้ายลงไม่ได้ ถ้าใช้ smallest remaining capacity อัดเครื่องแรกให้เต็มก่อน VM ใหญ่ลงเครื่องที่สองได้"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {ROWS.map((r, ri) => {
        const y0 = 10 + ri * 145;
        return (
          <g key={r.title}>
            <text x="300" y={y0 + 12} textAnchor="middle" fontSize="12" fontWeight="600">
              {r.title}
            </text>
            {r.hosts.map((vms, hi) => {
              const x0 = 40 + hi * 280;
              let used = 0;
              return (
                <g key={hi}>
                  <rect x={x0} y={y0 + 24} width={CORE * 4 + 10} height="58" rx="6" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.6" />
                  {vms.map((v) => {
                    const x = x0 + 5 + used * CORE;
                    used += v.cores;
                    const last = r.title.startsWith('Smallest') && v.n === 'VM6';
                    return (
                      <g key={v.n}>
                        <rect x={x + 2} y={y0 + 30} width={v.cores * CORE - 4} height="46" rx="4" fillOpacity={last ? 0.32 : 0.16} stroke="currentColor" strokeOpacity="0.6" />
                        <text x={x + (v.cores * CORE) / 2} y={y0 + 50} textAnchor="middle" fontSize="11" fontWeight="600">
                          {v.n}
                        </text>
                        <text x={x + (v.cores * CORE) / 2} y={y0 + 65} textAnchor="middle" fontSize="11" opacity="0.8">
                          {v.cores} core
                        </text>
                      </g>
                    );
                  })}
                  {Array.from({ length: 4 - used }).map((_, k) => (
                    <text key={k} x={x0 + 5 + (used + k) * CORE + CORE / 2} y={y0 + 58} textAnchor="middle" fontSize="11" opacity="0.6">
                      ว่าง
                    </text>
                  ))}
                  <text x={x0 + CORE * 2 + 5} y={y0 + 98} textAnchor="middle" fontSize="11" opacity="0.8">
                    เครื่อง {hi + 1} · 4 core · 8 GB
                  </text>
                </g>
              );
            })}
            <text x="300" y={y0 + 122} textAnchor="middle" fontSize="11" fontWeight="600">
              {r.vm6}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
