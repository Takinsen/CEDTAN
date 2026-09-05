// one pod holds one or more containers that share an IP and can reach each other on localhost
export function PodAnatomy() {
  return (
    <svg
      viewBox="0 0 580 235"
      role="img"
      aria-label="Pod หนึ่งตัวมีสอง container ที่ใช้ IP เดียวกัน คุยกันผ่าน localhost และแชร์ volume ร่วมกันได้"
      className="mx-auto h-auto w-full min-w-[550px]"
      fill="currentColor"
    >
      <rect x="30" y="30" width="330" height="150" rx="12" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" />
      <text x="195" y="22" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Pod
      </text>

      <rect x="50" y="52" width="130" height="60" rx="8" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="115" y="76" textAnchor="middle" fontSize="11" fontWeight="600">
        front-end
      </text>
      <text x="115" y="94" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.78">
        :8000
      </text>

      <rect x="210" y="52" width="130" height="60" rx="8" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="275" y="76" textAnchor="middle" fontSize="11" fontWeight="600">
        back-end
      </text>
      <text x="275" y="94" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.78">
        :9000
      </text>

      <line x1="182" y1="82" x2="208" y2="82" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" markerStart="url(#pa-arrow)" markerEnd="url(#pa-arrow)" />
      <text x="195" y="130" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.85">
        localhost:9000
      </text>

      <rect x="50" y="140" width="290" height="28" rx="6" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="195" y="159" textAnchor="middle" fontSize="11">
        volume ที่แชร์กันได้
      </text>

      <text x="470" y="60" textAnchor="middle" fontSize="11" fontWeight="600">
        Pod IP
      </text>
      <text x="470" y="78" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.8">
        10.1.0.7
      </text>
      <line x1="362" y1="82" x2="410" y2="76" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="3 3" />

      <text x="470" y="112" textAnchor="middle" fontSize="11" opacity="0.75">
        IP เดียวของทั้ง pod
      </text>
      <text x="470" y="128" textAnchor="middle" fontSize="11" opacity="0.75">
        ไม่ใช่ของแต่ละ container
      </text>

      <text x="290" y="205" textAnchor="middle" fontSize="11" opacity="0.78">
        pod คือหน่วยที่เล็กที่สุดที่ Kubernetes จัดตารางลง node ไม่ใช่ container
      </text>
      <text x="290" y="222" textAnchor="middle" fontSize="11" opacity="0.78">
        container ในหนึ่ง pod จะถูกวางบนเครื่องเดียวกันเสมอ
      </text>

      <defs>
        <marker id="pa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
