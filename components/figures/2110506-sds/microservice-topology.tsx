// clients enter through a routing layer, then reach services that each own their data
export function MicroserviceTopology() {
  return (
    <svg
      viewBox="0 0 620 285"
      role="img"
      aria-label="เบราว์เซอร์ผ่าน Content Router ไปยังเว็บแอป มือถือผ่าน API Gateway ไปยังบริการ และแต่ละบริการมีฐานข้อมูลของตัวเอง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="12" y="45" width="88" height="40" rx="7" fillOpacity="0.11" stroke="currentColor" strokeOpacity="0.45" />
      <text x="56" y="70" textAnchor="middle" fontSize="10.5">
        Browser
      </text>

      <rect x="125" y="45" width="105" height="40" rx="7" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="177" y="63" textAnchor="middle" fontSize="10.5">
        Content
      </text>
      <text x="177" y="77" textAnchor="middle" fontSize="10.5">
        Router
      </text>

      <rect x="255" y="45" width="105" height="40" rx="7" fillOpacity="0.11" stroke="currentColor" strokeOpacity="0.45" />
      <text x="307" y="63" textAnchor="middle" fontSize="10.5">
        Queue Web
      </text>
      <text x="307" y="77" textAnchor="middle" fontSize="10.5">
        Application
      </text>

      <rect x="385" y="45" width="110" height="40" rx="7" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="440" y="70" textAnchor="middle" fontSize="10.5">
        Queue Service
      </text>

      <rect x="520" y="45" width="85" height="40" rx="7" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.4" />
      <text x="562" y="70" textAnchor="middle" fontSize="10.5" opacity="0.8">
        DB
      </text>

      <rect x="255" y="100" width="105" height="40" rx="7" fillOpacity="0.11" stroke="currentColor" strokeOpacity="0.45" />
      <text x="307" y="118" textAnchor="middle" fontSize="10.5">
        Ads Web
      </text>
      <text x="307" y="132" textAnchor="middle" fontSize="10.5">
        Application
      </text>

      <rect x="385" y="100" width="110" height="40" rx="7" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="440" y="125" textAnchor="middle" fontSize="10.5">
        Ads Service
      </text>

      <rect x="520" y="100" width="85" height="40" rx="7" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.4" />
      <text x="562" y="125" textAnchor="middle" fontSize="10.5" opacity="0.8">
        DB
      </text>

      <rect x="12" y="155" width="88" height="40" rx="7" fillOpacity="0.11" stroke="currentColor" strokeOpacity="0.45" />
      <text x="56" y="173" textAnchor="middle" fontSize="10.5">
        Mobile
      </text>
      <text x="56" y="187" textAnchor="middle" fontSize="10.5">
        Device
      </text>

      <rect x="125" y="155" width="105" height="40" rx="7" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="177" y="173" textAnchor="middle" fontSize="10.5">
        API
      </text>
      <text x="177" y="187" textAnchor="middle" fontSize="10.5">
        Gateway
      </text>

      <rect x="385" y="155" width="110" height="40" rx="7" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="440" y="180" textAnchor="middle" fontSize="10.5">
        Restaurant Service
      </text>

      <rect x="520" y="155" width="85" height="40" rx="7" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.4" />
      <text x="562" y="180" textAnchor="middle" fontSize="10.5" opacity="0.8">
        DB
      </text>

      <rect x="125" y="210" width="105" height="40" rx="7" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="177" y="228" textAnchor="middle" fontSize="10.5">
        Notification
      </text>
      <text x="177" y="242" textAnchor="middle" fontSize="10.5">
        Gateway
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3" markerEnd="url(#mt-arrow)" fill="none">
        <line x1="102" y1="65" x2="123" y2="65" />
        <line x1="232" y1="65" x2="253" y2="65" />
        <line x1="177" y1="87" x2="252" y2="117" />
        <line x1="362" y1="65" x2="383" y2="65" />
        <line x1="362" y1="120" x2="383" y2="120" />
        <line x1="497" y1="65" x2="518" y2="65" />
        <line x1="497" y1="120" x2="518" y2="120" />
        <line x1="497" y1="175" x2="518" y2="175" />
        <line x1="102" y1="175" x2="123" y2="175" />
        <line x1="232" y1="175" x2="383" y2="175" />
        <line x1="177" y1="197" x2="177" y2="208" />
        <line x1="123" y1="230" x2="62" y2="230" />
      </g>

      <text x="307" y="168" textAnchor="middle" fontSize="9" opacity="0.75">
        REST
      </text>
      <text x="92" y="223" textAnchor="middle" fontSize="9" opacity="0.75">
        Notification
      </text>

      <text x="310" y="273" textAnchor="middle" fontSize="10.5" opacity="0.78">
        แต่ละบริการถือฐานข้อมูลของตัวเอง ไม่มีใครอ่านตารางของคนอื่นตรง ๆ
      </text>

      <defs>
        <marker id="mt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
