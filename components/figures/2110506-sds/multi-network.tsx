// two networks split public from private, and only the middle service sits on both
export function MultiNetwork() {
  return (
    <svg
      viewBox="0 0 620 245"
      role="img"
      aria-label="nginx อยู่บน frontend, db อยู่บน backend, web อยู่ทั้งสองเครือข่าย ทำให้ db ไม่มีทางถูกเรียกจากภายนอก"
      className="mx-auto h-auto w-full min-w-[580px] max-w-[620px]"
      fill="currentColor"
    >
      <line x1="115" y1="16" x2="115" y2="43" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.6" markerEnd="url(#mn-arrow)" />
      <text x="128" y="30" fontSize="10.5" fontFamily="monospace" opacity="0.8">
        80:80
      </text>

      <rect x="45" y="45" width="140" height="64" rx="8" fillOpacity="0.11" stroke="currentColor" strokeOpacity="0.45" />
      <text x="115" y="70" textAnchor="middle" fontSize="12" fontWeight="600">
        nginx
      </text>
      <text x="115" y="90" textAnchor="middle" fontSize="10" opacity="0.72">
        รับจากภายนอก
      </text>

      <rect x="235" y="45" width="150" height="64" rx="8" fillOpacity="0.11" stroke="currentColor" strokeOpacity="0.45" />
      <text x="310" y="70" textAnchor="middle" fontSize="12" fontWeight="600">
        web
      </text>
      <text x="310" y="90" textAnchor="middle" fontSize="10" opacity="0.72">
        อยู่ทั้งสองเครือข่าย
      </text>

      <rect x="440" y="45" width="140" height="64" rx="8" fillOpacity="0.11" stroke="currentColor" strokeOpacity="0.45" />
      <text x="510" y="70" textAnchor="middle" fontSize="12" fontWeight="600">
        db
      </text>
      <text x="510" y="90" textAnchor="middle" fontSize="10" opacity="0.72">
        ไม่เปิดพอร์ตออกเลย
      </text>

      <line x1="115" y1="109" x2="115" y2="150" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="270" y1="109" x2="270" y2="150" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="355" y1="109" x2="355" y2="150" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="510" y1="109" x2="510" y2="150" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 3" />

      <rect x="20" y="150" width="290" height="32" rx="6" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.5" />
      <text x="165" y="171" textAnchor="middle" fontSize="11.5" fontWeight="600">
        frontend — bridge
      </text>

      <rect x="330" y="150" width="270" height="32" rx="6" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="5 3" />
      <text x="465" y="171" textAnchor="middle" fontSize="11.5" fontWeight="600">
        backend — internal: true
      </text>

      <text x="310" y="210" textAnchor="middle" fontSize="11.5" opacity="0.75">
        internal: true ตัดทางออกสู่ภายนอกของทั้งเครือข่าย ใครจะถึง db ได้ต้องผ่าน web เท่านั้น
      </text>

      <defs>
        <marker id="mn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
