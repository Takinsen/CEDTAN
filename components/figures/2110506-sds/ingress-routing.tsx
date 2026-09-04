// one public address, two ways to decide which Service a request belongs to
export function IngressRouting() {
  return (
    <svg
      viewBox="0 0 620 285"
      role="img"
      aria-label="ซ้าย simple fanout แยกตาม path slash foo และ slash bar ขวา name based virtual hosting แยกตามชื่อโฮสต์ โดยทั้งคู่เข้าที่ Ingress ที่อยู่เดียวกัน"
      className="mx-auto h-auto w-full min-w-[590px] max-w-[620px]"
      fill="currentColor"
    >
      <text x="155" y="20" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        Simple Fanout — แยกตาม path
      </text>
      <text x="465" y="20" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        Name Based — แยกตามชื่อโฮสต์
      </text>

      <rect x="10" y="30" width="290" height="205" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.3" />
      <rect x="320" y="30" width="290" height="205" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.3" />

      {[0, 1].map((side) => {
        const ox = side * 310;
        const routes = side === 0
          ? [{ label: '/foo', svc: 'service1:4200' }, { label: '/bar', svc: 'service2:8080' }]
          : [{ label: 'foo.bar.com', svc: 'service1:80' }, { label: 'bar.foo.com', svc: 'service2:80' }];
        return (
          <g key={side}>
            <circle cx={ox + 42} cy="132" r="20" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
            <text x={ox + 42} y="136" textAnchor="middle" fontSize="9">
              client
            </text>

            <rect x={ox + 76} y="112" width="80" height="40" rx="7" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.6" />
            <text x={ox + 116} y="130" textAnchor="middle" fontSize="9.5" fontWeight="600">
              Ingress
            </text>
            <text x={ox + 116} y="144" textAnchor="middle" fontSize="8.5" opacity="0.75">
              ที่อยู่เดียว
            </text>
            <line x1={ox + 62} y1="132" x2={ox + 74} y2="132" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.3" markerEnd="url(#ir-arrow)" />

            {routes.map((r, i) => {
              const y = 62 + i * 110;
              return (
                <g key={r.label}>
                  <path
                    d={`M ${ox + 158} ${132 + (i === 0 ? -8 : 8)} C ${ox + 180} ${132 + (i === 0 ? -30 : 30)}, ${ox + 180} ${y + 20}, ${ox + 196} ${y + 20}`}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.55"
                    strokeWidth="1.3"
                    markerEnd="url(#ir-arrow)"
                  />
                  <text x={ox + 178} y={y + (i === 0 ? 46 : 4)} textAnchor="middle" fontSize="8.5" fontFamily="monospace" opacity="0.85">
                    {r.label}
                  </text>
                  <rect x={ox + 198} y={y} width="96" height="40" rx="6" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
                  <text x={ox + 246} y={y + 18} textAnchor="middle" fontSize="9">
                    Service
                  </text>
                  <text x={ox + 246} y={y + 32} textAnchor="middle" fontSize="8.5" fontFamily="monospace" opacity="0.78">
                    {r.svc}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}

      <text x="310" y="258" textAnchor="middle" fontSize="10.5" opacity="0.78">
        Ingress ทำงานที่ชั้น HTTP จึงอ่าน path และชื่อโฮสต์ได้ ต่างจาก Service ที่ดูแค่พอร์ต
      </text>
      <text x="310" y="276" textAnchor="middle" fontSize="10.5" opacity="0.78">
        ทั้งสองแบบใช้ IP สาธารณะเดียวกัน ไม่ต้องซื้อที่อยู่เพิ่มต่อหนึ่งบริการ
      </text>

      <defs>
        <marker id="ir-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
