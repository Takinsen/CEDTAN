// the testing proxy splits one HTTPS connection into two, trusted because we installed its CA
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

export function WebInterceptingProxy() {
  return (
    <svg
      viewBox="0 0 620 280"
      role="img"
      aria-label="เบราว์เซอร์ส่งทุก request ไปที่ proxy ที่ 127.0.0.1 พอร์ต 8080 แล้ว proxy ส่งต่อไปที่เว็บเซิร์ฟเวอร์ การเชื่อมต่อถูกแยกเป็นสองขา ขาแรกใช้ใบรับรองที่ CA ของ proxy เซ็น ซึ่งเบราว์เซอร์เชื่อเพราะเราติดตั้ง CA นั้นไว้ใน trust store เอง ขาที่สองใช้ใบจริงของเว็บ"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <g stroke="currentColor" strokeOpacity="0.6">
        <rect x="20" y="40" width="140" height="56" rx="8" fillOpacity="0.06" />
        <rect x="240" y="34" width="140" height="68" rx="8" fillOpacity="0.32" />
        <rect x="460" y="40" width="140" height="56" rx="8" fillOpacity="0.06" />
        <rect x="20" y="160" width="140" height="62" rx="6" fillOpacity="0.14" strokeDasharray="5 3" />
      </g>

      <text x="90" y="73" textAnchor="middle" fontSize="12" fontWeight="600">
        Browser
      </text>
      <text x="310" y="64" textAnchor="middle" fontSize="12" fontWeight="600">
        Proxy
      </text>
      <text x="310" y="83" textAnchor="middle" fontSize="11" opacity="0.85">
        Burp Suite หรือ ZAP
      </text>
      <text x="530" y="73" textAnchor="middle" fontSize="12" fontWeight="600">
        Web server
      </text>

      <g stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.4" fill="none" markerEnd="url(#wip-arrow)" markerStart="url(#wip-arrow)">
        <line x1="164" y1="68" x2="236" y2="68" />
        <line x1="384" y1="68" x2="456" y2="68" />
      </g>
      <line x1="90" y1="98" x2="90" y2="156" stroke="currentColor" strokeOpacity="0.55" strokeDasharray="3 3" />

      <text x="200" y="24" textAnchor="middle" fontSize="11" fontFamily={MONO}>
        127.0.0.1:8080
      </text>
      <text x="420" y="24" textAnchor="middle" fontSize="11">
        แก้แล้ว หรือส่งซ้ำ
      </text>
      <text x="200" y="118" textAnchor="middle" fontSize="11" opacity="0.85">
        TLS ขาที่ 1
      </text>
      <text x="200" y="133" textAnchor="middle" fontSize="11" opacity="0.85">
        ใบที่ CA ของ proxy เซ็น
      </text>
      <text x="420" y="118" textAnchor="middle" fontSize="11" opacity="0.85">
        TLS ขาที่ 2
      </text>
      <text x="420" y="133" textAnchor="middle" fontSize="11" opacity="0.85">
        ใบจริงของเว็บ
      </text>

      <text x="90" y="182" textAnchor="middle" fontSize="11" fontWeight="600">
        Trust store
      </text>
      <text x="90" y="197" textAnchor="middle" fontSize="11">
        มี CA ของ proxy
      </text>
      <text x="90" y="212" textAnchor="middle" fontSize="11" opacity="0.85">
        ที่เราติดตั้งเอง
      </text>

      <text x="240" y="170" fontSize="11" fontWeight="600">
        สิ่งที่ proxy ให้ทำ
      </text>
      <text x="240" y="187" fontSize="11">
        · หยุด request ไว้แล้วแก้ก่อนส่ง
      </text>
      <text x="240" y="202" fontSize="11">
        · ส่งซ้ำ โดยเปลี่ยนทีละจุด
      </text>
      <text x="240" y="217" fontSize="11">
        · fuzz พารามิเตอร์ด้วย payload จำนวนมาก
      </text>
      <text x="240" y="232" fontSize="11">
        · สแกน traffic แบบ passive หรือ active
      </text>

      <text x="24" y="266" fontSize="11" opacity="0.85">
        คนร้ายที่อยากดักกลางแบบเดียวกัน ต้องการสิ่งเดียวกันคือ CA ของตัวเองใน trust store ของเหยื่อ
      </text>

      <defs>
        <marker id="wip-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
