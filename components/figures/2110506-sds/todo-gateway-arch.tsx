// nginx fronts todo and notification on one port, and everything shares one user network
export function TodoGatewayArch() {
  return (
    <svg
      viewBox="0 0 620 285"
      role="img"
      aria-label="เบราว์เซอร์เปิดเว็บที่พอร์ต 3000 และยิง API ที่พอร์ต 8000 ผ่าน API Gateway ซึ่งส่งต่อ /todo ไป Todo Service และ /notification ไป Notification Service โดยทั้งคู่ใช้ Redis"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="165" y="18" width="445" height="250" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="5 3" />
      <text x="600" y="261" textAnchor="end" fontSize="10.5" fontWeight="600" opacity="0.7">
        todo-net
      </text>

      <rect x="20" y="105" width="95" height="44" rx="8" fillOpacity="0.11" stroke="currentColor" strokeOpacity="0.45" />
      <text x="67" y="132" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Browser
      </text>

      <rect x="280" y="28" width="130" height="44" rx="8" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.5" />
      <text x="345" y="48" textAnchor="middle" fontSize="11">
        Todo Webapp
      </text>
      <text x="345" y="63" textAnchor="middle" fontSize="9.5" opacity="0.75">
        พอร์ต 3000
      </text>

      <rect x="185" y="112" width="110" height="48" rx="8" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.6" />
      <text x="240" y="132" textAnchor="middle" fontSize="11" fontWeight="600">
        API Gateway
      </text>
      <text x="240" y="148" textAnchor="middle" fontSize="9.5" opacity="0.75">
        พอร์ต 8000
      </text>

      <rect x="340" y="105" width="125" height="48" rx="8" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.5" />
      <text x="402" y="125" textAnchor="middle" fontSize="11">
        Todo Service
      </text>
      <text x="402" y="141" textAnchor="middle" fontSize="9.5" opacity="0.75">
        พอร์ต 8000
      </text>

      <rect x="340" y="190" width="125" height="48" rx="8" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.5" />
      <text x="402" y="210" textAnchor="middle" fontSize="11">
        Notification Service
      </text>
      <text x="402" y="226" textAnchor="middle" fontSize="9.5" opacity="0.75">
        พอร์ต 9000
      </text>

      <rect x="500" y="145" width="95" height="48" rx="8" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.5" />
      <text x="547" y="165" textAnchor="middle" fontSize="11">
        Redis
      </text>
      <text x="547" y="181" textAnchor="middle" fontSize="9.5" opacity="0.75">
        พอร์ต 6379
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3" markerEnd="url(#tga-arrow)" fill="none">
        <line x1="115" y1="118" x2="278" y2="70" />
        <line x1="117" y1="138" x2="183" y2="138" />
        <line x1="297" y1="124" x2="338" y2="124" />
        <line x1="297" y1="152" x2="338" y2="203" />
        <line x1="467" y1="137" x2="498" y2="158" />
        <line x1="467" y1="204" x2="498" y2="184" />
        <line x1="402" y1="155" x2="402" y2="188" />
      </g>

      <text x="210" y="74" textAnchor="middle" fontSize="9" fontFamily="monospace" opacity="0.8">
        localhost:3000
      </text>
      <text x="150" y="166" textAnchor="middle" fontSize="9" fontFamily="monospace" opacity="0.8">
        localhost:8000
      </text>
      <text x="317" y="116" textAnchor="middle" fontSize="9" fontFamily="monospace" opacity="0.85">
        /todo
      </text>
      <text x="293" y="186" textAnchor="end" fontSize="9" fontFamily="monospace" opacity="0.85">
        /notification
      </text>
    </svg>
  );
}
