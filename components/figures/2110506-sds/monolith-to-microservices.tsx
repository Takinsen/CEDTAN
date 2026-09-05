// one deployable unit splits into several smaller ones that release on their own clock
export function MonolithToMicroservices() {
  return (
    <svg
      viewBox="0 0 580 215"
      role="img"
      aria-label="แอปก้อนเดียว SQ 4.0 ถูกแยกออกเป็น Queue Service, Restaurant Service, Ads Service และบริการอื่น ๆ"
      className="mx-auto h-auto w-full min-w-[540px]"
      fill="currentColor"
    >
      <rect x="20" y="40" width="150" height="120" rx="10" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="95" y="94" textAnchor="middle" fontSize="13" fontWeight="600">
        SQ 4.0
      </text>
      <text x="95" y="113" textAnchor="middle" fontSize="13" fontWeight="600">
        Application
      </text>
      <text x="95" y="182" textAnchor="middle" fontSize="10.5" opacity="0.78">
        Monolithic Architecture
      </text>

      <line x1="188" y1="100" x2="252" y2="100" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" markerEnd="url(#m2m-arrow)" />

      <rect x="270" y="40" width="135" height="52" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.45" />
      <text x="337" y="71" textAnchor="middle" fontSize="11">
        Queue Service
      </text>
      <rect x="415" y="40" width="135" height="52" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.45" />
      <text x="482" y="71" textAnchor="middle" fontSize="11">
        Restaurant Service
      </text>
      <rect x="270" y="108" width="135" height="52" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.45" />
      <text x="337" y="139" textAnchor="middle" fontSize="11">
        Ads Service
      </text>
      <rect x="415" y="108" width="135" height="52" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.45" strokeDasharray="4 3" />
      <text x="482" y="139" textAnchor="middle" fontSize="11" opacity="0.7">
        … Service
      </text>

      <text x="410" y="182" textAnchor="middle" fontSize="10.5" opacity="0.78">
        Microservice Architecture — loosely coupled, smaller units
      </text>

      <defs>
        <marker id="m2m-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
