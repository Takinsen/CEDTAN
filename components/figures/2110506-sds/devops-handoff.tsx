// agile loops fast between user and developer, then stalls at the handoff to operations
export function DevopsHandoff() {
  return (
    <svg
      viewBox="0 0 620 270"
      role="img"
      aria-label="วงรอบ Agile ระหว่างผู้ใช้กับนักพัฒนาหมุนเร็ว ทั้ง requirements, coding และ testing, prototype และ feedback แต่เมื่อนักพัฒนาส่ง product ให้ผู้ดูแลระบบ การ deploy ลงเครื่องจริงล้มเหลว"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="20" y="22" fontSize="11.5" fontWeight="600" opacity="0.85">
        Agile — ผู้ใช้กับนักพัฒนาคุยกันเป็นรอบสั้น ๆ
      </text>

      <rect x="20" y="36" width="120" height="72" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="80" y="68" textAnchor="middle" fontSize="11.5" fontWeight="600">
        User
      </text>
      <text x="80" y="86" textAnchor="middle" fontSize="11" opacity="0.76">
        ผู้ใช้
      </text>

      <rect x="300" y="36" width="130" height="72" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="365" y="68" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Developer
      </text>
      <text x="365" y="86" textAnchor="middle" fontSize="11" opacity="0.76">
        นักพัฒนา
      </text>

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" fill="none">
        <line x1="144" y1="56" x2="296" y2="56" markerEnd="url(#dh-arrow)" />
        <line x1="296" y1="76" x2="144" y2="76" markerEnd="url(#dh-arrow)" />
        <line x1="144" y1="96" x2="296" y2="96" markerEnd="url(#dh-arrow)" />
        <path d="M 432 56 C 500 44, 500 112, 434 100" markerEnd="url(#dh-arrow)" />
      </g>
      <text x="152" y="51" fontSize="11" opacity="0.8">
        1. requirements
      </text>
      <text x="152" y="71" fontSize="11" opacity="0.8">
        3. prototype
      </text>
      <text x="152" y="91" fontSize="11" opacity="0.8">
        4. feedback
      </text>
      <text x="500" y="82" fontSize="11" opacity="0.8">
        2. coding / testing
      </text>

      <line x1="20" y1="132" x2="600" y2="132" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 4" />

      <text x="20" y="154" fontSize="11.5" fontWeight="600" opacity="0.85">
        แต่พอส่งงานต่อให้ฝ่ายดูแลระบบ ทางขาดตรง deploy
      </text>

      <rect x="20" y="168" width="120" height="56" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="80" y="192" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Developer
      </text>
      <text x="80" y="210" textAnchor="middle" fontSize="11" opacity="0.76">
        นักพัฒนา
      </text>

      <rect x="240" y="168" width="130" height="56" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="305" y="192" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Operator
      </text>
      <text x="305" y="210" textAnchor="middle" fontSize="11" opacity="0.76">
        ผู้ดูแลระบบ
      </text>

      <rect x="470" y="168" width="130" height="56" rx="9" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="535" y="192" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Servers
      </text>
      <text x="535" y="210" textAnchor="middle" fontSize="11" opacity="0.76">
        เครื่องจริง
      </text>

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" fill="none">
        <line x1="144" y1="196" x2="236" y2="196" markerEnd="url(#dh-arrow)" />
        <line x1="374" y1="196" x2="466" y2="196" markerEnd="url(#dh-arrow)" />
      </g>
      <text x="190" y="184" textAnchor="middle" fontSize="11" opacity="0.8">
        released product
      </text>
      <text x="420" y="178" textAnchor="middle" fontSize="11" opacity="0.8">
        deploy
      </text>
      <g stroke="currentColor" strokeOpacity="0.9" strokeWidth="2.5">
        <line x1="411" y1="187" x2="429" y2="205" />
        <line x1="429" y1="187" x2="411" y2="205" />
      </g>

      <text x="310" y="254" textAnchor="middle" fontSize="11" opacity="0.78">
        โค้ดเสร็จเร็ว แต่ไปไม่ถึงเครื่องจริง — ช่องว่างนี้คือสิ่งที่ DevOps มาอุด
      </text>

      <defs>
        <marker id="dh-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
