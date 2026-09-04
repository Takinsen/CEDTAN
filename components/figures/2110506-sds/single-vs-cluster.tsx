// on one host you place containers yourself, on a cluster an orchestrator decides where each one lands
export function SingleVsCluster() {
  const hosts = Array.from({ length: 9 }, (_, i) => 45 + i * 58);

  return (
    <svg
      viewBox="0 0 620 302"
      role="img"
      aria-label="เครื่องเดียวรันได้ไม่กี่แอป ส่วนคลัสเตอร์มี orchestrator คั่นกลางระหว่างแอปกับเครื่องหลายสิบเครื่อง"
      className="mx-auto h-auto w-full min-w-[580px] max-w-[620px]"
      fill="currentColor"
    >
      <rect x="20" y="24" width="580" height="92" rx="9" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.4" />
      <text x="34" y="17" fontSize="11.5" fontWeight="600" opacity="0.85">
        เครื่องเดียว — คุณสั่ง docker run เอง
      </text>
      <rect x="45" y="38" width="95" height="30" rx="6" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.4" />
      <text x="92" y="58" textAnchor="middle" fontSize="11">
        App 1
      </text>
      <rect x="150" y="38" width="95" height="30" rx="6" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.4" />
      <text x="197" y="58" textAnchor="middle" fontSize="11">
        App 2
      </text>
      <rect x="45" y="76" width="200" height="28" rx="6" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.45" />
      <text x="145" y="95" textAnchor="middle" fontSize="11">
        1 เครื่อง
      </text>

      <rect x="20" y="134" width="580" height="132" rx="9" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.4" />
      <text x="34" y="127" fontSize="11.5" fontWeight="600" opacity="0.85">
        คลัสเตอร์ — orchestrator เลือกเครื่องให้เอง
      </text>
      {['App 1', 'App 2', 'App 3'].map((a, i) => (
        <g key={a}>
          <rect x={45 + i * 105} y="148" width="95" height="30" rx="6" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.4" />
          <text x={92 + i * 105} y="168" textAnchor="middle" fontSize="11">
            {a}
          </text>
        </g>
      ))}
      <rect x="45" y="190" width="520" height="28" rx="6" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.5" />
      <text x="305" y="209" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Container Orchestrator
      </text>
      {hosts.map((x) => (
        <rect key={x} x={x} y="226" width="48" height="26" rx="4" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.4" />
      ))}
      <text x="305" y="288" textAnchor="middle" fontSize="10.5" opacity="0.7">
        เครื่องจริงหรือเครื่องเสมือน หลายสิบถึงหลายพันเครื่อง
      </text>
    </svg>
  );
}
