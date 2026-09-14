// Terraform provisions AWS and records IPs in state, Ansible reads them to configure the same machines
export function TerraformAnsibleHandoff() {
  const ec2 = [415, 476, 537];

  return (
    <svg
      viewBox="0 0 620 305"
      role="img"
      aria-label="ไฟล์ aws.tf ถูกส่งให้ Terraform ซึ่ง provision เครื่อง EC2 สามเครื่อง load balancer และ S3 บน AWS แล้วจดผลลงไฟล์ state จากนั้น Ansible อ่าน IP ของเครื่องและ secret จาก state ผ่าน collection cloud.terraform และใช้ playbook configure เครื่องชุดเดียวกันบน AWS"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="15" y="40" width="90" height="40" rx="7" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="60" y="64" textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        aws.tf
      </text>

      <rect x="150" y="35" width="120" height="50" rx="9" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.6" />
      <text x="210" y="64" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Terraform
      </text>

      <rect x="150" y="122" width="120" height="40" rx="7" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="210" y="146" textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        terraform.tfstate
      </text>

      <rect x="150" y="215" width="120" height="50" rx="9" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.6" />
      <text x="210" y="244" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Ansible
      </text>

      <rect x="15" y="220" width="90" height="40" rx="7" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="60" y="244" textAnchor="middle" fontSize="11">
        playbooks
      </text>

      <rect x="400" y="25" width="205" height="245" rx="10" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      <text x="502" y="46" textAnchor="middle" fontSize="11.5" fontWeight="600">
        AWS
      </text>
      {ec2.map((x) => (
        <g key={x}>
          <rect x={x} y="62" width="54" height="30" rx="5" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x + 27} y="81" textAnchor="middle" fontSize="11">
            EC2
          </text>
        </g>
      ))}
      <rect x="415" y="106" width="116" height="30" rx="5" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="473" y="125" textAnchor="middle" fontSize="11">
        Load Balancer
      </text>
      <rect x="537" y="106" width="54" height="30" rx="5" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="564" y="125" textAnchor="middle" fontSize="11">
        S3
      </text>

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" fill="none">
        <line x1="107" y1="60" x2="147" y2="60" markerEnd="url(#tah-arrow)" />
        <line x1="274" y1="60" x2="396" y2="60" markerStart="url(#tah-arrow)" markerEnd="url(#tah-arrow)" />
        <line x1="210" y1="89" x2="210" y2="118" markerStart="url(#tah-arrow)" markerEnd="url(#tah-arrow)" />
        <line x1="210" y1="165" x2="210" y2="211" markerEnd="url(#tah-arrow)" />
        <line x1="107" y1="240" x2="147" y2="240" markerEnd="url(#tah-arrow)" />
        <line x1="274" y1="240" x2="396" y2="240" markerStart="url(#tah-arrow)" markerEnd="url(#tah-arrow)" />
      </g>
      <text x="335" y="52" textAnchor="middle" fontSize="11" opacity="0.8">
        provisioning
      </text>
      <text x="335" y="232" textAnchor="middle" fontSize="11" opacity="0.8">
        configuring
      </text>
      <text x="200" y="186" textAnchor="end" fontSize="11" opacity="0.8" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        cloud.terraform
      </text>
      <text x="200" y="201" textAnchor="end" fontSize="11" opacity="0.8">
        collection
      </text>
      <text x="220" y="186" fontSize="11" opacity="0.8">
        IP ของเครื่อง
      </text>
      <text x="220" y="201" fontSize="11" opacity="0.8">
        และ secret
      </text>

      <text x="310" y="292" textAnchor="middle" fontSize="11" opacity="0.78">
        Terraform จด IP ลง state ตอนสร้างเครื่อง — Ansible อ่านจากตรงนั้น ไม่ต้องคัดลอกเอง
      </text>

      <defs>
        <marker id="tah-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
