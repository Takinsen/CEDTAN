// a manifest becomes an API object whose desired state is continuously reconciled into running pods
export function ManifestObjectLifecycle() {
  return (
    <svg
      viewBox="0 0 620 285"
      role="img"
      aria-label="วงจรจากไฟล์ manifest ส่งด้วย kubectl apply ไปเป็น API object ใน etcd จากนั้น controller เปรียบเทียบ desired state กับสถานะจริงและสร้าง แก้ หรือลบ pod ให้ตรงกันอย่างต่อเนื่อง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="24" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        ไฟล์จบหน้าที่หลัง apply แต่ object ยังอยู่ใน control loop
      </text>

      <rect x="18" y="62" width="126" height="82" rx="9" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
      <text x="81" y="87" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Manifest
      </text>
      <text x="81" y="108" textAnchor="middle" fontSize="11" opacity="0.76">
        kind: Pod
      </text>
      <text x="81" y="126" textAnchor="middle" fontSize="11" opacity="0.76">
        spec: desired state
      </text>

      <rect x="189" y="76" width="112" height="54" rx="8" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
      <text x="245" y="99" textAnchor="middle" fontSize="11.5" fontWeight="600">
        kubectl apply
      </text>
      <text x="245" y="117" textAnchor="middle" fontSize="11" opacity="0.74">
        ส่งผ่าน API
      </text>

      <rect x="348" y="62" width="130" height="82" rx="9" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.6" />
      <text x="413" y="87" textAnchor="middle" fontSize="11.5" fontWeight="600">
        API object
      </text>
      <text x="413" y="108" textAnchor="middle" fontSize="11" opacity="0.76">
        spec + status
      </text>
      <text x="413" y="126" textAnchor="middle" fontSize="11" opacity="0.76">
        บันทึกใน etcd
      </text>

      <rect x="508" y="62" width="96" height="82" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="556" y="88" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Controller
      </text>
      <text x="556" y="108" textAnchor="middle" fontSize="11" opacity="0.76">
        เทียบ desired
      </text>
      <text x="556" y="126" textAnchor="middle" fontSize="11" opacity="0.76">
        กับ actual
      </text>

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" fill="none" markerEnd="url(#mol-arrow)">
        <line x1="146" y1="103" x2="186" y2="103" />
        <line x1="303" y1="103" x2="345" y2="103" />
        <line x1="480" y1="103" x2="505" y2="103" />
        <path d="M 556 147 L 556 180 L 475 180 L 475 197" />
        <path d="M 352 226 L 318 226 L 318 163 L 410 163 L 410 147" />
      </g>

      <rect x="352" y="197" width="246" height="58" rx="9" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 3" />
      <text x="475" y="218" textAnchor="middle" fontSize="11" fontWeight="600">
        สถานะจริงในคลัสเตอร์
      </text>
      {[390, 458, 526].map((x) => (
        <g key={x}>
          <rect x={x} y="228" width="48" height="19" rx="5" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.5" />
          <text x={x + 24} y="242" textAnchor="middle" fontSize="11">
            pod
          </text>
        </g>
      ))}
      <text x="544" y="172" textAnchor="end" fontSize="11" opacity="0.72">
        สร้าง / แก้ / ลบ
      </text>
      <text x="326" y="216" textAnchor="end" fontSize="11" opacity="0.72">
        รายงาน actual state กลับ
      </text>
      <text x="81" y="178" textAnchor="middle" fontSize="11" opacity="0.72">
        แก้ไฟล์แล้ว apply ซ้ำ
      </text>
      <text x="81" y="196" textAnchor="middle" fontSize="11" opacity="0.72">
        = อัปเดต object เดิม
      </text>
      <text x="310" y="276" textAnchor="middle" fontSize="11" opacity="0.78">
        pod ตายภายหลังได้ — object และ controller จะพาระบบกลับไปหาสถานะที่ต้องการ
      </text>

      <defs>
        <marker id="mol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
