// three address spaces stacked: the host, the Docker host, and the bridge the containers sit on
export function NetworkTopology() {
  return (
    <svg
      viewBox="0 0 620 325"
      role="img"
      aria-label="เบราว์เซอร์บนเครื่องจริงเข้าพอร์ต 4000 ของ Docker host ซึ่ง map ไปพอร์ต 80 ของ container nginx บนเครือข่าย bridge"
      className="mx-auto h-auto w-full min-w-[580px]"
      fill="currentColor"
    >
      <rect x="15" y="20" width="590" height="290" rx="12" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.3" />
      <text x="30" y="300" fontSize="12" opacity="0.65">
        Host Computer
      </text>

      <rect x="35" y="45" width="185" height="56" rx="8" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.45" />
      <text x="127" y="68" textAnchor="middle" fontSize="12.5" fontWeight="600">
        Web browser
      </text>
      <text x="127" y="88" textAnchor="middle" fontSize="11.5" opacity="0.75">
        http://localhost:4000
      </text>

      <rect x="250" y="70" width="350" height="212" rx="10" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.35" />
      <text x="265" y="274" fontSize="11.5" opacity="0.65">
        Docker Host (Linux VM)
      </text>

      <rect x="265" y="88" width="120" height="26" rx="5" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.4" />
      <text x="325" y="106" textAnchor="middle" fontSize="11">
        IP: 192.168.x.x
      </text>
      <rect x="265" y="120" width="120" height="26" rx="5" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.4" />
      <text x="325" y="138" textAnchor="middle" fontSize="11">
        IP: 10.0.x.x
      </text>

      <rect x="420" y="88" width="110" height="26" rx="5" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="475" y="106" textAnchor="middle" fontSize="11" fontWeight="600">
        Port: 4000
      </text>

      <rect x="265" y="162" width="320" height="100" rx="8" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.4" />
      <text x="278" y="255" fontSize="11" opacity="0.65">
        bridge — 172.17.0.0/16
      </text>

      <rect x="285" y="176" width="140" height="62" rx="7" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
      <text x="355" y="194" textAnchor="middle" fontSize="11" opacity="0.8">
        Port: 80
      </text>
      <text x="355" y="212" textAnchor="middle" fontSize="11" opacity="0.8">
        IP: 172.17.0.2
      </text>
      <text x="355" y="230" textAnchor="middle" fontSize="12" fontWeight="600">
        nginx
      </text>

      <rect x="440" y="176" width="140" height="62" rx="7" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
      <text x="510" y="203" textAnchor="middle" fontSize="11" opacity="0.8">
        IP: 172.17.0.3
      </text>
      <text x="510" y="226" textAnchor="middle" fontSize="12" fontWeight="600">
        ubuntu_tools
      </text>

      <path
        d="M 222 73 L 475 73 L 475 84"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        markerEnd="url(#net-arrow)"
      />

      <line x1="400" y1="176" x2="470" y2="118" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" markerEnd="url(#net-arrow)" />
      <text x="404" y="146" fontSize="11" opacity="0.8">
        port mapping
      </text>

      <defs>
        <marker id="net-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.55" />
        </marker>
      </defs>
    </svg>
  );
}
