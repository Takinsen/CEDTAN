// without a gateway the client tracks every service; with one it tracks a single address
const SERVICES = [
  'Product Catalog',
  'Shopping Cart',
  'Order',
  'Inventory',
  'Shipping',
  'Recommendation',
  'Review',
];

export function ApiGatewayFacade() {
  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="ซ้าย client ต้องรู้ที่อยู่ของทุกบริการ ขวา client รู้จักแค่ API Gateway แล้ว gateway กระจายต่อให้"
      className="mx-auto h-auto w-full min-w-[590px] max-w-[620px]"
      fill="currentColor"
    >
      <text x="155" y="22" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        ไม่มี gateway
      </text>
      <text x="465" y="22" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        มี gateway
      </text>

      <rect x="10" y="30" width="290" height="235" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.3" />
      <rect x="320" y="30" width="290" height="235" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.3" />

      <circle cx="48" cy="147" r="22" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="48" y="151" textAnchor="middle" fontSize="9.5">
        client
      </text>
      <text x="118" y="62" textAnchor="middle" fontSize="17" opacity="0.7">
        ?
      </text>

      {SERVICES.map((s, i) => {
        const yTop = 42 + i * 30;
        return (
          <g key={s}>
            <rect x="170" y={yTop} width="115" height="24" rx="5" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.45" />
            <text x="227" y={yTop + 16} textAnchor="middle" fontSize="9.5">
              {s}
            </text>
            <line x1="71" y1="147" x2="168" y2={yTop + 12} stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1" />
          </g>
        );
      })}

      <circle cx="352" cy="147" r="20" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="352" y="151" textAnchor="middle" fontSize="9">
        client
      </text>
      <line x1="373" y1="147" x2="391" y2="147" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" markerEnd="url(#agf-arrow)" />
      <rect x="393" y="128" width="78" height="38" rx="7" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.6" />
      <text x="432" y="145" textAnchor="middle" fontSize="9.5" fontWeight="600">
        API
      </text>
      <text x="432" y="158" textAnchor="middle" fontSize="9.5" fontWeight="600">
        Gateway
      </text>

      {SERVICES.map((s, i) => {
        const yTop = 42 + i * 30;
        return (
          <g key={`r-${s}`}>
            <rect x="490" y={yTop} width="112" height="24" rx="5" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.45" />
            <text x="546" y={yTop + 16} textAnchor="middle" fontSize="9.5">
              {s}
            </text>
            <line x1="473" y1="147" x2="488" y2={yTop + 12} stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1" />
          </g>
        );
      })}

      <text x="310" y="288" textAnchor="middle" fontSize="10.5" opacity="0.78">
        ฝั่งขวา client จำที่อยู่เดียว บริการหลังบ้านจะเพิ่ม ลด หรือย้ายก็ไม่กระทบ client
      </text>

      <defs>
        <marker id="agf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
