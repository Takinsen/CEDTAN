// inside one pod localhost works; across pods only a Service name does
export function PodCommunication() {
  return (
    <svg
      viewBox="0 0 620 265"
      role="img"
      aria-label="ซ้าย container สองตัวใน pod เดียวกันคุยกันด้วย localhost หรือชื่อ service ก็ได้ ขวา container คนละ pod ต้องคุยผ่านชื่อ service เท่านั้น"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="155" y="20" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        ใน Pod เดียวกัน
      </text>
      <text x="465" y="20" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        คนละ Pod
      </text>

      <rect x="10" y="30" width="290" height="185" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.5" />
      <rect x="320" y="30" width="290" height="185" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.5" />

      <rect x="30" y="66" width="250" height="120" rx="10" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" />
      <text x="155" y="180" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.8">
        Pod A
      </text>

      <rect x="46" y="84" width="98" height="46" rx="7" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="95" y="103" textAnchor="middle" fontSize="11">
        front-end
      </text>
      <text x="95" y="119" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.78">
        :8000
      </text>

      <rect x="166" y="84" width="98" height="46" rx="7" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="215" y="103" textAnchor="middle" fontSize="11">
        back-end
      </text>
      <text x="215" y="119" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.78">
        :9000
      </text>

      <line x1="146" y1="107" x2="164" y2="107" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" markerStart="url(#pc-arrow)" markerEnd="url(#pc-arrow)" />
      <text x="155" y="152" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.85">
        localhost:9000
      </text>
      <text x="155" y="166" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.7">
        หรือ svc_a:9000
      </text>

      <rect x="200" y="42" width="90" height="22" rx="5" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.5" />
      <text x="245" y="57" textAnchor="middle" fontSize="11" fontFamily="monospace">
        svc_a
      </text>

      <rect x="336" y="76" width="112" height="100" rx="10" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" />
      <text x="392" y="170" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.8">
        Pod A
      </text>
      <rect x="348" y="92" width="88" height="42" rx="6" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="392" y="109" textAnchor="middle" fontSize="11">
        front-end
      </text>
      <text x="392" y="124" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.78">
        :8000
      </text>

      <rect x="484" y="76" width="112" height="100" rx="10" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" />
      <text x="540" y="170" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.8">
        Pod B
      </text>
      <rect x="496" y="92" width="88" height="42" rx="6" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="540" y="109" textAnchor="middle" fontSize="11">
        back-end
      </text>
      <text x="540" y="124" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.78">
        :9000
      </text>

      <rect x="420" y="42" width="88" height="22" rx="5" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.5" />
      <text x="464" y="57" textAnchor="middle" fontSize="11" fontFamily="monospace">
        svc_b
      </text>

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.3" markerEnd="url(#pc-arrow)" fill="none">
        <path d="M 436 100 L 464 66" />
        <path d="M 464 66 L 496 100" />
      </g>
      <text x="465" y="196" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.85">
        svc_b:9000 เท่านั้น
      </text>

      <text x="310" y="240" textAnchor="middle" fontSize="11" opacity="0.78">
        `localhost` ใน pod หมายถึงตัว pod เอง จึงใช้ข้าม pod ไม่ได้
      </text>
      <text x="310" y="258" textAnchor="middle" fontSize="11" opacity="0.78">
        สไลด์แนะนำให้ใช้ชื่อ Service ทั้งสองกรณี เพราะย้าย container ทีหลังได้โดยไม่ต้องแก้โค้ด
      </text>

      <defs>
        <marker id="pc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
