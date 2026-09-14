// the control node reads inventory and playbook, then reaches each managed node over SSH
export function AnsibleArchitecture() {
  const nodes = [
    { name: 'pacific', ip: '35.240.143.206', y: 34 },
    { name: 'arctic', ip: '35.240.143.207', y: 114 },
    { name: 'atlantic', ip: '35.240.143.208', y: 194 },
  ];

  return (
    <svg
      viewBox="0 0 620 285"
      role="img"
      aria-label="Inventory บอกว่ามีเครื่องไหนและ IP อะไร playbook บอกว่าเครื่องต้องอยู่ในสภาพไหน ทั้งสองไฟล์อยู่บน control node ที่ติดตั้ง Ansible ซึ่งเชื่อมผ่าน SSH ไปยัง managed node สามเครื่อง pacific, arctic และ atlantic ที่ต้องมีแค่ Python และ SSH"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="15" y="44" width="135" height="60" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="82" y="70" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Inventory
      </text>
      <text x="82" y="88" textAnchor="middle" fontSize="11" opacity="0.76">
        เครื่องไหน IP อะไร
      </text>

      <rect x="15" y="156" width="135" height="60" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="82" y="182" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Playbook
      </text>
      <text x="82" y="200" textAnchor="middle" fontSize="11" opacity="0.76">
        เครื่องต้องเป็นสภาพไหน
      </text>

      <rect x="215" y="85" width="150" height="90" rx="9" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.6" />
      <text x="290" y="112" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Control Node
      </text>
      <text x="290" y="132" textAnchor="middle" fontSize="11">
        ติดตั้ง Ansible
      </text>
      <text x="290" y="150" textAnchor="middle" fontSize="11" opacity="0.76">
        core + collections
      </text>

      <text x="530" y="22" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Managed Nodes
      </text>
      {nodes.map((node) => (
        <g key={node.name}>
          <rect x="455" y={node.y} width="150" height="56" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
          <text x="530" y={node.y + 23} textAnchor="middle" fontSize="11.5" fontWeight="600">
            {node.name}
          </text>
          <text x="530" y={node.y + 41} textAnchor="middle" fontSize="11" opacity="0.8" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {node.ip}
          </text>
        </g>
      ))}

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" fill="none">
        <line x1="152" y1="78" x2="212" y2="112" markerEnd="url(#aa-arrow)" />
        <line x1="152" y1="182" x2="212" y2="150" markerEnd="url(#aa-arrow)" />
        <line x1="367" y1="130" x2="452" y2="62" markerEnd="url(#aa-arrow)" />
        <line x1="367" y1="130" x2="452" y2="142" markerEnd="url(#aa-arrow)" />
        <line x1="367" y1="130" x2="452" y2="222" markerEnd="url(#aa-arrow)" />
      </g>
      <text x="414" y="128" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.85">
        SSH
      </text>

      <text x="310" y="272" textAnchor="middle" fontSize="11" opacity="0.78">
        ปลายทางมีแค่ Python และ SSH — ไม่มีโปรแกรมของ Ansible รันค้างอยู่
      </text>

      <defs>
        <marker id="aa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
