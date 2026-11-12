// the same attack falls through three surfaces untouched, or is thinned at each one
const LAYERS = [
  { y: 58, name: 'Human Attack Surface — คน' },
  { y: 118, name: 'Network Attack Surface — เครือข่าย' },
  { y: 178, name: 'System Attack Surface — ตัวระบบ' },
];

export function AttackSurfaceLayers() {
  return (
    <svg
      viewBox="0 0 640 312"
      role="img"
      aria-label="ไม่มีการลดพื้นที่ผิว การโจมตีทะลุทั้งสามชั้นลงไปยึดระบบได้ เมื่อลดพื้นที่ผิว ชั้นเครือข่ายกับชั้นตัวระบบทำให้การโจมตีบางลงทีละชั้น ความเสียหายจึงถูกจำกัดไว้"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="180" y="24" textAnchor="middle" fontSize="11" fontWeight="600">
        ไม่ลดพื้นที่ผิว (No ASR)
      </text>
      <text x="380" y="24" textAnchor="middle" fontSize="11" fontWeight="600">
        ลดพื้นที่ผิว (ASR)
      </text>
      <text x="280" y="44" textAnchor="middle" fontSize="11" opacity="0.75">
        ← ต้องหาจุดสมดุล (Balance) →
      </text>

      <path d="M172 70 h16 v136 h10 l-18 16 l-18 -16 h10 z" fillOpacity="0.55" />
      <path d="M372 70 h16 v48 h-16 z" fillOpacity="0.55" />
      <path d="M375 142 h10 v36 h-10 z" fillOpacity="0.4" />
      <path d="M378 202 h4 v18 h5 l-7 12 l-7 -12 h5 z" fillOpacity="0.4" />

      {LAYERS.map((l) => (
        <g key={l.name}>
          <rect x="110" y={l.y} width="340" height="24" rx="4" fill="var(--color-fd-background, Canvas)" stroke="currentColor" strokeOpacity="0.55" />
          <rect x="110" y={l.y} width="340" height="24" rx="4" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
          <text x="280" y={l.y + 16} textAnchor="middle" fontSize="11" fontWeight="600">
            {l.name}
          </text>
        </g>
      ))}

      <path d="M100 58 h-14 v144 h14" fill="none" stroke="currentColor" strokeOpacity="0.55" />
      <text x="44" y="116" textAnchor="middle" fontSize="11">
        Aggregate
      </text>
      <text x="44" y="133" textAnchor="middle" fontSize="11">
        Attack Surface
      </text>
      <text x="44" y="152" textAnchor="middle" fontSize="11" opacity="0.75">
        สามชั้นรวมกัน
      </text>

      <text x="462" y="128" fontSize="11">
        network controls กัน
      </text>
      <text x="462" y="145" fontSize="11">
        เครื่องมือโจมตีส่วนใหญ่ไว้
      </text>
      <text x="462" y="188" fontSize="11">
        authentication/authorization
      </text>
      <text x="462" y="205" fontSize="11">
        และเปิด process กับข้อมูลน้อยลง
      </text>

      <rect x="110" y="238" width="340" height="62" rx="6" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.55" />
      <text x="280" y="256" textAnchor="middle" fontSize="11" opacity="0.75">
        System Targets — ของที่ผู้โจมตีต้องการ
      </text>
      <text x="180" y="278" textAnchor="middle" fontSize="11" fontWeight="600">
        System Owned
      </text>
      <text x="180" y="295" textAnchor="middle" fontSize="11">
        ยึดได้ทั้งระบบ
      </text>
      <text x="380" y="278" textAnchor="middle" fontSize="11" fontWeight="600">
        Damage Contained
      </text>
      <text x="380" y="295" textAnchor="middle" fontSize="11">
        เสียหายแค่ส่วนเล็ก ๆ
      </text>
    </svg>
  );
}
