// what runs on the control plane and what runs on every worker node
export function ClusterArchitecture() {
  const nodes = [
    { x: 330, label: 'Node 1' },
    { x: 470, label: 'Node 2' },
  ];
  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="โครงสร้างคลัสเตอร์ Kubernetes ด้านซ้ายเป็น control plane ที่มี api-server, etcd, scheduler และ controller-manager ด้านขวาเป็น worker node ที่มี kubelet, kube-proxy และ pod"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="10" y="24" width="600" height="252" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.5" />
      <text x="310" y="18" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        Kubernetes Cluster
      </text>

      <rect x="24" y="38" width="270" height="224" rx="9" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="5 3" />
      <text x="159" y="57" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.8">
        Control Plane
      </text>

      <rect x="105" y="118" width="110" height="44" rx="7" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.6" />
      <text x="160" y="138" textAnchor="middle" fontSize="11" fontWeight="600">
        kube-apiserver
      </text>
      <text x="160" y="153" textAnchor="middle" fontSize="11" opacity="0.75">
        ทางเข้าเดียวของทุกคำสั่ง
      </text>

      <rect x="36" y="64" width="96" height="44" rx="6" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="84" y="81" textAnchor="middle" fontSize="11">
        etcd
      </text>
      <text x="84" y="96" textAnchor="middle" fontSize="11" opacity="0.72">
        เก็บสถานะทั้งหมด
      </text>

      <rect x="188" y="64" width="96" height="44" rx="6" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="236" y="81" textAnchor="middle" fontSize="11">
        scheduler
      </text>
      <text x="236" y="96" textAnchor="middle" fontSize="11" opacity="0.72">
        เลือก node ให้ pod
      </text>

      <rect x="36" y="176" width="118" height="44" rx="6" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="95" y="193" textAnchor="middle" fontSize="11">
        controller-manager
      </text>
      <text x="95" y="208" textAnchor="middle" fontSize="11" opacity="0.72">
        รันวงจรควบคุม
      </text>

      <rect x="166" y="176" width="118" height="44" rx="6" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 3" />
      <text x="225" y="193" textAnchor="middle" fontSize="11" opacity="0.8">
        cloud-controller
      </text>
      <text x="225" y="208" textAnchor="middle" fontSize="11" opacity="0.65">
        มีเฉพาะบนคลาวด์
      </text>

      <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" fill="none">
        <line x1="105" y1="132" x2="88" y2="110" />
        <line x1="213" y1="132" x2="232" y2="110" />
        <line x1="120" y1="162" x2="100" y2="174" />
        <line x1="200" y1="162" x2="220" y2="174" />
      </g>

      {nodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y="60" width="120" height="190" rx="8" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" />
          <text x={n.x + 60} y="78" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.8">
            {n.label}
          </text>

          <rect x={n.x + 12} y="90" width="96" height="30" rx="5" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
          <text x={n.x + 60} y="109" textAnchor="middle" fontSize="11">
            kubelet
          </text>

          <rect x={n.x + 12} y="126" width="96" height="30" rx="5" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
          <text x={n.x + 60} y="145" textAnchor="middle" fontSize="11">
            kube-proxy
          </text>

          <rect x={n.x + 12} y="168" width="96" height="68" rx="6" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="3 3" />
          <rect x={n.x + 20} y="178" width="36" height="24" rx="4" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.5" />
          <text x={n.x + 38} y="194" textAnchor="middle" fontSize="11">
            pod
          </text>
          <rect x={n.x + 64} y="178" width="36" height="24" rx="4" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.5" />
          <text x={n.x + 82} y="194" textAnchor="middle" fontSize="11">
            pod
          </text>
          <rect x={n.x + 42} y="206" width="36" height="24" rx="4" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.5" />
          <text x={n.x + 60} y="222" textAnchor="middle" fontSize="11">
            pod
          </text>

          <line x1="217" y1={n.x === 330 ? 130 : 142} x2={n.x + 10} y2="105" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" />
        </g>
      ))}

      <text x="310" y="292" textAnchor="middle" fontSize="11" opacity="0.78">
        ทุกอย่างคุยผ่าน kube-apiserver เท่านั้น ไม่มีใครคุยกันเองข้ามชิ้น
      </text>
    </svg>
  );
}
