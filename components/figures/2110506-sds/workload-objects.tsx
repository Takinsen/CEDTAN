// which workload object fits which shape of job
const KINDS = [
  { name: 'Deployment', when: 'งานที่รันยาว ไม่มีสถานะ', shape: 'เว็บ, REST API' },
  { name: 'StatefulSet', when: 'งานที่รันยาว มีสถานะ', shape: 'ฐานข้อมูล, คิว' },
  { name: 'DaemonSet', when: 'ต้องมีหนึ่งชุดต่อหนึ่ง node', shape: 'ตัวเก็บ log, agent' },
  { name: 'Job', when: 'ทำครั้งเดียวจบแล้วเลิก', shape: 'ย้ายข้อมูล, ประมวลผลรอบเดียว' },
  { name: 'CronJob', when: 'ทำซ้ำตามเวลา', shape: 'สำรองข้อมูลทุกคืน' },
];

export function WorkloadObjects() {
  return (
    <svg
      viewBox="0 0 620 266"
      role="img"
      aria-label="ตารางเทียบ Deployment, StatefulSet, DaemonSet, Job และ CronJob ว่าแต่ละอันเหมาะกับงานแบบไหน"
      className="mx-auto h-auto w-full min-w-[590px] max-w-[620px]"
      fill="currentColor"
    >
      <text x="90" y="24" textAnchor="middle" fontSize="10.5" fontWeight="600" opacity="0.8">
        ชนิด
      </text>
      <text x="290" y="24" textAnchor="middle" fontSize="10.5" fontWeight="600" opacity="0.8">
        ใช้เมื่อ
      </text>
      <text x="500" y="24" textAnchor="middle" fontSize="10.5" fontWeight="600" opacity="0.8">
        ตัวอย่าง
      </text>
      <line x1="15" y1="32" x2="605" y2="32" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />

      {KINDS.map((k, i) => {
        const y = 44 + i * 38;
        return (
          <g key={k.name}>
            <rect x="15" y={y} width="590" height="32" rx="5" fillOpacity={i % 2 === 0 ? 0.07 : 0.03} />
            <rect x="24" y={y + 5} width="132" height="22" rx="4" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.45" />
            <text x="90" y={y + 20} textAnchor="middle" fontSize="10" fontWeight="600">
              {k.name}
            </text>
            <text x="176" y={y + 20} fontSize="10" opacity="0.85">
              {k.when}
            </text>
            <text x="400" y={y + 20} fontSize="10" opacity="0.75">
              {k.shape}
            </text>
          </g>
        );
      })}

      <text x="310" y="254" textAnchor="middle" fontSize="10.5" opacity="0.78">
        ทั้งห้าอย่างสร้าง pod เหมือนกัน ต่างกันที่กติกาว่าจะสร้างกี่ตัว เมื่อไหร่ และตายแล้วสร้างใหม่ไหม
      </text>
    </svg>
  );
}
