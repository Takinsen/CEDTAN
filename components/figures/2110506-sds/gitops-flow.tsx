// GitOps: every declarative file lives in git, a commit triggers the pipeline that makes runtime match
export function GitopsFlow() {
  const sources = ['Infrastructure as Code', 'Config Management', 'Application Code'];

  return (
    <svg
      viewBox="0 0 620 265"
      role="img"
      aria-label="ไฟล์สามแบบ คือ infrastructure as code, config management และ application code ถูกเก็บใน git ซึ่งเป็น source of truth การ commit ใหม่สั่งให้ CI/CD pipeline ทำงาน แล้ว pipeline ปรับ runtime environment ให้ตรงกับ git"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {sources.map((source, i) => (
        <g key={source}>
          <rect x="15" y={40 + i * 50} width="150" height="34" rx="6" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
          <text x="90" y={61 + i * 50} textAnchor="middle" fontSize="11">
            {source}
          </text>
        </g>
      ))}

      <rect x="210" y="77" width="110" height="60" rx="9" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.6" />
      <text x="265" y="103" textAnchor="middle" fontSize="11.5" fontWeight="600">
        git
      </text>
      <text x="265" y="121" textAnchor="middle" fontSize="11" opacity="0.8">
        source of truth
      </text>

      <rect x="370" y="77" width="110" height="60" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="425" y="103" textAnchor="middle" fontSize="11.5" fontWeight="600">
        CI/CD
      </text>
      <text x="425" y="121" textAnchor="middle" fontSize="11" opacity="0.8">
        pipeline
      </text>

      <rect x="515" y="77" width="90" height="60" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="560" y="103" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Runtime
      </text>
      <text x="560" y="121" textAnchor="middle" fontSize="11" opacity="0.8">
        environment
      </text>

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" fill="none">
        <line x1="167" y1="57" x2="207" y2="93" markerEnd="url(#gf-arrow)" />
        <line x1="167" y1="107" x2="207" y2="107" markerEnd="url(#gf-arrow)" />
        <line x1="167" y1="157" x2="207" y2="121" markerEnd="url(#gf-arrow)" />
        <line x1="322" y1="107" x2="367" y2="107" markerEnd="url(#gf-arrow)" />
        <line x1="482" y1="107" x2="512" y2="107" markerEnd="url(#gf-arrow)" />
      </g>

      <text x="90" y="200" textAnchor="middle" fontSize="11" opacity="0.8">
        ทุกอย่างเป็นไฟล์
      </text>
      <text x="90" y="215" textAnchor="middle" fontSize="11" opacity="0.8">
        แบบ declarative
      </text>
      <text x="265" y="200" textAnchor="middle" fontSize="11" opacity="0.8">
        commit ล่าสุดคือ
      </text>
      <text x="265" y="215" textAnchor="middle" fontSize="11" opacity="0.8">
        สถานะที่ต้องการ
      </text>
      <text x="425" y="200" textAnchor="middle" fontSize="11" opacity="0.8">
        commit ใหม่
      </text>
      <text x="425" y="215" textAnchor="middle" fontSize="11" opacity="0.8">
        สั่งให้ pipeline ทำงาน
      </text>
      <text x="560" y="200" textAnchor="middle" fontSize="11" opacity="0.8">
        ถูกปรับให้
      </text>
      <text x="560" y="215" textAnchor="middle" fontSize="11" opacity="0.8">
        ตรงกับ git
      </text>

      <text x="310" y="252" textAnchor="middle" fontSize="11" opacity="0.78">
        pipeline ทำงานเมื่อมี commit ใหม่ — ไม่ได้คอยเทียบกับของจริงตลอดเวลาแบบ control loop
      </text>

      <defs>
        <marker id="gf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
