// the four Terraform commands in order, and what each one touches
export function TerraformLifecycle() {
  const steps = [
    { title: 'Init', command: 'terraform init', lines: ['โหลด provider', 'สร้าง lock file'] },
    { title: 'Plan', command: 'terraform plan', lines: ['เทียบไฟล์กับของจริง', 'ยังไม่แตะอะไร'] },
    { title: 'Apply', command: 'terraform apply', lines: ['ทำตามแผนจริง', 'จดผลลง state'] },
    { title: 'Destroy', command: 'terraform destroy', lines: ['ลบทุกอย่าง', 'ที่อยู่ใน state'] },
  ];

  return (
    <svg
      viewBox="0 0 620 250"
      role="img"
      aria-label="สี่คำสั่งของ Terraform เรียงกัน init โหลด provider และสร้าง lock file, plan เทียบไฟล์กับของจริงโดยยังไม่แตะอะไร, apply ทำตามแผนและจดผลลง state, destroy ลบทุกอย่างที่อยู่ใน state และเมื่อแก้ไฟล์ก็วนกลับจาก apply ไป plan ใหม่"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {steps.map((step, i) => {
        const x = 15 + i * 155;
        const cx = x + 64;
        return (
          <g key={step.title}>
            <rect x={x} y="40" width="128" height="62" rx="9" fillOpacity={0.1 + i * 0.06} stroke="currentColor" strokeOpacity="0.55" />
            <text x={cx} y="66" textAnchor="middle" fontSize="12" fontWeight="600">
              {step.title}
            </text>
            <text x={cx} y="86" textAnchor="middle" fontSize="11" opacity="0.8" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
              {step.command}
            </text>
            <text x={cx} y="126" textAnchor="middle" fontSize="11" opacity="0.8">
              {step.lines[0]}
            </text>
            <text x={cx} y="142" textAnchor="middle" fontSize="11" opacity="0.8">
              {step.lines[1]}
            </text>
          </g>
        );
      })}

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" fill="none">
        <line x1="145" y1="71" x2="167" y2="71" markerEnd="url(#tl-arrow)" />
        <line x1="300" y1="71" x2="322" y2="71" markerEnd="url(#tl-arrow)" />
        <line x1="455" y1="71" x2="477" y2="71" markerEnd="url(#tl-arrow)" />
        <path d="M 389 156 L 389 176 L 234 176 L 234 159" markerEnd="url(#tl-arrow)" />
      </g>
      <text x="311" y="195" textAnchor="middle" fontSize="11" opacity="0.8">
        แก้ไฟล์แล้ววนกลับไป plan ใหม่
      </text>

      <text x="310" y="234" textAnchor="middle" fontSize="11" opacity="0.78">
        plan อ่าน state ส่วน apply และ destroy เขียน state — state คือความจำของ Terraform
      </text>

      <defs>
        <marker id="tl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
