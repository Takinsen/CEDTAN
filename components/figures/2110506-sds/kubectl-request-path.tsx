// every kubectl request enters the cluster through the API server before state reaches etcd
export function KubectlRequestPath() {
  return (
    <svg
      viewBox="0 0 620 250"
      role="img"
      aria-label="เส้นทางคำสั่งจาก kubectl ซึ่งอ่าน context และ credential จาก kubeconfig แล้วส่ง HTTPS request ไปยัง kube-apiserver เพื่อตรวจตัวตน สิทธิ์ และข้อมูล ก่อนอ่านหรือบันทึก object ใน etcd"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="24" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        ทุกคำสั่งเข้า Kubernetes ผ่านทางเดียว
      </text>

      <rect x="20" y="72" width="140" height="72" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="90" y="99" textAnchor="middle" fontSize="11.5" fontWeight="600">
        kubectl
      </text>
      <text x="90" y="119" textAnchor="middle" fontSize="11" opacity="0.76">
        command + args
      </text>
      <text x="90" y="169" textAnchor="middle" fontSize="11" opacity="0.72">
        kubeconfig ให้ context
      </text>
      <text x="90" y="184" textAnchor="middle" fontSize="11" opacity="0.72">
        และ credential
      </text>

      <rect x="225" y="57" width="180" height="102" rx="9" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.6" />
      <text x="315" y="82" textAnchor="middle" fontSize="11.5" fontWeight="600">
        kube-apiserver
      </text>
      <text x="315" y="105" textAnchor="middle" fontSize="11">
        1. ยืนยันตัวตน
      </text>
      <text x="315" y="123" textAnchor="middle" fontSize="11">
        2. ตรวจสิทธิ์
      </text>
      <text x="315" y="141" textAnchor="middle" fontSize="11">
        3. ตรวจความถูกต้อง
      </text>

      <rect x="470" y="72" width="130" height="72" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="535" y="99" textAnchor="middle" fontSize="11.5" fontWeight="600">
        etcd
      </text>
      <text x="535" y="119" textAnchor="middle" fontSize="11" opacity="0.76">
        เก็บ API object
      </text>

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" fill="none">
        <line x1="162" y1="96" x2="222" y2="96" markerEnd="url(#krp-arrow)" />
        <line x1="407" y1="96" x2="467" y2="96" markerEnd="url(#krp-arrow)" />
        <line x1="468" y1="126" x2="408" y2="126" markerEnd="url(#krp-arrow)" />
        <line x1="223" y1="126" x2="163" y2="126" markerEnd="url(#krp-arrow)" />
      </g>
      <text x="192" y="82" textAnchor="middle" fontSize="11" opacity="0.72">
        HTTPS
      </text>
      <text x="437" y="82" textAnchor="middle" fontSize="11" opacity="0.72">
        อ่าน / เขียน
      </text>
      <text x="310" y="221" textAnchor="middle" fontSize="11" opacity="0.78">
        kubectl ไม่คุยกับ node หรือ etcd โดยตรง — API server เป็นประตูของคลัสเตอร์
      </text>

      <defs>
        <marker id="krp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
