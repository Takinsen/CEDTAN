// Terraform Core plans from .tf files and state, providers translate the plan into vendor API calls
export function TerraformArchitecture() {
  const vendors = ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Docker'];

  return (
    <svg
      viewBox="0 0 620 285"
      role="img"
      aria-label="ไฟล์ .tf ที่เราเขียนถูกส่งให้ Terraform Core ซึ่งอ่านและเขียนไฟล์ terraform.tfstate เพื่อจำว่าสร้างอะไรไปแล้ว Core ส่งงานต่อให้ provider plugin ที่มี resources และ data sources แล้ว provider เรียก API ของผู้ให้บริการ เช่น AWS, Google Cloud, Azure, DigitalOcean และ Docker"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="15" y="70" width="120" height="56" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="75" y="94" textAnchor="middle" fontSize="11.5" fontWeight="600" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        main.tf
      </text>
      <text x="75" y="112" textAnchor="middle" fontSize="11" opacity="0.76">
        ไฟล์ .tf ที่เราเขียน
      </text>

      <rect x="185" y="62" width="130" height="72" rx="8" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.6" />
      <text x="250" y="90" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Terraform Core
      </text>
      <text x="250" y="108" textAnchor="middle" fontSize="11">
        อ่านไฟล์
      </text>
      <text x="250" y="124" textAnchor="middle" fontSize="11">
        วางแผนว่าต้องทำอะไร
      </text>

      <rect x="185" y="180" width="130" height="56" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="250" y="204" textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        terraform.tfstate
      </text>
      <text x="250" y="222" textAnchor="middle" fontSize="11" opacity="0.76">
        จำว่าสร้างอะไรไปแล้ว
      </text>

      <rect x="365" y="46" width="130" height="112" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="430" y="68" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Provider plugin
      </text>
      <rect x="378" y="80" width="104" height="28" rx="5" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.55" />
      <text x="430" y="98" textAnchor="middle" fontSize="11">
        Resources
      </text>
      <rect x="378" y="116" width="104" height="28" rx="5" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.55" />
      <text x="430" y="134" textAnchor="middle" fontSize="11">
        Data Sources
      </text>

      <text x="564" y="26" textAnchor="middle" fontSize="11" opacity="0.8">
        API ของผู้ให้บริการ
      </text>
      <rect x="519" y="36" width="92" height="166" rx="8" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" />
      {vendors.map((vendor, i) => (
        <text key={vendor} x="565" y={62 + i * 30} textAnchor="middle" fontSize="11">
          {vendor}
        </text>
      ))}

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" fill="none">
        <line x1="137" y1="98" x2="182" y2="98" markerEnd="url(#ta-arrow)" />
        <line x1="250" y1="138" x2="250" y2="176" markerStart="url(#ta-arrow)" markerEnd="url(#ta-arrow)" />
        <line x1="317" y1="98" x2="362" y2="98" markerEnd="url(#ta-arrow)" />
        <line x1="497" y1="102" x2="516" y2="102" markerEnd="url(#ta-arrow)" />
      </g>

      <text x="310" y="268" textAnchor="middle" fontSize="11" opacity="0.78">
        Core ไม่รู้จักผู้ให้บริการเจ้าไหนเลย — ความรู้เฉพาะของแต่ละเจ้าอยู่ใน provider ทั้งหมด
      </text>

      <defs>
        <marker id="ta-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
