// Terraform provisions the lower layers, Ansible configures the apps on top
export function ProvisionConfigureLayers() {
  const columns = [0, 1, 2, 3, 4];

  return (
    <svg
      viewBox="0 0 620 220"
      role="img"
      aria-label="สามชั้นของระบบ ชั้นล่างคือ networking, load balancer, database, user และ permission ชั้นกลางคือเซิร์ฟเวอร์ห้าเครื่อง ชั้นบนคือแอปบนแต่ละเครื่อง Terraform provision ชั้นล่างและชั้นกลาง ส่วน Ansible configure ชั้นแอป"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {columns.map((i) => (
        <g key={i}>
          <rect x={20 + i * 80} y="34" width="70" height="34" rx="5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
          <text x={55 + i * 80} y="55" textAnchor="middle" fontSize="11">
            App
          </text>
          <rect x={20 + i * 80} y="82" width="70" height="34" rx="5" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.55" />
          <text x={55 + i * 80} y="103" textAnchor="middle" fontSize="11">
            Server
          </text>
        </g>
      ))}
      <rect x="20" y="130" width="390" height="34" rx="5" fillOpacity="0.32" stroke="currentColor" strokeOpacity="0.6" />
      <text x="215" y="151" textAnchor="middle" fontSize="11">
        Networking · Load Balancers · Databases · Users · Permissions
      </text>

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" fill="none">
        <path d="M 420 34 L 430 34 L 430 68 L 420 68" />
        <path d="M 420 82 L 430 82 L 430 164 L 420 164" />
      </g>

      <text x="442" y="47" fontSize="11.5" fontWeight="600">
        Ansible
      </text>
      <text x="442" y="63" fontSize="11" opacity="0.78">
        configure · ลงแอปและตั้งค่า
      </text>
      <text x="442" y="115" fontSize="11.5" fontWeight="600">
        Terraform
      </text>
      <text x="442" y="131" fontSize="11" opacity="0.78">
        provision
      </text>
      <text x="442" y="146" fontSize="11" opacity="0.78">
        สร้างเครื่องและเครือข่าย
      </text>

      <text x="310" y="200" textAnchor="middle" fontSize="11" opacity="0.78">
        Terraform ทำให้มีเครื่อง แล้ว Ansible ทำให้เครื่องพร้อมใช้
      </text>
    </svg>
  );
}
