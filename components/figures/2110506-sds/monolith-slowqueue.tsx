// SlowQueue as one deployable: every module lives inside one app server process
export function MonolithSlowQueue() {
  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="เบราว์เซอร์คุยกับ Tomcat AppServer ที่บรรจุ Web Frontend, Membership, Queue และ Restaurant Management ไว้ในไฟล์เดียว แล้วต่อกับ MySQL"
      className="mx-auto h-auto w-full min-w-[580px] max-w-[620px]"
      fill="currentColor"
    >
      <text x="295" y="16" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        Monolithic Architecture
      </text>

      <rect x="15" y="110" width="105" height="44" rx="8" fillOpacity="0.11" stroke="currentColor" strokeOpacity="0.45" />
      <text x="67" y="137" textAnchor="middle" fontSize="12" fontWeight="600">
        Browser
      </text>
      <text x="67" y="176" textAnchor="middle" fontSize="9.5" opacity="0.7">
        SPA
      </text>
      <text x="67" y="190" textAnchor="middle" fontSize="9.5" opacity="0.7">
        client-side framework
      </text>

      <line x1="122" y1="132" x2="198" y2="132" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" markerStart="url(#ms-arrow)" markerEnd="url(#ms-arrow)" />
      <text x="160" y="124" textAnchor="middle" fontSize="9.5" opacity="0.8">
        HTML / REST
      </text>

      <rect x="200" y="25" width="190" height="245" rx="10" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.5" />
      <rect x="212" y="37" width="166" height="185" rx="7" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.35" />

      <rect x="224" y="48" width="142" height="34" rx="5" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.4" />
      <text x="295" y="69" textAnchor="middle" fontSize="10">
        Web Frontend
      </text>
      <rect x="224" y="90" width="142" height="34" rx="5" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.4" />
      <text x="295" y="111" textAnchor="middle" fontSize="10">
        Membership Management
      </text>
      <rect x="224" y="132" width="142" height="34" rx="5" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.4" />
      <text x="295" y="153" textAnchor="middle" fontSize="10">
        Queue Management
      </text>
      <rect x="224" y="174" width="142" height="34" rx="5" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.4" />
      <text x="295" y="195" textAnchor="middle" fontSize="10">
        Restaurant Management
      </text>

      <text x="295" y="216" textAnchor="middle" fontSize="10" opacity="0.75">
        WAR / EAR
      </text>
      <text x="295" y="253" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Tomcat AppServer
      </text>

      <line x1="392" y1="152" x2="458" y2="152" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" markerStart="url(#ms-arrow)" markerEnd="url(#ms-arrow)" />

      <rect x="460" y="126" width="120" height="52" rx="10" fillOpacity="0.11" stroke="currentColor" strokeOpacity="0.45" />
      <text x="520" y="157" textAnchor="middle" fontSize="12" fontWeight="600">
        MySQL
      </text>

      <text x="520" y="200" textAnchor="middle" fontSize="9.5" opacity="0.7">
        ฐานข้อมูลเดียวของทั้งระบบ
      </text>

      <defs>
        <marker id="ms-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
